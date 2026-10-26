import React, { useState } from 'react';
import { 
  ListTodo, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Coffee, 
  Briefcase, 
  Calendar, 
  UserCheck, 
  Plus, 
  ChevronRight,
  Filter,
  Search,
  MessageSquare
} from 'lucide-react';
import { UserRequest, RequestType } from '../types/attendance';

interface RequestsWorkflowViewProps {
  requests: UserRequest[];
  onOpenNewRequest: (type?: RequestType) => void;
}

export const RequestsWorkflowView: React.FC<RequestsWorkflowViewProps> = ({
  requests,
  onOpenNewRequest,
}) => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRequests = requests.filter(req => {
    if (filter === 'pending' && req.status !== 'pending' && req.status !== 'hr_review') return false;
    if (filter === 'approved' && req.status !== 'approved') return false;
    if (filter === 'rejected' && req.status !== 'rejected') return false;
    if (searchQuery) {
      return req.title.includes(searchQuery) || req.date.includes(searchQuery) || req.reason.includes(searchQuery);
    }
    return true;
  });

  const getIcon = (type: RequestType) => {
    switch (type) {
      case 'hourly_leave':
      case 'daily_leave':
        return <Coffee className="w-5 h-5 text-blue-600" />;
      case 'overtime':
        return <Clock className="w-5 h-5 text-emerald-600" />;
      case 'hourly_mission':
      case 'daily_mission':
        return <Briefcase className="w-5 h-5 text-indigo-600" />;
      case 'service_delay':
        return <AlertCircle className="w-5 h-5 text-amber-600" />;
      default:
        return <Calendar className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-6 space-y-6">
      
      {/* Header & New Request Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <ListTodo className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-black text-slate-900">گردش کار مجوزها و درخواست‌ها</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              پیگیری مراحل تایید، ابلاغ و ثبت رسمی مرخصی‌ها و اضافه کاری‌ها در کارنامه ماهانه
            </p>
          </div>
        </div>

        <button
          onClick={() => onOpenNewRequest()}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-2xl shadow-sm shadow-blue-500/20 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>ثبت درخواست جدید</span>
        </button>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
              filter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            همه موارد ({requests.length})
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
              filter === 'pending' ? 'bg-amber-500 text-white' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
            }`}
          >
            در انتظار تایید ({requests.filter(r => r.status === 'pending' || r.status === 'hr_review').length})
          </button>
          <button
            onClick={() => setFilter('approved')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-colors ${
              filter === 'approved' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
            }`}
          >
            تایید شده ({requests.filter(r => r.status === 'approved').length})
          </button>
        </div>

        <div className="relative">
          <Search className="w-4 h-4 absolute right-3 top-2.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="جستجو در عنوان یا تاریخ..."
            className="bg-slate-50 border border-slate-200 rounded-xl pr-9 pl-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-52"
          />
        </div>
      </div>

      {/* Requests Card List */}
      <div className="space-y-3">
        {filteredRequests.map((req) => (
          <div 
            key={req.id}
            className="p-4 sm:p-5 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all space-y-3"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center shadow-xs">
                  {getIcon(req.type)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-slate-900">{req.title}</span>
                    <span className="text-xs text-slate-400 tabular-nums">{req.date}</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-2">
                    <span>مدت: <b className="text-slate-800">{req.duration}</b></span>
                    {req.startTime && (
                      <span>(از {req.startTime} تا {req.endTime})</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div>
                {req.status === 'approved' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    تایید شده نهایی
                  </span>
                )}
                {req.status === 'pending' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200/60">
                    <Clock className="w-4 h-4 text-amber-600" />
                    در انتظار تایید سرپرست
                  </span>
                )}
                {req.status === 'hr_review' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/60">
                    <UserCheck className="w-4 h-4 text-blue-600" />
                    در حال بررسی منابع انسانی
                  </span>
                )}
              </div>

            </div>

            {/* Reason description */}
            <div className="bg-white p-3 rounded-xl border border-slate-200/60 text-xs text-slate-700 leading-relaxed">
              <span className="font-bold text-slate-900">علت ثبت: </span>
              {req.reason}
            </div>

            {/* Visual Workflow Stepper */}
            <div className="pt-2 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 font-semibold text-emerald-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  ثبت توسط شما ({req.createdAt})
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                <span className={`flex items-center gap-1 font-semibold ${
                  req.status === 'approved' ? 'text-emerald-600' : 'text-amber-600'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${
                    req.status === 'approved' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'
                  }`}></span>
                  بررسی سرپرست: {req.reviewer}
                </span>
              </div>

              {req.reviewComment && (
                <div className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                  <span>توضیح سرپرست: "{req.reviewComment}"</span>
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
