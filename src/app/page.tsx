'use client';

import Link from 'next/link';
import Reveal from '@/components/Reveal';
import StackPanel from '@/components/StackPanel';
import { profile } from '@/data/profile';
import { experience } from '@/data/experience';
import { skillGroups } from '@/data/skills';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="copy">
            <p className="brand mono">{profile.brand}</p>
            <h1>
              {profile.firstName}
              <br />
              {profile.lastName}
            </h1>
            <p className="availability mono">
              <span className="dot" />
              {profile.availability}
            </p>
            <p className="role">{profile.role}</p>
            <p className="lede">{profile.tagline}</p>
            <div className="hero-actions">
              <Link href="/experience" className="btn btn-primary">
                View experience
              </Link>
              <Link href="/contact" className="btn btn-on-dark">
                Contact
              </Link>
            </div>
            <div className="channels">
              {profile.stack.slice(0, 5).map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
          <StackPanel />
        </div>
      </section>

      <section className="highlights">
        <div className="container grid">
          {profile.highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="card">
                <span className="mono num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about">
        <div className="container about-grid">
          <Reveal>
            <p className="section-kicker">Profile</p>
            <h2 className="section-title">Interfaces that work</h2>
          </Reveal>
          <Reveal delay={80}>
            <p>{profile.about}</p>
            <p className="muted">{profile.aboutExtended}</p>
          </Reveal>
        </div>
      </section>

      <section className="experience">
        <div className="container">
          <Reveal>
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">Where I&apos;ve grown</h2>
          </Reveal>
          <div className="stories">
            {experience.map((item, i) => (
              <Reveal key={item.id} delay={i * 70}>
                <article className={`story focus-${item.focus}`}>
                  <div className="meta">
                    <span className="focus">{item.focus}</span>
                    <span className="mono period">{item.period}</span>
                  </div>
                  <h3>{item.role}</h3>
                  <p className="company">
                    {item.company} · {item.location}
                  </p>
                  <p className="blurb">{item.bullets[0]}</p>
                  <div className="tools">
                    {item.tools.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link href="/experience" className="text-link">
              Full experience →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="skills">
        <div className="container">
          <Reveal>
            <p className="section-kicker">Skills</p>
            <h2 className="section-title">Stack & strengths</h2>
          </Reveal>
          <div className="skill-grid">
            {skillGroups.map((g, i) => (
              <Reveal key={g.label} delay={i * 50}>
                <div className="skill-card">
                  <h3>{g.label}</h3>
                  <div className="pills">
                    {g.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="edu">
        <div className="container">
          <Reveal>
            <p className="section-kicker">Education</p>
            <h2 className="section-title">{profile.education.degree}</h2>
            <p className="edu-meta">
              {profile.education.school} · {profile.education.location}
            </p>
            <p className="edu-desc">{profile.education.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <Reveal>
            <h2>Need a front-end developer who ships clean UI?</h2>
            <p>
              Open to Next.js, React Native, and full-stack roles — based in {profile.location}.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary">
                Start a conversation
              </Link>
              <a href={`mailto:${profile.email}`} className="btn btn-secondary">
                Email
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <style jsx>{`
        .hero {
          background: var(--bg-hero);
          padding: 64px 0 72px;
          border-bottom: 1px solid var(--border);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 40px;
          align-items: center;
        }
        .copy {
          animation: rise 0.75s ease both;
        }
        .brand {
          color: var(--primary);
          font-size: 12px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .copy h1 {
          font-size: clamp(48px, 8vw, 78px);
          color: var(--text-on-dark);
          margin-bottom: 16px;
        }
        .availability {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--text-on-dark-muted);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--primary);
          animation: pulse-dot 2s ease infinite;
        }
        .role {
          color: var(--primary);
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 14px;
        }
        .lede {
          color: var(--text-on-dark-muted);
          font-size: 17px;
          max-width: 440px;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 22px;
        }
        .channels {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .channels span {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-on-dark-muted);
          border: 1px solid var(--border-dark);
          border-radius: 999px;
          padding: 6px 10px;
        }
        .highlights,
        .skills,
        .edu,
        .cta {
          padding: var(--section-padding) 0;
        }
        .highlights {
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border);
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .card,
        .story,
        .skill-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .card:hover,
        .story:hover,
        .skill-card:hover {
          transform: translateY(-4px);
          border-color: color-mix(in srgb, var(--primary) 40%, var(--border));
          box-shadow: var(--shadow-card);
        }
        .num {
          color: var(--primary-dark);
          font-size: 12px;
          display: block;
          margin-bottom: 14px;
        }
        .card h3,
        .story h3 {
          font-size: 22px;
          margin-bottom: 8px;
        }
        .card p,
        .blurb,
        .about p {
          color: var(--text-secondary);
          font-size: 14px;
          line-height: 1.65;
        }
        .about {
          padding: var(--section-padding) 0;
          background: var(--bg-primary);
        }
        .about-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 40px;
        }
        .about .muted {
          margin-top: 14px;
          color: var(--text-muted);
        }
        .experience {
          padding: var(--section-padding) 0;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .stories {
          margin-top: 32px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .meta {
          display: flex;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 12px;
        }
        .focus {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--primary-dark);
          background: var(--primary-soft);
          padding: 4px 8px;
          border-radius: 999px;
        }
        .focus-ops .focus {
          background: var(--accent-soft);
          color: var(--accent);
        }
        .period {
          font-size: 11px;
          color: var(--text-muted);
          padding-top: 4px;
        }
        .company {
          color: var(--text-secondary);
          font-size: 13px;
          margin-bottom: 10px;
        }
        .tools,
        .pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 14px;
        }
        .tools span,
        .pills span {
          font-size: 11px;
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 5px 9px;
          color: var(--text-muted);
          background: var(--bg-secondary);
        }
        .text-link {
          display: inline-block;
          margin-top: 24px;
          font-weight: 700;
          color: var(--primary-dark);
        }
        .skills {
          background: var(--bg-primary);
        }
        .skill-grid {
          margin-top: 32px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .skill-card h3 {
          font-size: 16px;
          margin-bottom: 8px;
          color: var(--primary-dark);
        }
        .edu-meta {
          color: var(--primary-dark);
          margin: 8px 0 12px;
          font-size: 14px;
        }
        .edu-desc {
          color: var(--text-secondary);
          max-width: 560px;
          line-height: 1.7;
        }
        .cta {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
        }
        .cta-inner {
          max-width: 620px;
        }
        .cta h2 {
          font-size: clamp(28px, 4vw, 40px);
          margin-bottom: 12px;
        }
        .cta p {
          color: var(--text-secondary);
          margin-bottom: 24px;
          line-height: 1.7;
        }
        .cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        @media (max-width: 960px) {
          .hero-grid,
          .grid,
          .about-grid,
          .stories,
          .skill-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
