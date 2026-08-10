import {
  mobile,
  backend,
  creator,
  web,
  AK,
  AR,
  BO,
  MH,
  MP,
  RA,
  GamePr,
  H_PR,
  InPr,
  ResPr,
  Site1,
  Site2,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Summary",
  },
  {
    id: "work",
    title: "Work Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title:
      "Enterprise experience in large-scale banking and financial platforms",
    icon: web,
  },
  {
    title:
      "Hands-on experience with microfrontend architecture and design systems",
    icon: mobile,
  },
  {
    title: "Full-stack experience with React, Node.js and Spring Boot",
    icon: backend,
  },
  {
    title:
      "Cloud & deployment experience with AWS, Docker, Kubernetes and CI/CD",
    icon: creator,
  },
  {
    title:
      "Experienced in production support, troubleshooting and complex problem-solving",
    icon: backend,
  },
  {
    title:
      "Strong cross-functional collaboration, code review and technical communication skills",
    icon: creator,
  },
];

const footers = [
  {
    name: "LinkedIn",
    icon: "https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png",
    link: "https://www.linkedin.com/in/serhii-borodin-627970210",
  },
  {
    name: "GitHub",
    icon: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
    link: "https://github.com/Serge-boro",
  },
  {
    name: "Email",
    icon: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=serhiiborodin83@gmail.com",
  },
];

const technologies = [
  {
    title: "Frontend",
    description:
      "React, TypeScript, JavaScript (ES6+), HTML5, CSS3, Sass/SCSS, Material UI (MUI), Bootstrap",
  },
  {
    title: "State Management",
    description: "Redux, Redux Toolkit, MobX, React Context",
  },
  {
    title: "React Ecosystem",
    description:
      "React Hooks, Custom Hooks, React Router, React Hook Form, Yup",
  },
  {
    title: "Frontend Engineering",
    description: `Responsive Web Design, Cross-Browser Compatibility, Performance Optimization,
Reusable UI Components, Design Systems, Lazy Loading, Code Splitting`,
  },
  {
    title: "Backend & APIs",
    description:
      "REST APIs, Axios, Node.js, Express.js, Java, Spring Boot, Microservices, Swagger/OpenAPI",
  },
  {
    title: "Databases",
    description: "SQL, Oracle Database, MongoDB",
  },
  {
    title: "Cloud & DevOps",
    description:
      "AWS, Docker, Kubernetes, Google Kubernetes Engine (GKE), Jenkins, CI/CD, Splunk",
  },
  {
    title: "Tools & Testing",
    description:
      "Git, GitHub, Bitbucket, Postman, React Testing Library, Jira, Confluence, Figma",
  },
  {
    title: "Methodologies",
    description:
      "Agile, Scrum, Code Reviews / Pull Requests, UX/UI Collaboration",
  },
];

const experiences = [
  {
    title: "React Developer",
    company_name: "Tata Consultancy Services (TCS)",
    client: "Bank of America (Merrill)",
    icon: "https://images.ctfassets.net/7xz1x21beds9/4cTq1jt8uh8jnBgvWbpKOV/663b48744791bd4e5ca178ae503d4916/Tata_Consultancy_Services_Logo.svg.png?w=1029&h=1029&q=90&fm=png",
    iconBg: "#383E56",
    date: "Oct 2024 - Present | Pennington, NJ, USA",
    points: [
      `Implemented complex customer onboarding and account management functionality for a large-scale
enterprise banking platform, contributing to the migration from COBE 1.0 to a modern React-based
COBE 2.0 architecture.`,
      `Refactored core Redux slice logic and business workflows to eliminate redundant API requests, optimize
state management, and support complex customer onboarding flows.`,
      `Contributed to the enterprise design system by developing reusable Material UI components, extending
the global Material UI theme, and implementing shared UI components adopted across multiple
development teams.`,
      `Worked directly with the lead UI engineer to prototype, iterate, and validate reusable UI components
through interactive demonstrations before project-wide adoption.`,
      `Resolved 450+ production and release defects involving UI behavior, business logic, API integration and
validation across quarterly release cycles.`,
      `Built and maintained complex React forms using React Hook Form and Yup-based validation,
implementing dynamic validation rules for multiple banking products and customer scenarios.`,
      `Performed peer code reviews to maintain high code quality, improve maintainability, and ensure
consistency across frontend implementations.`,
    ],
  },
  {
    title: "React Developer",
    company_name: "JPMorgan Chase & Co.",
    icon: "https://1000logos.net/wp-content/uploads/2020/04/Emblem-J.P.jpg",
    iconBg: "#383E56",
    date: "Jun 2022 - Aug 2024 | Tampa, FL, USA",
    points: [
      `Developed and maintained enterprise React and Spring Boot applications within a large-scale
microfrontend banking platform, delivering customer-facing features and business-critical
enhancements across multiple services.`,
      `Coordinated weekly enterprise releases by managing ServiceNow change requests, preparing
deployment plans, coordinating cross-team approvals, validating deployed changes, and ensuring
successful delivery within a regulated banking environment.`,
      `Improved CI/CD workflows by automating UI deployment processes, reducing manual deployment
effort, and increasing release efficiency.`,
      `Contributed to the modernization of enterprise deployment infrastructure by migrating React
applications and Spring Boot services to Google Kubernetes Engine (GKE), working with Docker
containers, Kubernetes deployment configurations, and deployment automation.`,
      `Investigated and resolved customer-facing production BAU issues through application analysis, Oracle
SQL, backend improvements, and coordinated production deployments.`,
      `Modernized legacy frontend applications through React 18 migration, dependency upgrades, repository
consolidation, and large-scale code refactoring while preserving existing business functionality.`,
      `Earned increasing ownership of business-critical production operations, independently coordinating
enterprise releases, supporting teammates in operational processes, and helping maintain reliable day
to-day platform operations.`,
    ],
  },
  {
    title: "React Developer",
    company_name: "Infosys Limited",
    client: "Apple Inc.",
    icon: "data:image/jpeg;base64,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",
    iconBg: "#E6DEDD",
    date: "Dec 2021 - May 2022 | Richardson, TX, USA",
    points: [
      `Developed full-stack business features for an internal Apple platform using React, Node.js, MongoDB,
and REST APIs, delivering scheduling and collaboration functionality for enterprise users.`,
      `Implemented a feature-rich scheduling module using a specialized calendar library, delivering drag
and-drop interactions, recurring events, timezone handling, validation, and meeting scheduling
workflows.`,
      `Enhanced backend services by implementing REST endpoints, optimizing API payloads, and supporting
MongoDB data validation and business workflows.`,
      `Improved frontend maintainability by refactoring React components, consolidating shared state with
Context, and contributing to a cleaner component architecture across business modules.`,
    ],
  },
  {
    title: "React Developer",
    company_name: "Heretto (formerly Jorsek LLC)",
    icon: "data:image/png;base64,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",
    iconBg: "#383E56",
    date: "Feb 2020 - Oct 2021 | Rochester, NY, USA",
    points: [
      `Developed and maintained frontend functionality for internal enterprise web applications,
implementing UI enhancements, resolving frontend defects, and developing reusable React components
using React, HTML, CSS, React Bootstrap, and JavaScript.`,
      `Collaborated closely with senior developers by participating in code reviews, following Git workflows,
and contributing to reusable UI component development and JavaScript visualization libraries (GoJS
and JointJS).`,
    ],
  },
  {
    title: "Freelance Web Development Project",
    company_name: "russianstepbystep.com",
    icon: "data:image/jpeg;base64,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",
    iconBg: "#E6DEDD",
    date: "2019 | USA",
    points: [
      "Developed an interactive language-learning website from scratch, reaching more than 1,000 users within the first month.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I want to thank Serhii for his continuous support for PWS Chase FPS Production tickets resolution, BAU process as well as ServiceNow (SNOW) Change tickets preparation, implementation, and management. He is continuously following, preparing, and communicating during all phases of the SNOW process. His efforts support/complete our GKP Tech deployment and implementations.",
    name: "Mehmet Doner",
    designation: "VP, Check Disbursements",
    company: "JPMChase",
    image: MH,
    link: "https://www.linkedin.com/in/mehmetdnr",
  },
  {
    testimonial:
      "Thank you for all that you do to help keep BAU running! You are a great friend in the office and a huge help in making sure all of our weekly processes go without issue. Also ensuring that we have the correct snows for deployments has make life much easier. Thank you for all that you do Serhii!",
    name: "Robert Andion",
    designation: "Software Engineer",
    company: "JPMChase",
    image: RA,
    link: "https://www.linkedin.com/in/robert-andion",
  },
  {
    testimonial:
      "Dear Serhii, It is always a pleasure to work with you each & every day. Thanks a lot for all your invaluable contributions. Was completely astounded to see how quickly you had picked up the Chase UI, and delivered quality work, that vouchs for your dedication. It is always great to partner with you.",
    name: "Arun Krish",
    designation: "VP, Sr. Manager of Software Engineering",
    company: "JPMChase",
    image: AK,
  },
  {
    testimonial:
      "Thank you for being an awesome PWS L2 resource. I appreciate your support and expertise on tickets throughout the year and I know the entire DSO team does as well. I appreciate our working relationship very much. You are always there for me and always able to provide an answer to a problem. When we work close together as a team we have a greater impact in providing customer satisfaction. Thank you for all you do every day!.",
    name: "Michael Pantano",
    designation: "AS, DSS",
    company: "JPMChase",
    image: MP,
    link: "https://www.linkedin.com/in/michael-pantano-b332858b",
  },
  {
    testimonial:
      "You have been a great addition to our team Serhii! You have jumped right in and shown great progress. You are always up for jumping on new stories and learning new things to help contribute. Great job!",
    name: "Andrew Rametta",
    designation: "Software Engineer",
    company: "JPMChase",
    image: AR,
    link: "https://www.linkedin.com/in/andrewrametta",
  },
  {
    testimonial:
      "“Great work becoming more independent and reliable for BAU and Production Support. I know that you will be greater going forward in the future. Keep up the good work!",
    name: "Brian Ortiz",
    designation: "Software Engineer",
    company: "JPMChase",
    image: BO,
    link: "https://www.linkedin.com/in/brian-ortiz-517322198",
  },
];

const projects = [
  {
    name: "Freelance Web Project",
    description:
      "Interactive language-learning platform developed from scratch for users worldwide.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: InPr,
    source_code_link: "",
    project_link: "https://russianstepbystep.com/",
  },
  {
    name: "MERN full-stack project",
    description:
      "Full-stack MERN application featuring user authentication, guest access, product management, JWT-based authorization, MongoDB data models, API interceptors, and cookie-based session handling.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "JWT ",
        color: "green-text-gradient",
      },
      {
        name: "bcrypt",
        color: "pink-text-gradient",
      },
      {
        name: "interceptors",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "REST API",
        color: "green-text-gradient",
      },
      {
        name: "NETLIFY ",
        color: "green-text-gradient",
      },
    ],
    image: ResPr,
    source_code_link_second:
      "https://github.com/Serge-boro/comfy-store-service",
    source_code_link: "https://github.com/Serge-boro/comfy-store-client",
    project_link: "https://react-node-express-jwt-mongodb.netlify.app",
  },
  {
    name: "Frontend Web Application",
    description:
      "Responsive web application featuring a modern UI built with JavaScript, HTML, CSS, Flexbox, and Grid.",
    tags: [
      {
        name: "javaScript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Flexbox ",
        color: "blue-text-gradient",
      },
      {
        name: "Grid",
        color: "green-text-gradient",
      },
    ],
    image: Site1,
    source_code_link: "https://github.com/Serge-boro/voyage_1",
    project_link: "https://aquamarine-croissant-85383e.netlify.app",
  },
  {
    name: "Multi-Page Web Application",
    description:
      "Built a multi-page web application featuring dynamic modal forms, interactive content sliders, email service integration, and responsive layouts using JavaScript, HTML, and CSS.",
    tags: [
      {
        name: "javaScript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Flexbox ",
        color: "blue-text-gradient",
      },
      {
        name: "Grid",
        color: "green-text-gradient",
      },
    ],
    image: Site2,
    source_code_link: "https://github.com/Serge-boro/voyage_2",
    project_link: "https://meek-crostata-276c66.netlify.app",
  },
  {
    name: "Canvas JavaScript Game",
    description:
      "Developed an interactive browser game using the HTML5 Canvas API, custom JavaScript logic, sprite-sheet animations, audio effects, and multiple game stages.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "canvas",
        color: "green-text-gradient",
      },
      {
        name: "sprite sheets",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: GamePr,
    source_code_link: "https://github.com/Serge-boro/fly-retro",
    project_link: "https://profound-raindrop-f73e88.netlify.app",
  },
  {
    name: "News Search Application",
    description:
      "Built a responsive news search application using React and REST APIs, featuring dynamic search results, pagination, reusable components, and responsive layouts for different screen sizes.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Netlify ",
        color: "green-text-gradient",
      },
    ],
    image: H_PR,
    source_code_link: "https://github.com/Serge-boro/React-project-hacker_news",
    project_link: "https://react-project-hackernews.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects, footers };
