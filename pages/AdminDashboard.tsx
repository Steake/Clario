import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleSaveParameters = () => {
      showToast('EQBSL Parameters committed to chain.', 'success');
  };

  return (
    <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
        {/* Header Stats */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-6 border-b border-border-light dark:border-border-dark">
            <div>
                <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-black tracking-tight">Treasury & Trust Console</h1>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400">Admin View</span>
                </div>
                <p className="text-text-secondary text-sm font-medium mt-1">Monitoring Settlement Layer, EQBSL Parameters, and Event Bus</p>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium text-text-secondary bg-surface-light dark:bg-surface-dark p-2 rounded-lg border border-border-light dark:border-border-dark shadow-sm">
                <div className="flex items-center gap-2 px-2 border-r border-border-light dark:border-border-dark">
                    <span className="material-symbols-outlined text-orange-500 text-[18px]">local_gas_station</span>
                    <span className="text-slate-900 dark:text-white font-bold">12 Gwei</span>
                </div>
                <div className="flex items-center gap-2 px-2 border-r border-border-light dark:border-border-dark">
                    <span className="material-symbols-outlined text-blue-500 text-[18px]">deployed_code</span>
                    <span className="text-slate-900 dark:text-white font-bold">Block: 18492031</span>
                </div>
                <div className="flex items-center gap-2 px-2">
                    <span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                    <span className="text-slate-900 dark:text-white font-bold">Healthy</span>
                </div>
            </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
                { title: 'Total Liquidity (TVL)', value: '$4.2M', sub: 'USDC', change: '+2.1%', icon: 'account_balance_wallet', color: 'text-primary' },
                { title: '24h Volume', value: '$128.5K', sub: '', change: '+5.4%', icon: 'bar_chart', color: 'text-purple-500' },
                { title: 'Pending Settlements', value: '142', sub: 'Txns', change: '-1.2%', icon: 'pending_actions', color: 'text-orange-500', down: true },
                { title: 'Gas Reserves', value: '12.5', sub: 'ETH', change: 'Stable', icon: 'propane', color: 'text-blue-500', neutral: true },
            ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1 rounded-xl p-5 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm hover:border-primary/30 transition-colors">
                    <div className="flex justify-between items-center mb-1">
                        <p className="text-text-secondary text-xs font-bold uppercase tracking-wider">{stat.title}</p>
                        <span className={`material-symbols-outlined ${stat.color} opacity-60 text-[20px]`}>{stat.icon}</span>
                    </div>
                    <p className="text-2xl font-bold tracking-tight">{stat.value} <span className="text-sm text-text-secondary font-normal">{stat.sub}</span></p>
                    <div className="flex items-center gap-1 mt-1">
                        <span className={`material-symbols-outlined text-[16px] ${stat.neutral ? 'text-gray-500' : stat.down ? 'text-red-500' : 'text-green-500'}`}>
                            {stat.neutral ? 'horizontal_rule' : stat.down ? 'trending_down' : 'trending_up'}
                        </span>
                        <p className={`text-xs font-bold ${stat.neutral ? 'text-gray-500' : stat.down ? 'text-red-500' : 'text-green-500'}`}>
                            {stat.change}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className="grid grid-cols-12 gap-6">
            {/* Main Content: Trust Console */}
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
                <div className="rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-border-light dark:border-border-dark">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-[24px]">tune</span>
                            <h2 className="text-lg font-bold">Trust Console Parameters (EQBSL)</h2>
                        </div>
                        <button onClick={handleSaveParameters} className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded hover:bg-primary/20 transition-colors">Save Changes</button>
                    </div>
                    <div className="flex flex-col divide-y divide-border-light dark:divide-border-dark">
                        {[
                            { label: 'Tutor Reliability Alpha', desc: 'Weight of attendance history on rank', val: '0.85', pct: '85%', color: 'bg-primary' },
                            { label: 'AI Latency Penalty', desc: 'Rank decay per 100ms delay', val: '0.32', pct: '32%', color: 'bg-primary' },
                            { label: 'Stake Slashing Severity', desc: '% of stake burned on dispute loss', val: '15%', pct: '15%', color: 'bg-red-500' },
                        ].map((param, i) => (
                            <div key={i} className="p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                                <div className="w-full sm:w-1/3 flex flex-col">
                                    <p className="text-sm font-semibold">{param.label}</p>
                                    <p className="text-text-secondary text-xs">{param.desc}</p>
                                </div>
                                <div className="flex-1 w-full flex items-center gap-4">
                                    <div className="relative flex h-6 flex-1 items-center">
                                        <div className="h-1 w-full rounded-full bg-gray-200 dark:bg-border-dark"></div>
                                        <div className={`absolute h-1 rounded-full ${param.color}`} style={{ width: param.pct }}></div>
                                        <div className={`absolute size-4 rounded-full border-2 border-white dark:border-background-dark ${param.color} shadow-md cursor-pointer hover:scale-110 transition-transform`} style={{ left: param.pct }}></div>
                                    </div>
                                    <div className="min-w-[40px] text-right">
                                        <span className="text-sm font-bold bg-gray-100 dark:bg-surface-darker px-2 py-1 rounded">{param.val}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dispute Queue */}
                <div className="rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-border-light dark:border-border-dark">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-red-500 text-[24px]">gavel</span>
                            <h2 className="text-lg font-bold">Dispute Queue</h2>
                        </div>
                        <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold rounded">3 Pending</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 dark:bg-surface-darker border-b border-border-light dark:border-border-dark text-xs uppercase text-text-secondary font-semibold">
                                <tr>
                                    <th className="px-6 py-3">ID</th>
                                    <th className="px-6 py-3">Parties</th>
                                    <th className="px-6 py-3">Reason</th>
                                    <th className="px-6 py-3">Escrow</th>
                                    <th className="px-6 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border-light dark:divide-border-dark text-sm">
                                <tr className="hover:bg-gray-50 dark:hover:bg-surface-darker/50 transition-colors">
                                    <td className="px-6 py-4 font-bold">#D-1029</td>
                                    <td className="px-6 py-4">Alice vs AI-Tutor</td>
                                    <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800">No Show</span></td>
                                    <td className="px-6 py-4 font-bold">$25.00</td>
                                    <td className="px-6 py-4 text-right">
                                        <button onClick={() => navigate('/admin/disputes')} className="px-3 py-1.5 bg-primary text-white text-xs font-bold rounded hover:bg-primary-hover">Resolve</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Sidebar: Event Hooks */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                <div className="rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm h-full flex flex-col">
                    <div className="flex items-center justify-between px-5 py-4 border-b border-border-light dark:border-border-dark">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-text-secondary text-[20px]">webhook</span>
                            <h2 className="text-base font-bold">Live Event Hooks</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-medium text-text-secondary">Listening</span>
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto max-h-[600px] p-2 space-y-1">
                        {[
                            { event: 'Payment Broadcast', time: '10:42:01', desc: 'Settlement confirmed via Smart Contract.', icon: 'payments', color: 'green' },
                            { event: 'User Session Start', time: '10:41:55', desc: 'Student Alice joined Session #1029.', icon: 'login', color: 'blue' },
                            { event: 'AI Tutor Query', time: '10:40:12', desc: 'Response generated in 420ms.', icon: 'smart_toy', color: 'purple' },
                            { event: 'Dispute Filed', time: '10:38:22', desc: 'New dispute created for Session #1029.', icon: 'warning', color: 'orange' },
                        ].map((log, i) => (
                            <div key={i} className="group flex gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-surface-darker transition-colors cursor-default">
                                <div className="mt-1 min-w-[24px]">
                                    <span className={`material-symbols-outlined text-${log.color}-500 text-sm p-1 bg-${log.color}-500/10 rounded-md`}>{log.icon}</span>
                                </div>
                                <div className="flex flex-col gap-0.5 w-full">
                                    <div className="flex justify-between items-center w-full">
                                        <span className="text-xs font-bold">{log.event}</span>
                                        <span className="text-[10px] text-text-secondary font-mono">{log.time}</span>
                                    </div>
                                    <p className="text-xs text-text-secondary leading-snug">{log.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AdminDashboard;