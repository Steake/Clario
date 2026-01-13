import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';

const Booking: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [network, setNetwork] = useState('poly');

  const handleOpenWallet = () => {
      showToast('Opening external wallet provider...', 'info');
  };

  const handleConfirm = () => {
      showToast('Payment verified via Smart Contract!', 'success');
      setTimeout(() => navigate('/app/lesson/123'), 1000);
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 items-center pt-8">
      {/* Stepper */}
      <div className="flex items-center gap-1 mb-4">
        <div className="h-1.5 w-8 rounded-full bg-primary/20"></div>
        <div className="h-1.5 w-8 rounded-full bg-primary/20"></div>
        <div className="h-1.5 w-8 rounded-full bg-primary/20"></div>
        <div className="h-1.5 w-12 rounded-full bg-primary"></div>
        <div className="h-1.5 w-8 rounded-full bg-border-light dark:bg-border-dark"></div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Order Summary */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-6">
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
                <div className="p-6 border-b border-border-light dark:border-border-dark">
                    <h3 className="font-bold text-lg mb-6">Order Summary</h3>
                    
                    <div className="flex items-start gap-4 mb-6">
                        <div className="size-16 rounded-xl bg-cover bg-center shrink-0" style={{ backgroundImage: 'url(https://picsum.photos/seed/aris/100)' }}></div>
                        <div>
                            <p className="font-bold text-base">Dr. Aris K.</p>
                            <p className="text-sm text-text-secondary">Advanced Python & AI Algorithms</p>
                            <div className="flex items-center gap-1 mt-1 text-xs font-medium">
                                <span className="material-symbols-outlined text-yellow-400 text-[14px] filled-icon">star</span>
                                4.9 (128 reviews)
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-sm">
                            <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                            </div>
                            <div>
                                <p className="font-medium">Fri, Oct 24</p>
                                <p className="text-xs text-text-secondary">10:00 AM - 11:00 AM (EST)</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-[18px]">videocam</span>
                            </div>
                            <div>
                                <p className="font-medium">Online Lesson</p>
                                <p className="text-xs text-text-secondary">Via Clario Classroom</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-surface-darker">
                    <div className="flex justify-between text-sm mb-2 text-text-secondary">
                        <span>Hourly Rate (1 hr)</span>
                        <span className="font-medium text-slate-900 dark:text-white">$50.00</span>
                    </div>
                    <div className="flex justify-between text-sm mb-4 text-text-secondary">
                        <span>Platform Fee (5%)</span>
                        <span className="font-medium text-slate-900 dark:text-white">$2.50</span>
                    </div>
                    <div className="h-px bg-border-light dark:bg-border-dark w-full mb-4"></div>
                    <div className="flex justify-between items-end">
                        <span className="font-bold text-lg">Total</span>
                        <div className="text-right">
                            <p className="font-bold text-xl">$52.50 USD</p>
                            <p className="text-primary text-sm font-medium">≈ 0.025 ETH</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-text-secondary text-xs">
                <span className="material-symbols-outlined text-[16px]">lock</span>
                Secured by Clario Escrow Smart Contract
            </div>
        </div>

        {/* Payment Rail */}
        <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-md flex flex-col h-full">
                {/* Tabs */}
                <div className="p-6 pb-0">
                    <div className="flex bg-background-light dark:bg-background-dark p-1 rounded-lg mb-6">
                        <button className="flex-1 py-2.5 rounded-md bg-white dark:bg-surface-dark shadow-sm text-sm font-bold text-primary flex items-center justify-center gap-2 transition-all">
                            <span className="material-symbols-outlined text-[18px]">currency_bitcoin</span> Crypto (Web3)
                        </button>
                        <button className="flex-1 py-2.5 rounded-md text-sm font-medium text-text-secondary flex items-center justify-center gap-2 hover:text-slate-900 dark:hover:text-white transition-all">
                            <span className="material-symbols-outlined text-[18px]">credit_card</span> Fiat
                        </button>
                    </div>
                </div>

                <div className="flex-1 px-6 pb-6 flex flex-col gap-6">
                    {/* Network Select */}
                    <div>
                        <label className="text-sm font-medium mb-2 block">Select Payment Network</label>
                        <div className="relative">
                            <select 
                                value={network} 
                                onChange={(e) => setNetwork(e.target.value)}
                                className="w-full appearance-none bg-background-light dark:bg-surface-darker border border-border-light dark:border-border-dark rounded-lg p-3 pr-10 text-base outline-none focus:border-primary"
                            >
                                <option value="eth">Ethereum (ERC-20)</option>
                                <option value="poly">Polygon (MATIC)</option>
                                <option value="sol">Solana</option>
                            </select>
                            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary">
                                <span className="material-symbols-outlined">expand_more</span>
                            </div>
                        </div>
                        {/* Gas Estimate */}
                        <div className="flex items-center gap-2 mt-2 text-xs text-text-secondary">
                            <span className="material-symbols-outlined text-[14px]">local_gas_station</span>
                            <span>Est. Network Fee: <span className="text-slate-900 dark:text-white font-medium">~$3.40 (0.001 ETH)</span></span>
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-green-500/10 text-green-600 dark:text-green-400">LOW</span>
                        </div>
                    </div>

                    {/* QR Area */}
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start bg-background-light dark:bg-surface-darker rounded-xl p-5 border border-dashed border-border-light dark:border-border-dark">
                        <div className="relative group shrink-0">
                            <div className="size-40 bg-white p-2 rounded-lg shadow-sm">
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=0x71C7656EC7ab88b098defB751B7401B5f6d89A23" alt="QR" className="w-full h-full object-contain" />
                            </div>
                            <div className="absolute -inset-1 rounded-xl border-2 border-primary/50 animate-pulse pointer-events-none"></div>
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">Scanning...</div>
                        </div>
                        
                        <div className="flex flex-col w-full gap-4">
                            <div>
                                <p className="text-sm font-medium text-text-secondary mb-1">Send exact amount</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-bold tracking-tight">0.025 ETH</span>
                                    <span className="text-sm text-text-secondary">($52.50 USD)</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-text-secondary mb-1">To this address</p>
                                <div className="relative">
                                    <input readOnly value="0x71C7656EC7ab88b098defB751B7401B5f6d89A23" className="w-full bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg py-2.5 pl-3 pr-10 text-sm font-mono truncate outline-none" />
                                    <button onClick={() => {navigator.clipboard.writeText('0x71C7656EC7ab88b098defB751B7401B5f6d89A23'); showToast('Copied address!', 'success')}} className="absolute right-2 top-1/2 -translate-y-1/2 text-text-secondary hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">content_copy</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-auto pt-2">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-sm text-text-secondary">
                                <span className="material-symbols-outlined text-[18px]">timer</span>
                                Rate expires in <span className="font-mono font-medium text-slate-900 dark:text-white">14:22</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-semibold">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                Awaiting Transaction
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={handleOpenWallet} className="flex-1 rounded-lg bg-primary hover:bg-primary-hover text-white font-bold py-3 px-4 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                                <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span> Open Wallet
                            </button>
                            <button onClick={handleConfirm} className="flex-1 rounded-lg border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-surface-darker font-medium py-3 px-4 transition-colors">
                                I've sent it
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;