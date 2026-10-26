// Edit everything about your portfolio here.
export const profile = {
  name: "Lay Mengheang",
  role: "Web Developer Intern",
  email: "your@email.com", // <- put your real email
  photo: "/cheata.JPG", // <- e.g. "/photo.jpg" (put the file in the /public folder)
  github: "https://github.com/mengheanglay-dotcom", // e.g. "https://github.com/yourname"
  linkedin: "", // e.g. "https://linkedin.com/in/yourname"
};

export const focus = [
  ["Frontend", "React, Angular, Tailwind"],
  ["Backend", "Laravel, Node.js, Python"],
  ["Databases", "MySQL, MongoDB, PostgreSQL"],
  ["System analysis", "DFD & workflows"],
];

export const skills = [
  [
    "Frontend",
    ["React.js", "Angular", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
  ],
  ["Backend", ["Laravel", "Node.js", "Express.js", "Python"]],
  ["Databases", ["MySQL", "MongoDB", "PostgreSQL"]],
  [
    "Tools & concepts",
    [
      "Git",
      "GitHub",
      "VS Code",
      "IntelliJ IDEA",
      "Figma",
      "REST APIs",
      "JSON",
      "AJAX",
      "CRUD",
      "DFD",
    ],
  ],
];

// Put each project's live website in `url`. Leave "" to show an empty slot.
export const projects = [
  {
    title: "INSAV_SHOP",
    tags: ["Angular", "TypeScript", "HTML", "CSS"],
    url: "",
    points: [
      "Built a responsive e-commerce interface with product browsing and shopping features.",
      "Implemented product search, filtering and a shopping cart.",
      "Worked on user authentication and checkout workflows.",
    ],
  },
  {
    title: "E-Commerce Web Application",
    tags: ["React.js", "Laravel", "MySQL", "Axios", "REST API"],
    url: "",
    points: [
      "Developed a full-stack e-commerce app with React.js and Laravel.",
      "Integrated REST APIs with Axios for product and application data.",
      "Implemented shopping cart, wishlist, authentication and order management.",
    ],
  },
  {
    title: "School Management System",
    tags: ["CRUD", "REST API", "Database"],
    url: "",
    points: [
      "Implemented CRUD functionality to create, retrieve, update and delete school records.",
      "Worked with database operations and API endpoints to manage school information.",
    ],
  },
  {
    title: "Movie Management System Analysis",
    tags: ["System analysis", "DFD", "Workflow"],
    url: "",
    points: [
      "Analyzed system requirements and mapped movie management workflows.",
      "Documented business processes and information flows to support system design.",
    ],
  },
];

export const education = [
  ["2023 – Present", "SETEC Institute", "Management Information Systems (MIS)"],
  ["2023 – 2025", "CAM-ASEAN", "Chinese Language Program"],
  ["2022 – 2023", "ACE", "English Language Program"],
];

export const languages = [
  ["Khmer", "Native"],
  ["English", "Intermediate"],
  ["Chinese (Mandarin)", "Basic"],
];

// Add certificates here. Put certificate images in the public folder.
export const certificates = [
  // {
  //   title: "Certificate title",
  //   issuer: "Organization name",
  //   date: "Month 2026",
  //   image: "/certificates/certificate-name.jpg",
  //   url: "",
  // },
];
