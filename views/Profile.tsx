
import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col animate-in fade-in duration-500 pb-24">
      <header className="px-6 pt-6 pb-2 text-center relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-primary/10 -z-10 rounded-b-[40px]"></div>
        <div className="relative inline-block mt-4">
          <img 
            alt="Profile" 
            className="w-28 h-28 rounded-3xl border-4 border-white dark:border-slate-800 shadow-xl object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF5lGfKSIqbG_7Ls-VJeHdDAI5dT_OkMhiQRugR10za6K0TizLu4QnKb0gaiiSv5ybLPOZ58_UsgNBhZfJNeUwBD0E_E_dUNhQrWpZIhnuz84j8OXOaT072wGsM5PVERtYSMTCCEpXuQypd-KtgES0fFR_Wyj0kgFeXYlBCLWxOQnW-XnGrfQIbEwlBklK92r1SNKf50gxJEc1QoIfvtdfvd4F8Mj783_ADiLn1zk7x4ZjurvrUNQtjxaHxLfDriFXjz6RGLWKqQ3V" 
          />
          <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-800">
            <span className="material-symbols-outlined text-[20px]">edit</span>
          </button>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-6">Alex Johnson</h2>
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Senior Appraiser • Gold Ops</p>
      </header>

      <div className="px-6 mt-8 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
            <span className="material-symbols-outlined text-blue-500 mb-2">work</span>
            <p className="text-xl font-bold text-slate-900 dark:text-white">4.5 yrs</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Experience</p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-5 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
            <span className="material-symbols-outlined text-green-500 mb-2">verified_user</span>
            <p className="text-xl font-bold text-slate-900 dark:text-white">98%</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Accuracy</p>
          </div>
        </div>

        <section className="bg-white dark:bg-slate-800 rounded-3xl p-2 border border-slate-100 dark:border-slate-700 shadow-sm">
          <div className="flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-2xl transition-colors cursor-pointer">
            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined">person</span>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Personal Information</h4>
              <p className="text-xs text-slate-400">Manage contact & address</p>
            </div>
            <span className="material-symbols-outlined text-slate-300">chevron_right</span>
          </div>
          
          <div className="flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-2xl transition-colors cursor-pointer">
            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Payslips & Tax</h4>
              <p className="text-xs text-slate-400">Download recent records</p>
            </div>
            <span className="material-symbols-outlined text-slate-300">chevron_right</span>
          </div>

          <div className="flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-2xl transition-colors cursor-pointer">
            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined">security</span>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Security Settings</h4>
              <p className="text-xs text-slate-400">Password & 2FA</p>
            </div>
            <span className="material-symbols-outlined text-slate-300">chevron_right</span>
          </div>
        </section>

        <button className="w-full flex items-center justify-center gap-2 text-rose-500 font-bold py-4 hover:bg-rose-50 dark:hover:bg-rose-900/10 rounded-2xl transition-colors">
          <span className="material-symbols-outlined">logout</span>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
