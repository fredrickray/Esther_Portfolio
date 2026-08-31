'use client';

import { profile } from '@/data/profile';

export default function StackPanel() {
  return (
    <div className="panel" aria-hidden="true">
      <div className="chrome">
        <span className="dots">
          <i />
          <i />
          <i />
        </span>
        <span className="mono path">~/esther/stack</span>
      </div>
      <div className="body">
        <p className="mono line">
          <span className="prompt">$</span> whoami
        </p>
        <p className="mono out">{profile.brand} — front-end developer</p>
        <p className="mono line">
          <span className="prompt">$</span> cat stack.json
        </p>
        <ul className="stack">
          {profile.stack.map((item) => (
            <li key={item}>
              <span className="mono key">&quot;{item}&quot;</span>
              <span className="mono">,</span>
            </li>
          ))}
        </ul>
        <p className="mono line cursor">
          <span className="prompt">$</span> <span className="blink">_</span>
        </p>
      </div>

      <style jsx>{`
        .panel {
          background: rgba(244, 247, 245, 0.06);
          border: 1px solid var(--border-dark);
          border-radius: var(--radius);
          overflow: hidden;
          min-height: 360px;
          animation: rise 0.85s ease 0.08s both;
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.28);
        }
        .chrome {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          border-bottom: 1px solid var(--border-dark);
          background: rgba(0, 0, 0, 0.18);
        }
        .dots {
          display: flex;
          gap: 6px;
        }
        .dots i {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: rgba(244, 247, 245, 0.22);
          display: block;
        }
        .dots i:first-child {
          background: #c45c2a;
        }
        .path {
          font-size: 11px;
          color: var(--text-on-dark-muted);
        }
        .body {
          padding: 22px 18px 26px;
        }
        .line {
          color: var(--text-on-dark);
          font-size: 13px;
          margin-bottom: 10px;
        }
        .prompt {
          color: var(--primary);
          margin-right: 8px;
        }
        .out {
          color: var(--text-on-dark-muted);
          font-size: 13px;
          margin: 0 0 18px 18px;
        }
        .stack {
          list-style: none;
          margin: 0 0 18px 18px;
          display: grid;
          gap: 8px;
        }
        .key {
          color: var(--primary);
          font-size: 13px;
        }
        .stack .mono:last-child {
          color: var(--text-on-dark-muted);
        }
        .cursor {
          margin-top: 8px;
        }
        .blink {
          animation: pulse-dot 1.1s steps(1) infinite;
          color: var(--primary);
        }
      `}</style>
    </div>
  );
}
