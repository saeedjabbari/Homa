import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  X, 
  Search, 
  Phone, 
  PhoneCall, 
  Building2, 
  Users, 
  Copy, 
  Check, 
  Filter, 
  Sparkles,
  ExternalLink,
  ChevronLeft
} from 'lucide-react';
import { 
  phoneDirectoryData, 
  directoryCompanies, 
  PhoneDirectoryItem 
} from '../data/phoneDirectory';

interface PhoneDirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Convert English digits to Persian and normalize strings for robust search
const toPersianDigits = (str: string) => {
  return str.replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d, 10)]);
};

const toEnglishDigits = (str: string) => {
  return str.replace(/[۰-۹]/g, d => '0123456789'['۰۱۲۳۴۵۶۷۸۹'.indexOf(d)]);
};

export const PhoneDirectoryModal: React.FC<PhoneDirectoryModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedCompany, setSelectedCompany] = useState<'all' | 'holding' | 'mehvarsazan' | 'qatehsazan'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle outside click safely
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalContentRef.current && !modalContentRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  // Copy extension to clipboard
  const handleCopy = (id: string, ext: string) => {
    navigator.clipboard.writeText(ext);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  // Filtered contacts based on selected tab and search query
  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const queryPersian = toPersianDigits(query);
    const queryEnglish = toEnglishDigits(query);

    return phoneDirectoryData.filter((item) => {
      // Company match
      if (selectedCompany !== 'all' && item.companyKey !== selectedCompany) {
        return false;
      }

      // Search match
      if (!query) return true;

      const nameMatch = item.name.toLowerCase().includes(query);
      const deptMatch = item.department.toLowerCase().includes(query);
      const companyMatch = item.companyName.toLowerCase().includes(query);
      const extMatch = 
        item.extension.includes(query) || 
        item.extension.includes(queryPersian) ||
        item.extension.includes(queryEnglish) ||
        toEnglishDigits(item.extension).includes(queryEnglish);

      return nameMatch || deptMatch || companyMatch || extMatch;
    });
  }, [selectedCompany, searchQuery]);

  // Counts per company for tab badges
  const counts = useMemo(() => {
    return {
      all: phoneDirectoryData.length,
      holding: phoneDirectoryData.filter(i => i.companyKey === 'holding').length,
      mehvarsazan: phoneDirectoryData.filter(i => i.companyKey === 'mehvarsazan').length,
      qatehsazan: phoneDirectoryData.filter(i => i.companyKey === 'qatehsazan').length,
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalContentRef}
        className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 w-full max-w-5xl overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-blue-50 border-b border-orange-200/60 p-5 sm:p-6 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white border border-orange-200 shadow-sm flex items-center justify-center text-orange-600 shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                  راهنمای شماره‌های تلفن داخلی هلدینگ اسپوتا
                </h2>
                <span className="text-[11px] bg-orange-100 text-orange-800 font-bold px-2 py-0.5 rounded-full border border-orange-300/60">
                  سازمانی
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium mt-1">
                دسترسی سریع و جستجوی هوشمند شماره‌های داخلی کلیه واحدها و شرکت‌های زیرمجموعه
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-2xl text-slate-400 hover:text-slate-700 hover:bg-white/80 transition-all border border-transparent hover:border-slate-200 cursor-pointer"
            title="بستن (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Toolbar: Search Bar + Company Tabs */}
        <div className="p-4 sm:p-5 bg-slate-50/70 border-b border-slate-200/80 space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجو با نام همکار (مثلاً محمودی، کریمی)، واحد سازمانی یا شماره داخلی..."
                className="w-full pr-10 pl-9 py-2.5 bg-white border border-slate-300 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Result Badge */}
            <div className="flex items-center justify-between sm:justify-start gap-2 text-xs text-slate-500 px-1">
              <span>تعداد نتایج:</span>
              <span className="font-bold text-slate-800 bg-white border border-slate-200 px-2.5 py-1 rounded-xl text-xs tabular-nums">
                {filteredItems.length} مورد
              </span>
            </div>
          </div>

          {/* Company Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            {directoryCompanies.map((comp) => {
              const isActive = selectedCompany === comp.key;
              return (
                <button
                  key={comp.key}
                  onClick={() => setSelectedCompany(comp.key)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl font-bold whitespace-nowrap transition-all shrink-0 cursor-pointer border ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border-slate-200/80'
                  }`}
                >
                  <span>{comp.title}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {counts[comp.key]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Directory Cards Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {filteredItems.length === 0 ? (
            <div className="py-14 text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-slate-800">شماره داخلی با این مشخصات یافت نشد</h3>
              <p className="text-xs text-slate-500">
                لطفاً املای نام یا شماره وارد شده را بررسی کنید یا فیلتر شرکت را بر روی «همه» بگذارید.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCompany('all'); }}
                className="mt-2 text-xs font-bold text-orange-600 hover:text-orange-700 underline cursor-pointer"
              >
                پاک کردن فیلترها و نمایش همه
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {filteredItems.map((item) => {
                const isCopied = copiedId === item.id;
                const companyBadgeColor = 
                  item.companyKey === 'holding' 
                    ? 'bg-orange-50 text-orange-700 border-orange-200/60'
                    : item.companyKey === 'mehvarsazan'
                    ? 'bg-blue-50 text-blue-700 border-blue-200/60'
                    : 'bg-emerald-50 text-emerald-700 border-emerald-200/60';

                return (
                  <div
                    key={item.id}
                    className="group bg-white rounded-2xl border border-slate-200/80 hover:border-orange-300/80 p-3.5 hover:shadow-md transition-all flex flex-col justify-between gap-3 relative"
                  >
                    <div>
                      {/* Top Row: Company & Dept */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg border ${companyBadgeColor} truncate max-w-[170px]`}>
                          {item.companyName}
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium truncate">
                          {item.department}
                        </span>
                      </div>

                      {/* Person Name */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-orange-50 text-slate-600 group-hover:text-orange-600 flex items-center justify-center shrink-0 transition-colors">
                          <Users className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs sm:text-sm font-black text-slate-800 leading-snug">
                          {item.name}
                        </h4>
                      </div>
                    </div>

                    {/* Bottom Row: Extension & Copy Action */}
                    <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2 bg-slate-50/60 -mx-3.5 -mb-3.5 px-3.5 py-2.5 rounded-b-2xl">
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-xs text-slate-500 font-medium">داخلی:</span>
                        <span className="text-sm font-black text-slate-900 tracking-wider tabular-nums font-mono">
                          {item.extension}
                        </span>
                      </div>

                      <button
                        onClick={() => handleCopy(item.id, item.extension)}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                          isCopied
                            ? 'bg-emerald-500 text-white border-emerald-500 shadow-xs'
                            : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-2xs'
                        }`}
                        title="کپی شماره داخلی"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>کپی شد</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-400" />
                            <span>کپی</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200/80 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>سانترال مرکزی هلدینگ اسپوتا فعال و در دسترس</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white border border-slate-300 hover:bg-slate-100 rounded-xl font-bold text-slate-700 transition-colors cursor-pointer"
          >
            بستن پنجره
          </button>
        </div>
      </div>
    </div>
  );
};
