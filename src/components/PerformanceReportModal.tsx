import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  User, 
  Building, 
  Calendar,
  Share2,
  TrendingUp,
  FileCheck
} from 'lucide-react';
import { DailyAttendanceRecord, UserProfile } from '../types/attendance';

interface PerformanceReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  records: DailyAttendanceRecord[];
}

export const PerformanceReportModal: React.FC<PerformanceReportModalProps> = ({
  isOpen,
  onClose,
  user,
  records,
}) => {
  // Escape key handler
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200 cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 cursor-default"
        dir="rtl"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-black">گزارش جامع کارکرد ماهانه پرسنل</h3>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-md">
                  آبان ماه ۱۴۰۵
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                {user.personnelId} - {user.name} • {user.department}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="چاپ کارنامه ماهانه"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">چاپ</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-rose-500/20 hover:text-rose-300 text-slate-400 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Executive Summary 3-Pillar Cards (Matching ScreenHunter_190 exactly but with modern luxury design) */}
        <div className="p-6 bg-slate-50/70 border-b border-slate-200/80 grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Pillar 1: کارکرد (Worked Hours) */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span>خلاصه کارکرد خالص</span>
              <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">تایید شده</span>
            </div>
            <div className="text-2xl font-black text-slate-900 tabular-nums">
              ۵۶:۳۵ <span className="text-xs font-normal text-slate-500">ساعت</span>
            </div>
            <div className="text-xs space-y-1 text-slate-600 pt-1 border-t border-slate-100">
              <div className="flex justify-between">
                <span>حضور در شیفت موظف:</span>
                <span className="font-bold text-slate-800">۵۷:۲۵</span>
              </div>
              <div className="flex justify-between">
                <span>کل حضور فیزیکی در سازمان:</span>
                <span className="font-bold text-slate-800">۶۱:۰۳</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: اضافه کار (Overtime) */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span>وضعیت اضافه کاری</span>
              <span className="text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">نیاز به مجوز</span>
            </div>
            <div className="text-2xl font-black text-amber-600 tabular-nums">
              ۳۳:۳۸ <span className="text-xs font-normal text-slate-500">ساعت کل</span>
            </div>
            <div className="text-xs space-y-1 text-slate-600 pt-1 border-t border-slate-100">
              <div className="flex justify-between">
                <span>اضافه کار پرداختی قطعی:</span>
                <span className="font-bold text-emerald-600">۰۰:۰۰</span>
              </div>
              <div className="flex justify-between">
                <span>اضافه کار نامجاز / غیرمجوز:</span>
                <span className="font-bold text-amber-700">۳۳:۳۸</span>
              </div>
            </div>
          </div>

          {/* Pillar 3: کسورات (Deductions & Absence) */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span>کسورات و تاخیر</span>
              <span className="text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">قابل پیگیری</span>
            </div>
            <div className="text-2xl font-black text-rose-600 tabular-nums">
              ۰۲:۰۵ <span className="text-xs font-normal text-slate-500">ساعت کسر کار</span>
            </div>
            <div className="text-xs space-y-1 text-slate-600 pt-1 border-t border-slate-100">
              <div className="flex justify-between">
                <span>غیبت روزانه:</span>
                <span className="font-bold text-rose-700">۱ روز (تک کارت)</span>
              </div>
              <div className="flex justify-between">
                <span>مجموع تاخیرات ورود:</span>
                <span className="font-bold text-slate-800">۰۰:۳۷</span>
              </div>
            </div>
          </div>

        </div>

        {/* Detailed Table (Scrollable) */}
        <div className="overflow-y-auto flex-1 p-6">
          <div className="text-xs font-bold text-slate-800 mb-3 flex items-center justify-between">
            <span>ریز محاسبات روز به روز ماه آبان:</span>
            <span className="text-slate-400 font-normal text-[11px]">
              ثبت‌شده در دیتابیس حضور و غیاب کارا
            </span>
          </div>

          <table className="w-full text-right text-xs">
            <thead>
              <tr className="bg-slate-100/90 text-slate-700 font-bold border-b border-slate-200">
                <th className="py-2.5 px-3">تاریخ و روز</th>
                <th className="py-2.5 px-2 text-center">ورود و خروج ۱</th>
                <th className="py-2.5 px-2 text-center">ورود و خروج ۲</th>
                <th className="py-2.5 px-2 text-center">کارکرد خالص</th>
                <th className="py-2.5 px-2 text-center">تاخیر</th>
                <th className="py-2.5 px-2 text-center">کسر کار</th>
                <th className="py-2.5 px-2 text-center">اضافه کار</th>
                <th className="py-2.5 px-3">توضیحات و گردش کار</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {records.map((r) => (
                <tr key={r.id} className="hover:bg-slate-50">
                  <td className="py-2.5 px-3 whitespace-nowrap font-medium text-slate-900">
                    {r.date} <span className="text-slate-400 text-[11px]">({r.dayOfWeek})</span>
                  </td>
                  <td className="py-2.5 px-2 text-center tabular-nums">
                    {r.punches.in1 ? `${r.punches.in1} - ${r.punches.out1 || 'درحال کار'}` : '-'}
                  </td>
                  <td className="py-2.5 px-2 text-center tabular-nums text-slate-500">
                    {r.punches.in2 ? `${r.punches.in2} - ${r.punches.out2}` : '-'}
                  </td>
                  <td className="py-2.5 px-2 text-center tabular-nums font-bold text-slate-800">
                    {r.netWorkHours}
                  </td>
                  <td className="py-2.5 px-2 text-center tabular-nums text-rose-600">
                    {r.delayHours !== '۰۰:۰۰' ? r.delayHours : '-'}
                  </td>
                  <td className="py-2.5 px-2 text-center tabular-nums text-rose-600">
                    {r.deductionHours !== '۰۰:۰۰' ? r.deductionHours : '-'}
                  </td>
                  <td className="py-2.5 px-2 text-center tabular-nums text-emerald-600 font-bold">
                    {r.overtimeTotal !== '۰۰:۰۰' ? `+${r.overtimeTotal}` : '-'}
                  </td>
                  <td className="py-2.5 px-3 text-slate-500 text-[11px]">
                    {r.note || (r.isHoliday ? 'تعطیل رسمی' : 'تردد عادی')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
          <div className="text-slate-500">
            تایید نهایی: <span className="font-bold text-slate-800">مهندس بهمن حرفتی (مدیر اداری و منابع انسانی)</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold cursor-pointer transition-colors"
          >
            بستن گزارش
          </button>
        </div>

      </div>
    </div>
  );
};
