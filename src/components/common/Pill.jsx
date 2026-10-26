export default function Pill({ href, children, blue = false }) {
  return (
    <a className={"pill" + (blue ? " blue" : "")} href={href}>
      {children} <i>→</i>
    </a>
  );
}
