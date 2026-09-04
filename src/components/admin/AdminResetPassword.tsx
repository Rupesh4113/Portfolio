import React, { useState } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { 
  KeyRound, 
  Lock, 
  ArrowLeft, 
  AlertCircle, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AdminResetPassword: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialToken = searchParams.get('token') || '';
  
  const [token, setToken] = useState(initialToken);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!token.trim()) {
      setStatusMessage({ type: 'error', text: 'Please provide the one-time reset token.' });
      return;
    }

    if (newPassword.length < 8) {
      setStatusMessage({ type: 'error', text: 'New password must contain at least 8 characters.' });
      return;
    }

    if (newPassword !== confirmPassword) {
      setStatusMessage({ type: 'error', text: 'Password confirmation does not match.' });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await resetPassword(token.trim(), newPassword);
      if (res.success) {
        setStatusMessage({
          type: 'success',
          text: 'Password successfully updated. Redirecting to admin sign in...'
        });
        setTimeout(() => {
          navigate('/admin/login');
        }, 2000);
      } else {
        setStatusMessage({
          type: 'error',
          text: res.error || 'Failed to reset password. The token may be expired or already used.'
        });
      }
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: err.message || 'An error occurred during password reset.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080d1a] flex flex-col justify-center py-12 sm:px-6 lg:px-8 tech-grid-pattern">
      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4 mb-4">
        <Link
          to="/admin/login"
          className="inline-flex items-center space-x-2 text-xs font-mono text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Sign In</span>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="text-center space-y-2 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-cyan-600/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 mx-auto flex items-center justify-center">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Set New Password
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            Enter your verification token and select a secure password.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 py-8 px-6 shadow-xl rounded-3xl border border-slate-200 dark:border-slate-800 sm:px-10 space-y-6">
          <form onSubmit={handleResetSubmit} className="space-y-4">
            {statusMessage && (
              <div
                className={`p-3.5 rounded-xl text-xs font-mono flex items-center space-x-2 ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                    : 'bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400'
                }`}
              >
                {statusMessage.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 shrink-0" />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                One-Time Reset Token
              </label>
              <div className="relative">
                <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="Paste your reset token..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40 font-mono transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                New Password (minimum 8 characters)
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40 font-mono transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Confirm New Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40 font-mono transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white font-mono text-xs sm:text-sm font-semibold shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{isSubmitting ? 'Updating Password...' : 'Save New Password'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
