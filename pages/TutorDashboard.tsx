import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';

const TutorDashboard: React.FC = () => {
  const { showToast } = useToast();
  const [availableBalance, setAvailableBalance] = useState(1250.00);

  const handleWithdrawAll = () => {
      if (availableBalance > 0) {
        showToast('Processing total withdrawal of $' + availableBalance.toFixed(2), 'success');
        setAvailableBalance(0);
      } else {
          showToast('No funds available to withdraw.', 'error');
      }
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-4xl font-black tracking-tight">Earnings Dashboard</h1>
                    <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs font-bold uppercase rounded border border-green-500/20">Live</span>
                </div>
                <p className="text-text-secondary">Track escrowed and available crypto earnings in real-time.</p>
            </div>
            <div className="flex gap-3">
                <button onClick={handleWithdrawAll} className="flex items-center gap-2 px-5 h-10 bg-primary hover:bg-primary-hover text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 transition-all">
                    <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span> Withdraw All
                </button>
            </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pending */}
            <div className="relative overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark p-6 shadow-sm group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-[80px] text-yellow-500">lock_clock</span>
                </div>
                <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-yellow-500">
                        <div className="size-8 rounded-full bg-yellow-500/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-[18px]">hourglass_top</span>
                        </div>
                        <p className="text-sm font-bold uppercase tracking-wider">Pending (Escrow)</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold tracking-tight">$450.00</p>
                        <p className="text-text-secondary text-sm font-medium mt-1">≈ 0.15 ETH locked</p>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-yellow-500 h-full w-[35%]"></div>
                    </div>
                    <div className="flex justify-between text-xs text-text-secondary">
                        <span>Releases on completion</span>
                        <span>3 sessions pending</span>
                    </div>
                </div>
            </div>

            {/* Available */}
            <div className="relative overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark border border-primary/30 p-6 shadow-md shadow-primary/5 group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-[80px] text-primary">account_balance</span>
                </div>
                <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-primary">
                        <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-[18px] filled-icon">check_circle</span>
                        </div>
                        <p className="text-sm font-bold uppercase tracking-wider">Available to Withdraw</p>
                    </div>
                    <div>
                        <p className="text-4xl font-bold tracking-tight">${availableBalance.toFixed(2)}</p>
                        <p className="text-text-secondary text-sm font-medium mt-1">≈ {(availableBalance / 3000).toFixed(4)} ETH ready</p>
                    </div>
                    <div className="flex gap-2 mt-1">
                        <button onClick={handleWithdrawAll} className="flex-1 h-10 bg-primary hover:bg-primary-hover text-white rounded-lg text-sm font-bold transition-all">Payout Now</button>
                    </div>
                </div>
            </div>
        </div>

        {/* History Table */}
        <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold">Recent Earnings</h3>
            <div className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 dark:bg-surface-darker border-b border-border-light dark:border-border-dark text-xs uppercase text-text-secondary font-semibold">
                        <tr>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Student & Class</th>
                            <th className="px-6 py-4 text-right">Amount</th>
                            <th className="px-6 py-4 text-center">Status</th>
                            <th className="px-6 py-4 text-center">Tx</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border-light dark:divide-border-dark text-sm">
                        {[
                            { date: 'Oct 24', student: 'Alice M.', class: 'Python Basics', amount: '$40.00', currency: 'USDC', status: 'Escrow', color: 'yellow' },
                            { date: 'Oct 22', student: 'Marcus L.', class: 'Adv. AI Logic', amount: '0.02 ETH', currency: '≈ $35.00', status: 'Released', color: 'green' },
                            { date: 'Oct 20', student: 'David K.', class: 'React Hooks', amount: '$85.00', currency: 'DAI', status: 'Released', color: 'green' },
                        ].map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50 dark:hover:bg-surface-darker/50 transition-colors">
                                <td className="px-6 py-4 text-text-secondary">{row.date}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(https://picsum.photos/seed/${row.student}/50)` }}></div>
                                        <div>
                                            <p className="font-medium">{row.student}</p>
                                            <p className="text-xs text-text-secondary">{row.class}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right font-mono font-medium">
                                    {row.amount} <span className="text-xs text-text-secondary block">{row.currency}</span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-${row.color}-500/10 text-${row.color}-500`}>
                                        <span className={`size-1.5 rounded-full bg-${row.color}-500`}></span>
                                        {row.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button className="text-text-secondary hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default TutorDashboard;