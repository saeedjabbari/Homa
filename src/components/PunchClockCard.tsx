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

  // Shift expected duration: 8 hours 45 minutes = 31500 seconds
  const shiftTotalSeconds = 8.75 * 3600; // 31500
  const progressPercent = Math.min(100, Math.round((elapsedSeconds / shiftTotalSeconds) * 100));
  
  // Remaining seconds
  const remainingSeconds = Math.max(0, shiftTotalSeconds - elapsedSeconds);
  const remHours = Math.floor(remainingSeconds / 3600);
  const remMinutes = Math.floor((remainingSeconds % 3600) / 60);
  const remainingTimeStr = `${toFa(remHours.toString().padStart(2, '0'))}:${toFa(remMinutes.toString().padStart(2, '0'))}`;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-4 sm:p-5 shadow-xl shadow-slate-950/20 border border-slate-700/60">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Meta Strip: Information & Connectivity Status */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-slate-800/80">
        <div className="flex flex-wrap items-center gap-2">
          {/* Active Status Badge */}
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${
            user.isClockedIn 
              ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' 
              : 'bg-amber-500/15 text-amber-300 border-amber-500/30'
          }`}>
            <span className={`w-2 h-2 rounded-full ${user.isClockedIn ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`}></span>
            {user.isClockedIn ? 'شیفت فعال • حاضر در محل کار' : 'پایان شیفت • خروج ثبت شده'}
          </span>

          <span className="text-xs text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/70 whitespace-nowrap">
            شیفت عادی ۱۰۱ • دوشنبه ۴ آبان ۱۴۰۵
          </span>
        </div>

        {/* Security & Terminal Indicators */}
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1 whitespace-nowrap">
            <Wifi className="w-3.5 h-3.5 text-blue-400" />
            <span className="tabular-nums">شبکه امن: 10.20.2.196</span>
          </span>
          <span className="hidden sm:flex items-center gap-1 whitespace-nowrap">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            <span>گیت مرکزی اسپوتا</span>
          </span>
        </div>
      </div>

      {/* Main 3-Column Bento Grid - Dense, Balanced, Zero Wasted Space */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 mt-4 items-stretch">
        
        {/* SECTION 1 (lg:col-span-4): Live Elapsed Timer & Instant Punch Button */}
        <div className="lg:col-span-4 bg-slate-900/85 backdrop-blur-md rounded-2xl p-4 sm:p-4.5 border border-slate-800/90 flex flex-col justify-between gap-3 shadow-inner">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="flex items-center gap-1.5 font-medium whitespace-nowrap">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                کارکرد ثبت‌شده امروز
              </span>
              <span className="text-slate-300 bg-slate-800/90 px-2 py-0.5 rounded-md border border-slate-700 text-[11px] whitespace-nowrap">
                ورود: <span className="text-emerald-300 font-semibold">{user.clockInTime}</span>
              </span>
            </div>

            {/* Big Live Digital Clock Display */}
            <div className="py-1">
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white tabular-nums drop-shadow-sm">
                {user.isClockedIn ? formatTimeFa(elapsedSeconds) : '۰۰:۰۰:۰۰'}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1 whitespace-nowrap">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>محاسبه استاندارد بدون تاخیر ورودی</span>
              </div>
            </div>
          </div>

          {/* Interactive Punch Button */}
          <div className="pt-2 border-t border-slate-800/80">
            <button
              onClick={onTogglePunch}
              className={`w-full group flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-lg transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] cursor-pointer whitespace-nowrap ${
                user.isClockedIn
                  ? 'bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 text-white shadow-rose-900/30 ring-2 ring-rose-500/20 hover:brightness-110'
                  : 'bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 text-slate-950 shadow-emerald-900/30 ring-2 ring-emerald-500/20 hover:brightness-110'
              }`}
            >
              {user.isClockedIn ? (
                <>
                  <Square className="w-4 h-4 fill-white shrink-0" />
                  <span>ثبت خروج از سازمان</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-slate-950 shrink-0" />
                  <span>ثبت ورود به سازمان</span>
                </>
              )}
            </button>
            <div className="text-center text-[10px] text-slate-400 mt-1.5 whitespace-nowrap">
              ثبت آنی تردد در دستگاه گیت تردد مرکزی
            </div>
          </div>
        </div>

        {/* SECTION 2 (lg:col-span-4): Shift Progress Gauge & Timeline Metrics */}
        <div className="lg:col-span-4 bg-slate-900/85 backdrop-blur-md rounded-2xl p-4 sm:p-4.5 border border-slate-800/90 flex flex-col justify-between gap-3 shadow-inner">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="flex items-center gap-1.5 font-medium whitespace-nowrap">
                <CalendarCheck className="w-3.5 h-3.5 text-emerald-400" />
                پیشرفت شیفت موظف (۸:۴۵)
              </span>
              <span className="text-emerald-400 font-bold tabular-nums text-xs whitespace-nowrap">
                {toFa(progressPercent)}٪ تکمیل
              </span>
            </div>

            {/* Metric Dual Blocks */}
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="bg-slate-800/70 p-2.5 rounded-xl border border-slate-700/60">
                <div className="text-[11px] text-slate-400 mb-0.5 whitespace-nowrap">کارکرد مفید جاری</div>
                <div className="text-base font-bold text-white tabular-nums">
                  {toFa(Math.floor(elapsedSeconds / 3600).toString().padStart(2, '0'))}:{toFa((Math.floor((elapsedSeconds % 3600) / 60)).toString().padStart(2, '0'))}
                </div>
              </div>

              <div className="bg-slate-800/70 p-2.5 rounded-xl border border-slate-700/60">
                <div className="text-[11px] text-slate-400 mb-0.5 whitespace-nowrap">مانده تا پایان شیفت</div>
                <div className="text-base font-bold text-indigo-300 tabular-nums">
                  {user.isClockedIn ? remainingTimeStr : '۰۰:۰۰'}
                </div>
              </div>
            </div>

            {/* Progress Bar with vibrant gradient */}
            <div className="mt-3 space-y-1">
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 via-indigo-400 to-emerald-400 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 px-0.5">
                <span>۰۷:۳۰ (شروع)</span>
                <span>۱۲:۰۰ (ناهار)</span>
                <span>۱۶:۱۵ (پایان موظف)</span>
              </div>
            </div>
          </div>

          {/* Shift status bottom note */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-300">
            <span className="text-slate-400 whitespace-nowrap">خروج مجاز قانونی:</span>
            <span className="font-semibold text-emerald-300 whitespace-nowrap">از ساعت ۱۶:۱۵ به بعد</span>
          </div>
        </div>

        {/* SECTION 3 (lg:col-span-4): Quick Request Launcher Hub */}
        <div className="lg:col-span-4 bg-slate-900/85 backdrop-blur-md rounded-2xl p-4 sm:p-4.5 border border-slate-800/90 flex flex-col justify-between gap-2.5 shadow-inner">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="flex items-center gap-1.5 font-medium whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              درخواست‌های پرکاربرد پرسنلی
            </span>
            <span className="text-[10px] text-slate-400 whitespace-nowrap">ثبت فوری</span>
          </div>

          {/* 4 Interactive Request Action Tiles (2x2 Grid) */}
          <div className="grid grid-cols-2 gap-2">
            
            <button
              onClick={() => onOpenQuickRequest('hourly_leave')}
              className="group flex flex-col items-start p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-750 border border-slate-700/80 hover:border-blue-500/60 transition-all cursor-pointer text-right text-slate-200"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center mb-1.5 group-hover:bg-blue-500/25 transition-colors">
                <Coffee className="w-3.5 h-3.5" />
              </div>
              <div className="text-xs font-bold whitespace-nowrap group-hover:text-blue-300 transition-colors">مرخصی ساعتی</div>
              <div className="text-[10px] text-slate-400 whitespace-nowrap">مانده: ۵ روز و ۹ دقیقه</div>
            </button>

            <button
              onClick={() => onOpenQuickRequest('overtime')}
              className="group flex flex-col items-start p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-750 border border-slate-700/80 hover:border-emerald-500/60 transition-all cursor-pointer text-right text-slate-200"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-1.5 group-hover:bg-emerald-500/25 transition-colors">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <div className="text-xs font-bold whitespace-nowrap group-hover:text-emerald-300 transition-colors">اضافه کار</div>
              <div className="text-[10px] text-slate-400 whitespace-nowrap">مجوز قبل / بعد شیفت</div>
            </button>

            <button
              onClick={() => onOpenQuickRequest('hourly_mission')}
              className="group flex flex-col items-start p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-750 border border-slate-700/80 hover:border-indigo-500/60 transition-all cursor-pointer text-right text-slate-200"
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center mb-1.5 group-hover:bg-indigo-500/25 transition-colors">
                <Briefcase className="w-3.5 h-3.5" />
              </div>
              <div className="text-xs font-bold whitespace-nowrap group-hover:text-indigo-300 transition-colors">ماموریت اداری</div>
              <div className="text-[10px] text-slate-400 whitespace-nowrap">تردد شهری و برون‌شهری</div>
            </button>

            <button
              onClick={() => onOpenQuickRequest('service_delay')}
              className="group flex flex-col items-start p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-750 border border-slate-700/80 hover:border-amber-500/60 transition-all cursor-pointer text-right text-slate-200"
            >
              <div className="w-7 h-7 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center mb-1.5 group-hover:bg-amber-500/25 transition-colors">
                <AlertCircle className="w-3.5 h-3.5" />
              </div>
              <div className="text-xs font-bold whitespace-nowrap group-hover:text-amber-300 transition-colors">تاخیر یا فراموشی</div>
              <div className="text-[10px] text-slate-400 whitespace-nowrap">اعلام تاخیر سرویس شرکت</div>
            </button>

          </div>

          {/* Quick Info Footer */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
            <span>جایگزین منوی راست‌کلیک نسخه سنتی کارا</span>
            <span className="flex items-center gap-0.5 text-blue-400 hover:text-blue-300 cursor-pointer">
              <span>ارسال فرم</span>
              <ChevronLeft className="w-3 h-3" />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
