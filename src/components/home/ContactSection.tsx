import React, { useState } from 'react';
import {
  Mail,
  Send,
  MapPin,
  Phone,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../common/SocialIcons';
import { submitContactMessage } from '../../lib/api';
import { fireConfetti } from '../../lib/utils';

interface ContactSectionProps {
  email?: string;
  phone?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  location?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  email = 'amerupesh08@gmail.com',
  phone = '+91 88673 82604',
  linkedinUrl = 'https://www.linkedin.com/in/rupesh-kumar-pandey-9016543b/',
  githubUrl = 'https://github.com/Rupesh4113',
  location = 'Whitefield, Bengaluru, India'
}) => {
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Honeypot field for anti-spam bots
  const [companyHoneypot, setCompanyHoneypot] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    // Spam bot check
    if (companyHoneypot) {
      // Silently ignore bot submission
      setStatusMessage({ type: 'success', text: 'Thank you for reaching out! I will respond promptly.' });
      return;
    }

    if (!name.trim() || !senderEmail.trim() || !message.trim()) {
      setStatusMessage({ type: 'error', text: 'Please complete all required fields.' });
      return;
    }

    // Basic email format check
    if (!senderEmail.includes('@') || !senderEmail.includes('.')) {
      setStatusMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    try {
      const ok = await submitContactMessage({
        name: name.trim(),
        email: senderEmail.trim(),
        subject: subject.trim() || 'General Inquiry / Opportunity',
        message: message.trim()
      });

      if (ok) {
        setStatusMessage({
          type: 'success',
          text: 'Message sent successfully! Thank you for getting in touch.'
        });
        fireConfetti();
        setName('');
        setSenderEmail('');
        setSubject('');
        setMessage('');
      } else {
        setStatusMessage({
          type: 'error',
          text: 'Unable to deliver message at this moment. Please email me directly.'
        });
      }
    } catch (err) {
      setStatusMessage({
        type: 'error',
        text: 'A connection error occurred. Please try again or reach out via LinkedIn.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let's build data-driven solutions.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Open to discussing Senior Data Scientist leadership roles, predictive modeling architecture, and strategic advisory.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Info Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-lg space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Get in Touch Directly
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  I typically respond within 24 hours to professional inquiries and recruitment discussions.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center space-x-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition group"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Email</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{email}</span>
                  </div>
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition group"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">LinkedIn</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">https://www.linkedin.com/in/rupesh-kumar-pandey-9016543b/</span>
                  </div>
                </a>

                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition group"
                >
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-200 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">GitHub</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">https://github.com/Rupesh4113</span>
                  </div>
                </a>

                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="flex items-center space-x-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition group"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Phone / Mobile</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{phone}</span>
                  </div>
                </a>

                <div className="flex items-center space-x-3 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Location</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot hidden input */}
                <input
                  type="text"
                  name="company_trap"
                  value={companyHoneypot}
                  onChange={(e) => setCompanyHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 font-mono transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 font-mono transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Senior Data Scientist Opportunity / Consulting"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 font-mono transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe the opportunity or project challenge..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 font-mono transition"
                  />
                </div>

                {statusMessage && (
                  <div
                    className={`p-3.5 rounded-xl text-xs font-mono flex items-center space-x-2 ${statusMessage.type === 'success'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                        : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'
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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white text-xs sm:text-sm font-semibold font-mono shadow-md shadow-cyan-600/20 transition-all flex items-center justify-center space-x-2 active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
