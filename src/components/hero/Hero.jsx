import { focus, profile } from "../../data/portfolio.js";
import Portrait from "./Portrait.jsx";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hello">Hey, I’m {profile.name}</div>
      <h1 className="big">
        <span>Web</span>
        <span>Developer</span>
      </h1>
      <Portrait />
      <div className="side l">
        <h3>Clean code. Clear interfaces.</h3>
        <p>I build web apps with React, Angular and Laravel.</p>
      </div>
      <div className="side r">
        <h3>Open to an internship.</h3>
        <p>
          Eager to learn from experienced developers and ship real projects.
        </p>
      </div>
      <div className="focus">
        {focus.map(([title, description]) => (
          <div key={title}>
            <b>{title}</b>
            {description}
          </div>
        ))}
      </div>
    </header>
  );
}
