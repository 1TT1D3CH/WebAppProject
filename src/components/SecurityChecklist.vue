<script setup>
import { ref, computed } from 'vue'
import ChecklistItem from './ChecklistItem.vue'

const props = defineProps({
  items: { type: Array, required: true },
  activeTab: { type: String, required: true },
  checkedItemIds: { type: Set, required: true }
})

const emit = defineEmits(['toggleCheck'])

const searchQuery = ref('')
const severityFilter = ref('all')
const statusFilter = ref('all')

const filteredItems = computed(() => {
  return props.items.filter(item => {
    // Tab filter
    if (props.activeTab !== 'all' && item.platform !== props.activeTab) return false

    // Severity filter
    if (severityFilter.value !== 'all' && item.severity !== severityFilter.value) return false

    // Status filter
    const isChecked = props.checkedItemIds.has(item.id)
    if (statusFilter.value === 'completed' && !isChecked) return false
    if (statusFilter.value === 'pending' && isChecked) return false

    // Search query filter
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase().trim()
      const matchTitle = item.title.toLowerCase().includes(q)
      const matchCategory = item.category.toLowerCase().includes(q)
      const matchPlatform = item.platformName.toLowerCase().includes(q)
      if (!matchTitle && !matchCategory && !matchPlatform) return false
    }

    return true
  })
})
</script>

<template>
  <div class="space-y-6">
    <!-- Filter Toolbar -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 glass-card p-4 rounded-xl">
      <!-- Search Input -->
      <div class="relative w-full sm:w-80">
        <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search security checklist..."
          class="w-full bg-slate-900 border border-slate-700/60 text-slate-200 text-sm rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-500"
        />
      </div>

      <!-- Filters -->
      <div class="flex items-center gap-3 w-full sm:w-auto justify-end">
        <select v-model="severityFilter" class="bg-slate-900 border border-slate-700/60 text-slate-300 text-xs sm:text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500">
          <option value="all">All Severities</option>
          <option value="Critical">Critical Only</option>
          <option value="High">High Severity</option>
          <option value="Medium">Medium Severity</option>
          <option value="Low">Low Severity</option>
        </select>

        <select v-model="statusFilter" class="bg-slate-900 border border-slate-700/60 text-slate-300 text-xs sm:text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500">
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>

    <!-- Items List -->
    <div v-if="filteredItems.length > 0" class="space-y-4">
      <ChecklistItem
        v-for="item in filteredItems"
        :key="item.id"
        :item="item"
        :isChecked="checkedItemIds.has(item.id)"
        @toggleCheck="id => emit('toggleCheck', id)"
      />
    </div>

    <!-- Empty State -->
    <div v-else class="glass-card rounded-2xl p-12 text-center space-y-4">
      <div class="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-slate-500 text-2xl">
        <i class="fa-solid fa-shield-cat"></i>
      </div>
      <h3 class="text-lg font-bold text-white">No security items found</h3>
      <p class="text-slate-400 text-sm max-w-md mx-auto">
        Try adjusting your search terms or filter criteria to view more security checklist items.
      </p>
    </div>
  </div>
</template>
