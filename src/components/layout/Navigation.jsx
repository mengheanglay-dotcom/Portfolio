import { profile } from "../../data/portfolio.js";
import Pill from "../common/Pill.jsx";

export default function Navigation() {
  const isCertificatesPage = window.location.pathname === "/certificates";

  return (
    <nav>
      <a className="logo" href={isCertificatesPage ? "/" : "#top"}>
        {profile.name}
      </a>
      <div className="links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href={isCertificatesPage ? "/#contact" : "#contact"}>Contact</a>
        <a href={isCertificatesPage ? "/certificates" : "#certificates"}>
          Certificates
        </a>
        <Pill href={isCertificatesPage ? "/#contact" : "#contact"}>
          Get in touch
        </Pill>
      </div>
    </nav>
  );
}
