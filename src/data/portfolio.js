// Edit everything about your portfolio here.
export const profile = {
  name: "Lay Mengheang",
  role: "Web Developer",
  text: "Contact me to get in touch", // <- put your real email
 // <- e.g. "https://facebook.com/yourname"
  photo: "/heang.jpg", // <- e.g. "/photo.jpg" (put the file in the /public folder)
  github: "https://github.com/mengheanglay-dotcom", // e.g. "https://github.com/yourname"
  linkedin: "https://linkedin.com/in/LayMengheang", // e.g. "https://linkedin.com/in/yourname"
  facebook: "https://facebook.com/mengheanglay", // e.g. "https://facebook.com/yourname"
  telegram: "https://t.me/Lay_Mengheang", // e.g. "https://t.me/yourusername"
};

export const focus = [
  ["Frontend", "React, Angular, Tailwind, Bootstrap"],
  ["Backend", "Laravel(MVC), Node.js(Express), Python(django)"],
  ["Databases", "MySQL, MongoDB, PostgreSQL"],
  ["System analysis", "DFD & ERD, Workflows"],

];

export const skills = [
  [
    "Frontend",
    ["React.js", "Angular", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
  ],
  ["Backend", ["Laravel", "Node.js", "Express.js", "Python"]],
  ["Architecture", ["MVC", "REST API", "CRUD", "OOP", "Design Patterns"]],
  ["Databases", ["MySQL", "MongoDB", "Oracle","dbForge Studio for MySQL", "PostgreSQL", "DataGrip"]],

  ["System Analysis", [ "Requirements gathering","DFD", "ERD", "Workflow"]],

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
  //English language certificates with category: "English".
  {
    category: "English",
    title: "ACE English Language Program",
    issuer: "Organization name",
    date: "2022 – 2024",
    image: "/certificates/ace.jpg",
    url: "",
  },

  //Chinese language certificates with category: "Chinese".
  {
    category: "Chinese",
    title: "CamASEAN Chinese Language Program",
    issuer: "Organization name",
    date: "2023 – 2025",
    image: "/certificates/camasean.jpg",
    url: "",
  },
  {
    category: "Chinese",
    title: "CamASEAN Chinese Language Program",
    issuer: "HSK2",
    date: "2023 – 2025",
    image: "/certificates/hsk2.jpg",
    url: "",
  },
  {
    category: "Chinese",
    title: "CamASEAN Chinese Language Program",
    issuer: "HSK4",
    date: "2023 – 2025",
    image: "/certificates/hsk4.jpg",
    url: "",
  },
  // Add short-course certificates with category: "Short Course".
  {
    category: "Short Course",
    title: "ETEC CENTER",
    issuer: "Frontend Development",
    date: "2026 – present",
    image: "/certificates/frontend.jpg",
    url: "",
  },
  {
    category: "Short Course",
    title: "Short Course: Web Development",
    issuer: "Backend Development",
    date: "2026 – present",
    image: "/certificates/backend.jpg",
    url: "",
  },

  // Add internship certificates with category: "Internship Certificate".
  {
    category: "Internship Certificate",
    title: "Intership Frontend Development",
    issuer: "Intership",
    date: "2026 – present",
    image: "/certificates/internship_frontend.jpg",
    url: "",
  },
];
