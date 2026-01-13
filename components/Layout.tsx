import React, { ReactNode } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { UserRole } from '../types';

interface LayoutProps {
  children: ReactNode;
  role: UserRole;
  toggleTheme: () => void;
  isDark: boolean;
  setRole: (role: UserRole) => void;
}

const SidebarLink = ({ to, icon, label, active }: { to: string; icon: string; label: string; active: boolean }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${
      active
        ? 'bg-primary text-white shadow-lg shadow-primary/20'
        : 'text-[#617589] dark:text-[#94a3b8] hover:bg-white/50 dark:hover:bg-surface-darker hover:text-slate-900 dark:hover:text-white'
    }`}
  >
    <span className={`material-symbols-outlined ${active ? 'filled-icon' : ''}`}>{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

export const Layout: React.FC<LayoutProps> = ({ children, role, toggleTheme, isDark, setRole }) => {
  const location = useLocation();
  const navigate = useNavigate();

  if (role === UserRole.PUBLIC) {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-border-light dark:border-border-dark">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="size-8 text-primary flex items-center justify-center bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined text-[24px]">school</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight">Clario</h2>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <span className="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
              </button>
              <button
                onClick={() => { setRole(UserRole.STUDENT); navigate('/app'); }}
                className="px-5 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-bold rounded-lg transition-colors"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    );
  }

  const getNavItems = () => {
    switch (role) {
      case UserRole.STUDENT:
        return [
          { to: '/app', icon: 'dashboard', label: 'Dashboard' },
          { to: '/app/wallet', icon: 'account_balance_wallet', label: 'Wallet' },
          { to: '/app/tutors', icon: 'group', label: 'Find Tutors' },
          { to: '/app/bookings', icon: 'calendar_month', label: 'My Lessons' },
        ];
      case UserRole.TUTOR:
        return [
          { to: '/tutor', icon: 'dashboard', label: 'Dashboard' },
          { to: '/tutor/earnings', icon: 'payments', label: 'Earnings' },
          { to: '/tutor/availability', icon: 'calendar_clock', label: 'Availability' },
          { to: '/tutor/onboarding', icon: 'checklist', label: 'Verification' },
        ];
      case UserRole.ADMIN:
        return [
          { to: '/admin', icon: 'admin_panel_settings', label: 'Overview' },
          { to: '/admin/disputes', icon: 'gavel', label: 'Disputes' },
          { to: '/admin/trust', icon: 'verified_user', label: 'Trust Console' },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Sidebar */}
      <aside className="w-64 bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark flex flex-col flex-shrink-0 transition-all duration-300">
        <div className="p-6">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="size-10 flex items-center justify-center bg-primary/10 rounded-xl text-primary">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">Clario</h1>
          </div>
        </div>

        <nav className="flex-1 px-4 flex flex-col gap-2 overflow-y-auto no-scrollbar">
          {getNavItems().map((item) => (
            <SidebarLink
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
              active={location.pathname === item.to || location.pathname.startsWith(item.to + '/')}
            />
          ))}
        </nav>

        <div className="p-4 border-t border-border-light dark:border-border-dark">
          {/* Theme & Role Switcher for Demo */}
          <div className="flex gap-2 mb-4">
             <button onClick={toggleTheme} className="flex-1 py-2 rounded-lg bg-gray-100 dark:bg-surface-darker text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
          <select
            value={role}
            onChange={(e) => {
                const newRole = e.target.value as UserRole;
                setRole(newRole);
                navigate(newRole === UserRole.STUDENT ? '/app' : newRole === UserRole.TUTOR ? '/tutor' : '/admin');
            }}
            className="w-full mb-4 p-2 text-xs rounded bg-gray-100 dark:bg-surface-darker border-none outline-none dark:text-white"
          >
            <option value={UserRole.STUDENT}>Student View</option>
            <option value={UserRole.TUTOR}>Tutor View</option>
            <option value={UserRole.ADMIN}>Admin View</option>
          </select>

          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-surface-darker cursor-pointer transition-colors">
            <div 
                className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-primary"
                style={{ backgroundImage: `url('https://picsum.photos/seed/${role}/200')` }}
            ></div>
            <div className="flex flex-col overflow-hidden">
              <h3 className="text-sm font-bold truncate">
                {role === UserRole.STUDENT ? 'Alex Morgan' : role === UserRole.TUTOR ? 'Dr. Sarah' : 'Super Admin'}
              </h3>
              <p className="text-xs text-text-secondary truncate">{role === UserRole.TUTOR ? 'Verified Tutor' : role}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Header */}
        <header className="h-16 bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark flex items-center justify-between px-8 flex-shrink-0 z-10">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md hidden md:block">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </span>
              <input
                className="block w-full pl-10 pr-3 py-2 border-none rounded-lg leading-5 bg-background-light dark:bg-background-dark text-slate-900 dark:text-white placeholder-text-secondary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm transition-all"
                placeholder="Search..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            {role === UserRole.STUDENT && (
                 <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                    <span className="material-symbols-outlined text-green-500 text-[16px]">account_balance_wallet</span>
                    <span className="text-xs font-bold text-green-600 dark:text-green-400">0.45 ETH</span>
                </div>
            )}
            <button className="flex items-center justify-center size-10 rounded-lg text-text-secondary hover:bg-background-light dark:hover:bg-background-dark transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2.5 right-2.5 size-2 rounded-full bg-red-500 border-2 border-white dark:border-surface-dark"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          {children}
        </div>
      </main>
    </div>
  );
};