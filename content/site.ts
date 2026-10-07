export const site = {
  mark: "PARAMJOT.SYS",
  name: "Paramjot Singh",
  role: "Software Engineer",
  bio: "I build software and automated tests in TypeScript, with Playwright, APIs, and SQL validation. I also released RetroTerminal, which ranked #8 on Product Hunt.",
  stack: [
    "TypeScript",
    "Playwright",
    "Node.js",
    "REST",
    "SQL",
    "Git",
    "CI/CD",
  ],
  github: "https://github.com/Param2596",
  linkedin: "https://www.linkedin.com/in/paramjot-singh27",
  resume: "/resume.pdf",
  email: "er.paramjots@gmail.com",
  phone: "+91 62843 91129",
  phoneHref: "tel:+916284391129",
  place: "Mandi Gobindgarh, India",
  availability: "Open to software engineering roles",
  education: "Chandigarh University · BE CSE · 8.3",
} as const;

export const experience = {
  org: "OATI",
  title: "Associate Quality Analyst, Mohali",
  dates: "2025 — 2026",
  summary: [
    "Tested six energy trading and transmission products, including wesTTrans, CAISO OMS, and webSmartScheduler.",
    "Validated REST and SOAP APIs with Postman and SoapUI, and checked UI, API, and database consistency with SQL.",
    "Verified developer fixes before sign-off and ran impact analysis on urgent patches before release.",
  ],
} as const;

export const projects = [
  {
    name: "Playwright E2E Suite",
    href: "https://github.com/Param2596/playwright-e2e-suite",
    label: "source",
    summary: [
      "Cross-browser UI and API automation for SauceDemo with Playwright, TypeScript, page objects, and reusable auth state.",
      "Covers checkout and related flows with business checks, network interception, and Zod-validated API contracts.",
      "Runs on Chromium, Firefox, and WebKit in GitHub Actions, with a rule-based failure summarizer.",
    ],
  },
  {
    name: "RetroTerminal",
    href: "https://iristerminal.vercel.app/",
    label: "live",
    summary: [
      "Terminal-style chat UI for modern LLMs, with personas, themes, and serverless API routing. Local chat history and optional user API keys.",
      "Built and launched independently. Ranked #8 Product of the Day on Product Hunt, with over 2,300 visitors.",
    ],
  },
  {
    name: "FireStick PC Remote",
    href: "https://github.com/Param2596/firestick-pc-remote",
    label: "source",
    summary: [
      "Uses a Fire TV remote as a wireless Windows controller for keyboard, mouse, media, and volume.",
      "Windows tray app plus Android/ADB bridge, with control modes, key-repeat, connection recovery, and automated setup.",
    ],
  },
] as const;
