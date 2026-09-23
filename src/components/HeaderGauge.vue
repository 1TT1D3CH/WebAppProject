<script setup>
import { computed, watch } from 'vue'
import confetti from 'canvas-confetti'

const props = defineProps({
  completedCount: { type: Number, required: true },
  totalCount: { type: Number, required: true },
  criticalFixed: { type: Number, required: true },
  totalCritical: { type: Number, required: true },
  score: { type: Number, required: true }
})

const circumference = 263.89

const dashOffset = computed(() => {
  return circumference - (props.score / 100) * circumference
})

// Dynamic color logic & Thai playful slogans:
// 0-40%: Red (#ef4444)
// 41-79%: Amber (#f59e0b)
// 80-100%: Green (#10b981)
const strokeColor = computed(() => {
  if (props.score >= 80) return '#10b981'
  if (props.score >= 41) return '#f59e0b'
  return '#ef4444'
})

const statusTag = computed(() => {
  if (props.score === 100) return { text: 'เทพซ่าความปลอดภัย 100%! แฮกเกอร์กราบ', class: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' }
  if (props.score >= 80) return { text: 'ตึงมาก! แฮกเกอร์เห็นยังต้องกราบ', class: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' }
  if (props.score >= 41) return { text: 'เซฟอยู่นะ แต่ยังไม่สุด ปรับอีกนิด', class: 'bg-amber-500/20 text-amber-400 border-amber-500/30' }
  return { text: 'เสี่ยงโดนแฮกรายวัน! ล็อกบ้านด่วนเพื่อน', class: 'bg-rose-500/20 text-rose-400 border-rose-500/30' }
})

const badgeTag = computed(() => {
  if (props.score >= 80) return { text: 'เกราะแน่นหนา', class: 'text-emerald-400 bg-emerald-500/10' }
  if (props.score >= 41) return { text: 'พอป้องตัวได้', class: 'text-amber-400 bg-amber-500/10' }
  return { text: 'อันตราย! ต้องแก้ด่วน', class: 'text-rose-400 bg-rose-500/10' }
})

// Confetti trigger
let confettiFired = false
watch(() => props.score, (newVal) => {
  if (newVal >= 80 && !confettiFired) {
    confettiFired = true
    triggerConfetti()
  } else if (newVal < 80) {
    confettiFired = false
  }
})

function triggerConfetti() {
  const count = 200
  const defaults = { origin: { y: 0.7 } }
  function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }))
  }
  fire(0.25, { spread: 26, startVelocity: 55, colors: ['#00e5ff', '#10b981'] })
  fire(0.2, { spread: 60, colors: ['#ffffff', '#00e5ff'] })
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 })
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, colors: ['#10b981', '#f59e0b'] })
  fire(0.1, { spread: 120, startVelocity: 45 })
}
</script>

<template>
  <section class="glass-card rounded-2xl p-5 sm:p-8 relative overflow-hidden shadow-2xl">
    <!-- Glow Background Accents -->
    <div class="absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
      <!-- SVG Circular Progress Gauge -->
      <div class="lg:col-span-5 flex flex-col items-center justify-center p-2">
        <div class="relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center">
          <svg class="w-full h-full" viewBox="0 0 100 100">
            <!-- Background Track -->
            <circle cx="50" cy="50" r="42" fill="transparent" stroke="#1e293b" stroke-width="8" />
            <!-- Progress Arc -->
            <circle
              class="gauge-circle"
              cx="50" cy="50" r="42"
              fill="transparent"
              :stroke="strokeColor"
              stroke-width="8"
              stroke-linecap="round"
              stroke-dasharray="263.89"
              :stroke-dashoffset="dashOffset"
            />
          </svg>
          
          <!-- Inner Content -->
          <div class="absolute flex flex-col items-center justify-center text-center px-4">
            <span class="text-4xl sm:text-5xl font-extrabold tracking-tight code-font text-white">{{ score }}%</span>
            <span :class="['text-[11px] sm:text-xs font-bold tracking-wide px-2.5 py-0.5 rounded-full mt-1.5 border leading-tight', statusTag.class]">
              {{ statusTag.text }}
            </span>
          </div>
        </div>
      </div>

      <!-- Hero Header & Quick Stats Cards -->
      <div class="lg:col-span-7 space-y-5 text-center lg:text-left">
        <div>
          <div class="flex items-center justify-center lg:justify-start gap-2 mb-2">
            <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span class="text-xs font-semibold text-cyan-400 uppercase tracking-widest code-font">เกจวัดระดับความปลอดภัยไซเบอร์</span>
          </div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">เช็กและเซ็ตความปลอดภัยโซเชียลมีเดีย</h1>
          <p class="text-slate-400 mt-2 text-xs sm:text-sm leading-relaxed">
            ตรวจเช็กจุดเสี่ยงโดนแฮก ปรับตั้งค่าความเป็นส่วนตัวแบบเข้าใจง่าย ไม่ต้องเก่งไอทีก็ทำตามได้ใน 3 นาที!
          </p>
        </div>

        <!-- Stat Cards Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div class="bg-slate-900/70 p-3 sm:p-4 rounded-xl border border-slate-700/50">
            <div class="text-[11px] text-slate-400 font-medium">ด่านทั้งหมด</div>
            <div class="text-xl sm:text-2xl font-bold text-white mt-0.5 code-font">{{ totalCount }}</div>
          </div>
          <div class="bg-slate-900/70 p-3 sm:p-4 rounded-xl border border-slate-700/50">
            <div class="text-[11px] text-slate-400 font-medium">ผ่านแล้ว</div>
            <div class="text-xl sm:text-2xl font-bold text-cyan-400 mt-0.5 code-font">{{ completedCount }}</div>
          </div>
          <div class="bg-slate-900/70 p-3 sm:p-4 rounded-xl border border-slate-700/50">
            <div class="text-[11px] text-slate-400 font-medium">ด่านด่วนพิเศษ</div>
            <div class="text-xl sm:text-2xl font-bold text-emerald-400 mt-0.5 code-font">{{ criticalFixed }}/{{ totalCritical }}</div>
          </div>
          <div class="bg-slate-900/70 p-3 sm:p-4 rounded-xl border border-slate-700/50">
            <div class="text-[11px] text-slate-400 font-medium">เกราะป้องกัน</div>
            <div :class="['text-xs font-bold mt-1 inline-block px-2 py-0.5 rounded', badgeTag.class]">
              {{ badgeTag.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
