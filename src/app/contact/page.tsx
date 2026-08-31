'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';
import { profile } from '@/data/profile';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio inquiry'
    )}&body=${encodeURIComponent(
      `From: ${formData.name} <${formData.email}>\n\n${formData.message}`
    )}`;
    window.location.href = mailto;
    await new Promise((r) => setTimeout(r, 600));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact">
      <div className="container layout">
        <Reveal>
          <div>
            <p className="section-kicker">Contact</p>
            <h1>
              Let&apos;s build
              <br />
              something useful
            </h1>
            <p className="lede">
              Open to front-end, React Native, and full-stack roles. Based in {profile.location}.
            </p>
            <div className="details">
              <a href={`mailto:${profile.email}`}>
                <span className="mono">Email</span>
                <strong>{profile.email}</strong>
              </a>
              <a href={profile.phoneHref}>
                <span className="mono">Phone</span>
                <strong>{profile.phone}</strong>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="panel">
            <div className="panel-head">
              <h2>Send a message</h2>
              <p className="mono">Opens your mail client</p>
            </div>
            {submitted ? (
              <div className="success">
                <p className="mono">Ready</p>
                <h3>Mail client opened</h3>
                <p>If nothing opened, email {profile.email} directly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <label>
                    Name
                    <input name="name" value={formData.name} onChange={handleChange} required />
                  </label>
                  <label>
                    Email
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <label>
                  Subject
                  <select name="subject" value={formData.subject} onChange={handleChange} required>
                    <option value="">Select…</option>
                    <option value="Front-end / Next.js role">Front-end / Next.js role</option>
                    <option value="React Native role">React Native role</option>
                    <option value="Full-stack opportunity">Full-stack opportunity</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role or project…"
                    required
                  />
                </label>
                <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Opening…' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        .contact {
          min-height: calc(100vh - var(--nav-height));
          background: var(--bg-primary);
          padding: 72px 0 96px;
        }
        .layout {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 48px;
          align-items: start;
        }
        h1 {
          font-size: clamp(36px, 5vw, 52px);
          margin-bottom: 16px;
        }
        .lede {
          color: var(--text-secondary);
          max-width: 420px;
          line-height: 1.7;
          margin-bottom: 28px;
        }
        .details {
          border-top: 1px solid var(--border);
        }
        .details a {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 16px 0;
          border-bottom: 1px solid var(--border);
          color: inherit;
        }
        .details .mono {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .details strong {
          font-size: 16px;
        }
        .details a:hover strong {
          color: var(--primary-dark);
        }
        .panel {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px;
          box-shadow: var(--shadow-card);
        }
        .panel-head {
          margin-bottom: 22px;
        }
        .panel-head h2 {
          font-size: 22px;
          margin-bottom: 4px;
        }
        .panel-head .mono {
          font-size: 11px;
          color: var(--text-muted);
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        label {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-secondary);
        }
        .success {
          padding: 48px 12px;
          text-align: center;
        }
        .success .mono {
          color: var(--primary-dark);
          margin-bottom: 10px;
        }
        .success h3 {
          margin-bottom: 8px;
        }
        .success p {
          color: var(--text-secondary);
          font-size: 14px;
        }
        @media (max-width: 900px) {
          .layout,
          .row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
