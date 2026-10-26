import React, { useState } from 'react';
import { 
  FileCheck2, 
  Calendar, 
  Plus, 
  Minus, 
  Filter, 
  Download, 
  Printer, 
  Sparkles,
  TrendingUp,
  TrendingDown,
  Info
} from 'lucide-react';
import { KardexItem, UserProfile } from '../types/attendance';

interface KardexViewProps {
  kardexItems: KardexItem[];
  user: UserProfile;
  onOpenNewLeave: () => void;
}

export const KardexView: React.FC<KardexViewProps> = ({
  kardexItems,
  user,
  onOpenNewLeave,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'hourly' | 'daily'>('all');
  const [yearFilter, setYearFilter] = useState<'current' | 'previous'>('current');

  const filteredItems = kardexItems.filter(item => {
    if (filterType !== 'all' && item.category !== filterType && item.category !== 'system') return false;
    return true;
  });

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-6 space-y-6">
      
      {/* Header & Balance Cards */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <FileCheck2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-black text-slate-900">کاردکس رسمی مرخصی استحقاقی</h2>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                تاریخ مبنا: ۱۴۰۱/۰۱/۰۱
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              گردش حساب مانده مرخصی، شارژ اتوماتیک ماهانه (قانون کار) و کسر مرخصی‌های ساعتی و روزانه
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          {/* Current Balance Pill */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-3 rounded-2xl shadow-md shadow-emerald-500/20 text-right">
            <div className="text-[11px] text-emerald-100 font-medium whitespace-nowrap">مانده مرخصی قابل استفاده</div>
            <div className="text-xl font-black tabular-nums">
              {user.remainingLeaveDays} <span className="text-xs font-normal">روز</span>
            </div>
          </div>

          <button
            onClick={onOpenNewLeave}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-3 rounded-2xl transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4 text-emerald-400" />
            <span>ثبت مرخصی جدید</span>
          </button>
        </div>
      </div>

      {/* Filter Options (Replaces raw radio buttons from ScreenHunter_187) */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-500 font-bold">نمایش بر اساس:</span>
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
              filterType === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:bg-white/60'
            }`}
          >
            همه تراکنش‌ها
          </button>
          <button
            onClick={() => setFilterType('hourly')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
              filterType === 'hourly' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:bg-white/60'
            }`}
          >
            مرخصی‌های ساعتی
          </button>
          <button
            onClick={() => setFilterType('daily')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
              filterType === 'daily' ? 'bg-white text-purple-600 shadow-xs' : 'text-slate-600 hover:bg-white/60'
            }`}
          >
            مرخصی‌های روزانه
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={() => setYearFilter('current')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
              yearFilter === 'current' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-white'
            }`}
          >
            سال جاری (۱۴۰۵)
          </button>
          <button
            onClick={() => setYearFilter('previous')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
              yearFilter === 'previous' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-white'
            }`}
          >
            سال‌های قبل
          </button>
        </div>
      </div>

      {/* Kardex Ledger Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-right text-xs">
          <thead>
            <tr className="bg-slate-100/80 text-slate-700 font-bold border-b border-slate-200">
              <th className="py-3 px-3 text-center">ردیف</th>
              <th className="py-3 px-3">بابت / شرح رویداد</th>
              <th className="py-3 px-3 text-center">تاریخ صدور</th>
              <th className="py-3 px-3 text-center">نوع تغییر</th>
              <th className="py-3 px-3 text-center">مدت زمان</th>
              <th className="py-3 px-3 text-center">مانده پس از رویداد</th>
              <th className="py-3 px-3 text-center">بازه تاریخ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredItems.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-3 text-center text-slate-400 font-bold tabular-nums">
                  {item.order}
                </td>
                <td className="py-3 px-3 font-medium text-slate-900">
                  <div className="flex items-center gap-2">
                    {item.changeType === 'increase' ? (
                      <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Plus className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    ) : item.changeType === 'decrease' ? (
                      <div className="w-6 h-6 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                        <Minus className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                        <Info className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <span>{item.description}</span>
                  </div>
                </td>
                <td className="py-3 px-3 text-center tabular-nums text-slate-600">
                  {item.issueDate}
                </td>
                <td className="py-3 px-3 text-center">
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                    item.changeType === 'increase' 
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                      : item.changeType === 'decrease'
                      ? 'bg-rose-50 text-rose-700 border border-rose-200/60'
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {item.changeType === 'increase' ? 'افزایش سهمیه' : item.changeType === 'decrease' ? 'کسر مرخصی' : 'تعدیل سیستمی'}
                  </span>
                </td>
                <td className="py-3 px-3 text-center font-bold tabular-nums">
                  <span className={item.changeType === 'increase' ? 'text-emerald-600' : 'text-rose-600'}>
                    {item.duration}
                  </span>
                </td>
                <td className="py-3 px-3 text-center font-black tabular-nums text-slate-800">
                  {item.balance}
                </td>
                <td className="py-3 px-3 text-center text-[11px] text-slate-500 tabular-nums">
                  {item.startDate} تا {item.endDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};
