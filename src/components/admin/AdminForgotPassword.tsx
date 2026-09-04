import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  KeyRound, 
  Mail, 
  ArrowLeft, 
  AlertCircle, 
  CheckCircle2, 
  Send 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AdminForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('amerupesh08@gail.com');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { requestPasswordReset } = useAuth();

  const handleResetRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);
    setIsSubmitting(true);

    try {
      const res = await requestPasswordReset(email.trim());
      if (res.success) {
        setStatusMessage({
          type: 'success',
          text: res.message || 'Password reset link dispatched. Please check your administrator email.'
        });
      } else {
        setStatusMessage({
          type: 'error',
          text: res.error || 'Failed to dispatch reset link.'
        });
      }
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: err.message || 'An unexpected error occurred.'
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
          <span>Back to Admin Sign In</span>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="text-center space-y-2 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-cyan-600/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 mx-auto flex items-center justify-center">
            <KeyRound className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Reset CMS Password
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            Enter your admin email to receive a secure, time-limited reset link.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 py-8 px-6 shadow-xl rounded-3xl border border-slate-200 dark:border-slate-800 sm:px-10 space-y-6">
          <form onSubmit={handleResetRequest} className="space-y-4">
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
                Admin Account Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@rupeshpandey.dev"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40 font-mono transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white font-mono text-xs sm:text-sm font-semibold shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Sending Link...' : 'Request Password Reset'}</span>
            </button>

            <div className="text-center pt-2">
              <Link
                to="/admin/reset-password"
                className="text-xs font-mono text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 underline"
              >
                Already have a reset token? Enter it here →
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
