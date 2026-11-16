import { useEffect, useState } from 'react';
import { Download, Menu } from 'lucide-react';
import { profile } from '../data/resume';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#involvement', label: 'Involvement' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#about');

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => el !== null,
    );
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <a className="nav-brand" href="#top">
          <span className="mark">CL</span>
          <span>{profile.shortName}</span>
        </a>
        <nav id="navLinks" className={`nav-links${open ? ' open' : ''}`} aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? 'active' : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <a className="btn btn-outline btn-sm" href={`${import.meta.env.BASE_URL}Chandrei-Lao-Resume.pdf`} download>
            <Download size={16} aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="navLinks"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
