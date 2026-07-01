export type NavChild = { title: string; to: string; desc?: string };
export type NavItem = { title: string; to?: string; children?: NavChild[] };

export const mainNav: NavItem[] = [
  { title: "خانه", to: "/" },
  {
    title: "درباره مجتمع",
    children: [
      { title: "معرفی مجتمع", to: "/about", desc: "تاریخچه و هویت مدرسه" },
      { title: "پیام مدیر", to: "/about/principal", desc: "سخنی از مدیر مجتمع" },
      { title: "مأموریت و ارزش‌ها", to: "/about/mission", desc: "چشم‌انداز و اصول ما" },
      { title: "مدیریت و کادر اداری", to: "/about/leadership", desc: "معرفی تیم اجرایی" },
    ],
  },
  {
    title: "مقاطع آموزشی",
    children: [
      { title: "معرفی مقاطع", to: "/stages", desc: "نگاه کلی به سه مقطع" },
      { title: "ابتدایی", to: "/stages/elementary", desc: "پایه اول تا ششم" },
      { title: "متوسطه اول", to: "/stages/middle", desc: "پایه هفتم تا نهم" },
      { title: "متوسطه دوم", to: "/stages/high", desc: "پایه دهم تا دوازدهم" },
    ],
  },
  {
    title: "ثبت‌نام و شهریه",
    children: [
      { title: "راهنمای ثبت‌نام", to: "/admissions", desc: "مراحل و شرایط" },
      { title: "مدارک لازم", to: "/admissions#documents", desc: "چک‌لیست مدارک" },
      { title: "شهریه و پرداخت", to: "/admissions/tuition", desc: "جدول و روش پرداخت" },
      { title: "پرسش‌های پرتکرار", to: "/faq", desc: "پاسخ سوالات رایج" },
    ],
  },
  {
    title: "اطلاعیه‌ها",
    children: [
      { title: "اطلاعیه‌های مهم", to: "/news", desc: "اطلاعیه‌های رسمی مدرسه" },
      { title: "اخبار مجتمع", to: "/news/updates", desc: "آخرین رویدادها" },
      { title: "تقویم آموزشی", to: "/news/calendar", desc: "برنامه سالانه" },
      { title: "گالری تصاویر", to: "/gallery", desc: "نگاهی به زندگی مدرسه" },
      { title: "افتخارات", to: "/honors", desc: "دستاوردهای دانش‌آموزان" },
    ],
  },
  {
    title: "منابع",
    children: [
      { title: "منابع والدین", to: "/resources/parents", desc: "راهنما و ابزار برای والدین" },
      { title: "منابع دانش‌آموزان", to: "/resources/students", desc: "برنامه درسی و تمرین" },
      { title: "منابع معلمان", to: "/resources/teachers", desc: "ابزار آموزشی" },
      { title: "دانلود فرم‌ها", to: "/resources/forms", desc: "فرم‌های اداری" },
      { title: "آیین‌نامه‌ها", to: "/resources/policies", desc: "مقررات مدرسه" },
      { title: "لینک‌های رسمی", to: "/official-links", desc: "مراجع و پیوندها" },
    ],
  },
  { title: "تماس با ما", to: "/contact" },
];

// Order for mobile priority
export const mobilePriority: NavChild[] = [
  { title: "ثبت‌نام", to: "/admissions" },
  { title: "شهریه و پرداخت", to: "/admissions/tuition" },
  { title: "اطلاعیه‌های مهم", to: "/news" },
  { title: "تقویم آموزشی", to: "/news/calendar" },
  { title: "دانلود فرم‌ها", to: "/resources/forms" },
  { title: "ورود به پنل کاربری", to: "/portal" },
  { title: "تماس با مدرسه", to: "/contact" },
  { title: "مقاطع آموزشی", to: "/stages" },
  { title: "منابع دانش‌آموزان", to: "/resources/students" },
  { title: "منابع والدین", to: "/resources/parents" },
  { title: "درباره مجتمع", to: "/about" },
  { title: "اخبار و گالری", to: "/news/updates" },
];
