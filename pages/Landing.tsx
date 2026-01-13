import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserRole } from '../types';

interface LandingProps {
    setRole: (role: UserRole) => void;
}

const Landing: React.FC<LandingProps> = ({ setRole }) => {
  const navigate = useNavigate();

  const handleConnect = () => {
      setRole(UserRole.STUDENT);
      navigate('/app');
  }

  const handleBecomeTutor = () => {
      setRole(UserRole.TUTOR);
      navigate('/tutor');
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm mb-8 animate-fade-in-up">
            <span className="flex size-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">Live on Mainnet</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
            Master Any Subject.<br />
            <span className="text-primary">Human Expertise</span> meets <span className="text-purple-500">AI Speed</span>.
          </h1>
          
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            The world's first crypto-native tutoring marketplace. Pay securely with crypto, build your reputation on-chain via EQBSL, and learn instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
                onClick={handleConnect}
                className="h-14 px-8 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-lg shadow-xl shadow-primary/25 transition-all transform hover:-translate-y-1"
            >
              Get Started
            </button>
            <button 
                onClick={handleBecomeTutor}
                className="h-14 px-8 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary/50 text-slate-900 dark:text-white font-bold text-lg transition-all"
            >
              Become a Tutor
            </button>
          </div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="py-10 border-y border-border-light dark:border-border-dark bg-white/50 dark:bg-surface-dark/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
                { label: 'Total Volume', value: '$4.2M+' },
                { label: 'Verified Tutors', value: '1,200+' },
                { label: 'Sessions Completed', value: '85k+' },
                { label: 'Avg Trust Score', value: '98/100' },
            ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                    <span className="text-3xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</span>
                    <span className="text-sm font-medium text-text-secondary uppercase tracking-wide">{stat.label}</span>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;