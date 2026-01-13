import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';

const Wallet: React.FC = () => {
  const { showToast } = useToast();
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);

  const handleDeposit = () => {
      setShowDeposit(true);
  };

  const handleWithdraw = () => {
      setShowWithdraw(true);
  };

  const executeWithdraw = () => {
      showToast('Withdrawal initiated! Processing on-chain...', 'success');
      setShowWithdraw(false);
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8 relative">
      {/* Deposit Modal Overlay */}
      {showDeposit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
              <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-2xl max-w-sm w-full border border-border-light dark:border-border-dark">
                  <h3 className="text-xl font-bold mb-4">Deposit Funds</h3>
                  <div className="flex justify-center mb-4 p-4 bg-white rounded-xl">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=0xAlexWalletAddress" alt="QR" className="w-48 h-48" />
                  </div>
                  <p className="text-sm text-center text-text-secondary mb-4 font-mono bg-gray-100 dark:bg-surface-darker p-2 rounded break-all">
                      0x71C7656EC7ab88b098defB751B7401B5f6d89A23
                  </p>
                  <button onClick={() => { navigator.clipboard.writeText('0x71C7656EC7ab88b098defB751B7401B5f6d89A23'); showToast('Address copied!', 'success'); }} className="w-full mb-2 py-2 bg-gray-100 dark:bg-surface-darker hover:bg-gray-200 rounded-lg font-bold text-sm">
                      Copy Address
                  </button>
                  <button onClick={() => setShowDeposit(false)} className="w-full py-2 bg-primary text-white rounded-lg font-bold">
                      Done
                  </button>
              </div>
          </div>
      )}

      {/* Withdraw Modal Overlay */}
      {showWithdraw && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
              <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-2xl max-w-sm w-full border border-border-light dark:border-border-dark">
                  <h3 className="text-xl font-bold mb-4">Withdraw Funds</h3>
                  <div className="flex flex-col gap-3 mb-6">
                      <div>
                          <label className="text-xs font-bold uppercase text-text-secondary">Amount</label>
                          <input type="number" placeholder="0.00" className="w-full p-2 bg-background-light dark:bg-surface-darker rounded border border-border-light dark:border-border-dark outline-none focus:border-primary" />
                      </div>
                      <div>
                          <label className="text-xs font-bold uppercase text-text-secondary">To Address</label>
                          <input type="text" placeholder="0x..." className="w-full p-2 bg-background-light dark:bg-surface-darker rounded border border-border-light dark:border-border-dark outline-none focus:border-primary" />
                      </div>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setShowWithdraw(false)} className="flex-1 py-2 bg-gray-100 dark:bg-surface-darker hover:bg-gray-200 rounded-lg font-bold text-sm">
                        Cancel
                    </button>
                    <button onClick={executeWithdraw} className="flex-1 py-2 bg-primary text-white rounded-lg font-bold">
                        Confirm
                    </button>
                  </div>
              </div>
          </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-2 text-sm text-text-secondary">
        <span className="hover:text-primary cursor-pointer">Home</span>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <span className="text-slate-900 dark:text-white font-medium">Wallet</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 w-full">
            <h1 className="text-3xl font-bold mb-6">Wallet Hub</h1>
            
            {/* Main Balance Card */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 border border-border-light dark:border-border-dark shadow-sm mb-8">
                <div className="flex flex-col md:flex-row justify-between gap-8 items-end">
                    <div>
                        <p className="text-text-secondary font-medium mb-2 flex items-center gap-2">
                            Total Estimated Balance
                            <span className="material-symbols-outlined text-[18px] cursor-pointer">visibility</span>
                        </p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-black tracking-tight">$1,240.50</span>
                            <span className="text-xl text-text-secondary font-medium">USD</span>
                        </div>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                        <button onClick={handleDeposit} className="flex-1 md:flex-none h-12 px-6 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined text-[20px]">add</span> Deposit
                        </button>
                        <button onClick={handleWithdraw} className="flex-1 md:flex-none h-12 px-6 bg-surface-light dark:bg-surface-darker border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-[#2a3441] rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">arrow_upward</span> Withdraw
                        </button>
                    </div>
                </div>
            </div>

            {/* Asset Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                    { name: 'Ethereum', symbol: 'ETH', amount: '0.452', value: '$850.20', icon: 'diamond', color: 'text-purple-400', bg: 'bg-purple-400/10' },
                    { name: 'Polygon', symbol: 'MATIC', amount: '150.00', value: '$120.45', icon: 'hexagon', color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
                    { name: 'USDC', symbol: 'USDC', amount: '269.85', value: '$269.85', icon: 'attach_money', color: 'text-green-400', bg: 'bg-green-400/10' },
                ].map((asset, i) => (
                    <div key={i} className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 border border-border-light dark:border-border-dark hover:border-primary/50 transition-colors cursor-pointer group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className={`size-10 rounded-full ${asset.bg} ${asset.color} flex items-center justify-center border border-current/20`}>
                                    <span className="material-symbols-outlined">{asset.icon}</span>
                                </div>
                                <div>
                                    <p className="font-bold leading-tight">{asset.name}</p>
                                    <p className="text-xs text-text-secondary">{asset.symbol}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">{asset.amount}</p>
                            <p className="text-sm text-text-secondary">≈ {asset.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
                <div className="p-5 border-b border-border-light dark:border-border-dark flex justify-between items-center">
                    <h3 className="font-bold text-lg">Transaction History</h3>
                    <select className="bg-transparent text-sm font-medium text-text-secondary outline-none cursor-pointer">
                        <option>All Types</option>
                        <option>Payments</option>
                        <option>Deposits</option>
                    </select>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-text-secondary uppercase bg-gray-50 dark:bg-surface-darker">
                            <tr>
                                <th className="px-6 py-4 font-medium">Transaction</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-light dark:divide-border-dark">
                            {[
                                { type: 'Lesson Payment', user: 'Sarah Wilson', date: 'Oct 24', status: 'Completed', amount: '-$45.00', icon: 'school', color: 'text-primary' },
                                { type: 'Escrow Hold', user: 'David Chen', date: 'Oct 26', status: 'In Escrow', amount: '-$60.00', icon: 'handshake', color: 'text-amber-500' },
                                { type: 'Deposit (ETH)', user: 'Self', date: 'Oct 20', status: 'Completed', amount: '+0.2 ETH', icon: 'add_card', color: 'text-green-500' },
                            ].map((tx, i) => (
                                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-surface-darker/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`size-8 rounded-full bg-current/10 flex items-center justify-center ${tx.color}`}>
                                                <span className="material-symbols-outlined text-[18px]">{tx.icon}</span>
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-900 dark:text-white">{tx.type}</p>
                                                <p className="text-xs text-text-secondary">{tx.user}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-text-secondary">{tx.date}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-0.5 rounded text-xs font-medium border ${
                                            tx.status === 'Completed' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 
                                            'bg-amber-500/10 text-amber-500 border-amber-500/20'
                                        }`}>
                                            {tx.status}
                                        </span>
                                    </td>
                                    <td className={`px-6 py-4 text-right font-medium ${tx.amount.startsWith('+') ? 'text-green-500' : 'text-slate-900 dark:text-white'}`}>
                                        {tx.amount}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        {/* Right Sidebar - Payout Book */}
        <div className="lg:w-80 w-full flex flex-col gap-6">
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-5">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold">Payout Book</h3>
                    <button onClick={() => showToast('Demo: Address adding logic', 'info')} className="text-primary hover:bg-primary/10 p-1.5 rounded-lg transition-colors">
                        <span className="material-symbols-outlined text-[20px]">add</span>
                    </button>
                </div>
                <p className="text-xs text-text-secondary mb-4">Saved addresses for quick withdrawals.</p>
                <div className="flex flex-col gap-3">
                    <div className="bg-background-light dark:bg-background-dark p-3 rounded-lg border border-border-light dark:border-border-dark flex items-center justify-between group hover:border-slate-400 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                                <span className="material-symbols-outlined text-[18px]">wallet</span>
                            </div>
                            <div>
                                <p className="text-sm font-medium">My MetaMask</p>
                                <p className="text-xs text-text-secondary font-mono">0x4a...3B19</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#101922] to-primary/20 dark:from-[#1e2832] dark:to-[#0f172a] rounded-xl p-5 border border-primary/30 relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                        <span className="material-symbols-outlined text-[18px]">stars</span>
                        <span className="text-xs font-bold uppercase tracking-wider">Clario Pro</span>
                    </div>
                    <h4 className="font-bold text-lg text-white mb-2">Save on Fees</h4>
                    <p className="text-sm text-gray-300 mb-4">Pro students get 0% platform fees on all crypto withdrawals.</p>
                    <button onClick={() => showToast('Upgraded to Pro!', 'success')} className="w-full py-2 bg-white text-slate-900 font-bold text-sm rounded-lg hover:bg-gray-100 transition-colors">Upgrade Now</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;