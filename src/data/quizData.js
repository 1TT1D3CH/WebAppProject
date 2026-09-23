export const quizData = [
  {
    id: 1,
    title: "เตือนภัยจาก Facebook: โดนแจ้งละเมิดลิขสิทธิ์!",
    sender: "security-alert@meta-support-verify-desk9.com (ส่งทาง DM)",
    channel: "ข้อความแชต (Direct Message)",
    content: "คำเตือนด่วน: บัญชีของคุณละเมิดลิขสิทธิ์ภาพถ่าย! ระบบจะทำการระงับบัญชีถาวรภายใน 24 ชั่วโมง กรุณากดยืนยันตัวตนด่วนที่: https://meta-security-appeal-form.net/verify",
    isPhishing: true,
    difficulty: "ปานกลาง",
    redFlags: [
      "ชื่ออีเมล/โดเมนแปลกๆ (@meta-support-verify-desk9.com) - Meta ของจริงส่งจาก @meta.com เท่านั้น",
      "ข่มขู่ด้วยเวลาเร่งด่วน ('โดนลบภายใน 24 ชม.') เพื่อให้เราตกใจกดลิงก์ทันที",
      "ลิงก์ส่งไปเว็บปลอม (meta-security-appeal-form.net) ไม่ใช่ facebook.com"
    ],
    explanation: "มิจฉาชีพชอบส่งแชตขู่แบบนี้! Meta ของจริงจะไม่ทักแชตมาขู่ลบบัญชี การแจ้งเตือนของจริงจะอยู่ในเมนู การตั้งค่า > สถานะบัญชี ในแอปเท่านั้น"
  },
  {
    id: 2,
    title: "แจ้งเตือนความปลอดภัยจาก Google: มีการล็อกอินจากอุปกรณ์ใหม่",
    sender: "no-reply@accounts.google.com",
    channel: "อีเมล",
    content: "มีการเข้าสู่ระบบ Google Account ของคุณจากอุปกรณ์ Linux ในเมืองโตเกียว ประเทศญี่ปุ่น หากเป็นคุณเอง ไม่ต้องทำอะไรเพิ่มเติม หากไม่ใช่คุณ กรุณาตรวจสอบกิจกรรมที่ myaccount.google.com/notifications",
    isPhishing: false,
    redFlags: [],
    explanation: "นี่คืออีเมลแจ้งเตือนของจริงจาก Google (@accounts.google.com)! สังเกตว่าลิงก์ส่งไปยังเว็บหลัก `myaccount.google.com` โดยตรง และไม่ได้ขู่ให้กรอกรหัสผ่านในหน้าเว็บแปลกๆ"
  },
  {
    id: 3,
    title: "SMS เตือนอายัดบัญชีธนาคารด่วน!",
    sender: "081-XXX-XXXX (SMS)",
    channel: "ข้อความ SMS (Smishing)",
    content: "[ธนาคารกสิกรไทย]: บัญชีของท่านถูกโอนเงินออก 15,000 บาท หากไม่ได้ทำรายการ กรุณากดลิงก์ยกเลิกทันที http://k-bank-security-verify.com/login",
    isPhishing: true,
    difficulty: "ง่าย",
    redFlags: [
      "เป็นลิงก์ HTTP ธรรมดา ไม่ใช่ HTTPS ที่ปลอดภัย",
      "ชื่อโดเมนเป็นเว็บปลอม (k-bank-security-verify.com) ไม่ใช่ kasikornbank.com",
      "ส่งจากเบอร์มือถือส่วนตัว ไม่ใช่เบอร์ SMS ทางการของธนาคาร"
    ],
    explanation: "แก๊งคอลเซ็นเตอร์ชัดๆ! ธนาคารทุกแห่งในไทยมีนโยบาย **ยกเลิกการส่งลิงก์ผ่าน SMS ทุกกรณีแล้ว** อย่ากดเด็ดขาด!"
  },
  {
    id: 4,
    title: "แจกโบนัส TikTok Creator 30,000 บาท!",
    sender: "notification@tiktok-creators-rewards.org",
    channel: "อีเมล",
    content: "ยินดีด้วย! บัญชีของคุณได้รับเลือกให้รับเงินโบนัส TikTok Creator 30,000 บาท กรุณากรอกรหัสผ่านและเลขบัญชีเพื่อรับเงิน: http://tiktok-bonus-claim.org",
    isPhishing: true,
    difficulty: "ง่าย",
    redFlags: [
      "สะกดโดเมนลงท้ายด้วย .org ไม่ใช่ tiktok.com",
      "หลอกให้กรอกรหัสผ่านและเลขบัญชีธนาคารตรงๆ",
      "ข้อเสนอดีเกินจริงหลอกให้โลภ"
    ],
    explanation: "ไม่มีของฟรีในโลกมิจฉาชีพ! การแจกเงินแล้วขอรหัสผ่านคือมุกล่อเอาไอดีไปขายต่อชัวร์ๆ"
  },
  {
    id: 5,
    title: "รีเซ็ตรหัสผ่านบัญชี X (Twitter)",
    sender: "info@x.com",
    channel: "อีเมล",
    content: "เราได้รับคำขอรีเซ็ตรหัสผ่านสำหรับบัญชี X ของคุณ หากคุณเป็นคนขอ ให้กดที่นี่: https://x.com/password_reset หากไม่ได้เป็นคนขอ สามารถละทิ้งอีเมลนี้ได้ทันที",
    isPhishing: false,
    redFlags: [],
    explanation: "นี่คืออีเมลจากระบบของ X ของจริง (@x.com) ลิงก์ส่งไปที่เว็บหลัก `x.com` และแจ้งชัดเจนว่าถ้าไม่ได้ขอ ให้เฉยๆ ไว้ได้เลย"
  }
];
