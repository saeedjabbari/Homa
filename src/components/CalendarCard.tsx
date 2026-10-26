import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  ChevronRight, 
  ChevronLeft, 
  Clock, 
  Users, 
  Video, 
  Building2,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface CalendarCardProps {
  onSelectDate: (date: string) => void;
}

export const CalendarCard: React.FC<CalendarCardProps> = ({ onSelectDate }) => {
  const [selectedDay, setSelectedDay] = useState(4); // 4th of Aban (Today)

  // Aban 1405 days structure
  // Day 1 was Friday (تعطیل)
  const daysInAban = [
    { day: 1, dayName: 'جمعه', isHoliday: true, status: 'holiday', statusText: 'تعطیل هفتگی' },
    { day: 2, dayName: 'شنبه', punches: '۰۷:۳۵ - ۱۷:۰۲', status: 'overtime', statusText: 'اضافه کار ۲۷ دقیقه' },
    { day: 3, dayName: 'یکشنبه', punches: '۰۸:۳۷ - ۱۷:۵۱', status: 'late', statusText: 'تاخیر ۳۷ دقیقه + اضافه کار' },
    { day: 4, dayName: 'دوشنبه', punches: '۰۷:۳۵ - درحال کار', isToday: true, status: 'active', statusText: 'روز جاری (شیفت فعال)' },
    { day: 5, dayName: 'سه‌شنبه', shift: '۰۷:۳۰ الی ۱۶:۳۰', status: 'future', statusText: 'شیفت موظف عادی' },
    { day: 6, dayName: 'چهارشنبه', shift: '۰۷:۳۰ الی ۱۶:۳۰', status: 'future', statusText: 'شیفت موظف عادی' },
    { day: 7, dayName: 'پنج‌شنبه', shift: '۰۷:۳۰ الی ۱۳:۳۰', status: 'future', statusText: 'شیفت نیمه‌وقت' },
    { day: 8, dayName: 'جمعه', isHoliday: true, status: 'holiday', statusText: 'تعطیل هفتگی' },
    { day: 9, dayName: 'شنبه', shift: '۰۷:۳۰ الی ۱۶:۳۰', status: 'future', statusText: 'شیفت موظف عادی' },
    { day: 10, dayName: 'یکشنبه', shift: '۰۷:۳۰ الی ۱۶:۳۰', status: 'future', statusText: 'شیفت موظف عادی' },
    { day: 11, dayName: 'دوشنبه', shift: '۰۷:۳۰ الی ۱۶:۳۰', status: 'future', statusText: 'شیفت موظف عادی' },
    { day: 12, dayName: 'سه‌شنبه', shift: '۰۷:۳۰ الی ۱۶:۳۰', status: 'future', statusText: 'شیفت موظف عادی' },
    { day: 13, dayName: 'چهارشنبه', shift: '۰۷:۳۰ الی ۱۶:۳۰', status: 'future', statusText: 'شیفت موظف عادی' },
    { day: 14, dayName: 'پنج‌شنبه', shift: '۰۷:۳۰ الی ۱۳:۳۰', status: 'future', statusText: 'شیفت نیمه‌وقت' },
    { day: 15, dayName: 'جمعه', isHoliday: true, status: 'holiday', statusText: 'تعطیل هفتگی' },
    { day: 16, dayName: 'شنبه', shift: '۰۷:۳۰ الی ۱۶:۳۰', status: 'future', statusText: 'شیفت موظف عادی' },
  ];

  const currentSelected = daysInAban.find(d => d.day === selectedDay) || daysInAban[3];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-5 space-y-4">
      
      {/* Calendar Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-black text-slate-900">تقویم شیفت و رویدادهای آبان ۱۴۰۵</span>
        </div>
        <div className="flex items-center gap-1 text-slate-400">
          <button className="p-1 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">
            <ChevronRight className="w-4 h-4" />
          </button>
          <span className="text-xs font-bold text-slate-700">آبان ۱۴۰۵</span>
          <button className="p-1 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Weekdays header */}
      <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-slate-400">
        <span>ش</span>
        <span>ی</span>
        <span>د</span>
        <span>س</span>
        <span>چ</span>
        <span>پ</span>
        <span className="text-rose-500">ج</span>
      </div>

      {/* Calendar Grid (Days 1 to 16) */}
      <div className="grid grid-cols-7 gap-1.5 text-center text-xs">
        {/* Day 1 (Friday) starts on column 7 */}
        <div className="col-span-6"></div>
        {daysInAban.map((item) => {
          const isSelected = item.day === selectedDay;
          return (
            <button
              key={item.day}
              onClick={() => {
                setSelectedDay(item.day);
                onSelectDate(`۱۴۰۵/۰۸/${item.day.toString().padStart(2, '۰')}`);
              }}
              className={`h-9 rounded-xl flex flex-col items-center justify-center relative transition-all cursor-pointer font-bold tabular-nums ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 font-black scale-105'
                  : item.isToday
                  ? 'bg-blue-50 text-blue-700 ring-2 ring-blue-500/40'
                  : item.isHoliday
                  ? 'text-rose-500 hover:bg-rose-50'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>{item.day}</span>
              {/* Status indicator dot */}
              <span className={`w-1 h-1 rounded-full mt-0.5 ${
                isSelected
                  ? 'bg-white'
                  : item.status === 'overtime'
                  ? 'bg-emerald-500'
                  : item.status === 'late'
                  ? 'bg-rose-500'
                  : item.status === 'active'
                  ? 'bg-blue-500 animate-ping'
                  : 'bg-transparent'
              }`} />
            </button>
          );
        })}
      </div>

      {/* Selected Day Details Preview (StaffCentral style) */}
      <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="font-bold text-slate-800">
            {currentSelected.dayName}، {currentSelected.day} آبان ۱۴۰۵
          </span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
            currentSelected.status === 'active'
              ? 'bg-blue-100 text-blue-800'
              : currentSelected.status === 'overtime'
              ? 'bg-emerald-100 text-emerald-800'
              : currentSelected.status === 'late'
              ? 'bg-rose-100 text-rose-800'
              : 'bg-slate-200 text-slate-700'
          }`}>
            {currentSelected.statusText}
          </span>
        </div>

        {currentSelected.punches && (
          <div className="text-[11px] text-slate-600 flex items-center justify-between">
            <span>تردد ثبت شده:</span>
            <span className="font-bold text-slate-800 tabular-nums">{currentSelected.punches}</span>
          </div>
        )}

        <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <Building2 className="w-3.5 h-3.5 text-blue-500" />
            حضور در دفتر مرکزی
          </span>
          <button
            onClick={() => onSelectDate(`۱۴۰۵/۰۸/${currentSelected.day.toString().padStart(2, '۰')}`)}
            className="text-blue-600 font-bold hover:underline"
          >
            ثبت مجوز
          </button>
        </div>
      </div>

    </div>
  );
};
