import { profile } from "../../data/portfolio.js";

export default function Footer() {
  return (
    <footer>
      © 2026 {profile.name} · {profile.role}
    </footer>
  );
}
