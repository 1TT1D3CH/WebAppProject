<script setup>
import { ref, computed } from 'vue'

const passwordInput = ref('')
const isCopied = ref(false)

// Generator state
const genLength = ref(16)
const genUpper = ref(true)
const genLower = ref(true)
const genNumbers = ref(true)
const genSymbols = ref(true)
const generatedPassword = ref('')

// Password Strength Evaluation
const scoreDetails = computed(() => {
  const val = passwordInput.value
  if (!val) return { score: 0, label: 'พิมพ์รหัสผ่านเพื่อทดสอบ', color: 'text-slate-500', barColor: 'bg-slate-700', crackTime: 'N/A' }

  let pts = 0
  if (val.length >= 8) pts += 15
  if (val.length >= 12) pts += 20
  if (val.length >= 16) pts += 25
  if (/[a-z]/.test(val)) pts += 10
  if (/[A-Z]/.test(val)) pts += 10
  if (/[0-9]/.test(val)) pts += 10
  if (/[^a-zA-Z0-9]/.test(val)) pts += 10

  // Penalty for common weak passwords
  if (/^(password|123456|qwerty|admin|welcome|letmein)/i.test(val)) pts = Math.min(pts, 10)

  let label = 'กระจอกมาก (เดาง่ายสุดๆ)'
  let color = 'text-rose-400'
  let barColor = 'bg-rose-500'
  let crackTime = '3 วินาที (แฮกเกอร์กระพริบตาก็ได้แล้ว!)'

  if (pts >= 85) {
    label = 'ตึงสุดขีด! (เกราะเพชรสะท้อนแสง)'
    color = 'text-emerald-400'
    barColor = 'bg-emerald-500'
    crackTime = '5,000 ปี (รอจนโลกอวสานก็ยังถอดไม่ได้)'
  } else if (pts >= 65) {
    label = 'แข็งแกร่ง (เอาเรื่อง)'
    color = 'text-teal-400'
    barColor = 'bg-teal-500'
    crackTime = 'ประมาณ 20-50 ปี'
  } else if (pts >= 45) {
    label = 'พอถูไถ'
    color = 'text-amber-400'
    barColor = 'bg-amber-500'
    crackTime = 'ประมาณ 3-5 วัน'
  } else if (pts >= 25) {
    label = 'อ่อนแอ'
    color = 'text-rose-400'
    barColor = 'bg-rose-500'
    crackTime = 'ประมาณ 2 นาที'
  }

  return { score: pts, label, color, barColor, crackTime }
})

// Generator logic
function generateNewPassword() {
  const u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const l = 'abcdefghijklmnopqrstuvwxyz'
  const n = '0123456789'
  const s = '!@#$%^&*()_+-=[]{}|;:,.<>?'

  let chars = ''
  if (genUpper.value) chars += u
  if (genLower.value) chars += l
  if (genNumbers.value) chars += n
  if (genSymbols.value) chars += s

  if (!chars) chars = l

  let result = ''
  const cryptoObj = window.crypto || window.msCrypto
  const randomValues = new Uint32Array(genLength.value)
  cryptoObj.getRandomValues(randomValues)

  for (let i = 0; i < genLength.value; i++) {
    result += chars[randomValues[i] % chars.length]
  }

  generatedPassword.value = result
}

function copyGenerated() {
  if (!generatedPassword.value) return
  navigator.clipboard.writeText(generatedPassword.value)
  isCopied.value = true
  setTimeout(() => { isCopied.value = false }, 2000)
}

function useGeneratedAsInput() {
  passwordInput.value = generatedPassword.value
}
</script>

<template>
  <div class="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
    <!-- Header -->
    <div class="glass-card rounded-2xl p-5 sm:p-6 text-center space-y-2">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-xs font-semibold code-font">
        <i class="fa-solid fa-key"></i>
        <span>ห้องแล็บวัดความตึงรหัสผ่าน</span>
      </div>
      <h2 class="text-xl sm:text-2xl font-bold text-white">เครื่องวัดความตึงรหัสผ่าน & สุ่มรหัสลับ</h2>
      <p class="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
        ลองพิมพ์รหัสผ่านดูว่าแฮกเกอร์จะใช้เวลาถอดกี่นาที หรือใช้เครื่องสุ่มรหัสลับเทพๆ ปลอดภัย 100% ก๊อบไปใช้ได้ทันที!
      </p>
    </div>

    <!-- 2 Column Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
      
      <!-- Left: Password Strength Evaluator -->
      <div class="glass-card rounded-2xl p-5 sm:p-6 space-y-5">
        <h3 class="text-sm sm:text-base font-bold text-white flex items-center gap-2">
          <i class="fa-solid fa-gauge-high text-cyan-400"></i>
          <span>เครื่องวัดความตึงรหัสผ่าน</span>
        </h3>

        <!-- Input Box -->
        <div class="space-y-2">
          <label class="text-xs text-slate-300 font-medium">พิมพ์รหัสผ่านที่อยากทดสอบ:</label>
          <input 
            v-model="passwordInput"
            type="text"
            placeholder="ลองพิมพ์ เช่น Pa$$w0rd2026..."
            class="w-full bg-slate-900 border border-slate-700 text-slate-100 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 code-font"
          />
        </div>

        <!-- Strength Score & Bar -->
        <div v-if="passwordInput" class="space-y-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
          <div class="flex items-center justify-between text-xs">
            <span class="text-slate-400">ระดับความตึง:</span>
            <span :class="['font-bold uppercase tracking-wider', scoreDetails.color]">{{ scoreDetails.label }}</span>
          </div>
          <div class="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div :class="['h-full transition-all duration-300', scoreDetails.barColor]" :style="{ width: `${scoreDetails.score}%` }"></div>
          </div>
          <div class="flex items-center justify-between text-xs pt-1">
            <span class="text-slate-400">เวลาที่คอมพิวเตอร์แฮกเกอร์ต้องใช้ถอด:</span>
            <span class="font-bold text-white code-font">{{ scoreDetails.crackTime }}</span>
          </div>
        </div>

        <!-- Requirements Checklist -->
        <div class="space-y-2 text-xs text-slate-400">
          <div class="flex items-center gap-2" :class="passwordInput.length >= 12 ? 'text-emerald-400' : ''">
            <i :class="passwordInput.length >= 12 ? 'fa-solid fa-check' : 'fa-solid fa-xmark'"></i>
            <span>ยาวอย่างน้อย 12 ตัวอักษรขึ้นไป</span>
          </div>
          <div class="flex items-center gap-2" :class="/[A-Z]/.test(passwordInput) && /[a-z]/.test(passwordInput) ? 'text-emerald-400' : ''">
            <i :class="/[A-Z]/.test(passwordInput) && /[a-z]/.test(passwordInput) ? 'fa-solid fa-check' : 'fa-solid fa-xmark'"></i>
            <span>ผสมทั้งตัวพิมพ์ใหญ่และตัวพิมพ์เล็ก</span>
          </div>
          <div class="flex items-center gap-2" :class="/[0-9]/.test(passwordInput) ? 'text-emerald-400' : ''">
            <i :class="/[0-9]/.test(passwordInput) ? 'fa-solid fa-check' : 'fa-solid fa-xmark'"></i>
            <span>มีตัวเลขผสมอยู่ (0-9)</span>
          </div>
          <div class="flex items-center gap-2" :class="/[^a-zA-Z0-9]/.test(passwordInput) ? 'text-emerald-400' : ''">
            <i :class="/[^a-zA-Z0-9]/.test(passwordInput) ? 'fa-solid fa-check' : 'fa-solid fa-xmark'"></i>
            <span>มีอักขระพิเศษผสมอยู่ (!@#$)</span>
          </div>
        </div>
      </div>

      <!-- Right: Client-Side Generator -->
      <div class="glass-card rounded-2xl p-5 sm:p-6 space-y-5">
        <h3 class="text-sm sm:text-base font-bold text-white flex items-center gap-2">
          <i class="fa-solid fa-wand-magic-sparkles text-emerald-400"></i>
          <span>เครื่องสุ่มรหัสผ่านปลอดภัยขั้นสุด</span>
        </h3>

        <!-- Output Box -->
        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs text-slate-400">
            <span>รหัสผ่านที่สุ่มได้:</span>
            <span v-if="isCopied" class="text-emerald-400 font-bold">คัดลอกเรียบร้อย!</span>
          </div>
          <div class="flex items-center gap-2">
            <input 
              :value="generatedPassword || 'กดปุ่มสุ่มรหัสล่างนี้'" 
              readonly
              class="w-full bg-slate-900 border border-slate-700 text-cyan-400 font-bold text-sm rounded-xl px-4 py-3 focus:outline-none code-font truncate"
            />
            <button 
              @click="copyGenerated"
              class="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all text-sm font-semibold shrink-0"
              title="คัดลอก"
            >
              <i class="fa-regular fa-copy"></i>
            </button>
          </div>
        </div>

        <!-- Controls -->
        <div class="space-y-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          <div class="space-y-1">
            <div class="flex justify-between text-xs text-slate-300">
              <span>ความยาว: {{ genLength }} ตัวอักษร</span>
            </div>
            <input 
              v-model.number="genLength" 
              type="range" min="8" max="64" 
              class="w-full accent-cyan-400 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          <div class="grid grid-cols-2 gap-2 text-xs">
            <label class="flex items-center gap-2 cursor-pointer text-slate-300">
              <input type="checkbox" v-model="genUpper" class="rounded accent-cyan-400" />
              <span>พิมพ์ใหญ่ (A-Z)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer text-slate-300">
              <input type="checkbox" v-model="genLower" class="rounded accent-cyan-400" />
              <span>พิมพ์เล็ก (a-z)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer text-slate-300">
              <input type="checkbox" v-model="genNumbers" class="rounded accent-cyan-400" />
              <span>ตัวเลข (0-9)</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer text-slate-300">
              <input type="checkbox" v-model="genSymbols" class="rounded accent-cyan-400" />
              <span>สัญลักษณ์ (!@#$)</span>
            </label>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <button 
            @click="generateNewPassword"
            class="flex-1 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-glow-emerald"
          >
            <i class="fa-solid fa-arrows-rotate mr-1"></i> สุ่มรหัสลับด่วน
          </button>
          <button 
            v-if="generatedPassword"
            @click="useGeneratedAsInput"
            class="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 font-semibold text-xs transition-all"
          >
            ทดสอบ
          </button>
        </div>

      </div>

    </div>
  </div>
</template>
