export interface PhoneDirectoryItem {
  id: string;
  companyKey: 'holding' | 'mehvarsazan' | 'qatehsazan';
  companyName: string;
  department: string;
  name: string;
  extension: string;
  roleOrNote?: string;
}

export interface CompanyCategory {
  key: 'all' | 'holding' | 'mehvarsazan' | 'qatehsazan';
  title: string;
  shortTitle: string;
  badgeColor: string;
}

export const directoryCompanies: CompanyCategory[] = [
  {
    key: 'all',
    title: 'همه شماره‌های داخلی',
    shortTitle: 'همه',
    badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
  },
  {
    key: 'holding',
    title: 'دفتر مدیریت و ستاد هلدینگ اسپوتا',
    shortTitle: 'هلدینگ و مدیریت',
    badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
  },
  {
    key: 'mehvarsazan',
    title: 'شرکت محورسازان جهان اسپوتا',
    shortTitle: 'محورسازان جهان',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    key: 'qatehsazan',
    title: 'شرکت قطعه‌سازان اسپوتا',
    shortTitle: 'قطعه‌سازان اسپوتا',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
];

export const phoneDirectoryData: PhoneDirectoryItem[] = [
  // ==================== ستون اول: دفتر مدیریت / ستاد هلدینگ اسپوتا ====================
  { id: 'h-1', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'دفتر مدیریت / مدیریت', name: 'آقای محمودی', extension: '۴۰۰۳' },
  { id: 'h-2', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'دفتر مدیریت / مدیریت', name: 'آقای سجادی', extension: '۴۰۰۴' },
  { id: 'h-3', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'دفتر مدیریت / مدیریت', name: 'آقای کوهی', extension: '۴۳۶۰' },
  { id: 'h-4', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'دفتر مدیریت / مدیریت', name: 'آقای رضوی', extension: '۴۳۰۲' },
  { id: 'h-5', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'دفتر مدیریت / مدیریت', name: 'آقای شرفی', extension: '۶۰۱۱' },
  { id: 'h-6', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'فناوری اطلاعات و روابط عمومی', name: 'روابط عمومی', extension: '۴۱۱۱' },
  { id: 'h-7', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'قالب‌سازی', name: 'مدیا', extension: '۴۵۵۰' },
  { id: 'h-8', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'HSE / مالی', name: 'آقای مهیور', extension: '۴۲۰۰' },
  { id: 'h-9', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'HSE / مالی', name: 'آقای عقلمند', extension: '۴۲۰۲' },
  { id: 'h-10', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'منابع انسانی', name: 'آقای رضایی', extension: '۴۲۰۸' },
  { id: 'h-11', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'منابع انسانی', name: 'خانم ذوالفقاری', extension: '۴۲۱۰' },
  { id: 'h-12', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'منابع انسانی', name: 'آقای کشتگر', extension: '۴۲۱۲' },
  { id: 'h-13', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'منابع انسانی', name: 'خانم موظف', extension: '۴۲۱۴' },
  { id: 'h-14', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'منابع انسانی', name: 'آقای جوادپور', extension: '۴۲۱۶' },
  { id: 'h-15', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'کنترل تولید', name: 'خانم حسینی', extension: '۴۲۲۴' },
  { id: 'h-16', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'فنی و مهندسی', name: 'آقای حنیف‌زاده', extension: '۴۲۳۰' },
  { id: 'h-17', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'فنی و مهندسی', name: 'خانم معصومی', extension: '۴۲۳۲' },
  { id: 'h-18', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'حسابداری', name: 'خانم صفرزاده', extension: '۴۵۲۰' },
  { id: 'h-19', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'بازرگانی', name: 'آقای اصغری', extension: '۴۲۴۰' },
  { id: 'h-20', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'بازرگانی', name: 'آقای اسکندری', extension: '۴۲۴۴' },
  { id: 'h-21', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'بازرگانی', name: 'آقای فرهمند', extension: '۴۲۴۶' },
  { id: 'h-22', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'برنامه‌ریزی', name: 'آقای صحرانورد', extension: '۴۲۵۴' },
  { id: 'h-23', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'برنامه‌ریزی', name: 'خانم پیامی‌فر', extension: '۴۲۵۶' },
  { id: 'h-24', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'نگهبانی', name: 'خانم آذر', extension: '۴۱۱۰' },
  { id: 'h-25', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'نگهبانی', name: 'خانم آفریده', extension: '۴۲۶۴' },
  { id: 'h-26', companyKey: 'holding', companyName: 'دفتر مدیریت و ستاد هلدینگ', department: 'نگهبانی', name: 'خانم میثاقی', extension: '۴۲۶۶' },

  // ==================== ستون دوم: محورسازان جهان اسپوتا ====================
  { id: 'm-1', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'مدیریت', name: 'دفتر مدیریت', extension: '۴۰۰۱ - ۴۰۰۲' },
  { id: 'm-2', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'مالی', name: 'خانم کریمی', extension: '۴۴۰۰' },
  { id: 'm-3', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'مالی', name: 'آقای رجب‌خواه', extension: '۶۱۱۱' },
  { id: 'm-4', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'مالی', name: 'آقای جبارپور', extension: '۶۶۰۲' },
  { id: 'm-5', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'مدیریت و مهندسی', name: 'آقای بافراست', extension: '۴۴۰۴' },
  { id: 'm-6', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'بخش اداری و فنی', name: 'آقای محمدنژاد', extension: '۴۴۰۶ ، ۶۲۰۰' },
  { id: 'm-7', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'بخش فنی و اداری', name: 'آقای حسینی', extension: '۴۴۱۲ ، ۶۲۰۲' },
  { id: 'm-8', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'بخش اداری', name: 'آقای رشادت', extension: '۶۲۰۴' },
  { id: 'm-9', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'بازرگانی', name: 'واحد بازرگانی', extension: '۶۳۰۰' },
  { id: 'm-10', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'بازرگانی', name: 'آقای متفکر', extension: '۶۳۰۲ ، ۶۴۰۲ ، ۶۴۰۸' },
  { id: 'm-11', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'منابع انسانی', name: 'خانم طلیعه', extension: '۴۴۲۴' },
  { id: 'm-12', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'منابع انسانی', name: 'خانم خشنود', extension: '۴۴۲۸' },
  { id: 'm-13', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'HSE', name: 'آقای صالحی', extension: '۴۴۸۲' },
  { id: 'm-14', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'ارتباط با مشتری (CRM)', name: 'خانم مولایی', extension: '۴۴۸۶' },
  { id: 'm-15', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'کنترل تولید', name: 'آقای بابایی', extension: '۴۳۳۴' },
  { id: 'm-16', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'کنترل تولید', name: 'آقای رستمی', extension: '۶۶۰۸' },
  { id: 'm-17', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'کنترل کیفیت', name: 'آقای دین‌پرست', extension: '۶۵۰۲' },
  { id: 'm-18', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'کنترل کیفیت', name: 'آقای الهامی', extension: '۶۵۰۴' },
  { id: 'm-19', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'برنامه‌ریزی', name: 'آقای نوزاد', extension: '۶۷۰۲' },
  { id: 'm-20', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'مهندسی ساخت', name: 'خانم کرب‌پور', extension: '۶۸۰۲' },
  { id: 'm-21', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'انبار', name: 'دفتر انبار', extension: '۶۲۵۰' },
  { id: 'm-22', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'انبار', name: 'آقای جباری', extension: '۶۲۵۲' },
  { id: 'm-23', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'کنترل کیفیت', name: 'آقای فرج‌پور', extension: '۶۲۵۴' },
  { id: 'm-24', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'سایر بخش‌ها', name: 'آقای محبت', extension: '۶۲۵۶' },
  { id: 'm-25', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'نگهبانی', name: 'آقای جعفری', extension: '۶۱۱۰' },
  { id: 'm-26', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'سایر بخش‌ها', name: 'آقای یاری', extension: '۶۶۵۰' },
  { id: 'm-27', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'سایر بخش‌ها', name: 'آقای سلیمان‌پور', extension: '۶۹۰۲' },
  { id: 'm-28', companyKey: 'mehvarsazan', companyName: 'محورسازان جهان اسپوتا', department: 'تولید توسعه جهان', name: 'آقای ترکمانیان', extension: '۶۶۵۴' },

  // ==================== ستون سوم: قطعه‌سازان اسپوتا ====================
  { id: 'q-1', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'انبار', name: 'آقای قلی‌زاده', extension: '۴۲۷۰' },
  { id: 'q-2', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'انبار', name: 'خانم مجیدزاده', extension: '۴۴۳۴' },
  { id: 'q-3', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'مدیریت', name: 'آقای شیخ‌بگلو', extension: '۴۲۷۴' },
  { id: 'q-4', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'مدیریت', name: 'خانم ثباتی', extension: '۶۷۵۰' },
  { id: 'q-5', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'ترابری', name: 'آقای صوفی', extension: '۴۲۷۶' },
  { id: 'q-6', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'ترابری', name: 'آقای اسلامی', extension: '۴۵۱۶' },
  { id: 'q-7', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'ترابری', name: 'آقای احمدآبادی', extension: '۶۵۵۰' },
  { id: 'q-8', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'سایر بخش‌ها', name: 'خانم شباهنگ', extension: '۴۲۷۸' },
  { id: 'q-9', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'سایر بخش‌ها', name: 'خانم زهرا رستمی', extension: 'FFFF' },
  { id: 'q-10', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'سایر بخش‌ها / خدمات', name: 'آبدارخانه فنی و مهندسی', extension: '۴۵۰۲' },
  { id: 'q-11', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'انبار / خدمات', name: 'آبدارخانه قطعه‌سازان', extension: '۴۵۰۴' },
  { id: 'q-12', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'نگهبانی', name: 'نگهبانی قطعه‌سازان', extension: '۶۱۲۰' },
  { id: 'q-13', companyKey: 'qatehsazan', companyName: 'فیدار اسپوتا', department: 'فیدار اسپوتا / خدمات', name: 'آبدارخانه اداری فیدار', extension: '۴۵۰۶' },
  { id: 'q-14', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'مدیریت / خدمات', name: 'آبدارخانه طبقه مدیریت', extension: '۴۵۰۸' },
  { id: 'q-15', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'مدیریت', name: 'مدیریت', extension: '۶۰۱۰' },
  { id: 'q-16', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'مدیریت تولید', name: 'آقای جان‌محمدی (مدیر تولید)', extension: '۴۲۹۰' },
  { id: 'q-17', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'فناوری اطلاعات', name: 'آقای ملک‌خواه', extension: '۴۲۹۴' },
  { id: 'q-18', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'مالی', name: 'آقای قهرمانی', extension: '۴۲۹۶' },
  { id: 'q-19', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'اداری و فنی', name: 'آقای اصل‌نیا', extension: '۴۲۹۸' },
  { id: 'q-20', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'اداری و فنی', name: 'آقای غنی‌زاده', extension: '۴۳۰۴' },
  { id: 'q-21', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'اداری و فنی', name: 'آقای نمازی', extension: '۴۳۱۲' },
  { id: 'q-22', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'اداری و فنی', name: 'آقای نظامی', extension: '۴۳۱۸' },
  { id: 'q-23', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'فروش و خدمات پس از فروش', name: 'خانم پورحسین', extension: '۴۳۴۰' },
  { id: 'q-24', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'فروش و خدمات پس از فروش', name: 'خانم نارنجی', extension: '۴۳۴۲' },
  { id: 'q-25', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'سیستم‌ها و روش‌ها', name: 'خانم حیدری', extension: '۴۳۲۰' },
  { id: 'q-26', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'سیستم‌ها و روش‌ها', name: 'خانم نصرتی', extension: '۴۳۲۴' },
  { id: 'q-27', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'منابع انسانی', name: 'خانم رحیمی', extension: '۴۳۳۰' },
  { id: 'q-28', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'فنی و مهندسی', name: 'آقای رحیمی', extension: '۴۳۶۴' },
  { id: 'q-29', companyKey: 'qatehsazan', companyName: 'ترمز‌سازان اسپوتا', department: 'ترمز‌سازان اسپوتا', name: 'آقای عباس‌زادگان', extension: '۴۳۶۶' },
  { id: 'q-30', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'مالی', name: 'آقای غیب‌اله‌زاده', extension: '۴۳۷۴' },
  { id: 'q-31', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'بازرگانی', name: 'آقای خدادوست', extension: '۴۳۸۰' },
  { id: 'q-32', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'کنترل کیفیت', name: 'آقای عبدیل‌زاده', extension: '۴۳۹۰' },
  { id: 'q-33', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'برنامه‌ریزی', name: 'آقای اسماعیل‌زاده', extension: '۴۴۶۴' },
  { id: 'q-34', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'برنامه‌ریزی', name: 'آقای علیزاده', extension: '۶۸۵۲' },
  { id: 'q-35', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'سایر بخش‌ها', name: 'خانم فدایی‌وش', extension: '۶۸۵۴' },
  { id: 'q-36', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'برنامه‌ریزی و کنترل کیفیت', name: 'آقای سلیمان‌پور', extension: '۴۵۳۲' },
  { id: 'q-37', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'برنامه‌ریزی و کنترل کیفیت', name: 'آقای یعقوبی', extension: '۴۴۶۲' },
  { id: 'q-38', companyKey: 'qatehsazan', companyName: 'قطعه‌سازان اسپوتا', department: 'برنامه‌ریزی و کنترل کیفیت', name: 'آقای بازارباشی', extension: '۴۴۳۲' },
];
