const marquee = [
  "React.js",
  "Angular",
  "Laravel",
  "Node.js",
  "Express.js",
  "Python",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Figma",
  "REST APIs",
];

export default function ToolStrip() {
  return (
    <div className="strip">
      <div className="lbl">Tools I work with every day</div>
      <div className="mq">
        <div>
          {[...marquee, ...marquee].map((tool, index) => (
            <span key={index}>{tool}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
