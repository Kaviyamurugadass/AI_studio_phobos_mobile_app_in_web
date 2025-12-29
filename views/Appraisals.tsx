
import React, { useState } from 'react';
import { Appraisal } from '../types';

const MOCK_APPRAISALS: Appraisal[] = [
  { id: '1', packetNumber: 'PK-8821', customerName: 'John Doe', loanAmount: 45000, grossWeight: 12.5, purity: '22K', date: 'Oct 20, 2024', isSpurious: false },
  { id: '2', packetNumber: 'PK-9910', customerName: 'Sarah Smith', loanAmount: 120000, grossWeight: 32.1, purity: '18K', date: 'Oct 18, 2024', isSpurious: true },
];

const Appraisals: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [appraisals, setAppraisals] = useState<Appraisal[]>(MOCK_APPRAISALS);

  const handleAddAppraisal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newAppraisal: Appraisal = {
      id: Math.random().toString(36).substr(2, 9),
      packetNumber: formData.get('packetNumber') as string,
      customerName: formData.get('customerName') as string,
      loanAmount: Number(formData.get('loanAmount')),
      grossWeight: Number(formData.get('grossWeight')),
      purity: formData.get('purity') as string,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      isSpurious: formData.get('spurious') === 'on',
    };
    setAppraisals([newAppraisal, ...appraisals]);
    setShowForm(false);
  };

  if (showForm) {
    return (
      <div className="flex flex-col animate-in slide-in-from-bottom-8 duration-300 min-h-screen bg-white dark:bg-background-dark pb-24">
        <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-4 bg-white dark:bg-background-dark border-b border-slate-100 dark:border-slate-800">
          <button onClick={() => setShowForm(false)} className="p-2 -ml-2 text-slate-700 dark:text-slate-200">
            <span className="material-symbols-outlined">close</span>
          </button>
          <h1 className="text-lg font-bold text-slate-900 dark:text-white">New Appraisal</h1>
          <div className="w-10"></div>
        </header>

        <form onSubmit={handleAddAppraisal} className="p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 ml-1">Customer Name *</label>
              <input name="customerName" required className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white" placeholder="Full name" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 ml-1">Packet ID *</label>
                <input name="packetNumber" required className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white" placeholder="PK-XXXX" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 ml-1">Loan Amount *</label>
                <input name="loanAmount" type="number" required className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white" placeholder="Amount" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 ml-1">Gross Wt *</label>
                <input name="grossWeight" type="number" step="0.01" required className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-3 py-3.5 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white text-sm" placeholder="grams" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 ml-1">Net Wt *</label>
                <input name="netWeight" type="number" step="0.01" required className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-3 py-3.5 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white text-sm" placeholder="grams" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 ml-1">Purity *</label>
                <select name="purity" required className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-3 py-3.5 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white text-sm">
                  <option>22K</option>
                  <option>24K</option>
                  <option>18K</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 ml-1">No of Items</label>
              <input name="itemsCount" type="number" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white" placeholder="Count" />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5 ml-1">Special Remarks *</label>
              <textarea name="remarks" required className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white" rows={3} placeholder="Describe items or conditions..."></textarea>
            </div>

            <div className="pt-2">
              <label className="flex items-center gap-3 p-4 bg-orange-50 dark:bg-orange-900/10 rounded-2xl cursor-pointer">
                <input name="spurious" type="checkbox" className="w-5 h-5 rounded border-orange-300 text-orange-600 focus:ring-orange-500" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-orange-700 dark:text-orange-400">Spurious Suspected</span>
                  <span className="text-[10px] text-orange-600 dark:text-orange-500">Flag if something is doubtful</span>
                </div>
              </label>
            </div>

            <div className="pt-2">
              <label className="flex items-center gap-3 p-4 bg-primary/5 rounded-2xl cursor-pointer">
                <input required type="checkbox" className="w-5 h-5 rounded border-blue-300 text-primary focus:ring-primary" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-800 dark:text-white">I confirm the data is accurate</span>
                  <span className="text-[10px] text-slate-500">I own up my process and appraisal findings</span>
                </div>
              </label>
            </div>
          </div>

          <button type="submit" className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
            Save Appraisal
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col animate-in fade-in duration-500 min-h-screen">
      <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-background-light dark:bg-background-dark">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Appraisals</h1>
        <button onClick={() => setShowForm(true)} className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined">add</span>
        </button>
      </header>

      <section className="px-6 py-2">
        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
          {['All', 'Today', 'Weekly', 'Fraud Alerts'].map((tab) => (
            <button key={tab} className={`whitespace-nowrap px-6 py-2 rounded-full text-xs font-bold border ${tab === 'All' ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900' : 'bg-white text-slate-500 border-slate-100 dark:bg-slate-800 dark:border-slate-700'}`}>
              {tab}
            </button>
          ))}
        </div>
      </section>

      <div className="p-6 space-y-4 pb-24">
        {appraisals.map((item) => (
          <div key={item.id} className="bg-white dark:bg-slate-800 rounded-3xl p-5 border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
            {item.isSpurious && (
              <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-tighter">
                Suspected Fraud
              </div>
            )}
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.packetNumber}</span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.customerName}</h4>
              </div>
              <div className="text-right">
                <p className="text-primary font-bold">₹{(item.loanAmount / 1000).toFixed(1)}k</p>
                <p className="text-[10px] text-slate-400">{item.date}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-50 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-300 text-[18px]">weight</span>
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">{item.grossWeight}g Gross</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-300 text-[18px]">verified</span>
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">{item.purity} Purity</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appraisals;
