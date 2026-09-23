<script setup>
import { computed } from 'vue'

const props = defineProps({
  isOpen: { type: Boolean, required: true },
  checkedItemIds: { type: Set, required: true },
  platformsData: { type: Array, required: true }
})

const emit = defineEmits(['close'])

const formattedDate = new Date().toLocaleDateString('th-TH', {
  year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
})

const total = computed(() => props.platformsData.length)
const completed = computed(() => props.checkedItemIds.size)
const score = computed(() => total.value === 0 ? 0 : Math.round((completed.value / total.value) * 100))

const statusTag = computed(() => {
  if (score.value >= 80) {
    return {
      text: 'ตึงมาก! เกราะป้องกันแข็งแกร่ง',
      class: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    }
  } else if (score.value >= 41) {
    return {
      text: 'เซฟอยู่นะ แต่ยังต้องปรับอีกนิด',
      class: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
    }
  } else {
    return {
      text: 'เสี่ยงโดนแฮกรายวัน! ต้องแก้ด่วน',
      class: 'text-rose-400 bg-rose-500/10 border-rose-500/20'
    }
  }
})

const platformBreakdown = computed(() => {
  const platforms = [
    { key: 'facebook', name: 'Facebook' },
    { key: 'instagram', name: 'Instagram' },
    { key: 'google', name: 'Google / YouTube' },
    { key: 'tiktok', name: 'TikTok' },
    { key: 'twitter', name: 'X (Twitter)' }
  ]
  return platforms.map(p => {
    const items = props.platformsData.filter(i => i.platform === p.key)
    const done = items.filter(i => props.checkedItemIds.has(i.id)).length
    const pTotal = items.length
    const pct = pTotal === 0 ? 0 : Math.round((done / pTotal) * 100)
    return { ...p, done, total: pTotal, pct }
  })
})

const completedItemsList = computed(() => {
  return props.platformsData.filter(i => props.checkedItemIds.has(i.id))
})

function triggerPrint() {
  window.print()
}
</script>

<template>
  <div 
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300 p-4"
  >
    <div class="glass-card rounded-2xl p-5 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl space-y-6">
      
      <div class="flex items-center justify-between border-b border-slate-700 pb-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-lg shrink-0">
            <i class="fa-solid fa-file-contract"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-xl font-bold text-white">เอกสารสรุปผลประเมินความปลอดภัย</h3>
            <p class="text-xs text-slate-400">SecurifyMe Security Compliance Report</p>
          </div>
        </div>
        <button @click="emit('close')" class="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 text-lg">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Printable Area -->
      <div id="printArea" class="space-y-6">
        <!-- Header Info -->
        <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 print-bg-light print-border flex flex-col sm:flex-row justify-between sm:items-center gap-3">
          <div>
            <div class="text-xs text-slate-400 print-text-dark">วันที่ประเมิน</div>
            <div class="text-xs sm:text-sm font-semibold text-slate-200 print-text-dark code-font">{{ formattedDate }}</div>
          </div>
          <div>
            <div class="text-xs text-slate-400 print-text-dark">คะแนนรวม</div>
            <div class="text-xl font-extrabold text-cyan-400 code-font">{{ score }}%</div>
          </div>
          <div>
            <div class="text-xs text-slate-400 print-text-dark">สถานะภาพรวม</div>
            <div :class="['text-xs font-bold px-2.5 py-1 rounded border inline-block mt-1', statusTag.class]">
              {{ statusTag.text }}
            </div>
          </div>
        </div>

        <!-- Breakdown Table -->
        <div>
          <h4 class="text-xs sm:text-sm font-bold text-slate-200 print-text-dark mb-3">สรุปผลแยกตามแพลตฟอร์ม</h4>
          <div class="overflow-x-auto rounded-xl border border-slate-800 print-border">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-900 text-slate-400 uppercase print-bg-light print-text-dark border-b border-slate-800 print-border">
                <tr>
                  <th class="px-4 py-3">แพลตฟอร์ม</th>
                  <th class="px-4 py-3">ข้อที่ผ่าน</th>
                  <th class="px-4 py-3">ทั้งหมด</th>
                  <th class="px-4 py-3">ความคืบหน้า</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 print-border text-slate-300 print-text-dark">
                <tr v-for="p in platformBreakdown" :key="p.key">
                  <td class="px-4 py-2.5 font-semibold">{{ p.name }}</td>
                  <td class="px-4 py-2.5">{{ p.done }}</td>
                  <td class="px-4 py-2.5">{{ p.total }}</td>
                  <td :class="['px-4 py-2.5 font-bold', p.pct >= 80 ? 'text-emerald-400' : 'text-amber-400']">{{ p.pct }}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Completed List -->
        <div>
          <h4 class="text-xs sm:text-sm font-bold text-slate-200 print-text-dark mb-3">รายการการตั้งค่าที่ผ่านแล้ว</h4>
          <ul v-if="completedItemsList.length > 0" class="space-y-2 text-xs text-slate-300 print-text-dark">
            <li v-for="item in completedItemsList" :key="item.id" class="flex items-center gap-2">
              <i class="fa-solid fa-circle-check text-emerald-400 text-xs shrink-0"></i>
              <span>[{{ item.platformName }}] <strong>{{ item.title }}</strong> ({{ item.category }})</span>
            </li>
          </ul>
          <p v-else class="text-xs text-slate-500 italic">ยังไม่มีรายการที่ผ่านการประเมิน</p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center justify-end gap-3 border-t border-slate-800 pt-4 no-print">
        <button @click="emit('close')" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors">
          ปิด
        </button>
        <button @click="triggerPrint" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors shadow-glow-cyan">
          <i class="fa-solid fa-print"></i>
          <span>พิมพ์เอกสาร / Save PDF</span>
        </button>
      </div>

    </div>
  </div>
</template>
