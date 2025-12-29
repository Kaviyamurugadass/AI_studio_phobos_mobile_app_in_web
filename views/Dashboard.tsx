
import React from 'react';
import { LeaveStatus, LeaveRequest, ViewType } from '../types';

const MOCK_LEAVES: LeaveRequest[] = [
  {
    id: '1',
    type: 'Sick Leave',
    startDate: 'Sep 12',
    endDate: 'Sep 14',
    status: LeaveStatus.APPROVED,
    icon: 'flight_takeoff',
    colorClass: 'teal',
  },
  {
    id: '2',
    type: 'Annual Leave',
    startDate: 'Aug 01',
    endDate: 'Aug 05',
    status: LeaveStatus.COMPLETED,
    icon: 'beach_access',
    colorClass: 'purple',
  }
];

interface DashboardProps {
  onViewChange: (view: ViewType) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onViewChange }) => {
  return (
    <div className="flex flex-col animate-in fade-in duration-500">
      {/* Top Header */}
      <header className="flex items-center justify-between px-6 pt-6 pb-2">
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center p-2 -ml-2 text-slate-800 dark:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
        </div>
        <div className="relative">
          <img 
            alt="Profile" 
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF5lGfKSIqbG_7Ls-VJeHdDAI5dT_OkMhiQRugR10za6K0TizLu4QnKb0gaiiSv5ybLPOZ58_UsgNBhZfJNeUwBD0E_E_dUNhQrWpZIhnuz84j8OXOaT072wGsM5PVERtYSMTCCEpXuQypd-KtgES0fFR_Wyj0kgFeXYlBCLWxOQnW-XnGrfQIbEwlBklK92r1SNKf50gxJEc1QoIfvtdfvd4F8Mj783_ADiLn1zk7x4ZjurvrUNQtjxaHxLfDriFXjz6RGLWKqQ3V" 
          />
        </div>
      </header>

      {/* Welcome Message */}
      <section className="px-6 py-4">
        <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-1">Monday, Oct 24</p>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Good Morning, Alex 👋</h2>
      </section>

      {/* Quick Overview Stats */}
      <section className="px-6 py-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Overview</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl flex flex-col items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-primary text-[20px] fill-[1]">check_circle</span>
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">12</span>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-tighter">Active</span>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl flex flex-col items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-orange-500 text-[20px] fill-[1]">pending</span>
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">4</span>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-tighter">Pending</span>
          </div>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl flex flex-col items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-purple-500 text-[20px] fill-[1]">calendar_month</span>
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white text-center">Oct</span>
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-tighter">Month</span>
          </div>
        </div>
      </section>

      {/* Packet Appraisals Card */}
      <section className="px-6 py-4">
        <div className="relative overflow-hidden bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-md border border-slate-100 dark:border-slate-700 group">
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 mb-5">
              <span className="material-symbols-outlined text-white text-[32px]">assignment_turned_in</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Packet Appraisals</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              Your performance review cycle is open. Record your achievements and manage your goals.
            </p>
            <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl transition-all active:scale-[0.98]">
              View Details
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Recent Leaves */}
      <section className="px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Leaves</h3>
          <button 
            onClick={() => onViewChange('leaves')}
            className="text-primary text-sm font-semibold hover:underline"
          >
            See All
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {MOCK_LEAVES.map((leave) => (
            <div key={leave.id} className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-50 dark:border-slate-700 shadow-sm">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 
                ${leave.colorClass === 'teal' ? 'bg-teal-50 text-teal-600' : 'bg-purple-50 text-purple-600'}`}>
                <span className="material-symbols-outlined text-[20px]">{leave.icon}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-900 dark:text-white">{leave.type}</p>
                <p className="text-[11px] text-slate-400 font-medium">{leave.startDate} - {leave.endDate}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-[10px] font-bold 
                ${leave.status === LeaveStatus.APPROVED ? 'bg-green-50 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
                {leave.status}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
