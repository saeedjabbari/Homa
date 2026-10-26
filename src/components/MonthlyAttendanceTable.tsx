import React, { useState } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Calendar, 
  FileSpreadsheet, 
  FileText, 
  Filter, 
  Plus, 
  Clock, 
  MoreVertical, 
  Coffee, 
  Briefcase, 
  AlertCircle,
  CheckCircle,
  HelpCircle,
  Download,
  Search
} from 'lucide-react';
import { DailyAttendanceRecord, RequestType } from '../types/attendance';

interface MonthlyAttendanceTableProps {
  records: DailyAttendanceRecord[];
  onOpenReportModal: () => void;
  onOpenRequestForDate: (date: string, type?: RequestType) => void;
}

export const MonthlyAttendanceTable: React.FC<MonthlyAttendanceTableProps> = ({
  records,
  onOpenReportModal,
  onOpenRequestForDate,
}) => {
  const [selectedMonth, setSelectedMonth] = useState('آبان ۱۴۰۵');
  const [statusFilter, setStatusFilter] = useState<'all' | 'overtime' | 'late' | 'leave' | 'incomplete'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  const filteredRecords = records.filter(rec => {
    if (statusFilter !== 'all' && rec.status !== statusFilter) return false;
    if (searchQuery) {
      return rec.date.includes(searchQuery) || rec.dayOfWeek.includes(searchQuery) || (rec.note && rec.note.includes(searchQuery));
    }
    return true;
  });

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
      
      {/* Table Header & Controls */}
      <div className="p-4 sm:p-5 border-b border-slate-100 space-y-3.5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          
          {/* Title & Month Selector */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-black text-slate-900 whitespace-nowrap">کارت تردد و کارکرد ماهانه</h2>
                <span className="text-xs bg-slate-100 text-slate-600 font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                  پرسنلی: ۳۰۲۱۶
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5 whitespace-nowrap">
                ورود و خروج‌های ثبت‌شده در گیت‌های اسپوتا
              </p>
            </div>
          </div>

          {/* Month Stepper & Report Button */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/60 shrink-0">
              <button 
                onClick={() => setSelectedMonth('مهر ۱۴۰۵')}
                className="p-1.5 rounded-lg hover:bg-white text-slate-600 transition-colors cursor-pointer"
                title="ماه قبل"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <div className="px-2.5 text-xs font-bold text-slate-800 flex items-center gap-1.5 whitespace-nowrap">
                <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{selectedMonth}</span>
              </div>
              <button 
                onClick={() => setSelectedMonth('آذر ۱۴۰۵')}
                className="p-1.5 rounded-lg hover:bg-white text-slate-600 transition-colors cursor-pointer"
                title="ماه بعد"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={onOpenReportModal}
              className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-xs transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span>مشاهده گزارش کارکرد</span>
            </button>
          </div>

        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          
          {/* Quick Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
                statusFilter === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              همه روزها ({records.length})
            </button>
            <button
              onClick={() => setStatusFilter('overtime')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
                statusFilter === 'overtime'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              }`}
            >
              دارای اضافه کار
            </button>
            <button
              onClick={() => setStatusFilter('late')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
                statusFilter === 'late'
                  ? 'bg-rose-600 text-white'
                  : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
              }`}
            >
              تاخیر و کسر کار
            </button>
            <button
              onClick={() => setStatusFilter('leave')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
                statusFilter === 'leave'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
              }`}
            >
              مرخصی و ماموریت
            </button>
          </div>

          {/* Search box */}
          <div className="relative">
            <Search className="w-4 h-4 absolute right-3 top-2.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجو در تاریخ یا توضیحات..."
              className="bg-slate-50 border border-slate-200 rounded-xl pr-9 pl-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-52"
            />
          </div>

        </div>
      </div>

      {/* Main Responsive Table - Full Width with No Horizontal Scroll on Desktop */}
      <div className="overflow-x-auto lg:overflow-x-visible">
        <table className="w-full text-right text-xs">
          <thead>
            <tr className="bg-slate-50/90 text-slate-500 font-bold border-b border-slate-100">
              <th className="py-3 px-3 sm:px-4 font-bold text-right whitespace-nowrap">تاریخ و روز هفته</th>
              <th className="py-3 px-2 sm:px-2.5 font-bold text-center whitespace-nowrap">شیفت موظف</th>
              <th className="py-3 px-2 sm:px-2.5 font-bold text-center whitespace-nowrap">ورود ۱</th>
              <th className="py-3 px-2 sm:px-2.5 font-bold text-center whitespace-nowrap">خروج ۱</th>
              <th className="py-3 px-2 sm:px-2.5 font-bold text-center whitespace-nowrap">تردد ۲ (میانی)</th>
              <th className="py-3 px-2 sm:px-2.5 font-bold text-center whitespace-nowrap">کارکرد خالص</th>
              <th className="py-3 px-2 sm:px-2.5 font-bold text-center whitespace-nowrap">کسورات / تاخیر</th>
              <th className="py-3 px-2 sm:px-2.5 font-bold text-center whitespace-nowrap">اضافه کاری</th>
              <th className="py-3 px-2 sm:px-3 font-bold text-center whitespace-nowrap">وضعیت روز</th>
              <th className="py-3 px-2 sm:px-3 font-bold text-center whitespace-nowrap">عملیات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredRecords.map((record) => {
              const isToday = record.isToday;
              const isHoliday = record.isHoliday;
              
              return (
                <tr 
                  key={record.id}
                  className={`hover:bg-slate-50/80 transition-colors ${
                    isToday ? 'bg-blue-50/40 font-semibold' : isHoliday ? 'bg-amber-50/30' : ''
                  }`}
                >
                  {/* Date & Day */}
                  <td className="py-3 px-3 sm:px-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        isToday ? 'bg-blue-500 animate-ping' : isHoliday ? 'bg-amber-400' : 'bg-slate-300'
                      }`} />
                      <div>
                        <div className="font-bold text-slate-900 tabular-nums">{record.date}</div>
                        <div className="text-[11px] text-slate-500">{record.dayOfWeek}</div>
                      </div>
                      {isToday && (
                        <span className="bg-blue-100 text-blue-700 text-[10px] font-black px-1.5 py-0.5 rounded-md mr-1">
                          امروز
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Shift */}
                  <td className="py-3 px-2 sm:px-2.5 text-center whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-lg text-[11px] font-medium ${
                      isHoliday ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {record.shiftName}
                    </span>
                  </td>

                  {/* Punch In 1 */}
                  <td className="py-3 px-2 sm:px-2.5 text-center whitespace-nowrap tabular-nums">
                    {record.punches.in1 ? (
                      <span className="font-bold text-slate-800 bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md border border-emerald-200/50">
                        {record.punches.in1}
                      </span>
                    ) : (
                      <span className="text-slate-300">--:--</span>
                    )}
                  </td>

                  {/* Punch Out 1 */}
                  <td className="py-3 px-2 sm:px-2.5 text-center whitespace-nowrap tabular-nums">
                    {record.punches.out1 ? (
                      <span className="font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md">
                        {record.punches.out1}
                      </span>
                    ) : isToday ? (
                      <span className="text-blue-600 font-bold bg-blue-100/70 px-2 py-0.5 rounded-md animate-pulse">
                        حضور فعال
                      </span>
                    ) : (
                      <span className="text-slate-300">--:--</span>
                    )}
                  </td>

                  {/* Punch 2 (if split shift or interim leave) */}
                  <td className="py-3 px-2 sm:px-2.5 text-center whitespace-nowrap tabular-nums text-[11px]">
                    {record.punches.in2 ? (
                      <div className="flex items-center justify-center gap-1">
                        <span className="bg-slate-100 px-1.5 py-0.5 rounded">{record.punches.in2}</span>
                        <span className="text-slate-400">تا</span>
                        <span className="bg-slate-100 px-1.5 py-0.5 rounded">{record.punches.out2}</span>
                      </div>
                    ) : (
                      <span className="text-slate-300">-</span>
                    )}
                  </td>

                  {/* Net Worked Hours */}
                  <td className="py-3 px-2 sm:px-2.5 text-center whitespace-nowrap tabular-nums">
                    <span className={`font-bold ${record.netWorkHours.startsWith('۰۹') ? 'text-emerald-600' : 'text-slate-800'}`}>
                      {record.netWorkHours}
                    </span>
                  </td>

                  {/* Deduction & Delay */}
                  <td className="py-3 px-2 sm:px-2.5 text-center whitespace-nowrap tabular-nums">
                    {record.delayHours !== '۰۰:۰۰' && record.delayHours !== '--:--' ? (
                      <span className="bg-rose-50 text-rose-700 px-2 py-0.5 rounded-md font-bold border border-rose-200/60">
                        {record.delayHours}
                      </span>
                    ) : (
                      <span className="text-slate-300">۰۰:۰۰</span>
                    )}
                  </td>

                  {/* Overtime */}
                  <td className="py-3 px-2 sm:px-2.5 text-center whitespace-nowrap tabular-nums">
                    {record.overtimeTotal !== '۰۰:۰۰' && record.overtimeTotal !== '--:--' ? (
                      <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md font-bold border border-emerald-200/60">
                        +{record.overtimeTotal}
                      </span>
                    ) : (
                      <span className="text-slate-300">۰۰:۰۰</span>
                    )}
                  </td>

                  {/* Status Badge */}
                  <td className="py-3 px-2 sm:px-3 text-center whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                      record.status === 'overtime'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                        : record.status === 'late'
                        ? 'bg-rose-50 text-rose-700 border border-rose-200/60'
                        : record.status === 'leave'
                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-200/60'
                        : record.status === 'holiday'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200/60'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {record.statusText}
                    </span>
                  </td>

                  {/* Actions Dropdown / Quick Button */}
                  <td className="py-3 px-2 sm:px-3 text-center whitespace-nowrap relative">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        onClick={() => onOpenRequestForDate(record.date)}
                        className="p-1.5 rounded-xl hover:bg-blue-50 text-blue-600 hover:text-blue-700 transition-colors"
                        title="ثبت درخواست مجوز روی این روز"
                      >
                        <Plus className="w-4 h-4" />
                      </button>

                      {/* Options menu */}
                      <button
                        onClick={() => setActiveMenuId(activeMenuId === record.id ? null : record.id)}
                        className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Popover Menu */}
                    {activeMenuId === record.id && (
                      <div className="absolute left-4 top-10 w-48 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-30 text-right space-y-1 animate-in fade-in zoom-in-95">
                        <div className="text-[10px] font-bold text-slate-400 px-2 py-1 border-b border-slate-100">
                          ثبت مجوز برای {record.date}:
                        </div>
                        <button
                          onClick={() => {
                            onOpenRequestForDate(record.date, 'hourly_leave');
                            setActiveMenuId(null);
                          }}
                          className="w-full text-right px-2.5 py-1.5 rounded-xl text-xs text-slate-700 hover:bg-slate-100 flex items-center gap-2"
                        >
                          <Coffee className="w-3.5 h-3.5 text-blue-500" />
                          <span>مرخصی ساعتی شخصی</span>
                        </button>
                        <button
                          onClick={() => {
                            onOpenRequestForDate(record.date, 'overtime');
                            setActiveMenuId(null);
                          }}
                          className="w-full text-right px-2.5 py-1.5 rounded-xl text-xs text-slate-700 hover:bg-slate-100 flex items-center gap-2"
                        >
                          <Clock className="w-3.5 h-3.5 text-emerald-500" />
                          <span>اضافه کار با مجوز</span>
                        </button>
                        <button
                          onClick={() => {
                            onOpenRequestForDate(record.date, 'hourly_mission');
                            setActiveMenuId(null);
                          }}
                          className="w-full text-right px-2.5 py-1.5 rounded-xl text-xs text-slate-700 hover:bg-slate-100 flex items-center gap-2"
                        >
                          <Briefcase className="w-3.5 h-3.5 text-indigo-500" />
                          <span>ماموریت اداری</span>
                        </button>
                        <button
                          onClick={() => {
                            onOpenRequestForDate(record.date, 'service_delay');
                            setActiveMenuId(null);
                          }}
                          className="w-full text-right px-2.5 py-1.5 rounded-xl text-xs text-slate-700 hover:bg-slate-100 flex items-center gap-2"
                        >
                          <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                          <span>تاخیر موجه سرویس</span>
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer Notes & Legend */}
      <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            تردد عادی و اضافه کار
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
            تاخیر یا کسر کار
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
            مرخصی / ماموریت
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            تعطیلات رسمی
          </span>
        </div>

        <div className="text-[11px] text-slate-400">
          محاسبات بر اساس آیین‌نامه انضباطی و تردد گروه صنعتی جهان اسپوتا
        </div>
      </div>

    </div>
  );
};
