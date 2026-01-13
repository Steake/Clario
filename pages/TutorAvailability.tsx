import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const HOURS = Array.from({ length: 15 }, (_, i) => i + 8); // 8 AM to 10 PM

interface Slot {
  id: string;
  day: string;
  startHour: number;
  duration: number; // in hours
  type: 'recurring' | 'override';
}

const TutorAvailability: React.FC = () => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<'weekly' | 'specific'>('weekly');
  const [slots, setSlots] = useState<Slot[]>([
    { id: '1', day: 'Mon', startHour: 9, duration: 3, type: 'recurring' },
    { id: '2', day: 'Wed', startHour: 14, duration: 4, type: 'recurring' },
    { id: '3', day: 'Fri', startHour: 10, duration: 2, type: 'recurring' },
  ]);

  const addSlot = (day: string, hour: number) => {
    // Prevent overlapping checks for simplicity in this prototype, 
    // but in real app we'd check for collision.
    const newSlot: Slot = {
      id: Math.random().toString(36).substr(2, 9),
      day,
      startHour: hour,
      duration: 1,
      type: 'recurring'
    };
    setSlots([...slots, newSlot]);
  };

  const removeSlot = (id: string) => {
    setSlots(slots.filter(s => s.id !== id));
  };

  const handleSave = () => {
      showToast('Schedule availability updated!', 'success');
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-6 h-[calc(100vh-8rem)]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
            <div>
                <h1 className="text-3xl font-black tracking-tight">Availability</h1>
                <p className="text-text-secondary">Manage your recurring schedule and exceptions.</p>
            </div>
             <div className="flex items-center gap-3">
                <div className="flex bg-surface-light dark:bg-surface-dark p-1 rounded-lg border border-border-light dark:border-border-dark">
                    <button 
                        onClick={() => setActiveTab('weekly')}
                        className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'weekly' ? 'bg-primary text-white shadow-sm' : 'text-text-secondary hover:text-slate-900 dark:hover:text-white'}`}
                    >
                        Weekly Template
                    </button>
                    <button 
                        onClick={() => setActiveTab('specific')}
                        className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'specific' ? 'bg-primary text-white shadow-sm' : 'text-text-secondary hover:text-slate-900 dark:hover:text-white'}`}
                    >
                        Date Overrides
                    </button>
                </div>
                <button onClick={handleSave} className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg hover:opacity-90 transition-opacity">
                    Save Changes
                </button>
            </div>
        </div>

        {/* Calendar Container */}
        <div className="flex-1 bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl shadow-sm overflow-hidden flex flex-col">
            {/* Days Header */}
            <div className="grid grid-cols-8 border-b border-border-light dark:border-border-dark bg-gray-50 dark:bg-surface-darker flex-shrink-0">
                <div className="p-4 border-r border-border-light dark:border-border-dark"></div> {/* Time Label Col */}
                {DAYS.map(day => (
                    <div key={day} className="p-4 text-center border-r border-border-light dark:border-border-dark last:border-r-0">
                        <span className="text-sm font-bold uppercase tracking-wider text-text-secondary">{day}</span>
                    </div>
                ))}
            </div>

            {/* Grid Scroll Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar relative">
                 <div className="grid grid-cols-8 min-h-max">
                    {/* Time Labels */}
                    <div className="flex flex-col border-r border-border-light dark:border-border-dark bg-gray-50/50 dark:bg-surface-darker/50">
                        {HOURS.map(hour => (
                            <div key={hour} className="h-16 border-b border-border-light dark:border-border-dark p-2 text-xs font-mono text-text-secondary text-right relative">
                                <span className="absolute -top-2 right-2">{hour}:00</span>
                            </div>
                        ))}
                    </div>

                    {/* Day Columns */}
                    {DAYS.map(day => (
                         <div key={day} className="flex flex-col border-r border-border-light dark:border-border-dark last:border-r-0 relative group">
                            {/* Grid Lines/Cells */}
                            {HOURS.map(hour => (
                                <div 
                                    key={hour} 
                                    onClick={() => addSlot(day, hour)} 
                                    className="h-16 border-b border-border-light dark:border-border-dark hover:bg-primary/5 cursor-pointer relative"
                                >
                                </div>
                            ))}

                            {/* Render Slots (Absolute Positioning) */}
                            {slots.filter(s => s.day === day).map(slot => (
                                <div 
                                    key={slot.id}
                                    onClick={(e) => { e.stopPropagation(); removeSlot(slot.id); }}
                                    className="absolute left-1 right-1 bg-primary hover:bg-primary-hover rounded-lg shadow-lg cursor-pointer p-2 z-10 flex flex-col overflow-hidden transition-all group/slot border border-white/10"
                                    style={{
                                        top: `${(slot.startHour - 8) * 4}rem`, // 4rem = h-16 (16 * 0.25rem)
                                        height: `calc(${slot.duration * 4}rem - 4px)`,
                                        marginTop: '2px'
                                    }}
                                >
                                     <div className="flex justify-between items-start">
                                         <span className="text-xs font-bold text-white leading-none">{slot.startHour}:00 - {slot.startHour + slot.duration}:00</span>
                                         <button className="text-white/70 hover:text-white opacity-0 group-hover/slot:opacity-100 transition-opacity">
                                             <span className="material-symbols-outlined text-[16px]">close</span>
                                         </button>
                                     </div>
                                     {slot.duration >= 2 && (
                                        <div className="mt-1 flex items-center gap-1 text-white/80">
                                            <span className="material-symbols-outlined text-[14px]">autorenew</span>
                                            <span className="text-[10px] font-medium uppercase tracking-wide">Weekly</span>
                                        </div>
                                     )}
                                </div>
                            ))}
                        </div>
                    ))}
                 </div>
            </div>
        </div>

        {/* Legend / Quick Settings */}
        <div className="shrink-0 flex items-center gap-6 text-sm text-text-secondary p-1">
             <div className="flex items-center gap-2">
                 <div className="size-3 rounded bg-primary"></div>
                 <span>Available (Click to remove)</span>
             </div>
             <div className="flex items-center gap-2">
                 <div className="size-3 rounded bg-gray-200 dark:bg-surface-darker border border-border-light dark:border-border-dark"></div>
                 <span>Unavailable (Click to add)</span>
             </div>
        </div>
    </div>
  );
};

export default TutorAvailability;