import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';

const LessonRoom: React.FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  const handleEndCall = () => {
      if(window.confirm("Are you sure you want to end the lesson?")) {
          showToast('Session ended. Recording saved to chain.', 'info');
          navigate('/app');
      }
  };

  const reportIssue = () => {
      showToast('Support ticket created: #9921', 'error');
  };

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background-light dark:bg-background-dark">
        {/* Custom Header for Lesson Room */}
        <header className="h-16 shrink-0 bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark flex items-center justify-between px-6 z-20">
            <div className="flex items-center gap-4">
                <div className="size-8 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[32px]">hexagon</span>
                </div>
                <h2 className="font-bold text-lg">Clario Classroom</h2>
                <div className="h-4 w-px bg-border-light dark:bg-border-dark mx-2"></div>
                <span className="text-sm font-medium text-text-secondary">Student: Alex M.</span>
            </div>
            <div className="flex gap-3 items-center">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mr-2">
                    <div className="size-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-xs font-bold text-red-500 uppercase tracking-wider">Live</span>
                </div>
                <button onClick={() => showToast('Settings panel opened', 'info')} className="flex items-center justify-center gap-2 h-9 px-3 rounded-lg bg-gray-100 dark:bg-surface-darker hover:bg-gray-200 transition-colors text-sm font-medium">
                    <span className="material-symbols-outlined text-[20px]">settings</span>
                    <span className="hidden sm:inline">Settings</span>
                </button>
            </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
            {/* Main Stage */}
            <main className="flex-1 flex flex-col p-4 gap-4 relative bg-gray-100 dark:bg-black">
                {/* Video Area */}
                <div className="flex-1 relative w-full bg-black rounded-xl overflow-hidden shadow-2xl border border-border-light dark:border-border-dark group">
                    {/* Main Feed */}
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/seed/student_vid/1200/800)' }}>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
                    </div>
                    
                    {/* PIP (Tutor) */}
                    <div className="absolute top-4 right-4 w-32 md:w-56 aspect-video bg-surface-dark rounded-lg shadow-lg border border-border-dark overflow-hidden z-10 cursor-move">
                         {isVideoOff ? (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white">
                                <span className="material-symbols-outlined text-[40px]">videocam_off</span>
                            </div>
                         ) : (
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/seed/tutor_vid/400/300)' }}></div>
                         )}
                        <div className="absolute bottom-1 right-2 text-[10px] font-bold text-white bg-black/50 px-1.5 rounded backdrop-blur-sm">YOU</div>
                        {isMuted && <div className="absolute top-1 left-1 text-red-500 bg-black/50 rounded-full p-1"><span className="material-symbols-outlined text-[14px]">mic_off</span></div>}
                    </div>

                    {/* Active Speaker */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                        <span className="material-symbols-outlined text-white text-[18px]">mic</span>
                        <span className="text-xs font-medium text-white">Alex M. (Speaking)</span>
                    </div>

                    {/* Controls Overlay */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 md:gap-4 px-6 py-3 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl transition-transform hover:scale-105">
                        <button onClick={() => setIsMuted(!isMuted)} className={`size-10 flex items-center justify-center rounded-full transition-colors ${isMuted ? 'bg-red-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                            <span className="material-symbols-outlined">{isMuted ? 'mic_off' : 'mic'}</span>
                        </button>
                        <button onClick={() => setIsVideoOff(!isVideoOff)} className={`size-10 flex items-center justify-center rounded-full transition-colors ${isVideoOff ? 'bg-red-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                            <span className="material-symbols-outlined">{isVideoOff ? 'videocam_off' : 'videocam'}</span>
                        </button>
                        <button onClick={() => showToast('Screen sharing started', 'success')} className="size-10 flex items-center justify-center rounded-full bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/20 transition-colors">
                            <span className="material-symbols-outlined">screen_share</span>
                        </button>
                        <button onClick={() => showToast('Chat panel opened', 'info')} className="size-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                            <span className="material-symbols-outlined">chat</span>
                        </button>
                        <div className="w-px h-6 bg-white/20 mx-1"></div>
                        <button onClick={handleEndCall} className="size-10 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/20 transition-colors">
                            <span className="material-symbols-outlined">call_end</span>
                        </button>
                    </div>
                </div>

                {/* Footer Status */}
                <div className="h-16 shrink-0 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl flex items-center px-6 justify-between shadow-sm">
                    <div className="flex items-center gap-6">
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-wider text-text-secondary font-bold">Session Status</span>
                            <div className="flex items-center gap-2">
                                <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="font-bold text-sm">Active</span>
                            </div>
                        </div>
                        <div className="h-8 w-px bg-border-light dark:bg-border-dark"></div>
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-wider text-text-secondary font-bold">Remaining</span>
                            <span className="font-mono text-lg font-bold">00:45:00</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <span className="hidden xl:block text-xs text-text-secondary font-medium mr-2">Tools:</span>
                        <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-surface-darker hover:bg-primary hover:text-white rounded-lg transition-colors text-sm font-medium">
                            <span className="material-symbols-outlined text-[18px]">code</span> Sandbox
                        </button>
                        <button className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-surface-darker hover:bg-primary hover:text-white rounded-lg transition-colors text-sm font-medium">
                            <span className="material-symbols-outlined text-[18px]">draw</span> Whiteboard
                        </button>
                    </div>
                </div>
            </main>

            {/* Right Sidebar */}
            <aside className="w-80 bg-surface-light dark:bg-surface-dark border-l border-border-light dark:border-border-dark flex flex-col shrink-0 z-10">
                {/* Checklist */}
                <div className="p-5 border-b border-border-light dark:border-border-dark">
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[20px]">checklist</span> Session Checklist
                    </h3>
                    <div className="flex flex-col gap-1">
                        <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer">
                            <input type="checkbox" defaultChecked className="accent-primary size-4" />
                            <span className="text-sm font-medium">Microphone: OK</span>
                        </label>
                        <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer">
                            <input type="checkbox" defaultChecked className="accent-primary size-4" />
                            <span className="text-sm font-medium">Camera: OK</span>
                        </label>
                        <div className="h-px bg-border-light dark:bg-border-dark my-2"></div>
                        <label className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer">
                            <input type="checkbox" className="accent-primary size-4 mt-0.5" />
                            <div className="flex flex-col">
                                <span className="text-sm font-medium">Goal: React Hooks</span>
                                <span className="text-xs text-text-secondary">Master useEffect dependencies</span>
                            </div>
                        </label>
                    </div>
                </div>

                {/* Trust Capsule */}
                <div className="p-5 border-b border-border-light dark:border-border-dark flex-1">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                            <span className="material-symbols-outlined text-purple-500 text-[20px]">verified_user</span> Trust Capsule
                        </h3>
                        <span className="text-[10px] font-bold text-purple-500 border border-purple-500/20 px-2 py-0.5 rounded bg-purple-500/10 animate-pulse">LIVE</span>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-surface-darker rounded-xl p-4 border border-border-light dark:border-border-dark space-y-5">
                        <div>
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-xs font-semibold text-text-secondary">Student Engagement</span>
                                <span className="text-green-500 font-bold text-lg">92%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-[92%]"></div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-xs font-semibold text-text-secondary">Trust Score Impact</span>
                                <span className="text-blue-500 font-bold flex items-center gap-0.5 bg-blue-500/10 px-2 py-0.5 rounded text-xs">
                                    <span className="material-symbols-outlined text-[14px]">trending_up</span> +1.2 pts
                                </span>
                            </div>
                            {/* Simple Bar Chart Mockup */}
                            <div className="h-16 w-full flex items-end justify-between gap-1 pt-2 border-b border-border-light dark:border-border-dark">
                                {[40, 60, 50, 80, 70, 90].map((h, i) => (
                                    <div key={i} className={`w-1/6 rounded-t-sm ${i===5 ? 'bg-blue-500' : 'bg-blue-500/20'}`} style={{ height: `${h}%` }}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-5 mt-auto">
                    <button onClick={reportIssue} className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-red-500/30 text-red-500 hover:bg-red-500/10 transition-colors font-bold text-sm">
                        <span className="material-symbols-outlined">report_problem</span> Report Issue
                    </button>
                </div>
            </aside>
        </div>
    </div>
  );
};

export default LessonRoom;