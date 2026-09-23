<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import HeaderGauge from './components/HeaderGauge.vue'
import PlatformSelector from './components/PlatformSelector.vue'
import SecurityChecklist from './components/SecurityChecklist.vue'
import DoxxingSimulator from './components/DoxxingSimulator.vue'
import PhishingQuiz from './components/PhishingQuiz.vue'
import PasswordChecker from './components/PasswordChecker.vue'
import EmergencyModal from './components/EmergencyModal.vue'
import ExportReportModal from './components/ExportReportModal.vue'
import ResetModal from './components/ResetModal.vue'
import { platformsData } from './data/platformsData.js'

// Navigation state
const activeView = ref('checklist') // 'checklist', 'doxxing', 'phishing', 'password'
const activeTab = ref('all') // platform tabs

// State
const checkedItemIds = ref(new Set())
const isExportOpen = ref(false)
const isResetOpen = ref(false)
const isEmergencyOpen = ref(false)

// LocalStorage Persistence
onMounted(() => {
  try {
    const saved = localStorage.getItem('securifyme_completed_ids')
    if (saved) {
      const parsed = JSON.parse(saved)
      checkedItemIds.value = new Set(parsed)
    }
  } catch (e) {
    console.error('Failed to load localStorage progress:', e)
  }
})

watch(checkedItemIds, (newSet) => {
  try {
    localStorage.setItem('securifyme_completed_ids', JSON.stringify(Array.from(newSet)))
  } catch (e) {
    console.error('Failed to save to localStorage:', e)
  }
}, { deep: true })

// Item Toggle
function toggleCheck(id) {
  const newSet = new Set(checkedItemIds.value)
  if (newSet.has(id)) {
    newSet.delete(id)
  } else {
    newSet.add(id)
  }
  checkedItemIds.value = newSet
}

// Reset Confirm
function confirmReset() {
  checkedItemIds.value = new Set()
  isResetOpen.value = false
}

// Stats
const totalCount = computed(() => platformsData.length)
const completedCount = computed(() => checkedItemIds.value.size)
const score = computed(() => totalCount.value === 0 ? 0 : Math.round((completedCount.value / totalCount.value) * 100))

const criticalItems = computed(() => platformsData.filter(i => i.severity === 'Critical'))
const totalCritical = computed(() => criticalItems.value.length)
const criticalFixed = computed(() => criticalItems.value.filter(i => checkedItemIds.value.has(i.id)).length)
</script>

<template>
  <div class="min-h-screen flex flex-col justify-between">
    <!-- Navbar -->
    <Navbar
      v-model:activeView="activeView"
      @openEmergency="isEmergencyOpen = true"
      @openExport="isExportOpen = true"
      @openReset="isResetOpen = true"
    />

    <!-- Main Content Area -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1 space-y-8">
      
      <!-- VIEW 1: AUDIT CHECKLIST -->
      <template v-if="activeView === 'checklist'">
        <!-- Header Gauge Dashboard -->
        <HeaderGauge
          :completedCount="completedCount"
          :totalCount="totalCount"
          :criticalFixed="criticalFixed"
          :totalCritical="totalCritical"
          :score="score"
        />

        <!-- Platform Selector Tabs -->
        <PlatformSelector
          v-model:activeTab="activeTab"
          :platformsData="platformsData"
          :checkedItemIds="checkedItemIds"
        />

        <!-- Security Checklist Grid -->
        <SecurityChecklist
          :items="platformsData"
          :activeTab="activeTab"
          :checkedItemIds="checkedItemIds"
          @toggleCheck="toggleCheck"
        />
      </template>

      <!-- VIEW 2: DOXXING SIMULATOR -->
      <template v-else-if="activeView === 'doxxing'">
        <DoxxingSimulator />
      </template>

      <!-- VIEW 3: PHISHING QUIZ -->
      <template v-else-if="activeView === 'phishing'">
        <PhishingQuiz />
      </template>

      <!-- VIEW 4: PASSWORD LAB -->
      <template v-else-if="activeView === 'password'">
        <PasswordChecker />
      </template>

    </main>

    <!-- Footer -->
    <footer class="glass-card border-t border-slate-800 mt-12 py-6 text-center text-xs text-slate-500">
      <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2 text-slate-400">
          <i class="fa-solid fa-lock text-cyan-400"></i>
          <span>Client-side processing only. No personal data is stored or transmitted.</span>
        </div>
        <div>
          <span>SecurifyMe &copy; 2026. Privacy & Security Hardening Suite.</span>
        </div>
      </div>
    </footer>

    <!-- Modals -->
    <ExportReportModal
      :isOpen="isExportOpen"
      :checkedItemIds="checkedItemIds"
      :platformsData="platformsData"
      @close="isExportOpen = false"
    />

    <ResetModal
      :isOpen="isResetOpen"
      @close="isResetOpen = false"
      @confirm="confirmReset"
    />

    <EmergencyModal
      :isOpen="isEmergencyOpen"
      @close="isEmergencyOpen = false"
    />
  </div>
</template>
