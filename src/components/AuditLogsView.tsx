import React, { useState } from 'react';
import { 
  ShieldCheck, 
  History, 
  Search, 
  Eye, 
  LogIn, 
  LogOut, 
  Edit3, 
  Trash2, 
  PlusCircle, 
  AlertTriangle,
  Server,
  Activity
} from 'lucide-react';
import { AuditLogItem } from '../types/attendance';

interface AuditLogsViewProps {
  logs: AuditLogItem[];
}

export const AuditLogsView: React.FC<AuditLogsViewProps> = ({ logs }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedActivity, setSelectedActivity] = useState<string>('all');

  const filteredLogs = logs.filter(log => {
    if (selectedActivity !== 'all' && log.activityType !== selectedActivity) return false;
    if (searchQuery) {
      return (
        log.fullName.includes(searchQuery) ||
        log.personnelId.includes(searchQuery) ||
        log.description.includes(searchQuery) ||
        log.ip.includes(searchQuery)
      );
    }
    return true;
  });

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-6 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-base font-black text-slate-900">مرکز ثبت نشان‌ها و امنیت لاگ‌های سیستم</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              پایش بلادرنگ رویدادها، ورود و خروج‌ها، تغییرات احکام تردد و دسترسی‌های آی‌پی سازمانی
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs bg-slate-100 px-3 py-1.5 rounded-xl text-slate-600">
          <Server className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>سرور مرکزی کارا: فعال و آنلاین</span>
        </div>
      </div>

      {/* Redesigned Modern Activity Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
          <div className="text-[11px] text-blue-700 font-bold mb-1 flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5" />
            <span>رویت و استعلام داده</span>
          </div>
          <div className="text-xl font-black text-blue-900">۸۹.۴٪</div>
          <div className="text-[10px] text-blue-600 mt-1">۶۷۵,۵۸۴ درخواست مجاز</div>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
          <div className="text-[11px] text-emerald-700 font-bold mb-1 flex items-center gap-1.5">
            <LogIn className="w-3.5 h-3.5" />
            <span>ورود معتبر به پرتال</span>
          </div>
          <div className="text-xl font-black text-emerald-900">۱۲,۴۷۳</div>
          <div className="text-[10px] text-emerald-600 mt-1">۱۰۰٪ تایید هویت دو عاملی</div>
        </div>

        <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
          <div className="text-[11px] text-purple-700 font-bold mb-1 flex items-center gap-1.5">
            <Edit3 className="w-3.5 h-3.5" />
            <span>ویرایش و صدور مجوز</span>
          </div>
          <div className="text-xl font-black text-purple-900">۳۱,۰۱۳</div>
          <div className="text-[10px] text-purple-600 mt-1">مرخصی، ماموریت، کارکرد</div>
        </div>

        <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100">
          <div className="text-[11px] text-rose-700 font-bold mb-1 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>ورود ناموفق / اخطار</span>
          </div>
          <div className="text-xl font-black text-rose-900">۰.۹۵٪</div>
          <div className="text-[10px] text-rose-600 mt-1">مسدودسازی خودکار فایروال</div>
        </div>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 text-xs">
          <button
            onClick={() => setSelectedActivity('all')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
              selectedActivity === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            همه فعالیت‌ها
          </button>
          <button
            onClick={() => setSelectedActivity('ورود به سیستم')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
              selectedActivity === 'ورود به سیستم' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
            }`}
          >
            ورود به سیستم
          </button>
          <button
            onClick={() => setSelectedActivity('جدید')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
              selectedActivity === 'جدید' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
            }`}
          >
            ثبت جدید
          </button>
          <button
            onClick={() => setSelectedActivity('رویت')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
              selectedActivity === 'رویت' ? 'bg-slate-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            رویت
          </button>
        </div>

        <div className="relative">
          <Search className="w-4 h-4 absolute right-3 top-2.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="جستجو در نام، پرسنلی، IP..."
            className="bg-slate-50 border border-slate-200 rounded-xl pr-9 pl-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-52"
          />
        </div>
      </div>

      {/* Logs Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-right text-xs">
          <thead>
            <tr className="bg-slate-100/80 text-slate-700 font-bold border-b border-slate-200">
              <th className="py-2.5 px-3">شماره پرسنلی</th>
              <th className="py-2.5 px-3">نام و نام خانوادگی</th>
              <th className="py-2.5 px-3 text-center">موجودیت</th>
              <th className="py-2.5 px-3 text-center">نوع فعالیت</th>
              <th className="py-2.5 px-3">توضیحات رویداد</th>
              <th className="py-2.5 px-3 text-center">آدرس IP</th>
              <th className="py-2.5 px-3 text-center">زمان ثبت</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredLogs.map((log) => (
              <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                <td className="py-3 px-3 font-bold text-slate-700 tabular-nums">
                  {log.personnelId}
                </td>
                <td className="py-3 px-3 font-bold text-slate-900">
                  {log.fullName}
                </td>
                <td className="py-3 px-3 text-center">
                  <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md text-[11px]">
                    {log.entity}
                  </span>
                </td>
                <td className="py-3 px-3 text-center">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    log.activityType === 'جدید'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                      : log.activityType === 'ورود به سیستم'
                      ? 'bg-blue-50 text-blue-700 border border-blue-200/60'
                      : log.activityType === 'ویرایش'
                      ? 'bg-purple-50 text-purple-700 border border-purple-200/60'
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {log.activityType}
                  </span>
                </td>
                <td className="py-3 px-3 text-slate-600 text-[11px] leading-relaxed">
                  {log.description}
                </td>
                <td className="py-3 px-3 text-center text-slate-500 text-[11px]">
                  {log.ip}
                </td>
                <td className="py-3 px-3 text-center text-slate-500 tabular-nums text-[11px]">
                  {log.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};
