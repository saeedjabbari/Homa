import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  CalendarDays, 
  FileText, 
  TrendingUp, 
  ArrowUpRight, 
  Users, 
  ShieldCheck,
  ChevronLeft
} from 'lucide-react';
import { UserProfile } from '../types/attendance';

interface StatsBentoProps {
  user: UserProfile;
  onOpenReportModal: () => void;
  onOpenKardex: () => void;
  onOpenRequests: () => void;
}

export const StatsBento: React.FC<StatsBentoProps> = ({
  user,
  onOpenReportModal,
  onOpenKardex,
  onOpenRequests,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      
      {/* Tile 1: کارکرد خالص ماه جاری (Net Worked Hours) */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 whitespace-nowrap">کارکرد خالص ماه (آبان)</span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900 tracking-tight tabular-nums">۵۶:۳۵</span>
              <span className="text-xs text-slate-400 font-medium">ساعت</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold whitespace-nowrap">
              <TrendingUp className="w-3.5 h-3.5 shrink-0" />
              <span>شیفت موظف: ۵۷:۲۵ (۹۸.۴٪)</span>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-slate-400 whitespace-nowrap">کل حضور: <b className="text-slate-700">۶۱:۰۳</b></span>
          <button 
            onClick={onOpenReportModal}
            className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-0.5 cursor-pointer whitespace-nowrap"
          >
            <span>ریز محاسبات</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Tile 2: مانده مرخصی استحقاقی (Accrued Leave Balance) */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 whitespace-nowrap">مانده مرخصی استحقاقی</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CalendarDays className="w-4 h-4" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900 tracking-tight tabular-nums">{user.remainingLeaveDays}</span>
              <span className="text-xs text-slate-400 font-medium">روز و دقیقه</span>
            </div>
            <p className="text-xs text-slate-500 whitespace-nowrap">
              شارژ آبان: <span className="font-bold text-emerald-700">۲.۵ روز</span> افزوده شد
            </p>
          </div>

          {/* Small Progress Meter */}
          <div className="mt-3">
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>

        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-slate-400 whitespace-nowrap">مبنا: ۱۴۰۱/۰۱</span>
          <button 
            onClick={onOpenKardex}
            className="text-emerald-600 font-bold hover:text-emerald-700 flex items-center gap-0.5 cursor-pointer whitespace-nowrap"
          >
            <span>کاردکس کامل</span>
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Tile 3: اضافه کاری تایید شده و نامجاز (Overtime Breakdown) */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 whitespace-nowrap">وضعیت اضافه کاری</span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-amber-600 tracking-tight tabular-nums">۳۳:۳۸</span>
              <span className="text-xs text-slate-400 font-medium">ساعت کل</span>
            </div>
            <p className="text-xs text-slate-500 whitespace-nowrap">
              پرداختی قطعی: <span className="font-bold text-slate-700">۰۰:۰۰</span> (نیاز به مجوز)
            </p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded-lg text-[10px] font-bold whitespace-nowrap">
            در انتظار تایید
          </span>
          <button 
            onClick={onOpenRequests}
            className="text-amber-600 font-bold hover:text-amber-700 flex items-center gap-0.5 cursor-pointer whitespace-nowrap"
          >
            <span>ارسال مجوز</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Tile 4: کسورات و تاخیرها (Deductions & Delay) */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 whitespace-nowrap">کسورات و تاخیر ماه</span>
            <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-rose-600 tracking-tight tabular-nums">۰۲:۰۵</span>
              <span className="text-xs text-slate-400 font-medium">ساعت کسر کار</span>
            </div>
            <p className="text-xs text-slate-500 whitespace-nowrap">
              غیبت روزانه: <span className="font-bold text-rose-700">۱ روز</span> (تک‌کارت)
            </p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-slate-400 whitespace-nowrap">تاخیر ورود: ۰۰:۳۷</span>
          <button 
            onClick={onOpenReportModal}
            className="text-rose-600 font-bold hover:text-rose-700 flex items-center gap-0.5 cursor-pointer whitespace-nowrap"
          >
            <span>جزئیات کسورات</span>
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
};
