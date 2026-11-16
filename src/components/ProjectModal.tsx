import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import type { ProjectCaseStudy } from '../types';
import { getIcon } from '../iconRegistry';

interface ProjectModalProps {
  project: ProjectCaseStudy;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeBtnRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        ref={dialogRef}
      >
        <div className="modal-head">
          <div>
            <span className={`pc-tag${project.tagVariant === 'secondary' ? ' muted' : ''}`}>{project.tag}</span>
            <h2 id="project-modal-title">{project.title}</h2>
          </div>
          <button type="button" className="modal-close" aria-label="Close" onClick={onClose} ref={closeBtnRef}>
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="modal-body">
          <p className="cs-sub">{project.heroSubtitle}</p>
          <div className="cs-meta-row">
            <div className="m">
              <span className="lbl">My Role</span>
              <span className="val">{project.role}</span>
            </div>
            <div className="m">
              <span className="lbl">Team</span>
              <span className="val">{project.team}</span>
            </div>
            <div className="m">
              <span className="lbl">Status</span>
              <span className="val">{project.status}</span>
            </div>
            <div className="m">
              <span className="lbl">Tech Stack</span>
              <span className="val">{project.techStackSummary}</span>
            </div>
          </div>

          <div className="cs-block">
            <h3>Overview</h3>
            {project.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="cs-block">
            <h3>Problem</h3>
            <p>{project.problem}</p>
          </div>

          <div className="cs-block">
            <h3>My Contributions</h3>
            <ul>
              {project.contributions.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div className="cs-block">
            <h3>Technology Stack</h3>
            <div className="chip-row">
              {project.techStack.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="cs-block">
            <h3>Main Modules</h3>
            <div className="cs-grid-2">
              {project.modules.map((mod) => {
                const Icon = getIcon(mod.icon);
                return (
                  <div className="fact-item" key={mod.title}>
                    <span className="ico">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <div>
                      <h4>{mod.title}</h4>
                      <p>{mod.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="cs-block">
            <h3>Key Features</h3>
            <ul>
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          {project.uiuxNote && (
            <div className="cs-block">
              <h3>UI/UX Design Decisions</h3>
              <p>{project.uiuxNote}</p>
            </div>
          )}

          {project.testingNote && (
            <div className="cs-block">
              <h3>Testing &amp; Quality Assurance</h3>
              <p>{project.testingNote}</p>
            </div>
          )}

          <div className="cs-block">
            <h3>Lessons Learned</h3>
            <ul>
              {project.lessons.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
