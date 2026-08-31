'use client';

import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { experience } from '@/data/experience';
import { profile } from '@/data/profile';

export default function ExperiencePage() {
  return (
    <div className="exp">
      <section className="hero">
        <div className="container">
          <Reveal>
            <p className="section-kicker">Experience</p>
            <h1>
              From support & ops
              <br />
              to shipping interfaces
            </h1>
            <p className="lede">
              Customer-facing and administrative roles that strengthen how I build and communicate as
              a developer.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="list">
        <div className="container">
          {experience.map((item, i) => (
            <Reveal key={item.id} delay={i * 70}>
              <article className={`card focus-${item.focus}`}>
                <div className="head">
                  <div>
                    <span className="mono focus">{item.focus}</span>
                    <h2>{item.role}</h2>
                    <p className="company">
                      {item.company} · {item.location}
                    </p>
                  </div>
                  <span className="mono period">{item.period}</span>
                </div>
                <ul>
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="tools">
                  {item.tools.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="approach">
        <div className="container">
          <Reveal>
            <p className="section-kicker">Approach</p>
            <h2 className="section-title">How I work</h2>
          </Reveal>
          <div className="principles">
            {profile.principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 60}>
                <div className="p">
                  <span className="mono">{p.n}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container box">
          <Reveal>
            <h2>Looking for a front-end or full-stack developer?</h2>
            <p>Let&apos;s talk Next.js, React Native, and product-ready UI.</p>
            <Link href="/contact" className="btn btn-primary">
              Discuss a role
            </Link>
          </Reveal>
        </div>
      </section>

      <style jsx>{`
        .hero {
          padding: 80px 0 56px;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border);
        }
        h1 {
          font-size: clamp(34px, 5vw, 52px);
          margin-bottom: 14px;
        }
        .lede {
          max-width: 540px;
          color: var(--text-secondary);
          line-height: 1.7;
        }
        .list,
        .approach,
        .cta {
          padding: var(--section-padding) 0;
        }
        .card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px;
          margin-bottom: 14px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-card);
        }
        .head {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }
        .focus {
          display: inline-block;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--primary-dark);
          background: var(--primary-soft);
          padding: 4px 8px;
          border-radius: 999px;
          margin-bottom: 10px;
        }
        .focus-ops .focus {
          background: var(--accent-soft);
          color: var(--accent);
        }
        h2 {
          font-size: clamp(24px, 3vw, 30px);
          margin-bottom: 4px;
        }
        .company {
          color: var(--text-secondary);
          font-size: 14px;
        }
        .period {
          font-size: 12px;
          color: var(--text-muted);
          padding-top: 8px;
        }
        ul {
          list-style: none;
          margin-bottom: 16px;
        }
        li {
          position: relative;
          padding-left: 16px;
          margin-bottom: 10px;
          color: var(--text-secondary);
          font-size: 15px;
          line-height: 1.65;
          max-width: 760px;
        }
        li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 9px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
        }
        .tools {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .tools span {
          font-size: 11px;
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 5px 9px;
          color: var(--text-muted);
        }
        .approach {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .principles {
          margin-top: 28px;
          border-top: 1px solid var(--border);
        }
        .p {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 16px;
          padding: 22px 0;
          border-bottom: 1px solid var(--border);
        }
        .p .mono {
          color: var(--primary-dark);
          padding-top: 4px;
        }
        .p h3 {
          font-size: 20px;
          margin-bottom: 6px;
        }
        .p p {
          color: var(--text-secondary);
          max-width: 540px;
        }
        .box {
          max-width: 620px;
        }
        .box h2 {
          font-size: clamp(26px, 4vw, 34px);
          margin-bottom: 10px;
        }
        .box p {
          color: var(--text-secondary);
          margin-bottom: 22px;
        }
      `}</style>
    </div>
  );
}
