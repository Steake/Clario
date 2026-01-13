import React from 'react';
import { useToast } from '../context/ToastContext';
import { useNavigate } from 'react-router-dom';

const DisputeResolution: React.FC = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleAction = (action: string) => {
      if(window.confirm(`Confirm action: ${action}?`)) {
          showToast(`Processing ${action}...`, 'info');
          setTimeout(() => {
              showToast(`${action} completed successfully. Case closed.`, 'success');
              navigate('/admin');
          }, 1500);
      }
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm text-text-secondary">
                <span className="cursor-pointer hover:text-primary" onClick={() => navigate('/admin')}>Disputes</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                <span className="text-slate-900 dark:text-white font-medium">Case #4922-AX</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <h1 className="text-3xl font-black tracking-tight">Case #4922-AX</h1>
                        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-sm font-bold rounded-full border border-orange-200 dark:border-orange-800 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px]">warning</span> Disputed
                        </span>
                    </div>
                    <p className="text-text-secondary text-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span> Oct 24, 2023 • 10:00 AM UTC
                    </p>
                </div>
                <div className="text-right flex flex-col items-end">
                    <p className="text-sm font-medium text-text-secondary">Disputed Amount</p>
                    <p className="text-2xl font-bold font-mono">0.4 ETH <span className="text-base font-normal text-text-secondary">(~$750.00)</span></p>
                </div>
            </div>
        </div>

        {/* Evidence Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            {/* Student Report */}
            <div className="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
                <div className="p-4 bg-gray-50 dark:bg-surface-darker border-b border-border-light dark:border-border-dark flex justify-between items-center">
                    <h3 className="font-bold">Student Report</h3>
                    <span className="material-symbols-outlined text-text-secondary">person</span>
                </div>
                <div className="p-5 flex-1 flex flex-col gap-4">
                    <div>
                        <label className="text-xs font-bold text-text-secondary uppercase tracking-wide">Claim</label>
                        <p className="mt-2 leading-relaxed">"The tutor disconnected after just 10 minutes of the 1 hour session. I waited in the room for another 20 minutes but they never returned."</p>
                    </div>
                    <div>
                        <label className="text-xs font-bold text-text-secondary uppercase tracking-wide">Attachments</label>
                        <div className="mt-2 flex items-center gap-3 p-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
                            <span className="material-symbols-outlined text-text-secondary">image</span>
                            <div className="flex-1 overflow-hidden">
                                <p className="text-sm font-medium truncate">screenshot_proof.png</p>
                                <p className="text-xs text-text-secondary">2.4 MB</p>
                            </div>
                            <span onClick={() => showToast('Downloading file...', 'info')} className="material-symbols-outlined text-text-secondary cursor-pointer hover:text-primary">download</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* System Logs */}
            <div className="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
                <div className="p-4 bg-gray-50 dark:bg-surface-darker border-b border-border-light dark:border-border-dark flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <h3 className="font-bold">Session Logs</h3>
                        <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-xs font-bold uppercase rounded">System</span>
                    </div>
                </div>
                <div className="flex-1 relative bg-background-light dark:bg-[#0d1217]">
                    <div className="absolute inset-0 overflow-y-auto p-4">
                        <div className="relative border-l-2 border-border-light dark:border-border-dark ml-3 space-y-6 pb-2">
                            {[
                                { time: '10:00:05', title: 'Session Started', desc: 'Handshake successful.', color: 'green' },
                                { time: '10:02:12', title: 'Chat Active', desc: 'Messages exchanged.', color: 'blue' },
                                { time: '10:10:45', title: 'Connection Interruption', desc: 'Student client packet loss > 90%', color: 'orange' },
                                { time: '10:58:22', title: 'Session Auto-Ended', desc: '', color: 'gray' },
                            ].map((log, i) => (
                                <div key={i} className="relative pl-6">
                                    <div className={`absolute -left-[9px] top-0 size-4 rounded-full bg-${log.color}-500 border-2 border-white dark:border-background-dark`}></div>
                                    <p className="text-xs font-bold text-text-secondary uppercase">{log.time} AM UTC</p>
                                    <p className="text-sm font-medium mt-1">{log.title}</p>
                                    {log.desc && <p className="text-xs text-text-secondary">{log.desc}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Tutor Response */}
            <div className="flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
                <div className="p-4 bg-gray-50 dark:bg-surface-darker border-b border-border-light dark:border-border-dark flex justify-between items-center">
                    <h3 className="font-bold">Tutor Response</h3>
                    <span className="material-symbols-outlined text-primary">smart_toy</span>
                </div>
                <div className="p-5 flex-1 flex flex-col gap-4">
                    <div>
                        <label className="text-xs font-bold text-text-secondary uppercase tracking-wide">Rebuttal</label>
                        <p className="mt-2 leading-relaxed">"Analysis of session metadata indicates local network failure on student client side. AI Tutor remained active and ready to transmit for the full duration."</p>
                    </div>
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg">
                        <p className="text-sm text-blue-800 dark:text-blue-300 font-medium mb-1">AI Logic Note</p>
                        <p className="text-xs text-blue-600 dark:text-blue-400">Model verified connectivity every 30s. Ping logs available in system backend.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Action Panel */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm p-6 mb-10">
            <h3 className="text-lg font-bold mb-2">Final Ruling</h3>
            <p className="text-sm text-text-secondary mb-6">Select an action to resolve this dispute. This action is irreversible.</p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="flex gap-2 w-full sm:w-auto">
                    <button onClick={() => handleAction('Full Refund')} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-transparent bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 font-bold transition-colors">
                        <span className="material-symbols-outlined text-[20px]">undo</span> Full Refund
                    </button>
                    <button onClick={() => handleAction('Partial Refund')} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-transparent text-slate-900 dark:text-white hover:bg-gray-50 dark:hover:bg-surface-darker font-bold transition-colors">
                        Partial Refund
                    </button>
                </div>
                <div className="hidden sm:block h-8 w-px bg-border-light dark:bg-border-dark mx-2"></div>
                <button onClick={() => handleAction('Release to Tutor')} className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-hover font-bold shadow-sm transition-colors">
                    <span className="material-symbols-outlined text-[20px]">check_circle</span> Release to Tutor
                </button>
            </div>
        </div>
    </div>
  );
};

export default DisputeResolution;