<script setup>
const props = defineProps({
  isOpen: { type: Boolean, required: true }
})

const emit = defineEmits(['close', 'confirm'])
</script>

<template>
  <div 
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300 p-4"
  >
    <div class="glass-card rounded-2xl p-6 sm:p-8 max-w-md w-full border border-rose-500/30 shadow-2xl space-y-5">
      <div class="flex items-center gap-4 text-rose-400">
        <div class="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-xl shrink-0">
          <i class="fa-solid fa-triangle-exclamation"></i>
        </div>
        <div>
          <h3 class="text-lg font-bold text-white">ต้องการล้างข้อมูลทั้งหมดไหม?</h3>
          <p class="text-xs text-slate-400">การกระทำนี้ไม่สามารถย้อนกลับได้</p>
        </div>
      </div>
      <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
        คุณแน่ใจหรือไม่ว่าต้องการล้างประวัติการเช็กความปลอดภัยทั้งหมด และรีเซ็ตมาตรวัดกลับไปที่ 0%?
      </p>
      <div class="flex items-center justify-end gap-3 pt-2">
        <button @click="emit('close')" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors">
          ยกเลิก
        </button>
        <button @click="emit('confirm')" class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold transition-colors shadow-glow-rose">
          ยืนยันล้างข้อมูล
        </button>
      </div>
    </div>
  </div>
</template>
