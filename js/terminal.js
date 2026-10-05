const PROJECTS = [
  {
    name: "RetroTerminal",
    stack: "HTML, CSS, JavaScript, Gemini API, serverless",
    href: "https://iristerminal.vercel.app/",
    label: "OPEN LIVE",
    body: "A chat interface for modern LLMs inside an old-school terminal. Three personas — Iris, Luna, and Syntra — with dark, neon, and glitch themes, local chat history, and an optional bring-your-own API key. Solo-built and launched. Ranked #8 Product of the Day on Product Hunt, with 2,300+ visitors.",
  },
  {
    name: "Playwright E2E Suite",
    stack: "Playwright, TypeScript, GitHub Actions",
    href: "https://github.com/Param2596/playwright-e2e-suite",
    label: "OPEN REPO",
    body: "Cross-browser UI and API automation with the Page Object Model, custom fixtures, storageState, and network interception. Covers menu, reset, and checkout flows, checks calculation logic and API responses, and includes a rule-based test-failure summarizer. CI runs on GitHub Actions.",
  },
  {
    name: "FireStick PC Remote",
    stack: "Python, Android, Windows",
    href: "https://github.com/Param2596/firestick-pc-remote",
    label: "OPEN REPO",
    body: "A Fire TV Stick remote used as a wireless Windows PC controller: keyboard, mouse, media, and volume. Windows tray app plus an Android/ADB bridge, with several control modes, key-repeat handling, connection recovery, and automated setup.",
  },
];

const SECTIONS = ["about", "work", "record", "contact"];

const bootLines = [
  "PARAMJOT.SYS  V1.0",
  "MEMORY CHECK ................ OK",
  "MOUNT /HOME/PARAMJOT ........ OK",
  "LOADING RESUME .............. OK",
  "READY.",
];

const output = document.querySelector("#output");
const boot = document.querySelector("#boot");
const log = document.querySelector("#log");
const form = document.querySelector("#prompt-form");
const input = document.querySelector("#command");
const ready = document.querySelector("#ready");
const clock = document.querySelector("#clock");
const navButtons = [...document.querySelectorAll(".nav button")];

let current = "about";
let opened = false;
const history = [];
let historyIndex = -1;

function tick() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString("en-GB", { hour12: false });
}
tick();
setInterval(tick, 1000);

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function aboutHtml() {
  return `
    <h1>PARAMJOT SINGH</h1>
    <p class="meta">QUALITY ANALYST &nbsp;//&nbsp; BE (CSE) '25 &nbsp;//&nbsp; MANDI GOBINDGARH</p>
    <p>Quality Analyst with 1 year across about six CTRM energy-trading products. Coverage includes REST and SOAP APIs, SQL, regression, and impact analysis. I also build the tools around that work: a Playwright + TypeScript end-to-end suite, and RetroTerminal.</p>
    <h2>EXPERIENCE</h2>
    <h3>OATI, MOHALI</h3>
    <p class="meta">ASSOCIATE QUALITY ANALYST &nbsp;//&nbsp; SEP 2025 – SEP 2026</p>
    <ul>
      <li>Tested energy trading and transmission products, including wesTTrans, CAISO OMS, and webSmartScheduler: functional, regression, GUI, API, database, and automation.</li>
      <li>Validated REST and SOAP APIs in Postman and SoapUI: status codes, JSON/XML payloads, and error handling.</li>
      <li>Wrote SQL to check data across the UI, the API, and the database. Ran impact analysis and patch testing before urgent releases.</li>
      <li>Verified fixes before sign-off and blocked failed changes, with evidence attached to every rejection.</li>
      <li>Filed defects outside the assigned scope, including cases missed in manual regression.</li>
      <li>Designed test cases for new features, regression cycles, and fixes, including edges that were not in the written requirements.</li>
    </ul>
    <h2>EDUCATION</h2>
    <p>BE — Computer Science and Engineering<br>Chandigarh University, 2021 – 2025<br><span class="dim">CGPA 8.3</span></p>
  `;
}

function workHtml() {
  const cards = PROJECTS.map(
    (project, index) => `
      <article class="card">
        <h3>${String(index + 1).padStart(2, "0")}  ${escapeHtml(project.name)}</h3>
        <p class="meta">${escapeHtml(project.stack)}</p>
        <p>${escapeHtml(project.body)}</p>
        <a class="visit" href="${project.href}">${project.label}</a>
      </article>`
  ).join("");
  return `<h1>WORK</h1><p class="meta">3 DIRECTORIES</p><div class="cards">${cards}</div>`;
}

function recordHtml() {
  return `
    <h1>RECORD</h1>
    <h2>ACHIEVEMENTS</h2>
    <ul>
      <li>Product Hunt: RetroTerminal ranked #8 Product of the Day, 2,300+ visitors.</li>
      <li>NPTEL Top Learner: Social Networks, All India Rank 13.</li>
      <li>Research: Breast Cancer Detection using ML, CRC Press, 2024.</li>
    </ul>
    <h2>CERTIFICATIONS</h2>
    <ul>
      <li>PCEP — Python Institute, Entry-Level Python Programmer.</li>
      <li>Coursera — IBM Generative AI Fundamentals.</li>
      <li>Coursera — NoSQL, Big Data, and Spark Foundations.</li>
    </ul>
    <h2>SKILLS</h2>
    <dl class="skills">
      <dt>LANGUAGES</dt><dd>Python, C++, TypeScript, JavaScript, SQL</dd>
      <dt>AUTOMATION</dt><dd>Playwright, Page Object Model, UI/E2E, cross-browser, network interception, parallel runs</dd>
      <dt>API &amp; DATA</dt><dd>REST, SOAP, Swagger/OpenAPI, Postman, SoapUI, SQL validation, JSON/XML</dd>
      <dt>TOOLS</dt><dd>Git, GitHub Actions, Linux, defect tracking, Agile</dd>
    </dl>
  `;
}

function contactHtml() {
  return `
    <h1>CONTACT</h1>
    <p class="meta">OPEN CHANNELS</p>
    <ul>
      <li>MAIL &nbsp;&nbsp;<a href="mailto:er.paramjots@gmail.com">er.paramjots@gmail.com</a></li>
      <li>PHONE &nbsp;<a href="tel:+916284391129">+91 62843 91129</a></li>
      <li>GITHUB <a href="https://github.com/Param2596">github.com/Param2596</a></li>
      <li>PLACE &nbsp; Mandi Gobindgarh, Punjab, India</li>
    </ul>
  `;
}

const views = { about: aboutHtml, work: workHtml, record: recordHtml, contact: contactHtml };

function show(section, echo) {
  if (!views[section]) return;
  opened = true;
  boot.hidden = true;
  current = section;
  if (echo) {
    log.hidden = false;
    const line = document.createElement("p");
    line.innerHTML = `<span class="dim">guest@paramjot:~$</span> ${escapeHtml(echo)}`;
    log.append(line);
  }
  output.innerHTML = views[section]();
  navButtons.forEach((button) => {
    button.classList.toggle("is-on", button.dataset.section === section);
  });
  output.focus({ preventScroll: true });
}

function printHelp() {
  log.hidden = false;
  const line = document.createElement("p");
  line.innerHTML = `<span class="dim">guest@paramjot:~$</span> help<br>
    <span class="dim">commands</span> about &nbsp; work &nbsp; record &nbsp; contact &nbsp; clear<br>
    <span class="dim">also</span> open 1|2|3 &nbsp; whoami`;
  log.append(line);
}

function run(raw) {
  const command = raw.trim().toLowerCase();
  if (!command) return;
  history.push(raw.trim());
  historyIndex = history.length;

  if (command === "help" || command === "?") {
    printHelp();
    return;
  }
  if (command === "clear") {
    log.innerHTML = "";
    log.hidden = true;
    return;
  }
  if (command === "whoami") {
    show("about", command);
    return;
  }
  if (command === "ls" || command === "dir") {
    show("work", command);
    return;
  }
  if (SECTIONS.includes(command)) {
    show(command, command);
    return;
  }
  const open = command.match(/^open\s+([123])$/);
  if (open) {
    window.open(PROJECTS[Number(open[1]) - 1].href, "_blank", "noopener");
    show("work", command);
    return;
  }
  log.hidden = false;
  const line = document.createElement("p");
  line.innerHTML = `<span class="dim">guest@paramjot:~$</span> ${escapeHtml(raw.trim())}<br>command not found. type help.`;
  log.append(line);
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => show(button.dataset.section, button.dataset.section));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  run(input.value);
  input.value = "";
});

input.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    event.preventDefault();
    if (historyIndex > 0) {
      historyIndex -= 1;
      input.value = history[historyIndex];
    }
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    if (historyIndex < history.length - 1) {
      historyIndex += 1;
      input.value = history[historyIndex];
    } else {
      historyIndex = history.length;
      input.value = "";
    }
  }
});

function finishBoot() {
  boot.replaceChildren();
  boot.hidden = true;
  ready.textContent = "SYSTEM READY";
  if (!opened) show("about");
  input.focus();
}

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduce) {
  finishBoot();
} else {
  let index = 0;
  const step = () => {
    if (index >= bootLines.length) {
      finishBoot();
      return;
    }
    const line = document.createElement("p");
    line.textContent = bootLines[index];
    boot.append(line);
    index += 1;
    setTimeout(step, index === bootLines.length ? 280 : 160);
  };
  step();
}
