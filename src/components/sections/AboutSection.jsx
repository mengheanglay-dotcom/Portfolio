import { skills } from "../../data/portfolio.js";
import Chips from "../common/Chips.jsx";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="two">
        <div>
          <p className="kicker">About me</p>
          <h2>Building web apps that work end to end.</h2>
        </div>
        <div>
          <p className="lead">
            I’m a Management Information Systems student at SETEC Institute,
            looking for a Web Developer internship.
          </p>
          <p className="mutep">
            I build web applications with React, Angular, Laravel and REST APIs,
            and I’m comfortable with database management and system analysis. I
            want to learn from experienced developers and contribute to
            real-world projects.
          </p>
        </div>
      </div>
      <div className="skills">
        {skills.map(([title, items]) => (
          <div className="card" key={title}>
            <h4>{title}</h4>
            <Chips items={items} />
          </div>
        ))}
      </div>
    </section>
  );
}
