<script setup>
import { ref, computed } from 'vue'
import { quizData } from '../data/quizData.js'

const currentIndex = ref(0)
const selectedAnswers = ref({}) // { [quizId]: boolean }
const score = ref(0)
const isFinished = ref(false)

const currentQuestion = computed(() => quizData[currentIndex.value])
const currentAnswer = computed(() => selectedAnswers.value[currentQuestion.value.id])

function answerQuestion(isPhishingChoice) {
  if (selectedAnswers.value[currentQuestion.value.id] !== undefined) return
  
  const correct = currentQuestion.value.isPhishing === isPhishingChoice
  if (correct) score.value += 20

  selectedAnswers.value = {
    ...selectedAnswers.value,
    [currentQuestion.value.id]: isPhishingChoice
  }
}

function nextQuestion() {
  if (currentIndex.value < quizData.length - 1) {
    currentIndex.value++
  } else {
    isFinished.value = true
  }
}

function restartQuiz() {
  currentIndex.value = 0
  selectedAnswers.value = {}
  score.value = 0
  isFinished.value = false
}
</script>

<template>
  <div class="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
    <!-- Header -->
    <div class="glass-card rounded-2xl p-5 sm:p-6 text-center space-y-2">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-xs font-semibold code-font">
        <i class="fa-solid fa-graduation-cap"></i>
        <span>เกมซ้อมจับผิดเว็บหน้าหมา & มิจฉาชีพ</span>
      </div>
      <h2 class="text-xl sm:text-2xl font-bold text-white">ทดสอบสัญชาตญาณ: โดนหลอก หรือ ของจริง?</h2>
      <p class="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
        ลองสวมบทบาทสายสืบวิเคราะห์ข้อความและลิงก์ข้างล่าง ดูซิว่าจะจับผิดแก๊งคอลเซ็นเตอร์ได้เป๊ะแค่ไหน!
      </p>
    </div>

    <!-- Quiz Card Container -->
    <div v-if="!isFinished" class="glass-card rounded-2xl p-5 sm:p-8 space-y-6">
      <!-- Progress Bar -->
      <div class="flex items-center justify-between text-xs text-slate-400 font-semibold code-font">
        <span>ข้อที่ {{ currentIndex + 1 }} จาก {{ quizData.length }}</span>
        <span>คะแนน: {{ score }} คะแนน</span>
      </div>
      <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
        <div 
          class="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full transition-all duration-300"
          :style="{ width: `${((currentIndex + 1) / quizData.length) * 100}%` }"
        ></div>
      </div>

      <!-- Mock Email / SMS Box -->
      <div class="bg-slate-900 rounded-xl p-4 sm:p-5 border border-slate-700/80 space-y-4">
        <!-- Message Header -->
        <div class="border-b border-slate-800 pb-3 space-y-1">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="text-sm font-bold text-white">{{ currentQuestion.title }}</span>
            <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
              ช่องทาง: {{ currentQuestion.channel }}
            </span>
          </div>
          <div class="text-xs text-rose-400 code-font break-all">ผู้ส่ง: {{ currentQuestion.sender }}</div>
        </div>

        <!-- Message Body -->
        <div class="p-4 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-xs sm:text-sm font-mono leading-relaxed whitespace-pre-line break-words">
          {{ currentQuestion.content }}
        </div>
      </div>

      <!-- Action Choice Buttons -->
      <div v-if="currentAnswer === undefined" class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <button 
          @click="answerQuestion(true)"
          class="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/40 font-bold text-sm transition-all shadow-glow-rose"
        >
          <i class="fa-solid fa-skull-crossbones"></i>
          <span>เว็บปลอม / มิจฉาชีพชัวร์!</span>
        </button>
        <button 
          @click="answerQuestion(false)"
          class="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 font-bold text-sm transition-all shadow-glow-emerald"
        >
          <i class="fa-solid fa-circle-check"></i>
          <span>ของจริง ปลอดภัยชัวร์</span>
        </button>
      </div>

      <!-- Feedback Section after answering -->
      <div v-else class="space-y-4">
        <div 
          :class="[
            'p-4 rounded-xl border space-y-2',
            currentAnswer === currentQuestion.isPhishing 
              ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300' 
              : 'bg-rose-950/30 border-rose-500/40 text-rose-300'
          ]"
        >
          <div class="flex items-center gap-2 font-bold text-sm">
            <i :class="currentAnswer === currentQuestion.isPhishing ? 'fa-solid fa-circle-check text-emerald-400' : 'fa-solid fa-circle-xmark text-rose-400'"></i>
            <span>{{ currentAnswer === currentQuestion.isPhishing ? 'ตอบถูกเป๊ะ! ตาแหลมคมมากเพื่อน' : 'ผิดเต็มประตู! เกือบโดนหลอกแล้วนะเนี่ย' }}</span>
          </div>
          <p class="text-xs leading-relaxed text-slate-200">
            {{ currentQuestion.explanation }}
          </p>
        </div>

        <!-- Red Flags list if phishing -->
        <div v-if="currentQuestion.redFlags.length > 0" class="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
          <div class="text-xs font-bold text-rose-400 uppercase tracking-wider">
            <i class="fa-solid fa-flag mr-1"></i> พิรุธเด็ดที่มิจฉาชีพแอบซ่อนไว้:
          </div>
          <ul class="list-disc list-inside text-xs text-slate-300 space-y-1">
            <li v-for="(flag, i) in currentQuestion.redFlags" :key="i">{{ flag }}</li>
          </ul>
        </div>

        <button 
          @click="nextQuestion"
          class="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-glow-cyan"
        >
          <span>{{ currentIndex < quizData.length - 1 ? 'ข้อถัดไป' : 'ดูสรุปผลคะแนน' }}</span>
        </button>
      </div>

    </div>

    <!-- Finished Screen -->
    <div v-else class="glass-card rounded-2xl p-8 text-center space-y-6">
      <div class="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400 text-3xl">
        <i class="fa-solid fa-award"></i>
      </div>
      <div>
        <h3 class="text-2xl font-bold text-white">ทดสอบเสร็จสิ้น!</h3>
        <p class="text-slate-400 text-sm mt-1">คะแนนสกิลจับผิดมิจฉาชีพของคุณ</p>
        <div class="text-5xl font-extrabold code-font text-cyan-400 mt-2">{{ score }} / 100</div>
      </div>
      <button 
        @click="restartQuiz"
        class="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all"
      >
        <i class="fa-solid fa-rotate-right mr-2"></i> เล่นใหม่อีกรอบ
      </button>
    </div>
  </div>
</template>
