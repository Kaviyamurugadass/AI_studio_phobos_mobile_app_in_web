
import React, { useState } from 'react';
import { LeaveBalance, ViewType } from '../types';

const LEAVE_BALANCES: LeaveBalance[] = [
  { type: 'Casual Leave', used: 3, total: 12, icon: 'beach_access', colorClass: 'bg-primary' },
  { type: 'Sick Leave', used: 1, total: 10, icon: 'medication', colorClass: 'bg-rose-500' },
  { type: 'Earned Leave', used: 1, total: 15, icon: 'work_history', colorClass: 'bg-emerald-500' },
  { type: 'Compensatory Off', used: 0, total: 2, icon: 'timelapse', colorClass: 'bg-amber-500' },
];

interface LeavesOverviewProps {
  onViewChange?: (view: ViewType) => void;
}

const LeavesOverview: React.FC<LeavesOverviewProps> = ({ onViewChange }) => {
  const [activeSegment, setActiveSegment] = useState<'leaves' | 'holidays'>('leaves');

  return (
    <div className="flex flex-col animate-in fade-in slide-in-from-right-8 duration-500">
      {/* App Bar */}
      <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-4 bg-background-light dark:bg-background-dark/80 backdrop-blur-sm">
        <button onClick={() => onViewChange?.('dashboard')} className="p-2 -ml-2 text-slate-700 dark:text-slate-200">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold text-slate-900 dark:text-white">Leaves Overview</h1>
        <button className="p-2 -mr-2 text-slate-700 dark:text-slate-200">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      {/* Segmented Control */}
      <div className="px-6 mb-6">
        <div className="flex p-1 bg-slate-200 dark:bg-slate-800 rounded-xl">
          <button 
            onClick={() => setActiveSegment('leaves')}
            className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 
              ${activeSegment === 'leaves' ? 'bg-white dark:bg-slate-600 shadow-sm text-primary dark:text-white' : 'text-slate-500'}`}
          >
            Leaves
          </button>
          <button 
            onClick={() => setActiveSegment('holidays')}
            className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 
              ${activeSegment === 'holidays' ? 'bg-white dark:bg-slate-600 shadow-sm text-primary dark:text-white' : 'text-slate-500'}`}
          >
            Holidays
          </button>
        </div>
      </div>

      {activeSegment === 'leaves' ? (
        <>
          {/* Main Hero Card */}
          <div className="px-6 mb-8">
            <div className="relative overflow-hidden bg-white dark:bg-slate-800 rounded-[32px] p-8 flex flex-col items-center shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-50 dark:border-slate-700">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-10 -mt-10 blur-3xl"></div>
              
              <div className="text-center relative z-10 mb-8">
                <span className="text-6xl font-bold text-primary tracking-tight">18</span>
                <p className="text-slate-400 font-semibold text-sm mt-1 uppercase tracking-wide">Total Available Days</p>
              </div>

              <div className="w-full h-px bg-slate-100 dark:bg-slate-700 mb-8"></div>

              <div className="flex w-full justify-around relative z-10">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">5</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Used</span>
                </div>
                <div className="w-px h-10 bg-slate-100 dark:bg-slate-700"></div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">2</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Pending</span>
                </div>
              </div>
            </div>
          </div>

          {/* Breakdown List */}
          <div className="px-6 flex flex-col gap-4 pb-32">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Balance Breakdown</h3>
            {LEAVE_BALANCES.map((leave, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-50 dark:border-slate-700">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center 
                      ${leave.colorClass.replace('bg-', 'bg-').replace('-500', '-50')} 
                      ${leave.colorClass.replace('bg-', 'text-')}`}>
                      <span className="material-symbols-outlined text-[20px]">{leave.icon}</span>
                    </div>
                    <span className="font-bold text-sm text-slate-900 dark:text-white">{leave.type}</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-400">
                    <span className="text-slate-900 dark:text-white font-bold text-sm">{leave.used}</span>/{leave.total} Used
                  </div>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${leave.colorClass} rounded-full transition-all duration-1000 ease-out`} 
                    style={{ width: `${(leave.used / leave.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="px-6 py-12 flex flex-col items-center text-center">
          <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">celebration</span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No upcoming holidays</h3>
          <p className="text-slate-500 max-w-[240px]">Check back later for the next company holiday or regional events.</p>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="fixed bottom-24 left-0 right-0 z-40 max-w-md mx-auto px-6">
        <button className="w-full bg-primary hover:bg-blue-600 active:scale-95 transition-all text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-primary/30">
          <span className="material-symbols-outlined text-[20px]">add</span>
          Apply Leave
        </button>
      </div>
    </div>
  );
};

export default LeavesOverview;
