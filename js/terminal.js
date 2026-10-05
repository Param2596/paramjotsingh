const input = document.querySelector("#command");
const form = document.querySelector("#prompt-form");
const clock = document.querySelector("#clock");
const log = document.querySelector("#log");
const links = {
  about: "#about",
  work: "#work",
  record: "#record",
  contact: "#contact",
  resume: "resume.pdf",
  github: "https://github.com/Param2596",
  email: "mailto:er.paramjots@gmail.com",
  mail: "mailto:er.paramjots@gmail.com",
};

const sections = ["about", "work", "record", "contact"];
const nav = [...document.querySelectorAll(".nav a")];

function tick() {
  const now = new Date();
  clock.dateTime = now.toISOString();
  clock.textContent = now.toLocaleTimeString("en-GB", { hour12: false });
}
tick();
setInterval(tick, 1000);

function mark(id) {
  nav.forEach((link) => {
    const on = link.getAttribute("href") === `#${id}`;
    if (on) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
}

function go(id) {
  const node = document.getElementById(id);
  if (!node) return;
  node.scrollIntoView({ block: "start" });
  history.replaceState(null, "", `#${id}`);
  mark(id);
}

function note(text) {
  const line = document.createElement("span");
  line.textContent = text;
  log.prepend(line);
}

function openExternal(url) {
  if (url.startsWith("mailto:")) {
    window.location.href = url;
    return;
  }
  window.open(url, "_blank", "noopener");
}

function run(raw) {
  const command = raw.trim().toLowerCase();
  if (!command) return;
  if (command === "help" || command === "?") {
    note("commands: about, work, record, contact, resume, github, email");
    return;
  }
  if (command === "clear") {
    log.querySelectorAll("span").forEach((node) => node.remove());
    return;
  }
  if (command === "whoami") {
    go("about");
    return;
  }
  if (sections.includes(command)) {
    go(command);
    return;
  }
  if (links[command]) {
    if (links[command].startsWith("#")) go(command);
    else openExternal(links[command]);
    return;
  }
  const open = command.match(/^open\s+([123])$/);
  const targets = [
    "https://github.com/Param2596/playwright-e2e-suite",
    "https://iristerminal.vercel.app/",
    "https://github.com/Param2596/firestick-pc-remote",
  ];
  if (open) {
    openExternal(targets[Number(open[1]) - 1]);
    go("work");
    return;
  }
  note("command not found. try help.");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  run(input.value);
  input.value = "";
});

nav.forEach((link) => {
  link.addEventListener("click", () => {
    const id = link.getAttribute("href").slice(1);
    mark(id);
  });
});

const start = location.hash.replace("#", "");
if (sections.includes(start)) mark(start);
else mark("about");

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.style.scrollBehavior = "auto";
}
