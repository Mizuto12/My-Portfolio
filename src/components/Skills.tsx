import { skillCategories } from '../data/resume';
import { getIcon } from '../iconRegistry';

export function Skills() {
  return (
    <section className="section section--raised" id="skills">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Skills</span>
          <h2>What I actually build with.</h2>
          <p className="lede">
            Grouped by how I use them day to day, not scored, since a progress bar can't tell you how comfortable
            I am shipping with any of these.
          </p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category) => {
            const Icon = getIcon(category.icon);
            return (
              <div className="skill-card" key={category.id}>
                <h3>
                  <span className="ico">
                    <Icon size={15} aria-hidden="true" />
                  </span>
                  {category.title}
                </h3>
                <div className="chip-row">
                  {category.skills.map((skill) => (
                    <span className="chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
