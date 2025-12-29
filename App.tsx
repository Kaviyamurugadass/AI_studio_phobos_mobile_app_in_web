
import React, { useState } from 'react';
import { ViewType } from './types';
import Dashboard from './views/Dashboard';
import LeavesOverview from './views/LeavesOverview';
import Appraisals from './views/Appraisals';
import Profile from './views/Profile';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onViewChange={setCurrentView} />;
      case 'leaves':
        return <LeavesOverview onViewChange={setCurrentView} />;
      case 'appraisals':
        return <Appraisals />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="flex justify-center bg-slate-200 min-h-screen">
      <div className="relative w-full max-w-md bg-background-light dark:bg-background-dark min-h-screen flex flex-col shadow-2xl overflow-hidden">
        <main className="flex-1 overflow-y-auto no-scrollbar pb-20">
          {renderView()}
        </main>
        <BottomNav activeView={currentView} onNavigate={setCurrentView} />
      </div>
    </div>
  );
};

export default App;
