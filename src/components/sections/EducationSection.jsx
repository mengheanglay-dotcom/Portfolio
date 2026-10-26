import { education, languages } from "../../data/portfolio.js";

export default function EducationSection() {
  return (
    <section id="education">
      <p className="kicker">Education</p>
      <h2>Where I’m learning.</h2>
      <div className="edu">
        {education.map(([year, school, program]) => (
          <div className="card" key={school}>
            <span className="yr">{year}</span>
            <h4>{school}</h4>
            <p className="mutep">{program}</p>
          </div>
        ))}
      </div>
      <h2 style={{ fontSize: 28, marginTop: 56 }}>Languages</h2>
      <div className="langs">
        {languages.map(([language, level]) => (
          <div className="card" style={{ padding: "14px 22px" }} key={language}>
            <b>{language}</b> · {level}
          </div>
        ))}
      </div>
    </section>
  );
}
