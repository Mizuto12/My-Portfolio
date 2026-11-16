import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
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
              <div className="pc-visual">
                <div className="vhead">
                  <span className="wdot r" />
                  <span className="wdot y" />
                  <span className="wdot g" />
                  <span className="vurl">{project.slug}.local</span>
                </div>
                <div className="vbody">
                  <div className="vrow">
                    <div className="vpill" style={{ maxWidth: '38%' }} />
                    <div className="vpill vpill--accent" style={{ maxWidth: '24%' }} />
                  </div>
                  <div className="vbar" style={{ width: '70%' }} />
                  <div className="vbar" style={{ width: '46%' }} />
                  <div className="vrow">
                    <div className="vpill" />
                    <div className="vpill" />
                    <div className="vpill" />
                  </div>
                  <div className="vbar" style={{ width: '85%' }} />
                  <div className="vcap">{project.visualCaption}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveSlug(null)} />}
    </section>
  );
}
