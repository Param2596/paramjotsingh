export const site = {
  mark: "PARAMJOT.SYS",
  name: "Paramjot Singh",
  role: "QA Engineer",
  bio: "I test complex systems professionally and build software because apparently testing other people's software wasn't enough.",
  stack: ["API testing", "Playwright", "TypeScript", "SQL"],
  github: "https://github.com/Param2596",
  resume: "/resume.pdf",
  email: "er.paramjots@gmail.com",
  phone: "+91 62843 91129",
  phoneHref: "tel:+916284391129",
  place: "Mandi Gobindgarh",
  availability: "Open to QA roles",
  education: "Chandigarh University · BE CSE · 8.3",
} as const;

export const experience = {
  org: "OATI",
  title: "Associate Quality Analyst, Mohali",
  dates: "2025 — 2026",
  summary:
    "Verified each fix before sign-off, ran regression across ~6 CTRM products, and matched REST and SOAP records to SQL.",
} as const;

export const projects = [
  {
    name: "Playwright E2E Suite",
    href: "https://github.com/Param2596/playwright-e2e-suite",
    label: "source",
    summary:
      "Cross-browser UI and API tests for SauceDemo. Page objects, network interception, failure summarizer.",
  },
  {
    name: "RetroTerminal",
    href: "https://iristerminal.vercel.app/",
    label: "live",
    summary: "LLM chat in an old-school terminal. Product Hunt #8.",
  },
  {
    name: "FireStick PC Remote",
    href: "https://github.com/Param2596/firestick-pc-remote",
    label: "source",
    summary: "A Fire TV remote used as a wireless Windows controller.",
  },
] as const;
