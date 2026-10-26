import React from 'react';
import { 
  Clock, 
  Calendar, 
  Bell, 
  ChevronDown, 
  Search, 
  LogOut, 
  Sparkles, 
  Users, 
  ShieldCheck, 
  LayoutDashboard,
  FileSpreadsheet,
  FileCheck2,
  ListTodo,
  History
} from 'lucide-react';
import { UserProfile, SystemMessage } from '../types/attendance';

interface HeaderProps {
  user: UserProfile;
  messages: SystemMessage[];
  activeTab: 'dashboard' | 'attendance' | 'requests' | 'kardex' | 'audit';
  setActiveTab: (tab: 'dashboard' | 'attendance' | 'requests' | 'kardex' | 'audit') => void;
  onOpenNewRequest: () => void;
  onTogglePunch: () => void;
  elapsedTimeString: string;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  messages,
  activeTab,
  setActiveTab,
  onOpenNewRequest,
  onTogglePunch,
  elapsedTimeString,
}) => {
  const [showNotifications, setShowNotifications] = React.useState(false);
  const [showUserMenu, setShowUserMenu] = React.useState(false);
  const unreadCount = messages.filter(m => !m.read).length;

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-xs">
      {/* Top Banner Schedule Pill inspired by workspace concept (download__3) */}
      <div className="bg-slate-900 text-slate-100 text-xs px-4 py-2 flex flex-wrap items-center justify-between gap-2.5 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-slate-800/90 px-3 py-1 rounded-full border border-slate-700/60 text-slate-300 whitespace-nowrap text-xs">
            <Calendar className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="font-medium">امروز: دوشنبه، ۴ آبان ۱۴۰۵</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 bg-slate-800/90 px-3 py-1 rounded-full border border-slate-700/60 whitespace-nowrap text-xs">
            <span className="text-slate-400">شیفت موظف:</span>
            <span className="text-emerald-400 font-semibold">{user.shiftHours}</span>
          </div>
        </div>

        {/* Center Live Tracker Pill - Single Line */}
        <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-950/80 to-slate-900 border border-emerald-500/30 px-3.5 py-1 rounded-full shadow-inner whitespace-nowrap text-xs">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-300">وضعیت:</span>
          <span className="text-emerald-400 font-bold tabular-nums">
            {user.isClockedIn ? `در محل کار (ورود: ${user.clockInTime} • کارکرد: ${elapsedTimeString})` : 'خارج از سازمان'}
          </span>
          <button
            onClick={onTogglePunch}
            className={`mr-1 px-2.5 py-0.5 rounded-full text-xs font-bold transition-all shadow-xs cursor-pointer ${
              user.isClockedIn 
                ? 'bg-rose-500/20 text-rose-300 hover:bg-rose-500 hover:text-white border border-rose-500/40' 
                : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 font-bold'
            }`}
          >
            {user.isClockedIn ? 'ثبت خروج' : 'ثبت ورود'}
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-10 h-10 rounded-2xl bg-white p-1 border border-orange-200/90 shadow-sm flex items-center justify-center overflow-hidden">
              <img 
                src="/assets/aistudio/spoota_holdinh_logo_2000x_66ca3690.png" 
                alt="لوگوی هلدینگ اسپوتا" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-black tracking-tight text-slate-900 whitespace-nowrap">هلدینگ اسپوتا</span>
                <span className="text-[10px] bg-orange-100 text-orange-700 font-bold px-1.5 py-0.5 rounded-md whitespace-nowrap border border-orange-200/60">
                  سامانه کارا
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium whitespace-nowrap">
                سامانه مدیریت تردد و پرسنلی
              </p>
            </div>
          </div>

          {/* Navigation Tabs (Single-line crisp labels with whitespace-nowrap) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 p-1 rounded-2xl border border-slate-200/60 shrink-0">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'dashboard'
                  ? 'bg-white text-blue-600 shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <LayoutDashboard className="w-4 h-4 shrink-0" />
              <span>داشبورد</span>
            </button>

            <button
              onClick={() => setActiveTab('attendance')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'attendance'
                  ? 'bg-white text-blue-600 shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4 shrink-0" />
              <span>کارت تردد</span>
            </button>

            <button
              onClick={() => setActiveTab('requests')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'requests'
                  ? 'bg-white text-blue-600 shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <ListTodo className="w-4 h-4 shrink-0" />
              <span>درخواست‌ها</span>
            </button>

            <button
              onClick={() => setActiveTab('kardex')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'kardex'
                  ? 'bg-white text-blue-600 shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <FileCheck2 className="w-4 h-4 shrink-0" />
              <span>کاردکس مرخصی</span>
            </button>

            <button
              onClick={() => setActiveTab('audit')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'audit'
                  ? 'bg-white text-blue-600 shadow-xs border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <History className="w-4 h-4 shrink-0" />
              <span>ثبت نشان‌ها</span>
            </button>
          </nav>

          {/* Right Action Tools & User Profile */}
          <div className="flex items-center gap-3">
            {/* Quick New Request Button */}
            <button
              onClick={onOpenNewRequest}
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2.5 rounded-2xl text-xs font-bold shadow-md shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4" />
              <span>ثبت درخواست جدید</span>
            </button>

            {/* Notifications Button with Legacy "88" badge matching ScreenHunter_196 & 200 */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative w-10 h-10 rounded-2xl bg-slate-100 hover:bg-slate-200/80 flex items-center justify-center text-slate-700 transition-colors"
                title="پیام‌های من"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notification Popover */}
              {showNotifications && (
                <>
                  <div 
                    className="fixed inset-0 z-40 bg-transparent" 
                    onClick={() => setShowNotifications(false)} 
                  />
                  <div className="absolute left-0 mt-2 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <Bell className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-bold text-slate-900">پیام‌های سیستم و تردد</span>
                      </div>
                      <span className="text-xs text-blue-600 font-semibold cursor-pointer hover:underline">
                        علامت‌گذاری همه
                      </span>
                    </div>

                    <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto mt-2 space-y-1">
                      {messages.map((msg) => (
                        <div key={msg.id} className="py-2.5 px-2 hover:bg-slate-50 rounded-xl transition-colors">
                          <div className="flex items-start justify-between gap-2">
                            <span className={`text-xs font-bold ${msg.status === 'warning' ? 'text-amber-600' : 'text-slate-800'}`}>
                              {msg.title}
                            </span>
                            <span className="text-[10px] text-slate-400 tabular-nums">{msg.time}</span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                            {msg.content}
                          </p>
                          <div className="flex items-center justify-between mt-1 text-[10px] text-slate-400">
                            <span>فرستنده: {msg.sender}</span>
                            <span className="tabular-nums">IP: {msg.ip}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* User Profile Card (StaffCentral style) */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2.5 p-1.5 pr-3 rounded-2xl hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200/80 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={user.avatarUrl}
                    alt={user.name}
                    className="w-9 h-9 rounded-xl object-cover ring-2 ring-blue-500/20"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
                </div>
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-bold text-slate-900 leading-tight">{user.name}</p>
                  <p className="text-[11px] text-slate-500 font-medium">{user.role}</p>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {/* User Menu Dropdown with Outside Click Closer */}
              {showUserMenu && (
                <>
                  <div 
                    className="fixed inset-0 z-40 bg-transparent" 
                    onClick={() => setShowUserMenu(false)} 
                  />
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-3xl shadow-2xl border border-slate-200 p-3 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="px-3 py-2 border-b border-slate-100 mb-2">
                      <p className="text-xs text-slate-400 font-medium">پرسنلی شماره: {user.personnelId}</p>
                      <p className="text-xs font-bold text-slate-800 mt-0.5">{user.department}</p>
                      <div className="mt-2 bg-emerald-50 border border-emerald-200/60 rounded-xl p-2 text-[11px] text-emerald-800">
                        <div className="flex justify-between">
                          <span>مانده مرخصی استحقاقی:</span>
                          <span className="font-bold">{user.remainingLeaveDays} روز</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1 text-xs">
                      <button 
                        onClick={() => { setActiveTab('requests'); setShowUserMenu(false); }}
                        className="w-full text-right px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-100 flex items-center gap-2 font-medium cursor-pointer"
                      >
                        <ListTodo className="w-4 h-4 text-slate-400" />
                        <span>پیگیری درخواست‌های من</span>
                      </button>
                      <button 
                        onClick={() => { setActiveTab('attendance'); setShowUserMenu(false); }}
                        className="w-full text-right px-3 py-2 rounded-xl text-slate-700 hover:bg-slate-100 flex items-center gap-2 font-medium cursor-pointer"
                      >
                        <FileSpreadsheet className="w-4 h-4 text-slate-400" />
                        <span>مشاهده ریز کارکرد ماهیانه</span>
                      </button>
                    </div>

                    <div className="pt-2 mt-2 border-t border-slate-100">
                      <button className="w-full text-right px-3 py-2 rounded-xl text-rose-600 hover:bg-rose-50 flex items-center gap-2 text-xs font-semibold cursor-pointer">
                        <LogOut className="w-4 h-4" />
                        <span>خروج امن از سیستم</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-slate-100 gap-1 overflow-x-auto text-[11px]">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap ${
              activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'text-slate-600'
            }`}
          >
            داشبورد
          </button>
          <button
            onClick={() => setActiveTab('attendance')}
            className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap ${
              activeTab === 'attendance' ? 'bg-blue-600 text-white' : 'text-slate-600'
            }`}
          >
            کارت تردد
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap ${
              activeTab === 'requests' ? 'bg-blue-600 text-white' : 'text-slate-600'
            }`}
          >
            درخواست‌ها
          </button>
          <button
            onClick={() => setActiveTab('kardex')}
            className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap ${
              activeTab === 'kardex' ? 'bg-blue-600 text-white' : 'text-slate-600'
            }`}
          >
            کاردکس
          </button>
          <button
            onClick={() => setActiveTab('audit')}
            className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap ${
              activeTab === 'audit' ? 'bg-blue-600 text-white' : 'text-slate-600'
            }`}
          >
            لاگ‌ها
          </button>
        </div>
      </div>
    </header>
  );
};
