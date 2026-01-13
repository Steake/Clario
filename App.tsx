import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ToastProvider } from './context/ToastContext';
import Landing from './pages/Landing';
import StudentDashboard from './pages/StudentDashboard';
import TutorDiscovery from './pages/TutorDiscovery';
import TutorDashboard from './pages/TutorDashboard';
import TutorAvailability from './pages/TutorAvailability';
import AdminDashboard from './pages/AdminDashboard';
import Booking from './pages/Booking';
import LessonRoom from './pages/LessonRoom';
import Wallet from './pages/Wallet';
import DisputeResolution from './pages/DisputeResolution';
import { UserRole } from './types';

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole>(UserRole.PUBLIC);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ToastProvider>
      <Router>
        <Layout role={role} toggleTheme={toggleTheme} isDark={isDark} setRole={setRole}>
          <Routes>
            <Route path="/" element={<Landing setRole={setRole} />} />
            
            {/* Student Routes */}
            <Route path="/app" element={role === UserRole.STUDENT ? <StudentDashboard /> : <Navigate to="/" />} />
            <Route path="/app/tutors" element={role === UserRole.STUDENT ? <TutorDiscovery /> : <Navigate to="/" />} />
            <Route path="/app/wallet" element={role === UserRole.STUDENT ? <Wallet /> : <Navigate to="/" />} />
            <Route path="/app/book/:tutorId" element={role === UserRole.STUDENT ? <Booking /> : <Navigate to="/" />} />
            <Route path="/app/lesson/:bookingId" element={role === UserRole.STUDENT ? <LessonRoom /> : <Navigate to="/" />} />
            
            {/* Tutor Routes */}
            <Route path="/tutor" element={role === UserRole.TUTOR ? <TutorDashboard /> : <Navigate to="/" />} />
            <Route path="/tutor/earnings" element={role === UserRole.TUTOR ? <TutorDashboard /> : <Navigate to="/" />} />
            <Route path="/tutor/availability" element={role === UserRole.TUTOR ? <TutorAvailability /> : <Navigate to="/" />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={role === UserRole.ADMIN ? <AdminDashboard /> : <Navigate to="/" />} />
            <Route path="/admin/disputes" element={role === UserRole.ADMIN ? <DisputeResolution /> : <Navigate to="/" />} />
            
            {/* Catch all */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </Router>
    </ToastProvider>
  );
};

export default App;