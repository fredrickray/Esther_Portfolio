'use client';

import Link from 'next/link';
import { useState } from 'react';
import Reveal from '@/components/Reveal';
import ResumeModal from '@/components/ResumeModal';
import { profile } from '@/data/profile';
import { experience } from '@/data/experience';
import { skillGroups } from '@/data/skills';

export default function AboutPage() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="about">
      <section className="hero">
        <div className="container">
          <Reveal>
            <p className="section-kicker">About</p>
            <h1>
              Building interfaces
              <br />
              <em>people can use</em>
            </h1>
            <p className="lede">
              {profile.about} {profile.aboutExtended}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="principles">
        <div className="container list">
          {profile.principles.map((p, i) => (
            <Reveal key={p.n} delay={i * 70}>
              <article className="row">
                <span className="mono n">{p.n}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="skills">
        <div className="container">
          <Reveal>
            <p className="section-kicker">Skills</p>
            <h2 className="section-title">What I bring</h2>
          </Reveal>
          <div className="grid">
            {skillGroups.map((g, i) => (
              <Reveal key={g.label} delay={i * 50}>
                <div className="block">
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

      <section className="path">
        <div className="container">
          <Reveal>
            <p className="section-kicker">Background</p>
            <h2 className="section-title">Roles so far</h2>
          </Reveal>
          <div className="feed">
            {experience.map((item, i) => (
              <Reveal key={item.id} delay={i * 40}>
                <div className="item">
                  <span className="mono">{item.period}</span>
                  <div>
                    <h3>
                      {item.role} · {item.company}
                    </h3>
                    <p>{item.bullets[0]}</p>
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
            <h2>{profile.education.degree}</h2>
            <p className="meta">
              {profile.education.school} · {profile.education.location}
            </p>
            <p>{profile.education.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="cta">
        <div className="container actions">
          <Link href="/contact" className="btn btn-primary">
            Get in touch
          </Link>
          <Link href="/experience" className="btn btn-secondary">
            Experience
          </Link>
          <button type="button" className="btn btn-secondary" onClick={() => setResumeOpen(true)}>
            Resume
          </button>
        </div>
      </section>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />

      <style jsx>{`
        .hero {
          padding: 72px 0 56px;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border);
        }
        h1 {
          font-size: clamp(34px, 6vw, 54px);
          margin-bottom: 18px;
        }
        h1 em {
          font-style: normal;
          color: var(--primary);
        }
        .lede {
          max-width: 640px;
          color: var(--text-secondary);
          line-height: 1.75;
        }
        .principles,
        .path,
        .cta {
          padding: var(--section-padding) 0;
          background: var(--bg-primary);
        }
        .skills,
        .edu {
          padding: var(--section-padding) 0;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .list,
        .feed {
          border-top: 1px solid var(--border);
        }
        .row,
        .item {
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 18px;
          padding: 24px 0;
          border-bottom: 1px solid var(--border);
        }
        .n {
          color: var(--primary);
          padding-top: 4px;
        }
        .row h3,
        .item h3 {
          font-size: 20px;
          margin-bottom: 8px;
        }
        .row p,
        .item p,
        .edu p {
          color: var(--text-secondary);
          max-width: 560px;
        }
        .item .mono {
          font-size: 12px;
          color: var(--text-muted);
          padding-top: 4px;
        }
        .grid {
          margin-top: 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .block {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 22px;
        }
        .block h3 {
          font-size: 15px;
          color: var(--accent);
          margin-bottom: 12px;
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
        }
        .edu h2 {
          font-size: clamp(24px, 4vw, 32px);
          margin-bottom: 8px;
        }
        .meta {
          color: var(--primary);
          margin-bottom: 12px;
          font-weight: 600;
        }
        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        @media (max-width: 760px) {
          .grid,
          .row,
          .item {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
