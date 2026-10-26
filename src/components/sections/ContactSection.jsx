import { profile } from "../../data/portfolio.js";
import Pill from "../common/Pill.jsx";

export default function ContactSection() {
  return (
    <div className="cta" id="contact">
      <h2>Let’s build something together.</h2>
      <Pill blue href={"mailto:" + profile.email}>
        {profile.email}
      </Pill>
      <div className="social">
        {profile.github && <a href={profile.github}>GitHub</a>}
        {profile.linkedin && <a href={profile.linkedin}>LinkedIn</a>}
      </div>
    </div>
  );
}
