import React from 'react';
import { 
  Play, 
  Square, 
  Clock, 
  MapPin, 
  Wifi, 
  Coffee, 
  Briefcase, 
  AlertCircle,
  Sparkles,
  CalendarCheck,
  CheckCircle2,
  ChevronLeft
} from 'lucide-react';
import { UserProfile, RequestType } from '../types/attendance';

interface PunchClockCardProps {
  user: UserProfile;
  onTogglePunch: () => void;
  onOpenQuickRequest: (type: RequestType) => void;
  elapsedSeconds: number;
}

// Convert numbers to Persian digits
const toFa = (num: number | string): string => {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num
    .toString()
    .replace(/[0-9]/g, (w) => farsiDigits[+w]);
};

export const PunchClockCard: React.FC<PunchClockCardProps> = ({
  user,
  onTogglePunch,
  onOpenQuickRequest,
  elapsedSeconds,
}) => {
  // Format seconds into HH:MM:SS in Persian digits
  const formatTimeFa = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const h = hours.toString().padStart(2, '0');
    const m = minutes.toString().padStart(2, '0');
    const s = seconds.toString().padStart(2, '0');
    return `${toFa(h)}:${toFa(m)}:${toFa(s)}`;
  };

  // Shift expected duration: until 17:00 (9 hours = 32400 seconds)
  const shiftTotalSeconds = 9 * 3600; // 32400
  const progressPercent = Math.min(100, Math.round((elapsedSeconds / shiftTotalSeconds) * 100));
  
  // Remaining seconds
  const remainingSeconds = Math.max(0, shiftTotalSeconds - elapsedSeconds);
  const remHours = Math.floor(remainingSeconds / 3600);
  const remMinutes = Math.floor((remainingSeconds % 3600) / 60);
  const remainingTimeStr = `${toFa(remHours.toString().padStart(2, '0'))}:${toFa(remMinutes.toString().padStart(2, '0'))}`;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-orange-50/90 via-amber-50/60 to-blue-50/80 text-slate-800 rounded-3xl p-4 sm:p-5 shadow-lg shadow-orange-950/5 border border-orange-200/80">
      {/* Decorative ambient pastel glows */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-300/25 rounded-full blur-3xl pointer-events-none" />

      {/* Top Meta Strip: Information & Connectivity Status */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2.5 pb-3.5 border-b border-orange-200/70">
        <div className="flex flex-wrap items-center gap-2">
          {/* Active Status Badge */}
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border whitespace-nowrap ${
            user.isClockedIn 
              ? 'bg-emerald-100/80 text-emerald-800 border-emerald-300/80 shadow-xs' 
              : 'bg-amber-100/80 text-amber-800 border-amber-300/80 shadow-xs'
          }`}>
            <span className={`w-2 h-2 rounded-full ${user.isClockedIn ? 'bg-emerald-500 animate-ping' : 'bg-amber-500'}`}></span>
            {user.isClockedIn ? 'شیفت فعال • حاضر در محل کار' : 'پایان شیفت • خروج ثبت شده'}
          </span>

          <span className="text-xs text-slate-700 bg-white/90 px-2.5 py-1 rounded-xl border border-orange-200/80 shadow-2xs whitespace-nowrap font-medium">
            شیفت اداری • دوشنبه ۴ آبان ۱۴۰۵
          </span>
        </div>

        {/* Security & Terminal Indicators */}
        <div className="flex items-center gap-3 text-xs text-slate-600">
          <span className="flex items-center gap-1 whitespace-nowrap bg-white/80 px-2.5 py-1 rounded-xl border border-orange-200/60 shadow-2xs">
            <Wifi className="w-3.5 h-3.5 text-blue-600" />
            <span className="tabular-nums">شبکه امن: 10.20.2.196</span>
          </span>
          <span className="hidden sm:flex items-center gap-1 whitespace-nowrap bg-white/80 px-2.5 py-1 rounded-xl border border-orange-200/60 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-orange-600" />
            <span>گیت مرکزی اسپوتا</span>
          </span>
        </div>
      </div>

      {/* Main 3-Column Bento Grid - Pastel Light Cards */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 mt-4 items-stretch">
        
        {/* SECTION 1 (lg:col-span-4): Live Elapsed Timer & Instant Punch Button */}
        <div className="lg:col-span-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-4.5 border border-orange-200/80 flex flex-col justify-between gap-3 shadow-sm hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
              <span className="flex items-center gap-1.5 font-bold text-slate-800 whitespace-nowrap">
                <Clock className="w-4 h-4 text-orange-600" />
                کارکرد ثبت‌شده امروز
              </span>
              <span className="text-orange-800 bg-orange-100/80 px-2 py-0.5 rounded-lg border border-orange-200 text-[11px] font-bold whitespace-nowrap">
                ورود: <span className="text-orange-900 font-black">{user.clockInTime}</span>
              </span>
            </div>

            {/* Big Live Digital Clock Display */}
            <div className="py-1">
              <div className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 tabular-nums">
                {user.isClockedIn ? formatTimeFa(elapsedSeconds) : '۰۰:۰۰:۰۰'}
              </div>
              <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1 whitespace-nowrap">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-medium">محاسبه هوشمند بدون تاخیر ورودی</span>
              </div>
            </div>
          </div>

          {/* Interactive Punch Button - Harmonized with Orange/Amber Theme */}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={onTogglePunch}
              className={`w-full group flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-black shadow-md transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] cursor-pointer whitespace-nowrap ${
                user.isClockedIn
                  ? 'bg-gradient-to-r from-orange-600 via-rose-600 to-amber-600 text-white shadow-orange-600/25 ring-2 ring-orange-400/30 hover:brightness-105'
                  : 'bg-gradient-to-r from-orange-500 via-amber-500 to-blue-600 text-white shadow-orange-500/25 ring-2 ring-orange-300/30 hover:brightness-105'
              }`}
            >
              {user.isClockedIn ? (
                <>
                  <Square className="w-4 h-4 fill-white shrink-0" />
                  <span>ثبت خروج از سازمان</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white shrink-0" />
                  <span>ثبت ورود به سازمان</span>
                </>
              )}
            </button>
            <div className="text-center text-[11px] text-slate-500 mt-1.5 whitespace-nowrap">
              ثبت آنی تردد در دستگاه گیت تردد مرکزی اسپوتا
            </div>
          </div>
        </div>

        {/* SECTION 2 (lg:col-span-4): Shift Progress Gauge & Timeline Metrics */}
        <div className="lg:col-span-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-4.5 border border-orange-200/80 flex flex-col justify-between gap-3 shadow-sm hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
              <span className="flex items-center gap-1.5 font-bold text-slate-800 whitespace-nowrap">
                <CalendarCheck className="w-4 h-4 text-blue-600" />
                پیشرفت شیفت موظف (تا ساعت ۱۷:۰۰)
              </span>
              <span className="text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded-lg border border-blue-200 font-black tabular-nums text-xs whitespace-nowrap">
                {toFa(progressPercent)}٪ تکمیل
              </span>
            </div>

            {/* Metric Dual Blocks in Soft Pastel Tones */}
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="bg-orange-50/70 p-2.5 rounded-xl border border-orange-200/60">
                <div className="text-[11px] text-slate-500 mb-0.5 whitespace-nowrap font-medium">کارکرد مفید جاری</div>
                <div className="text-base font-black text-orange-950 tabular-nums">
                  {toFa(Math.floor(elapsedSeconds / 3600).toString().padStart(2, '0'))}:{toFa((Math.floor((elapsedSeconds % 3600) / 60)).toString().padStart(2, '0'))}
                </div>
              </div>

              <div className="bg-blue-50/70 p-2.5 rounded-xl border border-blue-200/60">
                <div className="text-[11px] text-slate-500 mb-0.5 whitespace-nowrap font-medium">مانده تا پایان شیفت</div>
                <div className="text-base font-black text-blue-950 tabular-nums">
                  {user.isClockedIn ? remainingTimeStr : '۰۰:۰۰'}
                </div>
              </div>
            </div>

            {/* Progress Bar with vibrant pastel gradient */}
            <div className="mt-3 space-y-1">
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/80">
                <div 
                  className="h-full bg-gradient-to-r from-orange-400 via-amber-400 to-blue-500 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 px-0.5 font-medium">
                <span>۰۸:۰۰ (شروع)</span>
                <span>۱۲:۳۰ (ناهار و نماز)</span>
                <span>۱۷:۰۰ (پایان موظف)</span>
              </div>
            </div>
          </div>

          {/* Shift status bottom note */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
            <span className="text-slate-500 whitespace-nowrap">ساعت خروج مجاز:</span>
            <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/60 whitespace-nowrap">
              از ساعت ۱۷:۰۰ به بعد
            </span>
          </div>
        </div>

        {/* SECTION 3 (lg:col-span-4): Quick Request Launcher Hub */}
        <div className="lg:col-span-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-4.5 border border-orange-200/80 flex flex-col justify-between gap-2.5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
            <span className="flex items-center gap-1.5 font-bold text-slate-800 whitespace-nowrap">
              <Sparkles className="w-4 h-4 text-orange-500" />
              درخواست‌های پرکاربرد پرسنلی
            </span>
            <span className="text-[10px] text-orange-700 bg-orange-100/70 px-2 py-0.5 rounded-full font-bold whitespace-nowrap">
              ثبت فوری
            </span>
          </div>

          {/* 4 Interactive Request Action Tiles (2x2 Grid) in Pastel Colors */}
          <div className="grid grid-cols-2 gap-2">
            
            <button
              onClick={() => onOpenQuickRequest('hourly_leave')}
              className="group flex flex-col items-start p-2.5 rounded-xl bg-orange-50/50 hover:bg-orange-100/70 border border-orange-200/70 hover:border-orange-400 transition-all cursor-pointer text-right text-slate-800 shadow-2xs"
            >
              <div className="w-7 h-7 rounded-lg bg-orange-500/15 text-orange-600 flex items-center justify-center mb-1.5 group-hover:bg-orange-500/25 transition-colors">
                <Coffee className="w-3.5 h-3.5" />
              </div>
              <div className="text-xs font-bold whitespace-nowrap text-slate-900 group-hover:text-orange-700 transition-colors">مرخصی ساعتی</div>
              <div className="text-[10px] text-slate-500 whitespace-nowrap font-medium">مانده: ۵ روز و ۹ دقیقه</div>
            </button>

            <button
              onClick={() => onOpenQuickRequest('overtime')}
              className="group flex flex-col items-start p-2.5 rounded-xl bg-amber-50/50 hover:bg-amber-100/70 border border-amber-200/70 hover:border-amber-400 transition-all cursor-pointer text-right text-slate-800 shadow-2xs"
            >
              <div className="w-7 h-7 rounded-lg bg-amber-500/15 text-amber-600 flex items-center justify-center mb-1.5 group-hover:bg-amber-500/25 transition-colors">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <div className="text-xs font-bold whitespace-nowrap text-slate-900 group-hover:text-amber-700 transition-colors">اضافه کار</div>
              <div className="text-[10px] text-slate-500 whitespace-nowrap font-medium">مجوز قبل / بعد شیفت</div>
            </button>

            <button
              onClick={() => onOpenQuickRequest('hourly_mission')}
              className="group flex flex-col items-start p-2.5 rounded-xl bg-blue-50/50 hover:bg-blue-100/70 border border-blue-200/70 hover:border-blue-400 transition-all cursor-pointer text-right text-slate-800 shadow-2xs"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-600 flex items-center justify-center mb-1.5 group-hover:bg-blue-500/25 transition-colors">
                <Briefcase className="w-3.5 h-3.5" />
              </div>
              <div className="text-xs font-bold whitespace-nowrap text-slate-900 group-hover:text-blue-700 transition-colors">ماموریت اداری</div>
              <div className="text-[10px] text-slate-500 whitespace-nowrap font-medium">تردد شهری و برون‌شهری</div>
            </button>

            <button
              onClick={() => onOpenQuickRequest('service_delay')}
              className="group flex flex-col items-start p-2.5 rounded-xl bg-rose-50/50 hover:bg-rose-100/70 border border-rose-200/70 hover:border-rose-400 transition-all cursor-pointer text-right text-slate-800 shadow-2xs"
            >
              <div className="w-7 h-7 rounded-lg bg-rose-500/15 text-rose-600 flex items-center justify-center mb-1.5 group-hover:bg-rose-500/25 transition-colors">
                <AlertCircle className="w-3.5 h-3.5" />
              </div>
              <div className="text-xs font-bold whitespace-nowrap text-slate-900 group-hover:text-rose-700 transition-colors">تاخیر یا فراموشی</div>
              <div className="text-[10px] text-slate-500 whitespace-nowrap font-medium">اعلام تاخیر سرویس شرکت</div>
            </button>

          </div>

          {/* Quick Info Footer */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
            <span className="text-slate-500">ارسال مستقیم به کارتابل مدیر مستقیم</span>
            <button
              onClick={() => onOpenQuickRequest('hourly_leave')}
              className="flex items-center gap-1 text-orange-600 hover:text-orange-700 font-bold cursor-pointer transition-colors"
            >
              <span>ثبت درخواست جدید</span>
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
