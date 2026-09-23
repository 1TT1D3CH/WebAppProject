<script setup>
const props = defineProps({
  activeTab: { type: String, required: true },
  platformsData: { type: Array, required: true },
  checkedItemIds: { type: Set, required: true }
})

const emit = defineEmits(['update:activeTab'])

const platforms = [
  { key: 'all', name: 'All Platforms', icon: 'fa-solid fa-layer-group text-slate-300' },
  { key: 'facebook', name: 'Facebook', icon: 'fa-brands fa-facebook text-blue-500' },
  { key: 'instagram', name: 'Instagram', icon: 'fa-brands fa-instagram text-pink-500' },
  { key: 'google', name: 'Google / YouTube', icon: 'fa-brands fa-google text-red-500' },
  { key: 'tiktok', name: 'TikTok', icon: 'fa-brands fa-tiktok text-teal-400' },
  { key: 'twitter', name: 'X (Twitter)', icon: 'fa-brands fa-x-twitter text-slate-200' }
]

function getBadgeText(key) {
  if (key === 'all') {
    const total = props.platformsData.length
    const done = props.checkedItemIds.size
    return `${done}/${total}`
  }
  const items = props.platformsData.filter(i => i.platform === key)
  const done = items.filter(i => props.checkedItemIds.has(i.id)).length
  return `${done}/${items.length}`
}
</script>

<template>
  <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-800">
    <button
      v-for="p in platforms"
      :key="p.key"
      @click="emit('update:activeTab', p.key)"
      :class="[
        'tab-btn flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap border',
        activeTab === p.key
          ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
          : 'text-slate-400 border-transparent hover:text-white hover:bg-slate-800'
      ]"
    >
      <i :class="p.icon"></i>
      <span>{{ p.name }}</span>
      <span
        :class="[
          'ml-1 text-xs px-2 py-0.5 rounded-full code-font',
          activeTab === p.key ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/30' : 'bg-slate-800 text-slate-400'
        ]"
      >
        {{ getBadgeText(p.key) }}
      </span>
    </button>
  </div>
</template>
