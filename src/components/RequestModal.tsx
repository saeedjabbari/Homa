import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Coffee, 
  Clock, 
  Briefcase, 
  AlertCircle, 
  Calendar, 
  UserCheck, 
  FileText,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { RequestType, UserRequest } from '../types/attendance';

interface RequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitRequest: (request: Omit<UserRequest, 'id' | 'createdAt' | 'status'>) => void;
  initialDate?: string;
  initialType?: RequestType;
}

export const RequestModal: React.FC<RequestModalProps> = ({
  isOpen,
  onClose,
  onSubmitRequest,
  initialDate = '۱۴۰۵/۰۸/۰۴',
  initialType = 'hourly_leave',
}) => {
  const [requestType, setRequestType] = useState<RequestType>(initialType);
  const [date, setDate] = useState(initialDate);
  const [startTime, setStartTime] = useState('۱۰:۰۰');
  const [endTime, setEndTime] = useState('۱۲:۳۰');
  const [reason, setReason] = useState('');
  const [replacementPerson, setReplacementPerson] = useState('آرش کریمی (همکار واحد روابط عمومی)');

  // Sync if props change
  React.useEffect(() => {
    if (initialDate) setDate(initialDate);
    if (initialType) setRequestType(initialType);
  }, [initialDate, initialType]);

  // Escape key handler
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason.trim()) {
      alert('لطفا علت درخواست را وارد نمایید');
      return;
    }

    const typeTitles: Record<RequestType, string> = {
      hourly_leave: 'مرخصی ساعتی شخصی',
      daily_leave: 'مرخصی روزانه استحقاقی',
      sick_leave: 'مرخصی استعلاجی',
      unpaid_leave: 'مرخصی بدون حقوق',
      overtime: 'اضافه کار با مجوز',
      hourly_mission: 'ماموریت اداری ساعتی',
      daily_mission: 'ماموریت روزانه اداری',
      service_delay: 'تاخیر موجه سرویس',
      justified_haste: 'تعجیل موجه',
      manual_punch: 'ثبت تردد فراموش شده',
    };

    // Calculate approximate duration string
    let duration = '۰۲:۳۰';
    if (requestType === 'daily_leave') duration = '۱ روز معادل ۹ ساعت';
    else if (requestType === 'service_delay') duration = '۰۰:۳۷';

    onSubmitRequest({
      type: requestType,
      title: typeTitles[requestType] || 'درخواست مجوز',
      date,
      startTime: requestType.includes('daily') ? undefined : startTime,
      endTime: requestType.includes('daily') ? undefined : endTime,
      duration,
      reason,
      reviewer: 'مهندس بهمن حرفتی (مدیر اداری)',
    });

    // Trigger celebratory confetti
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });

    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200 cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200 cursor-default"
        dir="rtl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="text-sm font-black">ثبت هوشمند درخواست و مجوز تردد</h3>
              <p className="text-[11px] text-blue-100">گردش کار مستقیم با مدیر مربوطه و امور اداری</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          
          {/* Request Type Selector */}
          <div>
            <label className="block font-bold text-slate-700 mb-2">نوع مجوز درخواستی:</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setRequestType('hourly_leave')}
                className={`p-2.5 rounded-xl border text-right transition-all flex items-center gap-2 cursor-pointer ${
                  requestType === 'hourly_leave'
                    ? 'border-blue-600 bg-blue-50 text-blue-800 font-bold'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <Coffee className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="truncate">مرخصی ساعتی</span>
              </button>

              <button
                type="button"
                onClick={() => setRequestType('overtime')}
                className={`p-2.5 rounded-xl border text-right transition-all flex items-center gap-2 cursor-pointer ${
                  requestType === 'overtime'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-800 font-bold'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="truncate">اضافه کار با مجوز</span>
              </button>

              <button
                type="button"
                onClick={() => setRequestType('hourly_mission')}
                className={`p-2.5 rounded-xl border text-right transition-all flex items-center gap-2 cursor-pointer ${
                  requestType === 'hourly_mission'
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-800 font-bold'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <Briefcase className="w-4 h-4 text-indigo-600 shrink-0" />
                <span className="truncate">ماموریت ساعتی</span>
              </button>

              <button
                type="button"
                onClick={() => setRequestType('daily_leave')}
                className={`p-2.5 rounded-xl border text-right transition-all flex items-center gap-2 cursor-pointer ${
                  requestType === 'daily_leave'
                    ? 'border-purple-600 bg-purple-50 text-purple-800 font-bold'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <Calendar className="w-4 h-4 text-purple-600 shrink-0" />
                <span className="truncate">مرخصی روزانه</span>
              </button>

              <button
                type="button"
                onClick={() => setRequestType('service_delay')}
                className={`p-2.5 rounded-xl border text-right transition-all flex items-center gap-2 cursor-pointer ${
                  requestType === 'service_delay'
                    ? 'border-amber-600 bg-amber-50 text-amber-800 font-bold'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="truncate">تاخیر سرویس</span>
              </button>

              <button
                type="button"
                onClick={() => setRequestType('manual_punch')}
                className={`p-2.5 rounded-xl border text-right transition-all flex items-center gap-2 cursor-pointer ${
                  requestType === 'manual_punch'
                    ? 'border-teal-600 bg-teal-50 text-teal-800 font-bold'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <FileText className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="truncate">فراموشی کارت</span>
              </button>
            </div>
          </div>

          {/* Date Picker Input */}
          <div>
            <label className="block font-bold text-slate-700 mb-1">تاریخ مورد نظر:</label>
            <div className="relative">
              <Calendar className="w-4 h-4 absolute right-3 top-3 text-slate-400" />
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="۱۴۰۵/۰۸/۰۴"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pr-10 pl-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Time range (if hourly) */}
          {!requestType.includes('daily') && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">از ساعت:</label>
                <input
                  type="text"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  placeholder="۱۰:۰۰"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-center"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">تا ساعت:</label>
                <input
                  type="text"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  placeholder="۱۲:۳۰"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-center"
                />
              </div>
            </div>
          )}

          {/* Substitute person for leaves */}
          {requestType === 'hourly_leave' && (
            <div>
              <label className="block font-bold text-slate-700 mb-1">همکار جانشین در زمان عدم حضور:</label>
              <div className="relative">
                <UserCheck className="w-4 h-4 absolute right-3 top-3 text-slate-400" />
                <input
                  type="text"
                  value={replacementPerson}
                  onChange={(e) => setReplacementPerson(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pr-10 pl-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>
            </div>
          )}

          {/* Reason / Explanation */}
          <div>
            <label className="block font-bold text-slate-700 mb-1">علت و توضیحات درخواست:</label>
            <textarea
              rows={3}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="مثلا: پیگیری امور بانکی و ثبت رسمی اسناد نمایشگاه صنعت..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
              required
            />
          </div>

          {/* Reviewer Notice */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 flex items-center justify-between text-[11px] text-slate-600">
            <span>تاییدکننده مستقیم:</span>
            <span className="font-bold text-slate-900">مهندس بهمن حرفتی (مدیر اداری)</span>
          </div>

          {/* Actions */}
          <div className="pt-2 flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 font-bold transition-colors cursor-pointer"
            >
              انصراف
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>ارسال درخواست</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
