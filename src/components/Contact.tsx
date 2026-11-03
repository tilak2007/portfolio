import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Copy,
  Check,
  MapPin,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { useToast } from '../context/ToastContext';
import { Card3D } from './3d/Card3D';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedGithub, setCopiedGithub] = useState(false);
  const [copiedLinkedin, setCopiedLinkedin] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please specify the subject or context.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or inquiry.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending message with graceful delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast('Your message has been sent successfully!', 'success', 'Message Dispatched');

      // Trigger refined crimson confetti celebration
      try {
        confetti({
          particleCount: 75,
          spread: 65,
          origin: { y: 0.75 },
          colors: ['#DC2626', '#EF4444', '#991B1B', '#FFFFFF', '#F87171'],
        });
      } catch {
        // graceful fallback if canvas-confetti is not available
      }
    }, 900);
  };

  const handleCopy = (text: string, type: 'email' | 'github' | 'linkedin') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      showToast('Email address copied to clipboard!', 'success');
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'github') {
      setCopiedGithub(true);
      showToast('GitHub URL copied to clipboard!', 'success');
      setTimeout(() => setCopiedGithub(false), 2000);
    } else {
      setCopiedLinkedin(true);
      showToast('LinkedIn profile URL copied to clipboard!', 'success');
      setTimeout(() => setCopiedLinkedin(false), 2000);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background crimson ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[350px] bg-red-600/[0.04] rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0A] border border-red-500/25 text-xs font-mono text-red-400 mb-3 shadow-glow-red-subtle">
            <Mail className="w-3.5 h-3.5 text-red-500" />
            <span>07 // CONTACT & COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's Discuss Data & Opportunities
          </h2>
          <p className="mt-2 text-[#A1A1AA] text-sm sm:text-base max-w-xl">
            Whether you have questions about analytics projects, internship opportunities, or data collaboration, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Socials, Email & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Quick Contact Card with 3D Tilt */}
            <Card3D maxTilt={6} glareOpacity={0.2}>
              <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-red-500/35 backdrop-blur-2xl space-y-6 shadow-xl transition-all duration-300">
                <div>
                  <h3 className="text-base font-semibold text-white">Direct Reachout</h3>
                  <p className="text-xs text-[#A1A1AA] font-mono mt-0.5">
                    Available for analytics roles and technical dialogue.
                  </p>
                </div>

                {/* Email Block */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] hover:border-red-500/30 transition-all">
                  <div className="flex items-center justify-between text-xs text-[#A1A1AA] mb-2">
                    <span className="flex items-center gap-1.5 font-mono">
                      <Mail className="w-3.5 h-3.5 text-red-500" />
                      <span>Email Address</span>
                    </span>
                    <button
                      onClick={() => handleCopy(socialLinks.email, 'email')}
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-300 hover:text-white transition-colors"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3 h-3 text-red-400" />
                          <span className="text-red-400 font-medium">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="text-sm font-semibold font-mono text-white hover:text-red-400 transition-colors break-all"
                  >
                    {socialLinks.email}
                  </a>
                </div>

                {/* Dedicated Social Profile Buttons: GitHub & LinkedIn */}
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                    Professional Profiles & Socials
                  </div>

                  {/* LinkedIn Card & Direct Connect Button */}
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-black/60 via-red-950/20 to-black/60 border border-white/[0.08] hover:border-red-500/50 flex items-center justify-between gap-3 group transition-all duration-300 shadow-md hover:shadow-glow-red-subtle">
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 flex-1 min-w-0"
                      title="Open Vinayaka Tilak PS on LinkedIn (New Tab)"
                    >
                      <div className="p-2.5 rounded-lg bg-red-600/15 border border-red-500/30 text-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:scale-105 transition-all shadow-sm">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-white group-hover:text-red-400 transition-colors flex items-center gap-1.5">
                          <span>LinkedIn Profile</span>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                            Active
                          </span>
                        </div>
                        <div className="text-[11px] font-mono text-[#A1A1AA] truncate">
                          vinayaka-tilak-ps-6924a7442
                        </div>
                      </div>
                    </a>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => handleCopy(socialLinks.linkedin, 'linkedin')}
                        className="p-1.5 rounded-md hover:bg-white/[0.08] text-[#A1A1AA] hover:text-white transition-colors"
                        title="Copy LinkedIn URL"
                        aria-label="Copy LinkedIn URL"
                      >
                        {copiedLinkedin ? <Check className="w-3.5 h-3.5 text-red-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                      <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white text-xs font-mono border border-red-500/30 transition-all shadow-glow-red-subtle"
                        title="Open LinkedIn in New Tab"
                        aria-label="Connect with Vinayaka Tilak PS on LinkedIn"
                      >
                        <span>Connect</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* GitHub Card & Direct Link Button */}
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-black/60 via-red-950/20 to-black/60 border border-white/[0.08] hover:border-red-500/50 flex items-center justify-between gap-3 group transition-all duration-300 shadow-md hover:shadow-glow-red-subtle">
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 flex-1 min-w-0"
                      title="Open Vinayaka Tilak PS on GitHub (New Tab)"
                    >
                      <div className="p-2.5 rounded-lg bg-red-600/15 border border-red-500/30 text-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:scale-105 transition-all shadow-sm">
                        <Github className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-white group-hover:text-red-400 transition-colors flex items-center gap-1.5">
                          <span>GitHub Profile</span>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                            Verified
                          </span>
                        </div>
                        <div className="text-[11px] font-mono text-[#A1A1AA] truncate">
                          github.com/tilak2007
                        </div>
                      </div>
                    </a>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => handleCopy(socialLinks.github, 'github')}
                        className="p-1.5 rounded-md hover:bg-white/[0.08] text-[#A1A1AA] hover:text-white transition-colors"
                        title="Copy GitHub URL"
                        aria-label="Copy GitHub URL"
                      >
                        {copiedGithub ? <Check className="w-3.5 h-3.5 text-red-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                      <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white text-xs font-mono border border-red-500/30 transition-all shadow-glow-red-subtle"
                        title="Open GitHub in New Tab"
                        aria-label="Explore Vinayaka Tilak PS on GitHub"
                      >
                        <span>Explore</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Tag */}
                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>Base Location: {socialLinks.location} (Open to remote & onsite roles)</span>
                </div>
              </div>
            </Card3D>

            {/* Note */}
            <div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/[0.06] flex items-center gap-2.5 text-xs font-mono text-[#A1A1AA] shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Response turnaround typically within 24–48 business hours.</span>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) with 3D Tilt */}
          <div className="lg:col-span-7">
            <Card3D maxTilt={5} glareOpacity={0.2}>
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-red-500/35 backdrop-blur-2xl shadow-2xl transition-all duration-300">
                
                <div className="flex items-center justify-between pb-5 border-b border-white/[0.07] mb-6">
                  <div>
                    <h3 className="text-base font-semibold text-white">Send a Message</h3>
                    <p className="text-xs font-mono text-[#A1A1AA] mt-0.5">
                      Structured contact form with validation.
                    </p>
                  </div>
                  <MessageSquare className="w-4 h-4 text-red-500" />
                </div>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-8 text-center space-y-4 rounded-xl bg-red-950/20 border border-red-500/30 shadow-glow-red-subtle"
                    >
                      <div className="w-12 h-12 rounded-full bg-red-600/10 border border-red-500/40 text-red-400 mx-auto flex items-center justify-center shadow-glow-red-subtle">
                        <Check className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Message Transmitted</h4>
                        <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto mt-1">
                          Thank you, <strong className="text-white">{formData.name}</strong>. Your communication has been dispatched to {personalInfo.name}.
                        </p>
                      </div>
                      <button
                        onClick={resetForm}
                        className="px-4 py-2 rounded-lg text-xs font-mono bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] hover:border-red-500/30 transition-all"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name Field */}
                        <div>
                          <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => {
                              setFormData({ ...formData, name: e.target.value });
                              if (errors.name) setErrors({ ...errors, name: undefined });
                            }}
                            placeholder="e.g. Alex Morgan"
                            className={`w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all ${
                              errors.name
                                ? 'border-red-500/70 focus:border-red-500 focus:ring-red-500/30'
                                : 'border-white/[0.08] focus:border-red-500 focus:ring-red-500/30'
                            }`}
                          />
                          {errors.name && (
                            <div className="flex items-center gap-1 text-[11px] text-red-400 mt-1 font-mono">
                              <AlertCircle className="w-3 h-3" />
                              <span>{errors.name}</span>
                            </div>
                          )}
                        </div>

                        {/* Email Field */}
                        <div>
                          <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value });
                              if (errors.email) setErrors({ ...errors, email: undefined });
                            }}
                            placeholder="name@company.com"
                            className={`w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all ${
                              errors.email
                                ? 'border-red-500/70 focus:border-red-500 focus:ring-red-500/30'
                                : 'border-white/[0.08] focus:border-red-500 focus:ring-red-500/30'
                            }`}
                          />
                          {errors.email && (
                            <div className="flex items-center gap-1 text-[11px] text-red-400 mt-1 font-mono">
                              <AlertCircle className="w-3 h-3" />
                              <span>{errors.email}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Subject Field */}
                      <div>
                        <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                          Subject / Topic <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => {
                            setFormData({ ...formData, subject: e.target.value });
                            if (errors.subject) setErrors({ ...errors, subject: undefined });
                          }}
                          placeholder="Data Analyst Internship Inquiry / Project Feedback"
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all ${
                            errors.subject
                              ? 'border-red-500/70 focus:border-red-500 focus:ring-red-500/30'
                              : 'border-white/[0.08] focus:border-red-500 focus:ring-red-500/30'
                          }`}
                        />
                        {errors.subject && (
                          <div className="flex items-center gap-1 text-[11px] text-red-400 mt-1 font-mono">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.subject}</span>
                          </div>
                        )}
                      </div>

                      {/* Message Field */}
                      <div>
                        <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                          Message Content <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => {
                            setFormData({ ...formData, message: e.target.value });
                            if (errors.message) setErrors({ ...errors, message: undefined });
                          }}
                          placeholder="Write your message here..."
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-[#050505] border text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-1 transition-all resize-none ${
                            errors.message
                              ? 'border-red-500/70 focus:border-red-500 focus:ring-red-500/30'
                              : 'border-white/[0.08] focus:border-red-500 focus:ring-red-500/30'
                          }`}
                        />
                        <div className="flex items-center justify-between text-[11px] text-[#A1A1AA] mt-1 font-mono">
                          {errors.message ? (
                            <div className="flex items-center gap-1 text-red-400">
                              <AlertCircle className="w-3 h-3" />
                              <span>{errors.message}</span>
                            </div>
                          ) : (
                            <span>Min 10 characters</span>
                          )}
                          <span>{formData.message.length} chars</span>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-crimson-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold text-xs sm:text-sm shadow-glow-red transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99]"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                              <span>Validating & Dispatching...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Send Message</span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </AnimatePresence>

              </div>
            </Card3D>
          </div>

        </div>

      </div>
    </section>
  );
};
