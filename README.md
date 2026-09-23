# 🛡️ SecurifyMe - Thai Playful Edition (Mobile-First Responsive UI)

**SecurifyMe** คือเว็บแอปพลิเคชันช่วยเช็กและตั้งค่าความปลอดภัยโซเชียลมีเดีย **ภาษาไทยสไตล์วัยรุ่น ขี้เล่น เข้าใจง่าย (No Technical Jargon!)** พัฒนาด้วย **Vue 3 (Composition API / `<script setup>`)**, **Vite**, **Tailwind CSS**, และ **FontAwesome / Lucide Icons**

---

## 📱 คุณสมบัติเด่นและดีไซน์ (Key Features & Responsive UI)

- **Mobile-First & Touch-Friendly:** ออกแบบมาเพื่อมือถือ แท็บเล็ต และจอคอมพิวเตอร์อย่างสมบูรณ์แบบ มี Hamburger Menu บนมือถือ และปุ่มกดขนาดใหญ่ใช้นิ้วแตะได้ง่าย
- **ภาษาไทยอ่านสนุก เข้าใจง่าย:** เปลี่ยนคำศัพท์ไอทีน่าเบื่อให้อ่านสนุก เข้าใจได้ทันที
- **เกจวัดระดับความปลอดภัยสุดเก๋า (`HeaderGauge.vue`):** แสดงคะแนน 0-100% พร้อมสโลแกนกวนๆ และระบบจุดพลุฉลอง Confetti เมื่อคะแนนสูง
- **ปุ่มวิชาตัวเบา (`ChecklistItem.vue`):** สอนตั้งค่าแบบ Step-by-Step 1-2-3
- **เครื่องมือจำลองโดนส่องไส้ (`DoxxingSimulator.vue`):** เช็กระดับความเสี่ยงการโดนขุดข้อมูลส่วนตัว
- **เกมซ้อมจับผิดมิจฉาชีพ (`PhishingQuiz.vue`):** มินิเกมซ้อมจับผิดข้อความหลอกลวง
- **วัดความตึงรหัสผ่าน (`PasswordChecker.vue`):** ประเมินเวลาที่ใช้แฮก และสุ่มรหัสลับปลอดภัย
- **ปุ่มฉุกเฉินงานเข้า (`EmergencyModal.vue`):** ขั้นตอนดับไฟกู้ไอดีด่วนใน 3 นาทีแรก

---

## 🚀 วิธีการติดตั้งและรันโครงการ

```bash
# 1. ติดตั้ง Dependencies
cmd /c npm install

# 2. รัน Development Server (พอร์ต 3000)
cmd /c npm run dev

# 3. Build สำหรับ Production
cmd /c npm run build
```
