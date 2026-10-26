export type CompanyKey = 'sepand' | 'mehvarsazan' | 'tormozsazan' | 'ghetesazan';

export interface PhoneDirectoryItem {
  id: string;
  companyKey: CompanyKey;
  companyName: string;
  department: string;
  name: string;
  extension: string;
  roleOrNote?: string;
}

export interface CompanyCategory {
  key: 'all' | CompanyKey;
  title: string;
  shortTitle: string;
  badgeColor: string;
}

export const directoryCompanies: CompanyCategory[] = [
  {
    key: 'all',
    title: 'همه شرکت‌ها و واحدها',
    shortTitle: 'همه',
    badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
  },
  {
    key: 'sepand',
    title: 'شرکت سپند اسپوتا',
    shortTitle: 'سپند اسپوتا',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
  },
  {
    key: 'mehvarsazan',
    title: 'شرکت محورسازان جهان اسپوتا',
    shortTitle: 'محورسازان جهان',
    badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
  },
  {
    key: 'tormozsazan',
    title: 'شرکت ترمزسازان اسپوتا',
    shortTitle: 'ترمزسازان اسپوتا',
    badgeColor: 'bg-rose-50 text-rose-800 border-rose-200',
  },
  {
    key: 'ghetesazan',
    title: 'شرکت قطعه‌سازان اسپوتا',
    shortTitle: 'قطعه‌سازان اسپوتا',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  },
];

export const phoneDirectoryData: PhoneDirectoryItem[] = [
  // ==========================================
  // ۱. شرکت سپند اسپوتا
  // ==========================================
  { id: 'sp-1', companyKey: 'sepand', companyName: 'سپند اسپوتا', department: 'مدیریت', name: 'مدیریت', extension: '۶۰۱۰' },
  { id: 'sp-2', companyKey: 'sepand', companyName: 'سپند اسپوتا', department: 'مدیریت', name: 'مدیر تولید', extension: 'بدون شماره', roleOrNote: 'در دست اقدام' },
  { id: 'sp-3', companyKey: 'sepand', companyName: 'سپند اسپوتا', department: 'مدیریت', name: 'آقای رجب‌خواه', extension: '۶۶۰۲' },
  { id: 'sp-4', companyKey: 'sepand', companyName: 'سپند اسپوتا', department: 'فناوری اطلاعات', name: 'واحد فناوری اطلاعات', extension: '۶۱۱۱' },
  { id: 'sp-5', companyKey: 'sepand', companyName: 'سپند اسپوتا', department: 'مالی', name: 'آقای محمدنژاد', extension: '۶۲۰۰' },
  { id: 'sp-6', companyKey: 'sepand', companyName: 'سپند اسپوتا', department: 'مالی', name: 'آقای حسینی', extension: '۶۲۰۲' },
  { id: 'sp-7', companyKey: 'sepand', companyName: 'سپند اسپوتا', department: 'مالی', name: 'آقای رشادت', extension: '۶۲۰۴' },
  { id: 'sp-8', companyKey: 'sepand', companyName: 'سپند اسپوتا', department: 'بازرگانی', name: 'آقای متفکر', extension: '۶۳۰۰' },
  { id: 'sp-9', companyKey: 'sepand', companyName: 'سپند اسپوتا', department: 'بازرگانی', name: 'خانم طلیعه', extension: '۶۳۰۲' },
  { id: 'sp-10', companyKey: 'sepand', companyName: 'سپند اسپوتا', department: 'منابع انسانی', name: 'خانم خشنود', extension: '۶۴۰۲' },
  { id: 'sp-11', companyKey: 'sepand', companyName: 'سپند اسپوتا', department: 'HSE', name: 'آقای صالحی', extension: '۶۴۰۸' },
  { id: 'sp-12', companyKey: 'sepand', companyName: 'سپند اسپوتا', department: 'کنترل تولید', name: 'آقای رستمی', extension: '۶۶۰۸' },
  { id: 'sp-13', companyKey: 'sepand', companyName: 'سپند اسپوتا', department: 'کنترل کیفیت', name: 'آقای نوزاد', extension: '۶۷۰۲' },
  { id: 'sp-14', companyKey: 'sepand', companyName: 'سپند اسپوتا', department: 'برنامه‌ریزی', name: 'خانم کرب‌پور', extension: '۶۸۰۲' },
  { id: 'sp-15', companyKey: 'sepand', companyName: 'سپند اسپوتا', department: 'انبار', name: 'آقای فرج‌پور', extension: '۶۵۰۸' },
  { id: 'sp-16', companyKey: 'sepand', companyName: 'سپند اسپوتا', department: 'سایر بخش‌ها', name: 'نگهبانی سپند', extension: '۶۱۱۰' },
  { id: 'sp-17', companyKey: 'sepand', companyName: 'سپند اسپوتا', department: 'سایر بخش‌ها', name: 'آقای جعفری', extension: '۶۶۵۰' },
  { id: 'sp-18', companyKey: 'sepand', companyName: 'سپند اسپوتا', department: 'سایر بخش‌ها', name: 'آقای یاری', extension: '۶۹۰۲' },

  // ==========================================
  // ۲. شرکت محورسازان جهان اسپوتا
  // ==========================================
  { id: 'mj-1', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'مالی', name: 'خانم کریمی', extension: '۴۴۰۰' },
  { id: 'mj-2', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'مالی', name: 'آقای بافراست', extension: '۴۴۰۴' },
  { id: 'mj-3', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'مالی', name: 'آقای غنی‌زاده', extension: '۴۴۰۶' },
  { id: 'mj-4', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'مالی', name: 'آقای نظامی', extension: '۴۴۱۲' },
  { id: 'mj-5', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'مالی', name: 'خانم پورحسین', extension: '۴۴۱۰' },
  { id: 'mj-6', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'فروش و خدمات پس از فروش', name: 'آقای کاکه‌ای', extension: '۴۴۲۰' },
  { id: 'mj-7', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'فروش و خدمات پس از فروش', name: 'آقای شریف', extension: '۴۴۲۴' },
  { id: 'mj-8', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'فروش و خدمات پس از فروش', name: 'خانم معظم', extension: '۴۴۲۸' },
  { id: 'mj-9', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'فروش و خدمات پس از فروش', name: 'آقای یزدانیان', extension: '۴۴۸۲' },
  { id: 'mj-10', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'ارتباط با مشتری (CRM)', name: 'خانم مولایی', extension: '۴۴۸۶' },
  { id: 'mj-11', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'انبار', name: 'آقای دین‌پرست', extension: '۶۵۰۲' },
  { id: 'mj-12', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'انبار', name: 'آقای الهامی', extension: '۶۵۰۴' },

  // ==========================================
  // ۳. شرکت ترمزسازان اسپوتا
  // ==========================================
  { id: 'ts-1', companyKey: 'tormozsazan', companyName: 'ترمزسازان اسپوتا', department: 'مالی', name: 'آقای زرین‌نژاد', extension: '۶۲۵۰' },
  { id: 'ts-2', companyKey: 'tormozsazan', companyName: 'ترمزسازان اسپوتا', department: 'مالی', name: 'آقای جباری', extension: '۶۲۵۲' },
  { id: 'ts-3', companyKey: 'tormozsazan', companyName: 'ترمزسازان اسپوتا', department: 'مالی', name: 'آقای عبدیل‌زاده', extension: '۶۲۵۴' },
  { id: 'ts-4', companyKey: 'tormozsazan', companyName: 'ترمزسازان اسپوتا', department: 'مالی', name: 'آقای محبت', extension: '۶۲۵۶' },
  { id: 'ts-5', companyKey: 'tormozsazan', companyName: 'ترمزسازان اسپوتا', department: 'برنامه‌ریزی', name: 'خانم فدایی‌وش', extension: '۶۸۵۲' },
  { id: 'ts-6', companyKey: 'tormozsazan', companyName: 'ترمزسازان اسپوتا', department: 'برنامه‌ریزی', name: 'آقای سلیمان‌پور', extension: '۶۸۵۴' },
  { id: 'ts-7', companyKey: 'tormozsazan', companyName: 'ترمزسازان اسپوتا', department: 'کنترل تولید', name: 'آقای ترکمانیان', extension: '۶۶۵۴' },
  { id: 'ts-8', companyKey: 'tormozsazan', companyName: 'ترمزسازان اسپوتا', department: 'کنترل کیفیت', name: 'خانم ثباتی', extension: '۶۷۵۰' },
  { id: 'ts-9', companyKey: 'tormozsazan', companyName: 'ترمزسازان اسپوتا', department: 'انبار', name: 'آقای اسلامی', extension: '۶۵۵۰' },
  { id: 'ts-10', companyKey: 'tormozsazan', companyName: 'ترمزسازان اسپوتا', department: 'سایر بخش‌ها', name: 'نگهبانی ترمزسازان', extension: '۶۱۲۰' },

  // ==========================================
  // ۴. شرکت قطعه‌سازان اسپوتا
  // ==========================================
  // مدیریت
  { id: 'qs-1', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'مدیریت', name: 'آقای رضا رستمی', extension: '۴۴۴۲' },
  { id: 'qs-2', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'مدیریت', name: 'خانم زهرا رستمی', extension: '۴۴۴۴' },
  { id: 'qs-3', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'مدیریت', name: 'دفتر مدیریت', extension: '۴۰۰۱ - ۴۰۰۲' },
  { id: 'qs-4', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'مدیریت', name: 'آقای محمودی', extension: '۴۰۰۳' },
  { id: 'qs-5', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'مدیریت', name: 'آقای سجادی', extension: '۴۰۰۴' },
  { id: 'qs-6', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'مدیریت', name: 'آقای کوهی', extension: '۴۳۶۰' },
  { id: 'qs-7', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'مدیریت', name: 'آقای جبارپور', extension: '۴۰۰۶' },
  { id: 'qs-8', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'مدیریت', name: 'آقای شرفی', extension: '۶۰۱۱' },
  
  // فناوری اطلاعات & روابط عمومی
  { id: 'qs-9', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'فناوری اطلاعات', name: 'واحد فناوری اطلاعات', extension: '۴۱۱۱' },
  { id: 'qs-10', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'روابط عمومی', name: 'مدیا / روابط عمومی', extension: '۴۵۵۰' },
  
  // مالی & حسابداری
  { id: 'qs-11', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'مالی', name: 'آقای مهیور', extension: '۴۲۰۰' },
  { id: 'qs-12', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'مالی', name: 'آقای عقلمند', extension: '۴۲۰۲' },
  { id: 'qs-13', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'حسابداری', name: 'خانم صفرزاده', extension: '۴۵۲۰' },
  
  // منابع انسانی
  { id: 'qs-14', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'منابع انسانی', name: 'آقای رضایی', extension: '۴۲۰۸' },
  { id: 'qs-15', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'منابع انسانی', name: 'خانم ذوالفقاری', extension: '۴۲۱۰' },
  { id: 'qs-16', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'منابع انسانی', name: 'آقای کشتگر', extension: '۴۲۱۲' },
  { id: 'qs-17', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'منابع انسانی', name: 'خانم موظف', extension: '۴۲۱۴' },
  { id: 'qs-18', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'منابع انسانی', name: 'آقای جوادپور', extension: '۴۲۱۶' },
  { id: 'qs-19', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'منابع انسانی', name: 'خانم رحیمی', extension: '۴۳۳۰' },
  { id: 'qs-20', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'منابع انسانی', name: 'آقای بابایی', extension: '۴۳۳۴' },

  // کنترل تولید
  { id: 'qs-21', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'کنترل تولید', name: 'خانم حسینی', extension: '۴۲۲۴' },

  // فنی و مهندسی
  { id: 'qs-22', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'فنی و مهندسی', name: 'آقای حنیف‌زاده', extension: '۴۲۳۰' },
  { id: 'qs-23', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'فنی و مهندسی', name: 'خانم معصومی', extension: '۴۲۳۲' },
  { id: 'qs-24', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'فنی و مهندسی', name: 'آقای رحیمی', extension: '۴۳۶۴' },
  { id: 'qs-25', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'فنی و مهندسی', name: 'آقای عباس‌زادگان', extension: '۴۳۶۶' },
  { id: 'qs-26', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'فنی و مهندسی', name: 'آقای غیب‌اله‌زاده', extension: '۴۳۷۴' },

  // بازرگانی & برنامه‌ریزی
  { id: 'qs-27', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'بازرگانی', name: 'آقای اصغری', extension: '۴۲۴۰' },
  { id: 'qs-28', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'بازرگانی', name: 'آقای اسکندری', extension: '۴۲۴۴' },
  { id: 'qs-29', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'بازرگانی', name: 'آقای فرهمند', extension: '۴۲۴۶' },
  { id: 'qs-30', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'بازرگانی', name: 'آقای خدادوست', extension: '۴۳۸۰' },
  { id: 'qs-31', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'برنامه‌ریزی', name: 'آقای صحرانورد', extension: '۴۲۵۴' },
  { id: 'qs-32', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'برنامه‌ریزی', name: 'خانم پیامی‌فر', extension: '۴۲۵۶' },

  // انبار
  { id: 'qs-33', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'انبار', name: 'آقای قلی‌زاده', extension: '۴۲۷۰' },
  { id: 'qs-34', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'انبار', name: 'آقای شیخبگلو', extension: '۴۲۷۴' },
  { id: 'qs-35', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'انبار', name: 'آقای صوفی', extension: '۴۲۷۶' },
  { id: 'qs-36', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'انبار', name: 'خانم شباهنگ', extension: '۴۲۷۸' },
  { id: 'qs-37', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'انبار', name: 'آقای جان‌محمدی', extension: '۴۲۹۰' },
  { id: 'qs-38', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'انبار', name: 'آقای ملک‌خواه', extension: '۴۲۹۴' },
  { id: 'qs-39', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'انبار', name: 'آقای قهرمانی', extension: '۴۲۹۶' },
  { id: 'qs-40', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'انبار', name: 'آقای اصل‌نیا', extension: '۴۲۹۸' },
  { id: 'qs-41', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'انبار', name: 'آقای رضوی', extension: '۴۳۰۲' },
  { id: 'qs-42', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'انبار', name: 'آقای رضانلو', extension: '۴۳۰۴' },
  { id: 'qs-43', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'انبار', name: 'آقای نمازی', extension: '۴۳۱۲' },
  { id: 'qs-44', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'انبار', name: 'خانم مجیدزاده', extension: '۴۴۳۴' },

  // قالب‌سازی، HSE، سیستم‌ها، مهندسی ساخت، کیفیت
  { id: 'qs-45', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'قالب‌سازی', name: 'کارگاه قالب‌سازی', extension: '۴۳۱۸' },
  { id: 'qs-46', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'HSE', name: 'آقای نارنجی', extension: '۴۳۴۰' },
  { id: 'qs-47', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'HSE', name: 'آقای معروفی', extension: '۴۳۴۲' },
  { id: 'qs-48', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'سیستم‌ها و روش‌ها', name: 'خانم حیدری', extension: '۴۳۲۰' },
  { id: 'qs-49', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'سیستم‌ها و روش‌ها', name: 'خانم نصرتی', extension: '۴۳۲۴' },
  { id: 'qs-50', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'کنترل کیفیت', name: 'آقای اسماعیل‌زاده', extension: '۴۳۹۰' },
  { id: 'qs-51', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'کنترل کیفیت', name: 'آقای علیزاده', extension: '۴۴۶۴' },

  // نگهبانی
  { id: 'qs-52', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'نگهبانی', name: 'خانم آذر', extension: '۴۱۱۰' },
  { id: 'qs-53', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'نگهبانی', name: 'خانم آفریده', extension: '۴۲۶۴' },
  { id: 'qs-54', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'نگهبانی', name: 'خانم میثاقی', extension: '۴۲۶۶' },
  { id: 'qs-55', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'نگهبانی', name: 'نگهبانی قطعه‌سازان', extension: '۴۱۱۰' },

  // سایر واحدها و خدمات
  { id: 'qs-56', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'تولید توسعه جهان', name: 'تولید توسعه جهان', extension: '۴۵۳۲' },
  { id: 'qs-57', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'سایر بخش‌ها', name: 'آقای یعقوبی', extension: '۴۴۶۲' },
  { id: 'qs-58', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'سایر بخش‌ها', name: 'آقای بازارباشی', extension: '۴۴۳۲' },
  { id: 'qs-59', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'سایر بخش‌ها', name: 'آقای احمدآبادی', extension: '۴۴۳۶' },
  { id: 'qs-60', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'ترابری', name: 'واحد ترابری', extension: '۴۵۱۶' },
  { id: 'qs-61', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'خدمات و رفاهی', name: 'آبدارخانه فنی و مهندسی', extension: '۴۵۰۲' },
  { id: 'qs-62', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'خدمات و رفاهی', name: 'آبدارخانه قطعه‌سازان', extension: '۴۵۰۴' },
  { id: 'qs-63', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'خدمات و رفاهی', name: 'آبدارخانه اداری فیدارا', extension: '۴۵۰۶' },
  { id: 'qs-64', companyKey: 'ghetesazan', companyName: 'قطعه‌سازان اسپوتا', department: 'خدمات و رفاهی', name: 'آبدارخانه طبقه مدیریت', extension: '۴۵۰۸' },
];
