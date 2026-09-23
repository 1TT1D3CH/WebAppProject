# 🛡️ AI Antigravity Master Prompt: SecurifyMe (Thai Playful Edition + Responsive UI)

## 📌 ภาพรวมโปรเจกต์ (Project Overview)
สร้าง Web Application แบบ Single Page Application (SPA) ด้วย **Vue 3 (Composition API / `<script setup>`)**, **Vite**, **Tailwind CSS**, และ **Lucide Vue Icons** 

โปรเจกต์นี้ชื่อว่า **"SecurifyMe"** เป็นเว็บแอปช่วยเช็กและเซ็ตความปลอดภัยบนโซเชียลมีเดีย **ภาษาไทยสไตล์วัยรุ่น ขี้เล่น เข้าใจง่าย (No Technical Jargon!)** เปลี่ยนเรื่องการตั้งค่าความเป็นส่วนตัวที่น่าเบื่อให้สนุกเหมือนเล่นเกม พร้อมปรับขนาดหน้าจอแบบ **Fully Responsive** รองรับทั้ง มือถือ, แท็บเล็ต และจอคอมพิวเตอร์

---

## 🛠️ Technology Stack Requirements
- **Frontend Framework:** Vue 3 (Composition API with `<script setup>`)
- **Build Tool:** Vite
- **Package Manager:** npm
- **Styling:** Tailwind CSS (configured with Mobile-First Responsive Classes e.g., `sm:`, `md:`, `lg:`)
- **State & Interactivity:** Vue Reactivity (`ref`, `reactive`, `computed`, `watch`)
- **Libraries & Icons:** `canvas-confetti`, `lucide-vue-next`

---

## 📱 Responsive & Mobile-First Design Rules
1. **Fluid Layout:** ใช้ Flexbox และ Grid ที่ยืดหยุ่น (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
2. **Mobile Navigation:** มี Responsive Navbar (Hamburger menu บนมือถือ)
3. **Touch-Friendly UI:** ปุ่มกดกว้าง สะดวกต่อการใช้นิ้วแตะบนมือถือ (Padding ใหญ่พอดี)

---

## 🎨 Design System & Theme
- **Theme:** Cyber-Security Dark Mode สุดเท่แต่เข้าถึงง่าย
- **Color Palette:**
  - Background: Slate 900 (`#0f172a`)
  - Cards: Slate 800 (`#1e293b`)
  - Accent: Neon Cyan (`#00e5ff`), Emerald Green (`#10b981`), Warning Gold (`#f59e0b`), Danger Red (`#ef4444`)
- **Tone of Voice (ภาษาไทย):** วัยรุ่น ขี้เล่น เป็นกันเอง เช่น:
  - *2FA Authentication* ➡️ *"ล็อกสองชั้น กันโดนแฮก"*
  - *Data Leak Risk* ➡️ *"ความเสี่ยงโดนเปิดเปิง"*
  - *Phishing Warning* ➡️ *"เตือนภัยเว็บปลอมจับเสือมือเปล่า"*
  - *Checklist Complete* ➡️ *"เทพซ่าความปลอดภัย 100%!"*

---

## 🚀 ฟีเจอร์หลักและข้อความภาษาไทย (Thai Content & Features)

### 1. `HeaderGauge.vue` (เกจวัดความปลอดภัยสุดเก๋า)
- แสดงคะแนนวงกลม Real-time (0-100%) พร้อมสโลแกนกวนๆ ตามระดับคะแนน:
  - **0-40%:** *"เสี่ยงโดนแฮกรายวัน! ล็อกบ้านด่วนเพื่อน"* (สีแดง)
  - **41-79%:** *"เซฟอยู่นะ แต่ยังไม่สุด ปรับอีกนิด"* (สีเหลือง)
  - **80-100%:** *"ตึงมาก! แฮกเกอร์เห็นยังต้องกราบ"* (สีเขียว + พลุกระดาษ Confetti เด้ง)

### 2. `PlatformSelector.vue` & `SecurityChecklist.vue`
- แท็บสลับค่ายโซเชียล: **Facebook, Instagram, Google, TikTok, X (Twitter)**
- Checklist แต่ละข้อใช้ภาษาไทยสไตล์วัยรุ่น เช่น:
  - **FB:** *"ซ่อน Friend List ไม่ให้คนนอกมาส่อง"*
  - **IG:** *"ตั้ง Private Account หนีสายสืบ"*
  - **TikTok:** *"ปิดคำแนะนำบัญชีให้คนรู้จัก ไม่ให้ญาติมาเจอ"*
- ปุ่ม *"วิชาตัวเบา (วิธีทำ)"* กดแล้วยืด Accordion สอนวิธีตั้งค่าเป็นข้อๆ 1-2-3

### 3. `DoxxingSimulator.vue` (เครื่องมือจำลอง "โดนส่องไส้")
- ติ๊กข้อมูลที่เคยโพสต์ลงโซเชียล (เบอร์โทร, วันเกิด, รูปทะเบียนรถ, ชื่อสัตว์เลี้ยง, ชื่อโรงเรียน)
- แสดงผลคำนวณ **"ระดับความโดนส่องไส้ (Doxxing Risk)"** พร้อมสแนกคำเตือนฮาๆ เช่น:
  * *"ใส่ครบขนาดนี้ มิจฉาชีพสนิทกับคุณมากกว่าแม่คุณแล้วนะ!"*

### 4. `PhishingQuiz.vue` (เกมซ้อมจับผิดเว็บหน้าหมา)
- มินิเกม 5 ข้อ ทายว่า URL/SMS นี้ **"ของจริง"** หรือ **"เว็บปลอม/แก๊งคอลเซ็นเตอร์"**
- มีระบบเฉลยพร้อมมุกกวนๆ เช่น *"สะกด g00gle แบบนี้ มีแต่แก๊งตั้งใจหลอกแล้ว!"*

### 5. `PasswordChecker.vue` (เครื่องวัดความตึงรหัสผ่าน)
- ช่องพิมพ์ทดสอบรหัสผ่าน แสดงเวลาที่ใช้แฮก เช่น *"3 วินาที (แฮกเกอร์กระพริบตาก็ได้แล้ว)"* vs *"5,000 ปี (รอจนโลกอวสาน)"*

### 6. `EmergencyModal.vue` (ปุ่มแดงฉุกเฉิน "งานเข้า! โดนแฮกแล้วทำไงดี")
- ปุ่มสีแดงบน Navbar สำหรับคนโดนยึดเพจ/โดนแฮก ให้ขั้นตอนกู้คืนแบบด่วนจี๋ 3 ข้อแรก

---

## 📁 โครงสร้างโปรเจกต์ (Expected Directory Structure)
```text
securifyme/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── index.html
└── src/
    ├── main.js
    ├── App.vue
    ├── components/
    │   ├── Navbar.vue
    │   ├── HeaderGauge.vue
    │   ├── PlatformSelector.vue
    │   ├── SecurityChecklist.vue
    │   ├── DoxxingSimulator.vue
    │   ├── PhishingQuiz.vue
    │   ├── PasswordChecker.vue
    │   ├── EmergencyModal.vue
    │   └── ExportReportModal.vue
    └── data/
        ├── platformsData.js (Thai Playful Text)
        └── quizData.js (Thai Playful Text)