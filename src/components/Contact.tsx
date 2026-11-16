import { Mail, MapPin } from 'lucide-react';
import { profile } from '../data/resume';
import { GithubMark } from './GithubMark';

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Contact</span>
          <h2>Looking for an internship or OJT placement.</h2>
          <p className="lede">The fastest way to reach me is email. I check it daily and reply within a day or two.</p>
        </div>
        <div className="contact-wrap">
          <div>
            <a className="contact-card" href={`mailto:${profile.email}`}>
              <span className="ico">
                <Mail size={18} aria-hidden="true" />
              </span>
              <span>
                <span className="lbl">Email</span>
                <br />
                <span className="val">{profile.email}</span>
              </span>
            </a>
            <a className="contact-card" href={profile.github} target="_blank" rel="noopener noreferrer">
              <span className="ico">
                <GithubMark />
              </span>
              <span>
                <span className="lbl">GitHub</span>
                <br />
                <span className="val">{profile.githubLabel}</span>
              </span>
            </a>
            <div className="contact-card contact-card--static">
              <span className="ico">
                <MapPin size={18} aria-hidden="true" />
              </span>
              <span>
                <span className="lbl">Location</span>
                <br />
                <span className="val">{profile.location}</span>
              </span>
            </div>
            <div className="contact-note">
              Phone number is left off this public page by default, and happy to share it directly when reaching
              out by email.
            </div>
          </div>
          <div>
            <div className="hero-card hero-card--contact">
              <div className="wtitle">
                <span className="wdot r" />
                <span className="wdot y" />
                <span className="wdot g" />
              </div>
              <h3 className="contact-card-title">Prefer email over a form</h3>
              <p className="contact-card-copy">
                This page intentionally skips a contact form: a static site can't send mail on its own without a
                backend, and I'd rather give you a real inbox than a form that quietly does nothing. The links
                beside this card are live and go straight to me.
              </p>
              <a className="btn btn-primary btn-sm" href={`mailto:${profile.email}?subject=Internship%20opportunity`}>
                Email me directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
