import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Header 
} from './components/Header';
import { 
  PunchClockCard 
} from './components/PunchClockCard';
import { 
  StatsBento 
} from './components/StatsBento';
import { 
  MonthlyAttendanceTable 
} from './components/MonthlyAttendanceTable';
import { 
  CalendarCard 
} from './components/CalendarCard';
import { 
  UserProfileCard 
} from './components/UserProfileCard';
import { 
  PerformanceReportModal 
} from './components/PerformanceReportModal';
import { 
  RequestModal 
} from './components/RequestModal';
import { 
  PhoneDirectoryModal 
} from './components/PhoneDirectoryModal';
import { 
  RequestsWorkflowView 
} from './components/RequestsWorkflowView';
import { 
  KardexView 
} from './components/KardexView';
import { 
  AuditLogsView 
} from './components/AuditLogsView';
import { 
  initialUserProfile, 
  initialAttendanceRecords, 
  initialRequests, 
  initialKardex, 
  initialMessages, 
  initialAuditLogs 
} from './data/mockData';
import { 
  RequestType, 
  UserRequest, 
  DailyAttendanceRecord, 
  UserProfile 
} from './types/attendance';
import { 
  Sparkles, 
  Bell, 
  CheckCircle2, 
  Info, 
  Clock, 
  ShieldCheck, 
  HelpCircle 
} from 'lucide-react';

export default function App() {
  const [user, setUser] = useState<UserProfile>(initialUserProfile);
  const [records, setRecords] = useState<DailyAttendanceRecord[]>(initialAttendanceRecords);
  const [requests, setRequests] = useState<UserRequest[]>(initialRequests);
  const [kardex, setKardex] = useState(initialKardex);
  const [messages, setMessages] = useState(initialMessages);
  const [auditLogs, setAuditLogs] = useState(initialAuditLogs);

  const [activeTab, setActiveTab] = useState<'dashboard' | 'attendance' | 'requests' | 'kardex' | 'audit'>('dashboard');

  // Modals
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isPhoneDirectoryOpen, setIsPhoneDirectoryOpen] = useState(false);

  // Pre-fill state for Request Modal
  const [requestTargetDate, setRequestTargetDate] = useState('۱۴۰۵/۰۸/۰۴');
  const [requestTargetType, setRequestTargetType] = useState<RequestType>('hourly_leave');

  // Live timer for today's punch in seconds (e.g. from 07:35 to now, let's start around 3 hours 20 mins = 12000s)
  const [elapsedSeconds, setElapsedSeconds] = useState(12430);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  useEffect(() => {
    let interval: any = null;
    if (user.isClockedIn) {
      interval = setInterval(() => {
        setElapsedSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [user.isClockedIn]);

  // Formatted elapsed string e.g. "۰۳:۲۷:۱۵"
  const formatElapsed = (sec: number) => {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Toggle Punch (Clock in / Clock out)
  const handleTogglePunch = () => {
    if (user.isClockedIn) {
      // Clock out
      const now = new Date();
      const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
      
      setUser(prev => ({
        ...prev,
        isClockedIn: false,
      }));

      // Update today's record
      setRecords(prev => prev.map(rec => {
        if (rec.isToday) {
          return {
            ...rec,
            punches: {
              ...rec.punches,
              out1: timeStr,
            },
            netWorkHours: formatElapsed(elapsedSeconds).substring(0, 5),
            status: 'normal',
            statusText: 'خروج در ' + timeStr,
          };
        }
        return rec;
      }));

      showToast(`خروج شما در ساعت ${timeStr} با موفقیت در گیت مرکزی ثبت شد.`);
    } else {
      // Clock in
      const now = new Date();
      const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
      
      setUser(prev => ({
        ...prev,
        isClockedIn: true,
        clockInTime: timeStr,
      }));

      // Reset stopwatch
      setElapsedSeconds(1);

      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.5 },
      });

      showToast(`ورود شما در ساعت ${timeStr} ثبت گردید. روز کاری پربرکتی داشته باشید!`);
    }
  };

  // Open Request Modal with pre-configured parameters
  const handleOpenRequest = (date?: string, type?: RequestType) => {
    if (date) setRequestTargetDate(date);
    if (type) setRequestTargetType(type);
    setIsRequestModalOpen(true);
  };

  // Submit Request from Modal
  const handleSubmitNewRequest = (reqData: Omit<UserRequest, 'id' | 'createdAt' | 'status'>) => {
    const newReq: UserRequest = {
      ...reqData,
      id: `req-${Date.now()}`,
      createdAt: '۱۴۰۵/۰۸/۰۴ ۱۱:۰۰',
      status: 'pending',
    };

    setRequests(prev => [newReq, ...prev]);

    // Also add to system messages
    setMessages(prev => [
      {
        id: `msg-${Date.now()}`,
        row: prev.length + 1,
        title: `ثبت ${reqData.title}`,
        sender: 'سامانه گردش کار',
        time: 'هم‌اکنون',
        content: `درخواست ${reqData.title} شما برای تاریخ ${reqData.date} جهت تایید به کارتابل ${reqData.reviewer} ارسال شد.`,
        ip: '10.20.2.196',
        status: 'info',
        read: false,
      },
      ...prev,
    ]);

    showToast(`درخواست "${reqData.title}" با موفقیت ارسال و در جریان تایید قرار گرفت.`);
  };

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-900 pb-16">
      
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-800 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 text-xs">
          <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Main Header */}
      <Header
        user={user}
        messages={messages}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenNewRequest={() => handleOpenRequest()}
        onTogglePunch={handleTogglePunch}
        onOpenPhoneDirectory={() => setIsPhoneDirectoryOpen(true)}
        elapsedTimeString={formatElapsed(elapsedSeconds)}
      />

      {/* Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 space-y-5">
        
        {/* TAB 1: Main Dashboard (Bento Grid Architecture) */}
        {activeTab === 'dashboard' && (
          <div className="space-y-5">
            
            {/* Live Punch Clock & Shift Card (Inspired by StaffCentral & Fenco) */}
            <PunchClockCard
              user={user}
              onTogglePunch={handleTogglePunch}
              onOpenQuickRequest={(type) => handleOpenRequest(undefined, type)}
              elapsedSeconds={elapsedSeconds}
            />

            {/* Key Metric Bento Tiles */}
            <StatsBento
              user={user}
              onOpenReportModal={() => setIsReportModalOpen(true)}
              onOpenKardex={() => setActiveTab('kardex')}
              onOpenRequests={() => setActiveTab('requests')}
            />

            {/* Full-Width Section: Monthly Attendance Table - All Columns 100% Visible with No Horizontal Scroll */}
            <div className="w-full">
              <MonthlyAttendanceTable
                records={records}
                onOpenReportModal={() => setIsReportModalOpen(true)}
                onOpenRequestForDate={(date, type) => handleOpenRequest(date, type)}
              />
            </div>

            {/* Bottom Row: User Profile & Shift Calendar Side-by-Side (Equal Width Bento) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
              <UserProfileCard
                user={user}
                onOpenLeaveKardex={() => setActiveTab('kardex')}
                onOpenPhoneDirectory={() => setIsPhoneDirectoryOpen(true)}
              />

              <CalendarCard
                onSelectDate={(date) => handleOpenRequest(date)}
              />
            </div>

          </div>
        )}

        {/* TAB 2: Full Monthly Attendance Table */}
        {activeTab === 'attendance' && (
          <div className="space-y-6">
            <MonthlyAttendanceTable
              records={records}
              onOpenReportModal={() => setIsReportModalOpen(true)}
              onOpenRequestForDate={(date, type) => handleOpenRequest(date, type)}
            />
          </div>
        )}

        {/* TAB 3: Requests & Workflow Management */}
        {activeTab === 'requests' && (
          <RequestsWorkflowView
            requests={requests}
            onOpenNewRequest={(type) => handleOpenRequest(undefined, type)}
          />
        )}

        {/* TAB 4: Accrued Leave Kardex */}
        {activeTab === 'kardex' && (
          <KardexView
            kardexItems={kardex}
            user={user}
            onOpenNewLeave={() => handleOpenRequest(undefined, 'daily_leave')}
          />
        )}

        {/* TAB 5: Audit Logs & Security */}
        {activeTab === 'audit' && (
          <AuditLogsView
            logs={auditLogs}
          />
        )}

      </main>

      {/* MODAL 1: Performance Report Modal (ScreenHunter_190 Redesign) */}
      <PerformanceReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        user={user}
        records={records}
      />

      {/* MODAL 2: Request Submission Modal */}
      <RequestModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        onSubmitRequest={handleSubmitNewRequest}
        initialDate={requestTargetDate}
        initialType={requestTargetType}
      />

      {/* MODAL 3: Internal Phone Directory Modal */}
      <PhoneDirectoryModal
        isOpen={isPhoneDirectoryOpen}
        onClose={() => setIsPhoneDirectoryOpen(false)}
      />

    </div>
  );
}
