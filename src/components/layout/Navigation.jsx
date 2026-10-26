import { profile } from "../../data/portfolio.js";
import Pill from "../common/Pill.jsx";

export default function Navigation() {
  return (
    <nav>
      <a className="logo" href="#top">
        {profile.name}
      </a>
      <div className="links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#certificates">Certificates</a>
        <Pill href="#contact">Get in touch</Pill>
      </div>
    </nav>
  );
}
