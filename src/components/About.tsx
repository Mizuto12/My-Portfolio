import { Award, Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { careerObjective, profile } from '../data/resume';

const FACTS = [
  {
    icon: GraduationCap,
    title: `BSIT, ${profile.school}`,
    detail: profile.programDates,
  },
  {
    icon: Briefcase,
    title: 'Project Manager & Full-Stack Developer',
    detail: 'DTI OneLink — task & records management capstone',
  },
  {
    icon: Award,
    title: 'Project Manager',
    detail: 'Latia POS — multi-app point-of-sale ecosystem',
  },
  {
    icon: MapPin,
    title: `Based in ${profile.location}`,
    detail: 'Available for remote or on-site internships',
  },
];

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <span className="section-label">About</span>
          <h2>From coordinating teams to writing the code they ship.</h2>
        </div>
        <div className="objective">
          <span className="objective-label">Career Objective</span>
          <p>{careerObjective}</p>
        </div>
        <div className="about-grid">
          <div>
            <p className="lede">
              I'm an Information Technology undergraduate at STI College's Sta. Cruz branch, currently in my third
              year of contributing to real software projects. My path into tech started on the development side,
              writing C# and JavaScript, and has grown into leading the projects I used to just build features for.
            </p>
            <p>
              On <strong>DTI OneLink</strong>, a task-and-records management system built for the DTI Laguna
              Provincial Office, I'm both the project manager and a full-stack developer, which means I spend as
              much time untangling scope and priorities with my team as I do in Visual Studio fixing a Razor view
              or an Entity Framework query. On <strong>Latia POS</strong>, a point-of-sale ecosystem, I led planning
              and coordination across a cashier app, backend services, and an admin dashboard, while staying close
              enough to the architecture to validate implementation decisions when it mattered.
            </p>
            <p>
              I'm drawn to the parts of IT where structure matters: role-based access control, data that has to
              stay consistent across a team, and systems that real, non-technical people have to trust day to day.
              I want to keep growing into project management without ever stepping too far from the code. I think
              the best PMs on a dev team are the ones who can still read the diff.
            </p>
            <p>
              Outside of coursework, I've sat in on sessions that pulled me toward two areas I'd like to go deeper
              on: enterprise systems (an SAP x Accenture career talk and hands-on time with the SD, MM, PP, FI, and
              CO modules of S/4HANA through Global Bike) and cybersecurity (seminars on data protection and, most
              recently, a connected-car security session). Early exposure, not expertise, but it's shaping what I
              want to study next — the specifics are under Beyond the Classroom below.
            </p>
          </div>
          <ul className="fact-list">
            {FACTS.map((fact) => {
              const Icon = fact.icon;
              return (
                <li className="fact-item" key={fact.title}>
                  <span className="ico">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{fact.title}</h3>
                    <p>{fact.detail}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
