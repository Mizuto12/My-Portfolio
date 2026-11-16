import { useState } from 'react';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { projects } from '../data/resume';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const activeProject = projects.find((p) => p.slug === activeSlug) ?? null;

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Featured Projects</span>
          <h2>Two systems, two very different roles.</h2>
          <p className="lede">
            Both are academic/team projects, not commercial client work. Each one taught me a different half of
            what it takes to actually ship software.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.slug}>
              <div className="pc-body">
                <span className={`pc-tag${project.tagVariant === 'secondary' ? ' muted' : ''}`}>{project.tag}</span>
                <h3>{project.title}</h3>
                <p className="role">
                  {project.role} · {project.techStackSummary}
                </p>
                <p className="desc">{project.overview[0]}</p>
                <div className="chip-row">
                  {project.techStack.slice(0, 5).map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="pc-links">
                  <button type="button" className="btn btn-primary btn-sm" onClick={() => setActiveSlug(project.slug)}>
                    Read the case study
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="pc-media">
                {project.screenshot ? (
                  <img
                    src={`${import.meta.env.BASE_URL}${project.screenshot.src}`}
                    alt={project.screenshot.alt}
                    loading="lazy"
                  />
                ) : (
                  <div className="pc-media-empty" role="img" aria-label={`${project.title} screenshot coming soon`}>
                    <ImageIcon size={28} aria-hidden="true" />
                    <span>Screenshot coming soon</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveSlug(null)} />}
    </section>
  );
}
