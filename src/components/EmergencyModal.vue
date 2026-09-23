<script setup>
import { ref } from 'vue'

const props = defineProps({
  isOpen: { type: Boolean, required: true }
})

const emit = defineEmits(['close'])

const activePlatform = ref('facebook')

const emergencyGuides = {
  facebook: {
    name: 'Facebook / Meta',
    icon: 'fa-brands fa-facebook text-blue-500',
    steps: [
      'ไปที่ facebook.com/hacked ทันทีเพื่อเริ่มกระบวนการกู้คืนบัญชีอย่างเป็นทางการ',
      'เข้า **ศูนย์บัญชี (Meta Accounts Center)** > **รหัสผ่านและความปลอดภัย** > **อุปกรณ์ที่คุณเข้าสู่ระบบอยู่**',
      'กด **"ออกจากระบบทุกอุปกรณ์ (Log Out Of All Sessions)"** เพื่อเตะโจรออกจากไอดี',
      'เปลี่ยนรหัสผ่านใหม่ทันที (ตั้งให้ยาวเกิน 16 ตัวอักษรและไม่ซ้ำกับเว็บอื่น)'
    ]
  },
  instagram: {
    name: 'Instagram',
    icon: 'fa-brands fa-instagram text-pink-500',
    steps: [
      'เปิดแอป IG > การตั้งค่า > ศูนย์บัญชี > รหัสผ่านและความปลอดภัย > ออกจากระบบทุกอุปกรณ์',
      'ถ้าอีเมลใน IG ถูกโจรเปลี่ยน ให้รีบเช็กกล่องจดหมายอีเมลเดิมของคุณ หาอีเมลจาก `security@mail.instagram.com` แล้วกด **"Revert this change (ยกเลิกการเปลี่ยนแปลงนี้)"**',
      'หากเข้าไอดีไม่ได้ ให้เข้า instagram.com/hacked เพื่อขอกู้คืนด้วยการสแกนใบหน้า (Selfie Video)'
    ]
  },
  google: {
    name: 'Google / Gmail',
    icon: 'fa-brands fa-google text-red-500',
    steps: [
      'ไปที่ `myaccount.google.com/device-activity` กดเตะอุปกรณ์แปลกหน้าออก',
      'เปลี่ยนรหัสผ่าน Google ใหม่ทันที',
      'เข้า Gmail > การตั้งค่า > ดูว่าโจรแอบตั้งค่า "ส่งต่ออีเมลอัตโนมัติ (Email Forwarding)" ไปที่อีเมลมันหรือไม่',
      'ปลดล็อกแอปแปลกหน้าทั้งหมดที่ `myaccount.google.com/connections`'
    ]
  },
  tiktok: {
    name: 'TikTok',
    icon: 'fa-brands fa-tiktok text-teal-400',
    steps: [
      'เข้าโปรไฟล์ TikTok > การตั้งค่าและความเป็นส่วนตัว > ความปลอดภัย > อุปกรณ์ของคุณ',
      'ลบเครื่องแปลกหน้าที่ไม่ใช่มือถือเราออกทันที',
      'เปลี่ยนรหัสผ่านใหม่ และเปิดการยืนยันตัวตน 2 ขั้นตอน (2-Step Verification)'
    ]
  },
  twitter: {
    name: 'X (Twitter)',
    icon: 'fa-brands fa-x-twitter text-slate-200',
    steps: [
      'ไปที่ การตั้งค่า > ความปลอดภัยและการเข้าถึงบัญชี > แอปและเซสชัน > เซสชัน',
      'กด "ออกจากระบบเซสชันอื่นทั้งหมด"',
      'ไปที่ แอปที่เชื่อมต่อ แล้วกดถอนสิทธิ์แอปแปลกๆ ออกให้หมด',
      'เปลี่ยนรหัสผ่านใหม่ทันที'
    ]
  }
}
</script>

<template>
  <div 
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md transition-opacity duration-300 p-4"
  >
    <div class="glass-card rounded-2xl p-5 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-rose-500/40 shadow-2xl space-y-5">
      
      <!-- Header -->
      <div class="flex items-center justify-between border-b border-slate-700/80 pb-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-xl animate-bounce shrink-0">
            <i class="fa-solid fa-triangle-exclamation"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-xl font-bold text-white flex items-center gap-2">
              <span>งานเข้า! โดนแฮกแล้วทำไงดี</span>
              <span class="text-[10px] sm:text-xs px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 border border-rose-500/30">ปุ่มฉุกเฉิน</span>
            </h3>
            <p class="text-xs text-slate-400">ขั้นตอนดับเพลิงกู้ไอดีด่วนที่สุดใน 3 นาทีแรก</p>
          </div>
        </div>
        <button @click="emit('close')" class="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 text-lg">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Platform Selection Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800 scrollbar-none">
        <button
          v-for="(guide, key) in emergencyGuides"
          :key="key"
          @click="activePlatform = key"
          :class="[
            'px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 border shrink-0',
            activePlatform === key 
              ? 'bg-rose-500/10 text-rose-400 border-rose-500/30 shadow-glow-rose' 
              : 'text-slate-400 border-transparent hover:bg-slate-800 hover:text-white'
          ]"
        >
          <i :class="guide.icon"></i>
          <span>{{ guide.name }}</span>
        </button>
      </div>

      <!-- Protocol Guide Body -->
      <div class="space-y-4">
        <div class="bg-slate-900/90 rounded-xl p-4 sm:p-5 border border-slate-800 space-y-3">
          <div class="flex items-center gap-2 text-xs sm:text-sm font-bold text-white">
            <i class="fa-solid fa-fire-extinguisher text-rose-400"></i>
            <span>แผนดับเพลิงสำหรับบัญชี {{ emergencyGuides[activePlatform].name }}</span>
          </div>

          <ol class="list-decimal list-inside space-y-2.5 text-xs text-slate-300 leading-relaxed">
            <li v-for="(step, idx) in emergencyGuides[activePlatform].steps" :key="idx" class="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80">
              <span class="font-semibold text-white ml-1">{{ step }}</span>
            </li>
          </ol>
        </div>

        <!-- Universal Incident Response Box -->
        <div class="bg-rose-950/30 border border-rose-500/40 rounded-xl p-4 text-xs text-rose-200 space-y-1.5">
          <div class="font-bold flex items-center gap-2 text-rose-300">
            <i class="fa-solid fa-building-columns"></i>
            <span>คำเตือนด่วนเกี่ยวกับแอปธนาคาร:</span>
          </div>
          <p class="leading-relaxed text-[11px] sm:text-xs">
            หากอีเมลหลักหรือเบอร์โทรศัพท์ของคุณโดนโจรยึดไปด้วย ให้รีบโทรอายัดแอปธนาคารและบัตรเครดิตทุกใบกับ Call Center ธนาคารทันทีเพื่อป้องกันเงินในบัญชีหลุด!
          </p>
        </div>
      </div>

      <!-- Footer Action -->
      <div class="flex justify-end pt-4 border-t border-slate-800">
        <button 
          @click="emit('close')"
          class="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors"
        >
          ปิดหน้าต่างกู้ภัย
        </button>
      </div>

    </div>
  </div>
</template>
