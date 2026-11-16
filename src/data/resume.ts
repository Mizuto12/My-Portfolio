// All content on this page is sourced directly from Chandrei Emerson V. Lao's
// actual resume (Chandrei_Lao CV.pdf) and the already-verified static
// portfolio at Desktop/chandrei-lao-portfolio. Nothing here is invented.
import type { SkillCategory, ProjectCaseStudy, InvolvementGroup } from '../types';

export const profile = {
  name: 'Chandrei Emerson V. Lao',
  shortName: 'Chandrei Lao',
  location: 'Santa Cruz, Laguna, Philippines',
  email: 'chandrei0212@gmail.com',
  github: 'https://github.com/Mizuto12',
  githubLabel: 'github.com/Mizuto12',
  school: 'STI College — Sta. Cruz',
  schoolFull: 'STI College — Santa Cruz Branch',
  program: 'BS in Information Technology',
  programDates: 'August 2023 — Present',
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    icon: 'Code2',
    skills: ['C#', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Python', 'Java'],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Platforms',
    icon: 'Layers',
    skills: [
      'ASP.NET Core MVC',
      'Entity Framework Core',
      'Razor',
      'SignalR',
      'REST APIs',
      'React',
      'Node.js',
      'PHP',
      'Supabase',
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'Database',
    skills: ['Microsoft SQL Server', 'Supabase (Postgres)', 'SQL schema design'],
  },
  {
    id: 'tooling',
    title: 'Tooling',
    icon: 'Sparkles',
    skills: ['Visual Studio', 'VS Code', 'Git', 'GitHub', 'GitHub Actions', 'Claude', 'Codex'],
  },
  {
    id: 'deployment',
    title: 'Deployment & Ops',
    icon: 'Boxes',
    skills: ['MonsterASP hosting', 'GitHub Actions CI/CD', 'Brevo (transactional email)'],
  },
  {
    id: 'practices',
    title: 'Practices',
    icon: 'ShieldCheck',
    skills: ['Role-based access control', 'Project scoping', 'Task-workflow coordination'],
  },
  {
    id: 'enterprise',
    title: 'Enterprise & Security Exposure',
    icon: 'Building2',
    skills: ['SAP S/4HANA: SD, MM, PP, FI, CO (training)', 'Cybersecurity fundamentals (seminar-based)'],
  },
];

export const projects: ProjectCaseStudy[] = [
  {
    slug: 'dti-onelink',
    tag: 'Capstone Project',
    tagVariant: 'primary',
    title: 'DTI OneLink',
    heroTitle: 'DTI OneLink — task and records management for a provincial government office',
    heroSubtitle:
      "A web-based system built for the DTI Laguna Provincial Office to coordinate staff tasks and manage official records, with strict role-based access and real-time notifications baked in from the start.",
    role: 'Project Manager & Full-Stack Developer',
    team: 'Capstone team, STI College',
    status: 'Active development, hosted on MonsterASP',
    techStackSummary: 'ASP.NET Core MVC, C#, SignalR, Microsoft SQL Server',
    overview: [
      "DTI OneLink is a web-based task and records management system built for the DTI Laguna Provincial Office as my capstone project. I serve as both project manager and a full-stack developer, coordinating scope and priorities with the capstone team and stakeholders while also writing the ASP.NET Core MVC code that implements it.",
      'The system has three user roles — Employee, Admin, and SuperAdmin — each with a different scope of what they can see and act on, enforced on the server, not just hidden in the UI.',
    ],
    problem:
      "A provincial government office needs a reliable way to assign work, track whether it's actually getting done, and keep official records organized and retrievable, without relying on scattered spreadsheets, email threads, or physical filing that make it hard to see status at a glance or enforce who's allowed to touch what.",
    contributions: [
      'Led planning and coordination for the system’s development, working with the capstone team and stakeholders to define scope, requirements, and priorities.',
      'Coordinated the task-management workflow end to end: creating and assigning tasks, tracking progress and deadlines, submitting proof of completion, and reviewing submissions.',
      'Contributed to records-management features: a searchable records masterlist, user access scoping, retention-date monitoring, and record exports.',
      'Coordinated role-based access for SuperAdmin, Admin, and Employee users, including server-side checks guarding protected functions and data.',
      'Helped implement notifications for task and records events: real-time updates through SignalR and email notifications through Brevo.',
      'Supported administrative dashboards and reports for monitoring task progress and records activity.',
      'Assisted with deployment through GitHub Actions and MonsterASP, and helped investigate production deployment and database issues as they came up.',
    ],
    techStack: [
      'ASP.NET Core MVC',
      'C#',
      'Razor',
      'JavaScript',
      'Entity Framework Core',
      'Microsoft SQL Server',
      'SignalR',
      'Brevo',
      'GitHub Actions',
      'MonsterASP',
    ],
    modules: [
      { title: 'Task Management', description: 'Create and assign tasks, track progress and deadlines, submit proof, review submissions.', icon: 'ClipboardCheck' },
      { title: 'Records Management', description: 'Searchable masterlist, access scoping, retention-date monitoring, exports.', icon: 'Archive' },
      { title: 'Role-Based Access', description: 'SuperAdmin, Admin, and Employee scopes with server-side enforcement.', icon: 'ShieldCheck' },
      { title: 'Notifications', description: 'Real-time updates via SignalR, email notifications via Brevo.', icon: 'Bell' },
      { title: 'Dashboards & Reports', description: 'Admin-facing views for monitoring task progress and records activity.', icon: 'LineChart' },
      { title: 'Deployment', description: 'CI/CD via GitHub Actions, hosted on MonsterASP.', icon: 'Boxes' },
    ],
    features: [
      "Proof-of-completion submission and review flow, so task progress is backed by evidence, not just a status flag.",
      "A records masterlist that's searchable and scoped per user, so staff only see what they're meant to.",
      'Retention-date monitoring on records, surfacing items that need attention before they lapse.',
      "Server-side enforcement of role boundaries: the UI hides what a role can't do, but the server refuses it either way.",
      "Real-time notifications through SignalR for in-app updates, backed by Brevo for email delivery when a user isn't online.",
    ],
    uiuxNote:
      "Because the people using this system are provincial office staff, not developers, the interface prioritizes clarity over density, so status is always visible at a glance (what's pending, overdue, or returned for correction), and destructive or restricted actions are disabled rather than hidden, so users understand why they can't do something instead of wondering if a button is missing. This capstone also includes a full design-exploration track with several alternate UI variations, evaluated against the production app for usability and completeness.",
    testingNote:
      'The codebase carries an automated test suite covering core workflows (task submission and review, records attachment access control, and reports generation), run alongside manual verification of role-based permissions across all three user types before features ship.',
    lessons: [
      'Coordinating scope with real stakeholders (not just a team) forced much more disciplined requirements-gathering than any purely academic project would have.',
      'Role-based access control is easy to get "mostly right" in the UI and much harder to get fully right on the server, which is where it actually matters.',
      'Running deployment and production issues myself (via GitHub Actions and MonsterASP) taught me more about real-world operations than any of the development work did on its own.',
    ],
    visualCaption: 'Conceptual UI representation, not a live screenshot.',
  },
  {
    slug: 'latia-pos',
    tag: 'Team Project',
    tagVariant: 'secondary',
    title: 'Latia POS',
    heroTitle: 'Latia POS — a multi-application point-of-sale ecosystem',
    heroSubtitle:
      'A cashier app, centralized backend services, and an administrative dashboard, built as one coordinated system rather than three disconnected tools.',
    role: 'Project Manager',
    team: 'Development team',
    status: 'Delivered',
    techStackSummary: 'React, Node.js, REST API, SQL',
    overview: [
      'Latia POS is a multi-application point-of-sale ecosystem consisting of a cashier-facing application, centralized backend services, and an administrative dashboard. I led the planning, coordination, and delivery of the project as Project Manager, while staying close enough to the technical side to review architecture and validate implementation decisions when needed.',
    ],
    problem:
      "Running a point-of-sale operation across a cashier front end and an admin back office usually means stitching together separate tools that don't share data cleanly. Latia POS needed one coherent system where a sale rings up at the register, updates inventory immediately, and shows up in reporting without a manual sync step.",
    contributions: [
      'Led the planning, coordination, and delivery of the full multi-application ecosystem: cashier app, backend services, and admin dashboard.',
      'Managed project scope, requirements, task prioritization, and development timelines, facilitating collaboration between stakeholders and the development team.',
      'Oversaw implementation of end-to-end sales workflows: cart processing, transaction recording, inventory updates, receipt generation, and order history synchronization.',
      'Coordinated development of secure REST APIs for product management, transaction processing, user authentication, and role-based access control for cashier and administrator users.',
      'Guided delivery of administrative features (inventory management, product and pricing updates, and sales reporting) to support daily business operations.',
      'Reviewed system architecture and validated implementation approaches, assisting with development tasks directly when needed to keep server-side validation and data consistency reliable across the platform.',
    ],
    techStack: ['React', 'Node.js', 'REST API', 'SQL Database', 'Role-Based Access Control'],
    modules: [
      { title: 'Cashier App', description: 'Cart processing, checkout, and receipt generation at point of sale.', icon: 'ShoppingCart' },
      { title: 'Backend Services', description: 'REST APIs for products, transactions, authentication, and access control.', icon: 'Boxes' },
      { title: 'Admin Dashboard', description: 'Inventory management, pricing updates, and sales reporting.', icon: 'LineChart' },
    ],
    features: [
      'End-to-end sales workflow: cart, transaction recording, inventory update, and receipt generation in a single flow, not separate steps that can drift out of sync.',
      'Order history synchronization, so past transactions stay consistent between the cashier app and admin reporting.',
      'Role-based access control separating cashier and administrator permissions at the API layer, not just in the UI.',
      'Sales reporting built directly on live transaction data for day-to-day business decisions.',
    ],
    lessons: [
      'Coordinating three connected applications (cashier, backend, dashboard) made clear how much a project manager needs to understand data flow, not just task timelines, to catch integration problems before they reach development.',
      'Validating architecture decisions myself, rather than taking them on faith from the dev team, caught issues earlier and made my own planning more realistic.',
      "Server-side RBAC and data consistency aren't something you bolt on at the end; they have to be part of the API design from day one.",
    ],
    visualCaption: 'Conceptual UI representation, not a live screenshot.',
  },
];

export const involvement: InvolvementGroup[] = [
  {
    title: 'Leadership — Programming Youth Organization',
    entries: [
      { when: '2026 – Present', title: '4th Year BSIT Representative', org: 'STI College Santa Cruz' },
      { when: '2025 – 2026', title: '3rd Year BSIT Representative', org: 'STI College Santa Cruz' },
      { when: '2024 – 2025', title: '2nd Year BSIT Representative', org: 'STI College Santa Cruz' },
    ],
  },
  {
    title: 'Competitions',
    entries: [
      { when: '4th Year', title: 'Code Fest, STI College Sta. Cruz', org: 'Graphic Designer & Assistant Programmer', result: '1st Runner-Up' },
      { when: '3rd Year', title: 'Code Fest, STI College Sta. Cruz', org: 'Graphic Designer', result: '1st Runner-Up' },
      { when: '2nd Year', title: 'Code Fest, STI College Sta. Cruz', org: 'Lead Programmer — built an Android app in Android Studio' },
      { when: 'Nov 4, 2026', title: 'UMak 15th IT Skills Olympics', org: 'Java Programming category, competed at the University of Makati — 4th Year' },
    ],
  },
  {
    title: 'Trainings & Seminars Attended',
    note: "Attendance and participation, not formal certifications — I don't hold any certifications yet.",
    entries: [
      { when: 'Oct 2026', title: 'Hacking a Car: One Target, Every Discipline of Security' },
      { when: 'Sep 2025', title: 'SAP x Accenture Student Career Talk', org: 'Webinar' },
      { when: 'Jun 2025', title: 'SD, MM, PP, FI, CO Modules of S/4HANA', org: 'Hands-on with the Global Bike dataset' },
      { when: 'Sep 2024', title: 'Securing Our Digital Future', org: 'Safeguarding data in an increasingly connected world' },
      { when: 'Nov 2023', title: 'Secure Our World 2023 and Beyond', org: 'Cyber Security Awareness Seminar' },
    ],
  },
];
