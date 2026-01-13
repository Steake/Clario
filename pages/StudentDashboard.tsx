import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';

const StudentDashboard: React.FC = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleUpgrade = () => {
      showToast('Redirecting to Pro upgrade checkout...', 'info');
      // Simulate logic
      setTimeout(() => showToast('Demo: Pro Upgrade logic would run here.', 'info'), 1000);
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8">
      {/* Welcome Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold tracking-tight">Welcome back, Alex</h2>
        <p className="text-text-secondary">You have 1 upcoming session starting in 5 minutes.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Upcoming Session Card */}
          <div className="relative overflow-hidden rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm group">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-green-500"></div>
            <div className="p-6 flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-full sm:w-32 h-24 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: 'url(https://picsum.photos/seed/react/300/200)' }}></div>
                <div className="flex-1 min-w-0 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded text-xs font-bold bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 uppercase tracking-wider">Live Now</span>
                        <span className="text-xs text-text-secondary font-mono">09:00 AM - 10:00 AM</span>
                    </div>
                    <h3 className="text-xl font-bold truncate mb-1">Advanced React Patterns</h3>
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                        <div className="size-5 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/seed/tutor1/50)' }}></div>
                        <p className="text-sm text-text-secondary">with <span className="font-medium text-slate-900 dark:text-white">AI Tutor Alpha</span></p>
                    </div>
                </div>
                <Link to="/app/lesson/123" className="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">videocam</span>
                    Join Class
                </Link>
            </div>
          </div>

          {/* Featured Tutors */}
          <div>
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Recommended for You</h3>
                <Link to="/app/tutors" className="text-sm font-medium text-primary hover:underline">View all</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    { name: 'James Wilson', role: 'Computer Science • PhD', rate: '0.02 ETH', type: 'Human', avatar: 'https://picsum.photos/seed/james/200' },
                    { name: 'Luna AI', role: 'Language Arts • GPT-4', rate: '0.002 ETH', type: 'AI Agent', avatar: 'https://picsum.photos/seed/luna/200' }
                ].map((tutor, i) => (
                    <Link to={`/app/book/${i}`} key={i} className="p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary/50 transition-all group">
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex gap-3">
                                <div className="size-12 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${tutor.avatar})` }}></div>
                                <div>
                                    <h4 className="font-bold">{tutor.name}</h4>
                                    <p className="text-xs text-text-secondary">{tutor.role}</p>
                                </div>
                            </div>
                            <span className={`text-[10px] font-bold px-2 py-1 rounded border ${tutor.type === 'AI Agent' ? 'bg-purple-500/10 text-purple-500 border-purple-500/20' : 'bg-blue-500/10 text-blue-500 border-blue-500/20'}`}>{tutor.type}</span>
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-border-light dark:border-border-dark">
                            <div className="text-xs">
                                <span className="text-text-secondary block">Rate</span>
                                <span className="font-bold font-mono">{tutor.rate}</span>
                            </div>
                            <button className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-[18px]">add</span>
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="flex flex-col gap-6">
            {/* Wallet Widget */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-surface-light to-gray-50 dark:from-surface-dark dark:to-surface-darker border border-border-light dark:border-border-dark shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                        Wallet Hub
                    </h3>
                    <Link to="/app/wallet" className="text-primary hover:text-primary-hover">
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
                <div className="mb-6">
                    <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">Total Balance</p>
                    <h2 className="text-3xl font-black">$1,240.50</h2>
                    <p className="text-sm text-green-500 font-medium flex items-center gap-1 mt-1">
                        <span className="material-symbols-outlined text-[16px]">trending_up</span> +2.4%
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <button onClick={() => navigate('/app/wallet')} className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-hover transition-colors">
                        <span className="material-symbols-outlined text-[18px]">add</span> Top Up
                    </button>
                    <button onClick={() => navigate('/app/wallet')} className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border-light dark:border-border-dark font-bold text-sm hover:bg-gray-100 dark:hover:bg-[#2a3441] transition-colors">
                        <span className="material-symbols-outlined text-[18px]">swap_horiz</span> Swap
                    </button>
                </div>
            </div>

            {/* Trust Score */}
            <div className="p-6 rounded-2xl bg-[#101922] border border-border-dark relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-symbols-outlined text-[100px]">shield</span>
                </div>
                <h3 className="font-bold relative z-10 mb-2">Your Trust Rank</h3>
                <div className="flex items-center gap-2 mb-4 relative z-10">
                    <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">star</span> Gold Tier
                    </span>
                </div>
                <p className="text-sm text-gray-400 mb-4 relative z-10">Top 10% of students. 5% off booking fees.</p>
                <div className="w-full bg-gray-800 rounded-full h-2 relative z-10">
                    <div className="bg-gradient-to-r from-primary to-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-xs text-gray-500 text-right mt-1 font-mono">1,250 / 1,500 pts</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;