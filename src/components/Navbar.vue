<script setup>
import { ref } from 'vue'

const props = defineProps({
  activeView: { type: String, required: true }
})

const emit = defineEmits(['update:activeView', 'openEmergency', 'openExport', 'openReset'])

const isMobileMenuOpen = ref(false)

const navItems = [
  { id: 'checklist', label: 'เช็กความปลอดภัย', icon: 'fa-solid fa-shield-halved' },
  { id: 'doxxing', label: 'ส่องระดับความสุ่มเสี่ยง', icon: 'fa-solid fa-ghost' },
  { id: 'phishing', label: 'เกมจับผิดมิจฉาชีพ', icon: 'fa-solid fa-graduation-cap' },
  { id: 'password', label: 'วัดตึงรหัสผ่าน', icon: 'fa-solid fa-key' }
]

function selectNav(id) {
  emit('update:activeView', id)
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-40 glass-card border-b border-slate-700/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      
      <!-- Brand Logo -->
      <div class="flex items-center gap-2.5 cursor-pointer" @click="selectNav('checklist')">
        <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-400 flex items-center justify-center shadow-glow-cyan shrink-0">
          <i class="fa-solid fa-shield-halved text-slate-950 text-lg sm:text-xl"></i>
        </div>
        <div>
          <span class="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">SecurifyMe</span>
          <span class="hidden sm:inline-block ml-2 text-[10px] font-semibold px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 code-font">Thai Edition</span>
        </div>
      </div>

      <!-- Desktop Navigation Tabs -->
      <nav class="hidden lg:flex items-center gap-1 bg-slate-900/70 p-1 rounded-xl border border-slate-700/60">
        <button
          v-for="item in navItems"
          :key="item.id"
          @click="selectNav(item.id)"
          :class="[
            'flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all',
            activeView === item.id 
              ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-sm' 
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          ]"
        >
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </button>
      </nav>

      <!-- Right Action Buttons & Hamburger -->
      <div class="flex items-center gap-2">
        <!-- Emergency Button ("งานเข้า! โดนแฮกแล้วทำไงดี") -->
        <button 
          @click="emit('openEmergency')"
          class="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-400 border border-rose-500/40 text-xs font-bold transition-all shadow-glow-rose animate-pulse"
        >
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>งานเข้า! โดนแฮก</span>
        </button>

        <!-- Export Button -->
        <button 
          @click="emit('openExport')"
          class="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition-all hover:text-cyan-400"
        >
          <i class="fa-solid fa-file-export text-cyan-400"></i>
          <span>พิมพ์รายงาน</span>
        </button>

        <!-- Reset Button -->
        <button 
          @click="emit('openReset')"
          class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 text-xs transition-all"
          title="ล้างข้อมูลใหม่"
        >
          <i class="fa-solid fa-rotate-right"></i>
        </button>

        <!-- Mobile Hamburger Toggle Button -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="lg:hidden p-2 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 text-sm ml-1"
          aria-label="Toggle Navigation Menu"
        >
          <i :class="isMobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
        </button>
      </div>

    </div>

    <!-- Mobile Dropdown Navigation Drawer -->
    <div v-if="isMobileMenuOpen" class="lg:hidden border-t border-slate-800 bg-slate-900/95 px-4 py-3 space-y-2">
      <button
        v-for="item in navItems"
        :key="item.id"
        @click="selectNav(item.id)"
        :class="[
          'w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all text-left',
          activeView === item.id ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' : 'text-slate-300 hover:bg-slate-800'
        ]"
      >
        <i :class="[item.icon, 'text-sm w-4']"></i>
        <span>{{ item.label }}</span>
      </button>
    </div>
  </header>
</template>
