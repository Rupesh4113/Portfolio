import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { HomePage } from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';
import { SkillsPage } from './pages/SkillsPage';
import { AdminPage } from './pages/AdminPage';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminForgotPassword } from './components/admin/AdminForgotPassword';
import { AdminResetPassword } from './components/admin/AdminResetPassword';

export function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
            <Route path="/admin/reset-password" element={<AdminResetPassword />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
