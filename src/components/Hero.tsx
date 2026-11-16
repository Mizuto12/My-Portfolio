import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div>
          <span className="hero-kicker">
            <span className="dot" />
            Open to internships &amp; OJT placements
          </span>
          <h1>
            IT student who ships <span className="accent">working systems</span>, not just slide decks.
          </h1>
          <p className="sub">
            I'm Chandrei Emerson V. Lao, a BSIT undergraduate at STI College — Sta. Cruz, splitting my time between
            writing ASP.NET Core code and coordinating the teams that ship it. Three years in, across a
            government-facing capstone and a multi-app POS platform.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View my projects
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="btn btn-outline" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="hero-meta">
            <div>
              <span className="num">3 yrs</span>
              <span className="lbl">Building software projects</span>
            </div>
            <div>
              <span className="num">2</span>
              <span className="lbl">Multi-role systems shipped</span>
            </div>
            <div>
              <span className="num">PM + Dev</span>
              <span className="lbl">Coordination and code</span>
            </div>
          </div>
        </div>

        <div className="hero-side">
        <figure className="hero-portrait">
          <img
            src={`${import.meta.env.BASE_URL}profile.webp`}
            alt="Portrait of Chandrei Emerson V. Lao"
            width={960}
            height={1024}
            fetchPriority="high"
          />
          <figcaption>
            <strong>Chandrei Emerson V. Lao</strong>
            <span>BSIT Student · PM + Developer</span>
          </figcaption>
        </figure>
        </div>
      </div>
    </section>
  );
}
