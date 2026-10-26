import React from 'react';
import { 
  User, 
  Building, 
  Calendar, 
  ShieldCheck, 
  Award, 
  MapPin, 
  PhoneCall, 
  Send,
  ExternalLink
} from 'lucide-react';
import { UserProfile } from '../types/attendance';

interface UserProfileCardProps {
  user: UserProfile;
  onOpenLeaveKardex: () => void;
  onOpenPhoneDirectory?: () => void;
}

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  onOpenLeaveKardex,
  onOpenPhoneDirectory,
}) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-6 space-y-5">
      
      {/* Profile Header (StaffCentral Avatar & Info) */}
      <div className="flex items-start gap-4">
        <div className="relative">
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-16 h-16 rounded-2xl object-cover ring-4 ring-blue-500/10 shadow-sm"
          />
          <span 
            className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-xs"
            title="حضور فعال در سازمان"
          />
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-black text-slate-900">{user.name}</h3>
            <span className="text-[10px] bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded-md border border-blue-200/50">
              پرسنلی {user.personnelId}
            </span>
          </div>
          <p className="text-xs text-slate-600 font-medium">{user.role}</p>
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Building className="w-3.5 h-3.5 text-slate-400" />
            <span>{user.department}</span>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid (In Company, Shift, Supervisor) */}
      <div className="grid grid-cols-2 gap-2.5 text-xs">
        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/60">
          <span className="text-[11px] text-slate-400 block mb-0.5">مدت سابقه در شرکت:</span>
          <span className="font-black text-slate-800 text-sm">۳ سال و ۷ ماه</span>
          <span className="text-[10px] text-slate-400 block mt-0.5">از تاریخ ۱۴۰۱/۰۱/۰۱</span>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/60">
          <span className="text-[11px] text-slate-400 block mb-0.5">شیفت کاری تخصیص‌یافته:</span>
          <span className="font-bold text-slate-800 text-xs">شیفت اداری (کد ۱۱)</span>
          <span className="text-[10px] text-emerald-600 block mt-0.5">شناوری ۴۵ دقیقه مجاز</span>
        </div>
      </div>

      {/* Work Format Distribution (StaffCentral bar style) */}
      <div className="space-y-2 pt-1">
        <div className="flex justify-between text-xs text-slate-600">
          <span className="font-bold text-slate-800">الگوی کارکرد و حضور:</span>
          <span className="text-[11px] text-slate-400">آبان ۱۴۰۵</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-emerald-50 border border-emerald-200/60 p-2.5 rounded-xl">
            <div className="flex items-center justify-between text-[11px] text-emerald-800">
              <span>حضور فیزیکی</span>
              <span className="font-black">۸۸٪</span>
            </div>
            <div className="w-full bg-emerald-200/50 h-1 rounded-full mt-1.5 overflow-hidden">
              <div className="bg-emerald-500 h-full rounded-full" style={{ width: '88%' }} />
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200/60 p-2.5 rounded-xl">
            <div className="flex items-center justify-between text-[11px] text-blue-800">
              <span>ماموریت ساعتی</span>
              <span className="font-black">۱۲٪</span>
            </div>
            <div className="w-full bg-blue-200/50 h-1 rounded-full mt-1.5 overflow-hidden">
              <div className="bg-blue-500 h-full rounded-full" style={{ width: '12%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Fast Actions Bottom Bar */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-[11px] text-slate-500 font-medium">وضعیت کاربری: تاییدشده و فعال</span>
        <div className="flex items-center gap-2">
          {onOpenPhoneDirectory && (
            <button
              onClick={onOpenPhoneDirectory}
              className="text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-xl font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer border border-emerald-200/60"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>شماره‌های داخلی</span>
            </button>
          )}
          <button
            onClick={onOpenLeaveKardex}
            className="text-blue-600 hover:text-blue-700 bg-blue-50/80 hover:bg-blue-100/80 px-2.5 py-1 rounded-xl font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer border border-blue-200/50"
          >
            <span>سوابق کاردکس</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
};
