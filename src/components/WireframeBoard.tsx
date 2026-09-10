'use client';

export default function WireframeBoard() {
  return (
    <div className="board" aria-hidden="true">
      <div className="phone-wrap">
        <span className="btn-side silent" />
        <span className="btn-side vol-up" />
        <span className="btn-side vol-down" />
        <span className="btn-side power" />

        <div className="phone">
          <div className="screen">
            <div className="island">
              <span className="cam" />
              <span className="speaker" />
            </div>

            <div className="status">
              <span className="time">9:41</span>
              <div className="icons">
              <span className="signal">
                <i />
                <i />
                <i />
                <i />
              </span>
              <span className="wifi" />
              <span className="battery" />
            </div>
            </div>

            <div className="app">
              <header className="app-head">
                <div className="avatar">E</div>
                <div>
                  <p className="hello">Good evening</p>
                  <strong>Esther</strong>
                </div>
                <span className="bell" />
              </header>

              <div className="banner">
                <p className="mono label">Portfolio</p>
                <h4>Front-end builds</h4>
                <p className="sub">Next.js · React Native</p>
              </div>

              <div className="section-label">
                <span>Projects</span>
                <span className="see">See all</span>
              </div>

              <div className="project">
                <span className="icon web" />
                <div>
                  <strong>Web UI kit</strong>
                  <p>Next.js components</p>
                </div>
                <span className="chev">›</span>
              </div>
              <div className="project">
                <span className="icon native" />
                <div>
                  <strong>Mobile flows</strong>
                  <p>React Native screens</p>
                </div>
                <span className="chev">›</span>
              </div>

              <button type="button" className="app-cta" tabIndex={-1}>
                View work
              </button>
            </div>

            <nav className="tabs">
              <span className="tab on">
                <i />
                Home
              </span>
              <span className="tab">
                <i />
                Work
              </span>
              <span className="tab">
                <i />
                Chat
              </span>
              <span className="tab">
                <i />
                Profile
              </span>
            </nav>

            <div className="home-bar" />
          </div>
        </div>
      </div>

      <div className="float a">
        <p className="mono">Next.js</p>
        <strong>Web UI</strong>
      </div>
      <div className="float b">
        <p className="mono">RN</p>
        <strong>Mobile</strong>
      </div>

      <style jsx>{`
        .board {
          position: relative;
          min-height: 480px;
          display: grid;
          place-items: center;
          animation: rise 0.8s ease 0.1s both;
        }

        .phone-wrap {
          position: relative;
          width: min(100%, 272px);
          animation: float-soft 7s ease-in-out infinite;
        }

        .btn-side {
          position: absolute;
          background: #1a2332;
          border-radius: 2px;
          z-index: 2;
        }
        .silent {
          left: -3px;
          top: 96px;
          width: 3px;
          height: 22px;
        }
        .vol-up {
          left: -3px;
          top: 136px;
          width: 3px;
          height: 36px;
        }
        .vol-down {
          left: -3px;
          top: 180px;
          width: 3px;
          height: 36px;
        }
        .power {
          right: -3px;
          top: 148px;
          width: 3px;
          height: 56px;
        }

        .phone {
          background: #0b1220;
          border-radius: 42px;
          padding: 10px;
          box-shadow:
            0 0 0 1px #334155,
            0 0 0 5px #0f172a,
            0 28px 60px rgba(15, 23, 42, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .screen {
          position: relative;
          background: var(--phone-screen);
          border-radius: 34px;
          overflow: hidden;
          min-height: 520px;
          display: flex;
          flex-direction: column;
        }

        .island {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 96px;
          height: 26px;
          background: #0b1220;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 8px;
          padding: 0 10px;
          z-index: 5;
        }
        .cam {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #1e3a5f;
          box-shadow: inset 0 0 0 1.5px #0ea5e9;
        }
        .speaker {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #1e293b;
        }

        .status {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 22px 8px;
          margin-top: 4px;
        }
        .time {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }
        .icons {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .signal {
          display: flex;
          align-items: flex-end;
          gap: 1.5px;
          height: 10px;
        }
        .signal i {
          display: block;
          width: 2.5px;
          border-radius: 1px;
          background: var(--text-primary);
        }
        .signal i:nth-child(1) {
          height: 3px;
        }
        .signal i:nth-child(2) {
          height: 5px;
        }
        .signal i:nth-child(3) {
          height: 7px;
        }
        .signal i:nth-child(4) {
          height: 10px;
        }
        .wifi {
          width: 12px;
          height: 10px;
          border: 2px solid var(--text-primary);
          border-top: none;
          border-radius: 0 0 10px 10px;
          transform: scaleY(-1);
          opacity: 0.9;
        }
        .battery {
          width: 20px;
          height: 10px;
          border: 1.5px solid var(--text-primary);
          border-radius: 3px;
          position: relative;
          opacity: 0.9;
        }
        .battery::after {
          content: '';
          position: absolute;
          inset: 1.5px;
          right: 4px;
          background: var(--text-primary);
          border-radius: 1px;
        }
        .battery::before {
          content: '';
          position: absolute;
          right: -3px;
          top: 2px;
          width: 2px;
          height: 4px;
          background: var(--text-primary);
          border-radius: 0 1px 1px 0;
        }

        .app {
          flex: 1;
          padding: 8px 14px 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .app-head {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--primary);
          color: var(--btn-ink);
          display: grid;
          place-items: center;
          font-family: var(--font-display), sans-serif;
          font-size: 13px;
          font-weight: 600;
        }
        .hello {
          font-size: 10px;
          color: var(--text-muted);
          margin-bottom: 1px;
        }
        .app-head strong {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-primary);
        }
        .bell {
          margin-left: auto;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border);
          position: relative;
        }
        .bell::before {
          content: '';
          position: absolute;
          inset: 7px 8px 6px;
          border: 1.5px solid var(--text-secondary);
          border-radius: 8px 8px 4px 4px;
        }

        .banner {
          background: var(--ink);
          color: var(--text-on-dark);
          border-radius: 16px;
          padding: 14px;
        }
        .label {
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--primary-light);
          margin-bottom: 6px;
        }
        .banner h4 {
          font-family: var(--font-display), sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: var(--text-on-dark);
          margin-bottom: 4px;
          letter-spacing: -0.02em;
        }
        .sub {
          font-size: 11px;
          color: var(--text-on-dark-muted);
        }

        .section-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          font-weight: 700;
          color: var(--text-primary);
          margin-top: 2px;
        }
        .see {
          font-size: 11px;
          font-weight: 600;
          color: var(--primary);
        }

        .project {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 10px;
        }
        .icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          flex-shrink: 0;
        }
        .icon.web {
          background: color-mix(in srgb, var(--primary) 18%, transparent);
          box-shadow: inset 0 0 0 1.5px var(--primary);
        }
        .icon.native {
          background: color-mix(in srgb, var(--accent) 18%, transparent);
          box-shadow: inset 0 0 0 1.5px var(--accent);
        }
        .project strong {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1px;
        }
        .project p {
          font-size: 10px;
          color: var(--text-muted);
        }
        .chev {
          margin-left: auto;
          color: var(--text-muted);
          font-size: 16px;
          line-height: 1;
        }

        .app-cta {
          margin-top: auto;
          width: 100%;
          border: none;
          border-radius: 999px;
          padding: 11px;
          background: var(--primary);
          color: var(--btn-ink);
          font-family: inherit;
          font-size: 12px;
          font-weight: 700;
          cursor: default;
          pointer-events: none;
        }

        .tabs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          padding: 8px 10px 4px;
          border-top: 1px solid var(--border);
          background: var(--bg-card);
        }
        .tab {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          font-size: 8px;
          font-weight: 600;
          color: var(--text-muted);
        }
        .tab i {
          width: 16px;
          height: 16px;
          border-radius: 5px;
          background: color-mix(in srgb, var(--text-muted) 28%, transparent);
        }
        .tab.on {
          color: var(--primary);
        }
        .tab.on i {
          background: var(--primary);
        }

        .home-bar {
          width: 108px;
          height: 4px;
          border-radius: 999px;
          background: var(--text-primary);
          opacity: 0.35;
          margin: 6px auto 10px;
        }

        .float {
          position: absolute;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 12px 14px;
          box-shadow: var(--shadow-card);
          backdrop-filter: blur(8px);
        }
        .float .mono {
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 4px;
        }
        .float strong {
          font-family: var(--font-display), sans-serif;
          font-size: 14px;
          font-weight: 600;
        }
        .a {
          top: 72px;
          left: 0;
          animation: float-soft 5.5s ease-in-out infinite reverse;
        }
        .b {
          right: 0;
          bottom: 72px;
          animation: float-soft 7s ease-in-out infinite;
        }

        @media (max-width: 700px) {
          .board {
            min-height: auto;
            padding: 12px 0 24px;
          }
          .float {
            display: none;
          }
          .phone-wrap {
            width: min(100%, 250px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .phone-wrap,
          .a,
          .b {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
