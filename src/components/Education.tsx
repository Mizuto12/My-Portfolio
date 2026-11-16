import { profile } from '../data/resume';

export function Education() {
  return (
    <section className="section section--raised" id="education">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Education</span>
          <h2>Still in it, and still building while I learn.</h2>
        </div>
        <div className="timeline-item">
          <div className="dot-col">
            <span className="tdot" />
          </div>
          <div>
            <h3>{profile.program}</h3>
            <p className="org">{profile.schoolFull}</p>
            <p className="when">{profile.programDates}</p>
            <p className="tdesc">
              Coursework and capstone work focused on full-stack web development and software project management,
              applied directly to DTI OneLink as my ongoing capstone project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
