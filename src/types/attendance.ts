export type RequestType = 
  | 'hourly_leave'          // مرخصی ساعتی شخصی
  | 'daily_leave'           // مرخصی روزانه استحقاقی
  | 'sick_leave'            // مرخصی استعلاجی
  | 'unpaid_leave'          // مرخصی بدون حقوق
  | 'overtime'              // اضافه کار با مجوز
  | 'hourly_mission'        // ماموریت اداری ساعتی
  | 'daily_mission'         // ماموریت روزانه
  | 'service_delay'         // تاخیر سرویس
  | 'justified_haste'       // تعجیل موجه
  | 'manual_punch';         // ثبت تردد فراموش شده

export type RequestStatus = 'pending' | 'approved' | 'rejected' | 'hr_review';

export interface UserRequest {
  id: string;
  type: RequestType;
  title: string;
  date: string;
  startTime?: string;
  endTime?: string;
  duration: string;
  reason: string;
  status: RequestStatus;
  createdAt: string;
  reviewer?: string;
  reviewComment?: string;
}

export interface DailyAttendanceRecord {
  id: string;
  date: string;              // e.g. "۱۴۰۵/۰۸/۰۴"
  dayOfWeek: string;         // e.g. "دوشنبه"
  isToday?: boolean;
  isHoliday?: boolean;
  shiftName: string;         // e.g. "عادی ۱۱" or "تعطیل"
  punches: {
    in1?: string;
    out1?: string;
    in2?: string;
    out2?: string;
    in3?: string;
    out3?: string;
  };
  netWorkHours: string;      // کارکرد خالص e.g. "۰۹:۲۸"
  delayHours: string;        // تاخیر e.g. "۰۰:۳۷"
  deductionHours: string;    // کسر کار
  overtimeAllowed: string;   // اضافه کار بامجوز
  overtimeTotal: string;     // اضافه کار نامجاز / کل
  missionHours: string;      // ماموریت
  status: 'normal' | 'late' | 'overtime' | 'leave' | 'incomplete' | 'holiday';
  statusText: string;
  note?: string;
}

export interface KardexItem {
  id: string;
  order: number;
  issueDate: string;
  description: string;
  changeType: 'increase' | 'decrease' | 'reset';
  duration: string;
  balance: string;
  startDate: string;
  endDate: string;
  category: 'hourly' | 'daily' | 'system';
}

export interface SystemMessage {
  id: string;
  row: number;
  title: string;
  sender: string;
  time: string;
  content: string;
  ip: string;
  status: 'success' | 'warning' | 'info';
  read: boolean;
}

export interface AuditLogItem {
  id: string;
  personnelId: string;
  fullName: string;
  activityType: 'ورود به سیستم' | 'رویت' | 'جدید' | 'ویرایش' | 'حذف' | 'خروج از سیستم' | 'ورود ناموفق';
  entity: string;
  description: string;
  ip: string;
  time: string;
}

export interface UserProfile {
  name: string;
  role: string;
  department: string;
  company: string;
  personnelId: string;
  nationalId: string;
  avatarUrl: string;
  shift: string;
  shiftHours: string;
  supervisorName: string;
  remainingLeaveDays: string; // e.g. "۰۵:۰۹"
  employmentDate: string;
  isClockedIn: boolean;
  clockInTime?: string;
}
