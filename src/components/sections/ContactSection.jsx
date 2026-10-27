import { profile } from "../../data/portfolio.js";
import Pill from "../common/Pill.jsx";

const icons = {
  github: <span aria-hidden="true">GH</span>,
  linkedin: <span aria-hidden="true">in</span>,
  facebook: <span aria-hidden="true">F</span>,
  telegram: <span aria-hidden="true">T</span>,
};

function SocialLink({ label, href, icon }) {
  return (
    <a
      className="social-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

export default function ContactSection() {
  return (
    <div className="cta" id="contact">
      <h2>Let’s build something together.</h2>
      <p>Feel free to reach out if you have any questions or opportunities to collaborate.</p>
      <p>{profile.text}</p>
      <Pill blue href={"mailto:" + profile.text}>
        {profile.text || "Get in touch"}
      </Pill>
      <div className="social">
        {profile.github && (
          <SocialLink label="GitHub" href={profile.github} icon={icons.github} />
        )}
        {profile.linkedin && (
          <SocialLink
            label="LinkedIn"
            href={profile.linkedin}
            icon={icons.linkedin}
          />
        )}
        {profile.facebook && (
          <SocialLink
            label="Facebook"
            href={profile.facebook}
            icon={icons.facebook}
          />
        )}
        {profile.telegram && (
          <SocialLink
            label="Telegram"
            href={profile.telegram}
            icon={icons.telegram}
          />
        )}
      </div>
    </div>
  );
}
