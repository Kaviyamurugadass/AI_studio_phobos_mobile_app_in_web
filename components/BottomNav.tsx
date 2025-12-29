
import React from 'react';
import { ViewType } from '../types';

interface BottomNavProps {
  activeView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeView, onNavigate }) => {
  const navItems = [
    { id: 'dashboard' as ViewType, label: 'Dashboard', icon: 'dashboard' },
    { id: 'leaves' as ViewType, label: 'Leaves', icon: 'calendar_today' },
    { id: 'appraisals' as ViewType, label: 'Appraisals', icon: 'assignment' },
    { id: 'profile' as ViewType, label: 'Profile', icon: 'person' },
  ];

  return (
    <nav className="fixed bottom-0 w-full max-w-md bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 z-50">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${
              activeView === item.id
                ? 'text-primary'
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
            }`}
          >
            <span className={`material-symbols-outlined text-[24px] mb-1 ${activeView === item.id ? 'fill-[1]' : ''}`}>
              {item.icon}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
