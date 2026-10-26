import { projects } from "../../data/portfolio.js";
import Chips from "../common/Chips.jsx";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <p className="kicker">Selected projects</p>
      <h2 style={{ marginBottom: 44 }}>Things I’ve built.</h2>
      {projects.map((project) => (
        <article className="proj" key={project.title}>
          <div>
            <h3>{project.title}</h3>
            <Chips items={project.tags} />
            {project.url ? (
              <a
                className="visit"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit website ↗
              </a>
            ) : (
              <div className="slot">
                Website URL goes here
                <small>
                  Set <code>url</code> in src/data/portfolio.js
                </small>
              </div>
            )}
          </div>
          <ul>
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
