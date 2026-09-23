<script setup>
import { ref, computed } from 'vue'

const exposedFields = ref(new Set())

const fields = [
  { id: 'fullname', label: 'ชื่อ-นามสกุลจริง & ปีเกิด', risk: 'High', points: 10, vector: 'มิจฉาชีพเอาไปสืบหาข้อมูลทะเบียนราษฎร์และประวัติในGoogleได้ง่ายขึ้น' },
  { id: 'birthdate', label: 'วัน เดือน ปีเกิด แบบเป๊ะๆ', risk: 'Critical', points: 15, vector: 'มักเป็นข้อมูลหลักที่ใช้ยืนยันตัวตนกับคอลเซ็นเตอร์และธนาคารเวลาลืมรหัส' },
  { id: 'location', label: 'เช็กอินสถานที่เรียปรอบวัน / รูปตั๋วเครื่องบิน', risk: 'Critical', points: 15, vector: 'โจรและสโตเกอร์รู้ทันทีว่าคุณไม่อยู่บ้าน ล่องหนเข้าไปยกเค้าได้สบาย' },
  { id: 'phone', label: 'เบอร์โทรศัพท์ส่วนตัวบนหน้าโปรไฟล์', risk: 'Critical', points: 20, vector: 'เสี่ยงโดนแก๊งคอลเซ็นเตอร์โทรหลอก หรือสวอปซิมดักรับ SMS OTP' },
  { id: 'email', label: 'อีเมลส่วนตัวที่ผูกไว้กับทุกบัญชี', risk: 'High', points: 10, vector: 'โดนสแปมอีเมลสวมรอยส่งไวรัส หรือโดนสุ่มรหัสผ่านผ่านลิสต์ข้อมูลรั่ว' },
  { id: 'school', label: 'ชื่อโรงเรียนเก่า / มหาวิทยาลัย', risk: 'Medium', points: 10, vector: 'คำตอบยอดฮิตของคำถามกันลืมรหัสผ่าน (Security Questions)' },
  { id: 'family', label: 'แท็กญาติพี่น้อง / แฟน / ครอบครัว', risk: 'Medium', points: 10, vector: 'แก๊งคอลเซ็นเตอร์ใช้ทริกโทรหาญาติหลอกว่าคุณประสบอุบัติเหตุเพื่อโอนเงิน' },
  { id: 'petname', label: 'ชื่อสัตว์เลี้ยง / ทะเบียนรถคันแรก', risk: 'Low', points: 5, vector: 'คนส่วนใหญ่นำไปตั้งเป็นส่วนหนึ่งของรหัสผ่านเดาง่าย' },
  { id: 'workplace', label: 'ป้ายชื่อพนักงาน / ที่ทำงานปัจจุบัน', risk: 'Medium', points: 10, vector: 'โจรใช้สวมรอยเป็นแผนก IT บริษัทมาหลอกถามรหัสผ่าน' }
]

function toggleField(id) {
  const newSet = new Set(exposedFields.value)
  if (newSet.has(id)) newSet.delete(id)
  else newSet.add(id)
  exposedFields.value = newSet
}

const totalPoints = computed(() => {
  let sum = 0
  exposedFields.value.forEach(id => {
    const f = fields.find(item => item.id === id)
    if (f) sum += f.points
  })
  return sum
})

const funnyWarning = computed(() => {
  if (totalPoints.value >= 70) return 'ใส่ครบขนาดนี้ มิจฉาชีพสนิทกับคุณมากกว่าแม่คุณแล้วนะ!'
  if (totalPoints.value >= 40) return 'ข้อมูลหลุดพอสมควร สายสืบส่องไส้แป๊บเดียวรู้หมด!'
  if (totalPoints.value > 0) return 'มีจุดรั่วเล็กน้อย รีบไปปิดดีกว่าเพื่อน!'
  return 'สุดยอด! ข้อมูลส่วนตัวแน่นหนา มิจฉาชีพมองตาปริบๆ'
})

const riskLevel = computed(() => {
  if (totalPoints.value >= 70) return { label: 'ระดับเสี่ยงโดนเปิดเปิงสูงสุด!', class: 'text-rose-400 bg-rose-500/20 border-rose-500/30' }
  if (totalPoints.value >= 40) return { label: 'ระดับเสี่ยงปานกลาง', class: 'text-amber-400 bg-amber-500/20 border-amber-500/30' }
  if (totalPoints.value > 0) return { label: 'เสี่ยงเล็กน้อย', class: 'text-cyan-400 bg-cyan-500/20 border-cyan-500/30' }
  return { label: 'ปลอดภัยไร้รอยต่อ', class: 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30' }
})

const activeAttackVectors = computed(() => {
  return fields.filter(f => exposedFields.value.has(f.id))
})
</script>

<template>
  <div class="space-y-6 sm:space-y-8">
    <!-- Header Banner -->
    <div class="glass-card rounded-2xl p-5 sm:p-8 relative overflow-hidden">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="w-2.5 h-2.5 rounded-full bg-rose-400 animate-ping"></span>
            <span class="text-xs font-semibold text-rose-400 uppercase tracking-widest code-font">เครื่องมือจำลองโดนส่องไส้</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-white">Doxxing Risk Simulator (ระดับความโดนส่องไส้)</h2>
          <p class="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
            ลองติ๊กเลือกข้อมูลส่วนตัวที่คุณเคยโพสต์ลงโซเชียลสาธารณะ เพื่อดูว่ามิจฉาชีพสามารถสืบไส้สืบพุงคุณไปใช้ทำอะไรได้บ้าง!
          </p>
        </div>

        <!-- Score Badge Card -->
        <div class="bg-slate-900/90 p-4 sm:p-5 rounded-xl border border-slate-700/60 w-full md:w-auto text-center">
          <div class="text-xs text-slate-400 font-medium">คะแนนความเสี่ยงโดนส่อง</div>
          <div class="text-3xl sm:text-4xl font-extrabold code-font mt-1 text-white">{{ totalPoints }} / 100</div>
          <div :class="['text-xs font-bold px-2.5 py-0.5 rounded-full mt-2 inline-block border', riskLevel.class]">
            {{ riskLevel.label }}
          </div>
        </div>
      </div>

      <!-- Funny Warning Box -->
      <div v-if="totalPoints > 0" class="mt-4 p-3 rounded-xl bg-rose-950/40 border border-rose-500/30 text-xs text-rose-200 font-bold flex items-center gap-2">
        <i class="fa-solid fa-ghost text-rose-400 text-base"></i>
        <span>{{ funnyWarning }}</span>
      </div>
    </div>

    <!-- Main Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
      
      <!-- Left: Checklist Options -->
      <div class="lg:col-span-6 space-y-4">
        <h3 class="text-sm sm:text-base font-bold text-white flex items-center gap-2">
          <i class="fa-solid fa-list-check text-cyan-400"></i>
          <span>เลือกข้อมูลที่คุณเปิดเป็น "สาธารณะ" อยู่ตอนนี้:</span>
        </h3>

        <div class="space-y-2.5">
          <div 
            v-for="f in fields" 
            :key="f.id"
            @click="toggleField(f.id)"
            :class="[
              'glass-card rounded-xl p-3.5 sm:p-4 cursor-pointer transition-all flex items-start gap-3 border',
              exposedFields.has(f.id) ? 'border-rose-500/50 bg-rose-950/10 shadow-glow-rose' : 'hover:border-slate-600'
            ]"
          >
            <div 
              :class="[
                'mt-0.5 w-5 h-5 rounded flex items-center justify-center border text-xs font-black transition-all shrink-0',
                exposedFields.has(f.id) ? 'bg-rose-500 border-rose-400 text-slate-950' : 'border-slate-600 bg-slate-900'
              ]"
            >
              <i v-if="exposedFields.has(f.id)" class="fa-solid fa-check"></i>
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <span class="text-xs sm:text-sm font-bold text-slate-200">{{ f.label }}</span>
                <span :class="[
                  'text-[10px] font-bold px-2 py-0.5 rounded border',
                  f.risk === 'Critical' ? 'bg-rose-500/10 text-rose-400 border-rose-500/30' : 
                  f.risk === 'High' ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                ]">+{{ f.points }} คะแนน</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Live Attack Vector Analysis -->
      <div class="lg:col-span-6 space-y-4">
        <h3 class="text-sm sm:text-base font-bold text-white flex items-center gap-2">
          <i class="fa-solid fa-bug text-rose-400"></i>
          <span>วิเคราะห์ช่องทางที่มิจฉาชีพจะใช้จู่โจม:</span>
        </h3>

        <div v-if="activeAttackVectors.length > 0" class="space-y-3">
          <div 
            v-for="v in activeAttackVectors" 
            :key="v.id"
            class="bg-slate-900/90 rounded-xl p-4 border border-rose-500/30 space-y-1.5"
          >
            <div class="flex items-center gap-2 text-xs font-bold text-rose-400">
              <i class="fa-solid fa-mask"></i>
              <span>จุดรั่วไหล: {{ v.label }}</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              {{ v.vector }}
            </p>
          </div>
        </div>

        <div v-else class="glass-card rounded-xl p-8 text-center space-y-3">
          <i class="fa-solid fa-shield-cat text-emerald-400 text-4xl"></i>
          <h4 class="text-sm font-bold text-white">ยังไม่มีข้อมูลสุ่มเสี่ยงถูกเลือก</h4>
          <p class="text-xs text-slate-400">ลองกดเลือกรายการทางซ้ายเพื่อดูว่ามิจฉาชีพจะแกะรอยเอาข้อมูลเราไปทำอะไรต่อได้บ้าง</p>
        </div>
      </div>

    </div>
  </div>
</template>
