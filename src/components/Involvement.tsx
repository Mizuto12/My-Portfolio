import { involvement } from '../data/resume';

export function Involvement() {
  const [leadership, competitions, trainings] = involvement;

  return (
    <section className="section" id="involvement">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Beyond the Classroom</span>
          <h2>Competitions, leadership, and the sessions I show up for.</h2>
          <p className="lede">
            A separate track from project work — what I've been doing in the organization, on competition day, and
            in the seminar room.
          </p>
        </div>

        <div className="cs-grid-2">
          <div>
            <h3 className="involve-sub">{leadership.title}</h3>
            <div className="info-card">
              {leadership.entries.map((entry) => (
                <div className="info-row" key={`${entry.when}-${entry.title}`}>
                  <div className="when">{entry.when}</div>
                  <div className="what">
                    <strong>{entry.title}</strong>
                    {entry.org && <p>{entry.org}</p>}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="involve-sub involve-sub--spaced">{competitions.title}</h3>
            <div className="info-card">
              {competitions.entries.map((entry) => (
                <div className="info-row" key={`${entry.when}-${entry.title}`}>
                  <div className="when">{entry.when}</div>
                  <div className="what">
                    <strong>{entry.title}</strong>
                    {entry.org && <p>{entry.org}</p>}
                    {entry.result && <span className="result">{entry.result}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="involve-sub">{trainings.title}</h3>
            {trainings.note && (
              <p className="lede involve-note">{trainings.note}</p>
            )}
            <div className="info-card">
              {trainings.entries.map((entry) => (
                <div className="info-row" key={`${entry.when}-${entry.title}`}>
                  <div className="when">{entry.when}</div>
                  <div className="what">
                    <strong>{entry.title}</strong>
                    {entry.org && <p>{entry.org}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
