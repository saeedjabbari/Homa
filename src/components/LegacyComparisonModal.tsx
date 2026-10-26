import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  ArrowRight, 
  ArrowLeft,
  LayoutGrid,
  FileSpreadsheet,
  Clock,
  ShieldAlert
} from 'lucide-react';

interface LegacyComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegacyComparisonModal: React.FC<LegacyComparisonModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'concepts' | 'critique' | 'comparison'>('concepts');

  if (!isOpen) return null;

  const modernConcepts = [
    {
      title: 'کانسپت ۱: StaffCentral HR Web App',
      image: '/assets/aistudio/HR_Web_App_d970cd3a.jpg',
      features: [
        'طراحی Bento Grid تمیز با کنتراست عالی و گوشه‌های گرد نرم',
        'ماژول Time Tracking زنده با تایمر شمارنده و ثبت ورود/خروج تک‌کلیک',
        'کارت پرسنلی کامل با نمایش نام، سمت، واحد، سابقه و وضعیت حضور',
        'تفکیک گرافیکی درصد فعالیت هفتگی و فرمت کاری (حضوری/شناور)',
      ],
    },
    {
      title: 'کانسپت ۲: Finance & HR Dashboard (Fenco)',
      image: '/assets/aistudio/Finance_Dashboard_27b393c2.jpg',
      features: [
        'هدر تعاملی با خوش‌آمدگویی اختصاصی به کاربر و نمایش وضعیت همکاران',
        'کارت‌های تیره و روشن شیشه‌ای (Glassmorphism) برای تمایز اولویت‌ها',
        'میکروچارت‌های پیشرفت و درصد تحقق به جای اعداد خام خسته‌کننده',
        'تایپوگرافی مدرن با اعداد جدول‌بندی شده (Tabular Nums)',
      ],
    },
    {
      title: 'کانسپت ۳: Workspace Schedule Bar',
      image: '/assets/aistudio/download__3__b3c5b384.jpg',
      features: [
        'نوار کپسولی بالای صفحه (Schedule Bar) نمایشگر پیوسته تایم شیفت',
        'دسته‌بندی تب‌ها به صورت کپسول‌های نرم بدون پیچیدگی منوهای قدیمی',
        'دکمه‌های اقدام شناور (Floating Quick Actions)',
      ],
    },
    {
      title: 'کانسپت ۴: Soft Bento Learning & Activity',
      image: '/assets/aistudio/download__2__b2d1b3df.jpg',
      features: [
        'پالت رنگی گرم و ملایم با سایه‌های محو و آرامش‌بخش',
        'نمودارهای حلقوی دونات تمیز با تفکیک رنگی بدون شلوغی',
        'سلسله مراتب بصری خوانا در نمایش آیتم‌ها و تسک‌های روزانه',
      ],
    },
  ];

  const legacyCritiques = [
    {
      title: 'جدول اکسلی دهه ۷۰ با رنگ زرد نامناسب (ScreenHunter_199)',
      bad: 'جدول اکسلی بسیار شلوغ با فونت‌های ریز، رنگ زرد و خاکستری خسته‌کننده، ستون‌های متعدد خالی و تجربه کاربری غیرشهودی.',
      good: 'تبدیل به کارت تردد هوشمند Bento با استاتوس‌های رنگی نرم، برجسته‌سازی روز جاری، تفکیک شیفت‌ها و جستجوی آنی.',
      image: '/assets/aistudio/ScreenHunter_199_6a395213.png',
    },
    {
      title: 'منوی مخفی راست‌کلیک برای ثبت درخواست‌ها (ScreenHunter_198)',
      bad: 'کاربران مجبور بودند برای ثبت مرخصی یا اضافه کاری، روی خانه‌های ساعت راست‌کلیک کنند که در موبایل و تبلت غیرقابل استفاده بود و اکثر کاربران از وجود آن بی‌اطلاع بودند!',
      good: 'جایگزینی کامل با دکمه‌های سریع "ثبت درخواست" در هدر و کارت تردد، مودال چندمرحله‌ای با اعتبارسنجی خودکار و گردش کار شفاف.',
      image: '/assets/aistudio/ScreenHunter_198_5e767770.png',
    },
    {
      title: 'پای‌چارت نامفهوم ۳۰ تکه‌ای در ثبت نشان‌ها (ScreenHunter_195)',
      bad: 'یک نمودار دایره‌ای با ده‌ها برش بسیار ریز و ناخوانا با متن‌های فشرده که هیچ دید تحلیلی به مدیر یا پرسنل نمی‌داد.',
      good: 'طراحی متریک‌های کلیدی مدرن بر اساس استانداردهای امنیت سایبری (درصد امنیت، ورودهای موفق، مجوزها، مسدودسازی IPها).',
      image: '/assets/aistudio/ScreenHunter_195_0d702254.png',
    },
    {
      title: 'پاپ‌آپ شلوغ کارکرد ماهانه پرسنل (ScreenHunter_190)',
      bad: 'پاپ‌آپی با متون تیره و ستون‌های تو در تو که کارمند ساعت‌ها باید دنبال ساعت کارکرد یا کسرکارش می‌گشت.',
      good: 'طراحی کارنامه ماهانه شیشه‌ای مدرن با ۳ ستون اختصاصی (کارکرد، اضافه کار، کسورات) به همراه خلاصه قابل چاپ.',
      image: '/assets/aistudio/ScreenHunter_190_7a01dfd1.png',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        dir="rtl"
      >
        
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black">تحلیل و تلفیق الگوهای مدرن در سامانه کارا</h3>
              <p className="text-xs text-slate-300">
                بررسی ۴ کانسپت ارسالی، نقد سامانه قدیمی کاراوب و معماری بازطراحی شده
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Nav */}
        <div className="flex items-center gap-2 p-3 bg-slate-100/80 border-b border-slate-200 text-xs">
          <button
            onClick={() => setActiveTab('concepts')}
            className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === 'concepts'
                ? 'bg-white text-blue-600 shadow-sm border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ۴ کانسپت ارسالی و نحوه تلفیق
          </button>
          <button
            onClick={() => setActiveTab('critique')}
            className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === 'critique'
                ? 'bg-white text-rose-600 shadow-sm border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            نقد اسکرین‌شات‌های سامانه قدیمی کارا
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          
          {activeTab === 'concepts' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200/80 rounded-2xl p-4 text-xs text-blue-900 leading-relaxed">
                <span className="font-bold">استراتژی بازطراحی: </span>
                برای حل مشکل UI و UX اسفناک سامانه کاراوب، ۴ الگوی طراحی مدرن در قالب یک معماری یکپارچه Bento ترکیب شدند:
                نوار زمان‌بندی زنده هدر (الهام از Workspace)، پنل تردد و ردیاب زمان با تایمر زنده (الهام از StaffCentral)،
                کارت‌های متریک با اعداد درشت و گرادیان تاریک/روشن (الهام از Fenco) و رنگ‌بندی نرم و بدون خستگی چشم (الهام از Soft Bento).
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {modernConcepts.map((c, i) => (
                  <div key={i} className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-black text-slate-900">{c.title}</h4>
                      <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded-md font-bold">
                        کانسپت {i + 1}
                      </span>
                    </div>

                    <div className="rounded-xl overflow-hidden border border-slate-200/80 aspect-video bg-slate-900">
                      <img 
                        src={c.image} 
                        alt={c.title} 
                        className="w-full h-full object-cover" 
                      />
                    </div>

                    <div className="space-y-1.5 pt-1">
                      {c.features.map((f, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'critique' && (
            <div className="space-y-6">
              <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-4 text-xs text-amber-900 leading-relaxed">
                <span className="font-bold">چرا سایت قبلی اسفناک بود و چگونه حل شد؟ </span>
                سامانه قبلی کاراوب از معماری وب سال‌های ۱۳۸۰ استفاده می‌کرد: صفحات خالی با دنده‌چرخ‌های بزرگ بی‌مصرف در پس‌زمینه،
                جداول اکسلی بدون هیچ نوع ریسپانسیو بودن، مخفی بودن منوی ثبت مرخصی در راست‌کلیک روی خانه ساعت‌ها، و فرم‌های تک‌رنگ.
                در نسخه جدید، تمام این مشکلات حل شده است.
              </div>

              <div className="space-y-4">
                {legacyCritiques.map((item, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-2xl p-4 bg-white shadow-xs space-y-3">
                    <h4 className="text-xs font-black text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                      {item.title}
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      <div className="rounded-xl overflow-hidden border border-slate-200 aspect-video bg-slate-100">
                        <img src={item.image} alt={item.title} className="w-full h-full object-contain bg-white" />
                      </div>

                      <div className="space-y-3 text-xs">
                        <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl text-rose-900">
                          <div className="font-bold flex items-center gap-1.5 mb-1 text-rose-700">
                            <AlertCircle className="w-4 h-4" />
                            مشکل در سیستم قبلی:
                          </div>
                          <p className="leading-relaxed text-[11px]">{item.bad}</p>
                        </div>

                        <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-900">
                          <div className="font-bold flex items-center gap-1.5 mb-1 text-emerald-700">
                            <CheckCircle2 className="w-4 h-4" />
                            راهکار نوین پیاده‌سازی شده در این نسخه:
                          </div>
                          <p className="leading-relaxed text-[11px]">{item.good}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
          <div className="text-slate-500 font-medium">
            توسعه‌یافته بر اساس استانداردهای مدرن UX/UI و تلفیق الگوهای StaffCentral، Fenco و Workspace
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold cursor-pointer transition-colors"
          >
            متوجه شدم، بازگشت به سامانه
          </button>
        </div>

      </div>
    </div>
  );
};
