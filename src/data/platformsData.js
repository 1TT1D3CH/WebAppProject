export const platformsData = [
  // FACEBOOK
  {
    id: 'fb-2fa',
    platform: 'facebook',
    platformName: 'Facebook',
    platformIcon: 'fa-brands fa-facebook text-blue-500',
    title: 'เปิดล็อก 2 ชั้น (2FA) กันโดนฮุบไอดี',
    severity: 'Critical',
    category: 'ล็อกสองชั้น กันโดนแฮก',
    steps: [
      'เปิด Facebook แตะที่รูปโปรไฟล์มุมขวาบน',
      'เข้า **การตั้งค่าและความเป็นส่วนตัว (Settings & Privacy)** > **การตั้งค่า (Settings)**',
      'เข้าไปที่ **ศูนย์บัญชี (Meta Accounts Center)** > **รหัสผ่านและความปลอดภัย**',
      'เลือก **การยืนยันตัวตนแบบสองปัจจัย (2FA)** แล้วเลือกไอดี Facebook ของคุณ',
      'เลือกใช้ **แอปยืนยันตัวตน (Authentication App)** เช่น Google Authenticator หรือ Duo'
    ],
    tip: 'หลีกเลี่ยงการรับรหัสผ่าน SMS เพราะเสี่ยงโดนแก๊งคอลเซ็นเตอร์สวอปซิม! ใช้แอปยืนยันตัวตนชัวร์ที่สุด'
  },
  {
    id: 'fb-friends',
    platform: 'facebook',
    platformName: 'Facebook',
    platformIcon: 'fa-brands fa-facebook text-blue-500',
    title: 'ซ่อน Friend List ไม่ให้คนนอกมาส่อง',
    severity: 'Medium',
    category: 'ความเสี่ยงโดนเปิดเปิง',
    steps: [
      'ไปที่ **การตั้งค่า (Settings)** > **กลุ่มเป้าหมายและการมองเห็น**',
      'เลือก **วิธีที่ผู้อื่นค้นหาและติดต่อคุณ**',
      'ตรงข้อ **ใครบ้างที่สามารถเห็นรายชื่อเพื่อนของคุณได้?**',
      'เปลี่ยนจาก *สาธารณะ (Public)* เป็น **เฉพาะฉัน (Only me)** หรือ **เพื่อน (Friends)**'
    ],
    tip: 'คนนอกเห็นรายชื่อเพื่อนเรา มักจะเอาไปก๊อบรูปสร้างเฟซปลอมไปยืมเงินเพื่อนเราต่อ!'
  },
  {
    id: 'fb-off-activity',
    platform: 'facebook',
    platformName: 'Facebook',
    platformIcon: 'fa-brands fa-facebook text-blue-500',
    title: 'ล้างประวัติแอบตามดูจากเว็บนอก (Off-Facebook Activity)',
    severity: 'High',
    category: 'ความเสี่ยงโดนเปิดเปิง',
    steps: [
      'เข้า **ศูนย์บัญชี (Meta Accounts Center)** ผ่านหน้าการตั้งค่า',
      'เลือก **ข้อมูลและสิทธิ์ของคุณ (Your information and permissions)**',
      'กดที่ **กิจกรรมภายนอกเทคโนโลยีของ Meta (Off-Meta activity)**',
      'กด **ล้างกิจกรรมที่ผ่านมา (Clear previous activity)** และกดปิดการเชื่อมต่ออนาคต'
    ],
    tip: 'เว็บช้อปปิ้งและแอปต่างๆ แอบส่งข้อมูลการเข้าชมของคุณให้ Facebook รู้ ปิดไว้สบายใจกว่าเยอะ'
  },
  {
    id: 'fb-post-privacy',
    platform: 'facebook',
    platformName: 'Facebook',
    platformIcon: 'fa-brands fa-facebook text-blue-500',
    title: 'ตั้งค่าโพสต์ใหม่อยู่ในกลุ่ม "เฉพาะเพื่อนเท่านั้น"',
    severity: 'Medium',
    category: 'ความเสี่ยงโดนเปิดเปิง',
    steps: [
      'ไปที่ **การตั้งค่า (Settings)** > **โพสต์ (Posts)**',
      'เลือก **ใครบ้างที่สามารถเห็นโพสต์ในอนาคตของคุณได้?**',
      'ปรับเป็น **เพื่อน (Friends)**',
      'กด **จำกัดกลุ่มเป้าหมายสำหรับโพสต์ในอดีต** เพื่อซ่อนโพสต์ดึกดำบรรพ์ไม่ให้คนนอกเห็น'
    ],
    tip: 'โพสต์เก่าๆ สมัยเด็กอาจมีข้อมูลส่วนตัวหลุดอยู่ ปิดไว้ไม่ให้โดนขุด!'
  },

  // INSTAGRAM
  {
    id: 'ig-private',
    platform: 'instagram',
    platformName: 'Instagram',
    platformIcon: 'fa-brands fa-instagram text-pink-500',
    title: 'ตั้ง Private Account หนีสายสืบ',
    severity: 'Medium',
    category: 'ความเสี่ยงโดนเปิดเปิง',
    steps: [
      'เปิดแอป IG ไปที่หน้าโปรไฟล์ตัวเอง กดปุ่มเมนู 3 ขีด (≡) มุมขวาบน',
      'เลือก **การตั้งค่าและความเป็นส่วนตัว (Settings and activity)**',
      'เลื่อนลงมาที่ **ความเป็นส่วนตัวของบัญชี (Account privacy)**',
      'เปิดสวิตช์ **บัญชีส่วนตัว (Private account)**'
    ],
    tip: 'ตั้งเป็นไอจีส่วนตัว ช่วยกันไม่ให้คนแปลกหน้าเอารูปและสถานที่ที่เราไปปักหมุดไปใช้ในทางไม่ดี'
  },
  {
    id: 'ig-activity-status',
    platform: 'instagram',
    platformName: 'Instagram',
    platformIcon: 'fa-brands fa-instagram text-pink-500',
    title: 'ปิดสถานะออนไลน์ ไม่ให้ใครรู้ว่าแอบตื่นมาไถฟีด',
    severity: 'Low',
    category: 'ความเสี่ยงโดนเปิดเปิง',
    steps: [
      'เข้าเมนู **การตั้งค่าและความเป็นส่วนตัว** ใน IG',
      'เลือก **ข้อความและการตอบกลับสตอรี่ (Messages and story replies)**',
      'กดที่ **แสดงสถานะการใช้งาน (Show activity status)**',
      'ปิดสวิตช์ **แสดงสถานะการใช้งาน**'
    ],
    tip: 'ปิดไว้เพื่อความเป็นส่วนตัว ไม่มีใครมาตามจี้ว่า "ขึ้นจุดเขียวแต่ทำไมไม่ตอบแชต!"'
  },
  {
    id: 'ig-third-party',
    platform: 'instagram',
    platformName: 'Instagram',
    platformIcon: 'fa-brands fa-instagram text-pink-500',
    title: 'ปลดล็อกแอปแปลกหน้า (Third-Party Apps) ที่เคยผูกไว้',
    severity: 'High',
    category: 'แอปแปลกหน้าสวมรอย',
    steps: [
      'เข้าหน้าการตั้งค่า IG > **สิทธิ์ของเว็บไซต์ (Website permissions)**',
      'เลือก **แอปและเว็บไซต์ (Apps and websites)**',
      'ดูตรงแท็บ **ที่ใช้งานอยู่ (Active)**',
      'กด **ลบออก (Remove)** แอปเช็กฟอลโลเวอร์หรือเว็บแต่งรูปแปลกๆ ที่ไม่ได้ใช้แล้ว'
    ],
    tip: 'แอปเช็กว่าใคร unfollow เรา มักแอบดูดรหัสผ่านและแชตส่วนตัวเราไปขายต่อ!'
  },
  {
    id: 'ig-2fa',
    platform: 'instagram',
    platformName: 'Instagram',
    platformIcon: 'fa-brands fa-instagram text-pink-500',
    title: 'เปิดล็อก 2 ชั้นด้วยแอปยืนยันตัวตนบน IG',
    severity: 'Critical',
    category: 'ล็อกสองชั้น กันโดนแฮก',
    steps: [
      'เข้าเมนูการตั้งค่า IG > **ศูนย์บัญชี (Accounts Center)**',
      'เลือก **รหัสผ่านและความปลอดภัย** > **การยืนยันตัวตนแบบสองปัจจัย**',
      'เลือกบัญชี IG ของคุณ แล้วเลือก **แอปยืนยันตัวตน (Authentication App)**',
      'สแกน QR Code เข้าแอป Google Authenticator แล้วบันทึกรหัสสำรองเก็บไว้'
    ],
    tip: 'อย่าลืมแคปหน้าจอ "รหัสสำรอง (Backup Codes)" เก็บไว้ในที่ปลอดภัย เผื่อโทรศัพท์หายจะได้เข้าไอดีได้'
  },

  // GOOGLE / YOUTUBE
  {
    id: 'goog-passkeys',
    platform: 'google',
    platformName: 'Google / YouTube',
    platformIcon: 'fa-brands fa-google text-red-500',
    title: 'เปิดใช้ Passkey สแกนนิ้วเข้าแบบหล่อๆ ไม่ต้องจำรหัส',
    severity: 'Critical',
    category: 'ล็อกสองชั้น กันโดนแฮก',
    steps: [
      'เข้าเว็บ `myaccount.google.com` แล้วไปที่แท็บ **ความปลอดภัย (Security)**',
      'ดูตรงหัวข้อ **พาสคีย์และคีย์ความปลอดภัย (Passkeys & Security Keys)**',
      'กดสร้างพาสคีย์ แล้วใช้การสแกนนิ้วมือ (TouchID / Fingerprint) หรือสแกนหน้าบนมือถือ'
    ],
    tip: 'Passkey ปลอดภัยกว่ารหัสผ่าน 100% เพราะโจรรู้รหัสไปก็เข้าไม่ได้ถ้าไม่มีนิ้วมือเรา!'
  },
  {
    id: 'goog-location-history',
    platform: 'google',
    platformName: 'Google / YouTube',
    platformIcon: 'fa-brands fa-google text-red-500',
    title: 'ปิดประวัติเดินทาง (Location History) ไม่ให้โดนตามรอย',
    severity: 'High',
    category: 'ความเสี่ยงโดนเปิดเปิง',
    steps: [
      'ไปที่ `myaccount.google.com` > แท็บ **ข้อมูลและความเป็นส่วนตัว (Data & privacy)**',
      'ดูตรง **การตั้งค่าประวัติ (History settings)**',
      'กดที่ **ลำดับเหตุการณ์ (Timeline / Location History)** แล้วกด **ปิดใช้งาน (Turn off)**'
    ],
    tip: 'Google แอบเก็บตำแหน่งที่คุณไปทุกวันทุกนาที ปิดไว้กันโดนสะกดรอยตาม'
  },
  {
    id: 'goog-safe-browsing',
    platform: 'google',
    platformName: 'Google / YouTube',
    platformIcon: 'fa-brands fa-google text-red-500',
    title: 'เปิดท่องเว็บปลอดภัยขั้นสุด (Enhanced Safe Browsing)',
    severity: 'Medium',
    category: 'แอปแปลกหน้าสวมรอย',
    steps: [
      'ไปที่ `myaccount.google.com/security`',
      'เลื่อนลงมาหา **การท่องเว็บอย่างปลอดภัยที่ได้รับการปรับปรุง (Enhanced Safe Browsing)**',
      'เปิดสวิตช์เป็น **เปิด (On)**'
    ],
    tip: 'ช่วยเตือนทันทีเวลาเราเผลอเข้าเว็บไวรัสหรือเว็บมิจฉาชีพหลอกเอาข้อมูล'
  },

  // TIKTOK
  {
    id: 'tt-suggest-account',
    platform: 'tiktok',
    platformName: 'TikTok',
    platformIcon: 'fa-brands fa-tiktok text-teal-400',
    title: 'ปิดคำแนะนำบัญชีให้คนรู้จัก ไม่ให้ญาติหรือครูมาเจอ',
    severity: 'Medium',
    category: 'ความเสี่ยงโดนเปิดเปิง',
    steps: [
      'เปิด TikTok ไปที่โปรไฟล์ กดเมนู 3 ขีด > **การตั้งค่าและความเป็นส่วนตัว**',
      'เลือก **ความเป็นส่วนตัว (Privacy)** > **แนะนำบัญชีของคุณให้ผู้อื่น**',
      'ปิดสวิตช์: **รายชื่อติดต่อ**, **เพื่อนใน Facebook**, และ **คนที่เปิดหรือส่งลิงก์ให้คุณ**'
    ],
    tip: 'ถ้าไม่อยากให้ป้าข้างบ้านหรือเพื่อนร่วมงานเห็นคลิปเต้นของเรา ปิดเมนูนี้นึกว่ากราบ!'
  },
  {
    id: 'tt-direct-messages',
    platform: 'tiktok',
    platformName: 'TikTok',
    platformIcon: 'fa-brands fa-tiktok text-teal-400',
    title: 'ตั้งข้อความแชทเฉพาะเพื่อน กันมิจแชทหา',
    severity: 'Medium',
    category: 'ความเสี่ยงโดนเปิดเปิง',
    steps: [
      'เข้าหน้า **ความเป็นส่วนตัว (Privacy)** ใน TikTok',
      'เลื่อนลงมาที่ **ข้อความตรง (Direct messages)**',
      'ปรับจาก *ทุกคน* เป็น **เพื่อน (Friends)** หรือ **ไม่มีใครเลย (No one)**'
    ],
    tip: 'กันพวกมิจฉาชีพส่งลิงก์หลอกแจกเงินหรือส่งภาพไม่เหมาะสมมาในช่องแชต'
  },
  {
    id: 'tt-location-services',
    platform: 'tiktok',
    platformName: 'TikTok',
    platformIcon: 'fa-brands fa-tiktok text-teal-400',
    title: 'ปิดการตั้งค่าระบุตำแหน่งแม่นยำ (Location Access)',
    severity: 'Low',
    category: 'ความเสี่ยงโดนเปิดเปิง',
    steps: [
      'เปิด **การตั้งค่าของมือถือ (System Settings)** (iOS / Android)',
      'ค้นหาแอป **TikTok** ในรายการแอป',
      'เลือก **การอนุญาต (Permissions)** > **ตำแหน่ง (Location)**',
      'ปรับเป็น **ไม่อนุญาต (Never)** หรือปิด **ตำแหน่งที่แม่นยำ (Precise Location)**'
    ],
    tip: 'TikTok ไม่จำเป็นต้องรู้ละติจูดลองจิจูดบ้านเรา ก็เล่นคลิปฟีดได้ตามปกติ'
  },

  // TWITTER / X
  {
    id: 'x-2fa',
    platform: 'twitter',
    platformName: 'X (Twitter)',
    platformIcon: 'fa-brands fa-x-twitter text-slate-200',
    title: 'เปิดล็อก 2 ชั้นด้วยแอปยืนยันตัวตนบน X',
    severity: 'Critical',
    category: 'ล็อกสองชั้น กันโดนแฮก',
    steps: [
      'เปิด X ไปที่ **การตั้งค่าและความเป็นส่วนตัว (Settings and privacy)**',
      'เลือก **ความปลอดภัยและการเข้าถึงบัญชี** > **ความปลอดภัย (Security)**',
      'กดที่ **การยืนยันตัวตนแบบสองปัจจัย (Two-factor authentication)**',
      'เลือก **แอปยืนยันตัวตน (Authentication app)** แล้วสแกนรหัส'
    ],
    tip: 'โจรชอบแฮกไอดี X ไปโพสต์โปรโมตคริปโตปลอม เปิด 2FA ไว้รอดชัวร์!'
  },
  {
    id: 'x-protect-posts',
    platform: 'twitter',
    platformName: 'X (Twitter)',
    platformIcon: 'fa-brands fa-x-twitter text-slate-200',
    title: 'ล็อกทวีตเป็นบัญชีส่วนตัว (Protected Posts)',
    severity: 'Medium',
    category: 'ความเสี่ยงโดนเปิดเปิง',
    steps: [
      'ไปที่ **ความเป็นส่วนตัวและความปลอดภัย (Privacy and safety)**',
      'เลือก **กลุ่มเป้าหมาย การแท็ก และสื่อ**',
      'ติ๊กเปิด **ปกป้องโพสต์ของคุณ (Protect your posts)**'
    ],
    tip: 'เมื่อล็อกทวีตแล้ว คนที่ไม่ใช่ฟอลโลเวอร์จะบ่นหรือรีทวีตเราไม่ได้ เหมาะกับสายอยากบ่นส่วนตัว'
  },
  {
    id: 'x-data-sharing',
    platform: 'twitter',
    platformName: 'X (Twitter)',
    platformIcon: 'fa-brands fa-x-twitter text-slate-200',
    title: 'ปิดการแชร์ข้อมูลส่วนตัวให้โฆษณาขายของ',
    severity: 'Low',
    category: 'ความเสี่ยงโดนเปิดเปิง',
    steps: [
      'ไปที่ **ความเป็นส่วนตัวและความปลอดภัย**',
      'เลื่อนลงล่างสุดหัวข้อ **การแชร์ข้อมูลและการปรับแต่งตามข้อมูลส่วนบุคคล**',
      'ปิด **โฆษณาที่ปรับตามบุคคล**, **อัตลักษณ์ที่คาดเดา**, และ **การแชร์ข้อมูลให้พันธมิตร**'
    ],
    tip: 'ปิดไว้ X จะได้ไม่เอาพฤติกรรมเราไปขายให้บริษัทโฆษณาตามหลอน'
  }
];
