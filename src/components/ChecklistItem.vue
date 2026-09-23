<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  item: { type: Object, required: true },
  isChecked: { type: Boolean, required: true }
})

const emit = defineEmits(['toggleCheck'])

const isExpanded = ref(false)

const severityClass = computed(() => {
  if (props.item.severity === 'Critical') return 'bg-rose-500/10 text-rose-400 border-rose-500/30'
  if (props.item.severity === 'High' || props.item.severity === 'Medium') return 'bg-amber-500/10 text-amber-400 border-amber-500/30'
  return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
})

function formatStepText(text) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
}
</script>

<template>
  <div 
    :class="[
      'glass-card glass-card-hover rounded-xl p-4 sm:p-5 shadow-lg transition-all',
      isChecked ? 'border-emerald-500/40 bg-emerald-950/10' : ''
    ]"
  >
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
      
      <!-- Left: Checkbox & Item Info -->
      <div class="flex items-start gap-3.5 flex-1 w-full">
        <!-- Checkbox Button -->
        <button 
          @click="emit('toggleCheck', item.id)"
          :aria-label="`Toggle ${item.title}`"
          :class="[
            'mt-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center border transition-all shrink-0',
            isChecked 
              ? 'bg-emerald-500 border-emerald-400 text-slate-950 shadow-glow-emerald' 
              : 'border-slate-600 bg-slate-900 hover:border-cyan-400 text-transparent'
          ]"
        >
          <i class="fa-solid fa-check text-xs font-black"></i>
        </button>

        <div class="space-y-1 flex-1">
          <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <!-- Platform Pill -->
            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-slate-900 border border-slate-700/80 text-slate-300">
              <i :class="item.platformIcon"></i>
              <span>{{ item.platformName }}</span>
            </span>

            <!-- Severity Badge -->
            <span :class="['text-[11px] font-bold px-2 py-0.5 rounded-full border', severityClass]">
              {{ item.severity === 'Critical' ? 'ด่วนที่สุด!' : item.severity }}
            </span>

            <!-- Category Tag -->
            <span class="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/50">
              {{ item.category }}
            </span>
          </div>

          <!-- Title -->
          <h3 :class="['text-sm sm:text-base font-bold text-white leading-snug', isChecked ? 'line-through text-slate-400' : '']">
            {{ item.title }}
          </h3>
        </div>
      </div>

      <!-- Right: Accordion Toggle Button ("วิชาตัวเบา (วิธีทำ)") -->
      <button 
        @click="isExpanded = !isExpanded"
        class="w-full sm:w-auto flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-700/60 text-xs font-semibold transition-all whitespace-nowrap"
      >
        <i class="fa-solid fa-wand-magic-sparkles text-cyan-400 text-xs"></i>
        <span>วิชาตัวเบา (วิธีทำ)</span>
        <i :class="['fa-solid fa-chevron-down text-xs transition-transform duration-300 ml-1', isExpanded ? 'rotate-180' : '']"></i>
      </button>

    </div>

    <!-- Expandable How-To Accordion -->
    <div v-if="isExpanded" class="mt-3.5 pt-3.5 border-t border-slate-700/50 space-y-3">
      <div class="bg-slate-900/90 rounded-xl p-4 border border-slate-800 space-y-3">
        <div class="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
          <i class="fa-solid fa-map-location-dot"></i>
          <span>ขั้นตอนกดตั้งค่าแบบจับมือทำ</span>
        </div>
        <ol class="list-decimal list-inside space-y-2 text-xs text-slate-300 leading-relaxed">
          <li v-for="(step, idx) in item.steps" :key="idx" v-html="formatStepText(step)"></li>
        </ol>
        <div v-if="item.tip" class="mt-3 p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/25 flex items-start gap-2.5 text-xs text-cyan-200">
          <i class="fa-solid fa-lightbulb text-cyan-400 text-sm mt-0.5 shrink-0"></i>
          <div><strong class="font-semibold text-cyan-300">ทริกเซฟตัวเอง:</strong> {{ item.tip }}</div>
        </div>
      </div>
    </div>

  </div>
</template>
