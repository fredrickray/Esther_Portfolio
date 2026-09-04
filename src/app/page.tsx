'use client';

import Link from 'next/link';
import Reveal from '@/components/Reveal';
import WireframeBoard from '@/components/WireframeBoard';
import { profile } from '@/data/profile';
import { experience } from '@/data/experience';
import { skillGroups } from '@/data/skills';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="copy">
            <p className="availability mono">
              <span className="dot" />
              {profile.availability}
            </p>
            <h1>
              {profile.firstName}
              <br />
              <em>{profile.lastName}</em>
            </h1>
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
          </div>
          <WireframeBoard />
        </div>
      </section>

      <section className="highlights">
        <div className="container">
          <Reveal>
            <p className="section-kicker">Focus</p>
            <h2 className="section-title">How I show up</h2>
          </Reveal>
          <div className="grid">
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
        </div>
      </section>

      <section className="about">
        <div className="container about-grid">
          <Reveal>
            <p className="section-kicker">Profile</p>
            <h2 className="section-title">Interfaces that feel clear</h2>
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
            <h2 className="section-title">Recent roles</h2>
          </Reveal>
          <div className="stories">
            {experience.map((item, i) => (
              <Reveal key={item.id} delay={i * 70}>
                <article className="story">
                  <div className="meta">
                    <span className="pill">{item.focus}</span>
                    <span className="mono period">{item.period}</span>
                  </div>
                  <h3>{item.role}</h3>
                  <p className="company">
                    {item.company} · {item.location}
                  </p>
                  <p className="blurb">{item.bullets[0]}</p>
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
        <div className="container cta-box">
          <Reveal>
            <h2>Need a front-end developer who ships clean UI?</h2>
            <p>Open to Next.js, React Native, and full-stack roles.</p>
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
          padding: 48px 0 64px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 32px;
          align-items: center;
        }
        .copy {
          animation: rise 0.75s ease both;
        }
        .availability {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 18px;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--primary);
          animation: pulse-dot 2s ease infinite;
        }
        h1 {
          font-size: clamp(42px, 8vw, 72px);
          margin-bottom: 14px;
        }
        h1 em {
          font-style: normal;
          color: var(--primary);
        }
        .role {
          color: var(--accent);
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 12px;
        }
        .lede {
          max-width: 420px;
          color: var(--text-secondary);
          font-size: 16px;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .highlights,
        .skills,
        .edu,
        .cta {
          padding: var(--section-padding) 0;
        }
        .highlights {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
        }
        .grid {
          margin-top: 28px;
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
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .card:hover,
        .story:hover,
        .skill-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card);
        }
        .num {
          color: var(--primary);
          font-size: 12px;
          display: block;
          margin-bottom: 14px;
        }
        .card h3,
        .story h3 {
          font-size: 20px;
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
        .muted {
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
          margin-top: 28px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .meta {
          display: flex;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 12px;
        }
        .pill {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--primary);
          background: var(--primary-soft);
          padding: 4px 10px;
          border-radius: 999px;
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
        .text-link {
          display: inline-block;
          margin-top: 22px;
          font-weight: 700;
          color: var(--primary);
        }
        .skills {
          background: var(--bg-primary);
        }
        .skill-grid {
          margin-top: 28px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .skill-card h3 {
          font-size: 15px;
          margin-bottom: 12px;
          color: var(--accent);
        }
        .pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .pills span {
          font-size: 12px;
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 6px 10px;
          color: var(--text-muted);
          background: var(--bg-secondary);
        }
        .edu-meta {
          color: var(--primary);
          margin: 8px 0 12px;
          font-size: 14px;
          font-weight: 600;
        }
        .edu-desc {
          color: var(--text-secondary);
          max-width: 560px;
        }
        .cta {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
        }
        .cta-box {
          max-width: 580px;
        }
        .cta h2 {
          font-size: clamp(26px, 4vw, 36px);
          margin-bottom: 12px;
        }
        .cta p {
          color: var(--text-secondary);
          margin-bottom: 22px;
        }
        .cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        @media (max-width: 900px) {
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
