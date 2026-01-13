import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CATEGORIES = ['All', 'Computer Science', 'Mathematics', 'Languages', 'Arts', 'AI Tutors'];

const TUTORS = [
  { id: 1, name: 'Dr. Sarah Wilson', subject: 'Computer Science', type: 'Human', rate: '0.02 ETH', rating: 4.9, reviews: 120, img: 'https://picsum.photos/seed/sarah/200' },
  { id: 2, name: 'Luna AI', subject: 'Languages', type: 'AI Agent', rate: '0.002 ETH', rating: 4.5, reviews: 850, img: 'https://picsum.photos/seed/luna/200' },
  { id: 3, name: 'Mark Chen', subject: 'Mathematics', type: 'Human', rate: '0.015 ETH', rating: 4.8, reviews: 45, img: 'https://picsum.photos/seed/mark/200' },
  { id: 4, name: 'Pythagoras Bot', subject: 'Mathematics', type: 'AI Agent', rate: '0.001 ETH', rating: 4.2, reviews: 200, img: 'https://picsum.photos/seed/math/200' },
  { id: 5, name: 'Elena Rodriguez', subject: 'Arts', type: 'Human', rate: '0.025 ETH', rating: 5.0, reviews: 32, img: 'https://picsum.photos/seed/elena/200' },
  { id: 6, name: 'CodeMaster X', subject: 'Computer Science', type: 'AI Agent', rate: '0.005 ETH', rating: 4.7, reviews: 500, img: 'https://picsum.photos/seed/code/200' },
];

const TutorDiscovery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTutors = activeCategory === 'All' 
    ? TUTORS 
    : TUTORS.filter(t => t.subject === activeCategory || (activeCategory === 'AI Tutors' && t.type === 'AI Agent'));

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-black tracking-tight">Find a Tutor</h1>
        <p className="text-text-secondary">Connect with expert humans or instant AI tutors.</p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
              activeCategory === cat 
                ? 'bg-primary text-white shadow-md shadow-primary/20' 
                : 'bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-surface-darker'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTutors.map((tutor) => (
          <Link to={`/app/book/${tutor.id}`} key={tutor.id} className="group bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl p-5 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 flex flex-col gap-4">
             <div className="flex items-start justify-between">
                <div className="flex gap-4">
                    <div className="size-14 rounded-full bg-cover bg-center border border-border-light dark:border-border-dark" style={{ backgroundImage: `url(${tutor.img})` }}></div>
                    <div>
                        <h3 className="font-bold text-lg leading-tight">{tutor.name}</h3>
                        <p className="text-sm text-text-secondary">{tutor.subject}</p>
                    </div>
                </div>
                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border ${
                    tutor.type === 'AI Agent' 
                    ? 'bg-purple-500/10 text-purple-500 border-purple-500/20' 
                    : 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                }`}>
                    {tutor.type}
                </span>
             </div>
             
             <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-yellow-500 font-bold">
                    <span className="material-symbols-outlined text-[16px] filled-icon">star</span>
                    {tutor.rating}
                    <span className="text-text-secondary font-medium ml-1">({tutor.reviews})</span>
                </div>
                <div className="h-4 w-px bg-border-light dark:bg-border-dark"></div>
                <div className="font-mono font-medium">{tutor.rate} / hr</div>
             </div>

             <div className="mt-auto pt-4 border-t border-border-light dark:border-border-dark">
                <button className="w-full py-2.5 rounded-xl bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-all">
                    Book Session
                </button>
             </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TutorDiscovery;