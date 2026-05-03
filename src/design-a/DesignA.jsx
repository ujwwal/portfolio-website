import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Menu,
  X,
  Send,
  Terminal,
} from "lucide-react";
import DesignSwitcher from "./DesignSwitcher";

const profile = {
  name: "Ujjwal",
  shortBio: "a software engineer focused on backend systems, data products, and applied AI",
  availability: "Open to backend, data, and AI engineering roles",
  location: "Delhi, India",
  email: "",
  stats: [
    { value: "05", label: "Core Projects" },
    { value: "03", label: "Domains" },
    { value: "99.9%", label: "Reliability Target" },
    { value: "2026", label: "Current Focus" },
  ],
  socials: [
    { label: "GitHub", handle: "@ujwwal", href: "https://github.com/ujwwal" },
    { label: "Portfolio", handle: "systems-first builder", href: "#top" },
  ],
};

const aboutParagraphs = [
  "I build systems that behave well under real constraints: data quality issues, flaky dependencies, incomplete context, and changing product requirements.",
  "My strongest lane is Python-first backend work, but I regularly move across data pipelines, ML experimentation, and product-facing APIs to ship complete outcomes.",
  "I care less about flashy demos and more about architecture that survives reruns, bad inputs, and production pressure without collapsing.",
];

const skillGroups = [
  {
    title: "Core Languages",
    items: ["Python", "SQL", "JavaScript", "TypeScript", "Bash"],
  },
  {
    title: "Backend and APIs",
    items: ["Flask", "FastAPI", "JWT", "SQLAlchemy", "REST Design"],
  },
  {
    title: "Data and ML",
    items: ["Pandas", "NumPy", "Jupyter", "Scikit-learn", "FastF1 Telemetry"],
  },
  {
    title: "Infra and Workflow",
    items: ["Git", "GitHub", "DigitalOcean", "Linux", "tmux and cron"],
  },
];

const projects = [
  {
    id: "f1-2026-suite",
    year: "2026",
    type: "Data Engineering",
    title: "F1 2026 Race Strategy Suite",
    summary:
      "Telemetry-driven race strategy system modeling lap time, tyre wear, hybrid deployment, and active aero trade-offs for the 2026 Formula 1 regulations.",
    href: "#",
    stack: ["Python", "Pandas", "FastF1", "SQL", "Scikit-learn (planned)", "Jupyter Notebook"],
    metrics: [
      { k: "focus", v: "2026" },
      { k: "mode", v: "ML+RL" },
      { k: "type", v: "Telemetry" },
    ],
  },
  {
    id: "cybervantage",
    year: "2025",
    type: "AI Systems",
    title: "CyberVantage",
    summary:
      "AI-powered cybersecurity training platform for phishing simulation, behavioral scoring, and adaptive user feedback with strong uptime under upstream API instability.",
    href: "#",
    stack: ["Python", "Flask", "SQLAlchemy", "JWT", "Google Gemini", "HTML", "CSS"],
    metrics: [
      { k: "uptime", v: "99.9%" },
      { k: "engine", v: "Gemini" },
      { k: "award", v: "Tech^Us" },
    ],
  },
  {
    id: "infrabeacon",
    year: "2025",
    type: "Applied ML",
    title: "InfraBeacon",
    summary:
      "Infrastructure intelligence platform that classifies civic issues from geotagged reports and turns them into spatially actionable incident data.",
    href: "#",
    stack: ["Python", "Flask", "Google Vertex AI", "Google Maps API", "SQL"],
    metrics: [
      { k: "signal", v: "Vision" },
      { k: "output", v: "Heatmaps" },
      { k: "goal", v: "Triage" },
    ],
  },
  {
    id: "attendease",
    year: "2024",
    type: "Platform",
    title: "Attendease",
    summary:
      "Attendance management system built around real academic constraints, auditability, and analytics with strict one-record-per-day subject rules.",
    href: "#",
    stack: ["Python", "Flask", "Flask-Login", "SQL", "Email APIs"],
    metrics: [
      { k: "integrity", v: "Strict" },
      { k: "flow", v: "OTP Reset" },
      { k: "scope", v: "Academic" },
    ],
  },
  {
    id: "openclaw",
    year: "2024",
    type: "Automation",
    title: "OpenClaw",
    summary:
      "Self-hosted AI agent deployment with WhatsApp automation, controlled allowlist access, and durable runtime process management on owned infrastructure.",
    href: "#",
    stack: ["Node.js", "OpenClaw", "DigitalOcean", "Ubuntu", "Gemini API"],
    metrics: [
      { k: "hosting", v: "Self" },
      { k: "runtime", v: "tmux" },
      { k: "access", v: "Allowlist" },
    ],
  },
];

const projectTypes = ["All", ...new Set(projects.map((project) => project.type))];

const experience = [
  {
    id: "exp-ey",
    period: "July 2026 - Present",
    location: "India",
    role: "Oracle Analyst",
    org: "EY India",
    bullets: [],
  },
  {
    id: "exp-linkedout",
    period: "Sep 2025 - Dec 2025",
    location: "Remote",
    role: "AI/ML Engineer",
    org: "LinkedOut",
    bullets: [
      "Built a scalable LinkedIn post generator integrating OpenAI API, enabling persona-driven content creation for professionals.",
      "Led the AI development lifecycle, from prompt engineering and fine-tuning to evaluation. Ensured consistent tone, clarity, and industry-specific relevance.",
      "Implemented feedback-guided refinement loops and style adaptation models to improve personalization and enhance output quality over iterations.",
    ],
  },
];

const posts = [
  {
    id: "post-1",
    date: "Apr 2026",
    readTime: "8 min",
    tag: "Systems",
    title: "Idempotent Pipelines Are a Product Feature",
    excerpt:
      "Why ingestion reruns, duplicate safety, and deterministic transforms matter more than dashboard polish when data is messy.",
  },
  {
    id: "post-2",
    date: "Mar 2026",
    readTime: "7 min",
    tag: "AI",
    title: "Fallback-First AI Integrations",
    excerpt:
      "Practical design patterns for keeping user-facing AI features available when model or provider behavior drifts.",
  },
  {
    id: "post-3",
    date: "Jan 2026",
    readTime: "6 min",
    tag: "Data",
    title: "From Telemetry to Decisions",
    excerpt:
      "A systems view of race data pipelines: normalization, feature strategy, and simulation loops that support real calls.",
  },
  {
    id: "post-4",
    date: "Nov 2025",
    readTime: "5 min",
    tag: "Architecture",
    title: "Constraints Before CRUD",
    excerpt:
      "How defining invariants early improves reliability, avoids silent data corruption, and simplifies long-term maintenance.",
  },
];

/* ---------------- Header ---------------- */
const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Stack" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#fafaf9]/85 backdrop-blur-md border-b border-neutral-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("top")}
          className="flex items-center gap-3 group"
        >
          <span className="inline-block w-2 h-2 bg-neutral-900 rounded-full" />
          <span className="font-mono text-[13px]">
            ujjwal.dev<span className="text-neutral-400">/ai-engineer</span>
          </span>
        </button>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-3 py-2 text-[13px] font-medium text-neutral-700 hover:text-neutral-950 transition-colors"
            >
              <span className="font-mono text-[10px] text-neutral-400 mr-1.5">
                {String(idx + 1).padStart(2, "0")}
              </span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => scrollTo("contact")}
            className="px-4 py-2 text-[12px] font-medium bg-neutral-900 text-[#fafaf9] hover:bg-neutral-700 transition-colors"
          >
            Get in touch
          </button>
        </div>
        <button className="lg:hidden p-2" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-neutral-200 bg-[#fafaf9]">
          <div className="max-w-[1400px] mx-auto px-6 py-4 grid gap-1">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left px-3 py-3 text-sm hover:bg-neutral-100"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

/* ---------------- Hero ---------------- */
const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <section id="top" className="relative pt-28 lg:pt-36 pb-16 lg:pb-20 overflow-hidden grain">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between font-mono text-[11px] text-neutral-500 mb-10 animate-fade-up">
          <div className="flex items-center gap-3">
            <span className="inline-block w-1.5 h-1.5 bg-emerald-600 rounded-full" />
            {profile.availability}
          </div>
          <div className="hidden md:block">
            {profile.location}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="lg:col-span-9">
            <div className="font-mono text-[11px] text-neutral-500 mb-6 tracking-widest">
              [ 00 · INDEX ]
            </div>
            <h1 className="font-plex font-semibold text-[12vw] lg:text-[7.8rem] leading-[0.95] tracking-[-0.04em] text-neutral-950 animate-fade-up">
              I build <span className="italic font-normal text-neutral-500">AI</span>
              <br /> products.
              <br /> I read <span className="italic font-normal text-neutral-500">SQL</span>
              <br /> like prose.
            </h1>
          </div>
          <div className="lg:col-span-3 lg:pb-4">
            <p className="text-[15px] leading-relaxed text-neutral-700 animate-fade-up">
              I’m <span className="font-medium text-neutral-950">{profile.name}</span>, {profile.shortBio.toLowerCase()}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <button
                onClick={() => scrollTo("projects")}
                className="group inline-flex items-center gap-2 px-4 py-2.5 bg-neutral-900 text-[#fafaf9] text-[12px] font-medium hover:bg-neutral-700 transition-colors"
              >
                See selected work
                <ArrowDownRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
                />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-neutral-900 text-neutral-900 text-[12px] font-medium hover:bg-neutral-900 hover:text-[#fafaf9] transition-colors"
              >
                Hire me
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 border-t border-neutral-200">
          {profile.stats.map((s) => (
            <div
              key={s.label}
              className="py-6 lg:py-8 px-4 lg:px-6 border-b lg:border-b-0 lg:border-r border-neutral-200 last:border-r-0"
            >
              <div className="font-plex text-4xl lg:text-5xl tracking-tight text-neutral-950 font-semibold">
                {s.value}
              </div>
              <div className="mt-2 font-mono text-[10px] tracking-widest text-neutral-500 uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 mt-16 lg:mt-24">
        <div className="bg-neutral-950 text-neutral-300 font-mono text-[12px] p-5 border border-neutral-800">
          <div className="flex items-center gap-2 mb-4">
            <Terminal size={13} className="text-neutral-500" />
            <span className="text-neutral-500">~/ujjwal — zsh</span>
          </div>
          <div className="text-neutral-500">$ whoami --role --stack --attitude</div>
          <div className="text-neutral-300 mt-1">backend_engineer + applied_ai_builder · py/sql/js · ships reliable tools, not fragile demos.</div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- About ---------------- */
const About = () => (
  <section id="about" className="relative py-24 lg:py-28 border-t border-neutral-200">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-4">
        <div className="font-mono text-[11px] text-neutral-500 tracking-widest mb-4">[ 01 · ABOUT ]</div>
        <h2 className="font-plex font-semibold text-5xl lg:text-6xl leading-[0.95] tracking-tight text-neutral-950">
          A short <span className="italic font-normal text-neutral-500">bio</span>.
        </h2>
        <div className="mt-8 space-y-2 font-mono text-[12px]">
          {[
            ["based in", profile.location],
            ["stack", "python · typescript · sql"],
            ["works with", "product + engineering teams"],
            ["status", "open to impactful roles"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between border-b border-dashed border-neutral-300 pb-2">
              <span className="text-neutral-500">{k}</span>
              <span className="text-neutral-900">{v}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-8">
        <div className="space-y-6 text-[17px] lg:text-[19px] leading-[1.65] text-neutral-800">
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              className="group inline-flex items-center gap-2 px-3.5 py-2 border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-[#fafaf9] text-[12px] transition-colors"
            >
              <span className="font-mono">{s.label}</span>
              <span className="text-neutral-400 group-hover:text-[#fafaf9]">{s.handle}</span>
              <ArrowUpRight size={13} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- Skills ---------------- */
const Skills = () => (
  <section id="skills" className="relative py-24 lg:py-28 border-t border-neutral-200 bg-neutral-950 text-neutral-100">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-4">
        <div className="font-mono text-[11px] text-neutral-500 tracking-widest mb-4">[ 02 · STACK ]</div>
        <h2 className="font-plex font-semibold text-5xl lg:text-6xl leading-[0.95] tracking-tight text-neutral-50">
          The <span className="italic font-normal text-neutral-400">tools</span>
          <br /> I reach for.
        </h2>
        <p className="mt-6 text-[15px] leading-relaxed text-neutral-400 max-w-sm">
          Breadth across the stack, depth in data-heavy backend systems and AI-integrated products.
        </p>
      </div>
      <div className="lg:col-span-8 grid md:grid-cols-2 gap-px bg-neutral-800">
        {skillGroups.map((g) => (
          <div key={g.title} className="bg-neutral-950 p-7 hover:bg-neutral-900 transition-colors">
            <div className="flex items-baseline justify-between mb-5">
              <h3 className="font-plex text-xl text-neutral-50 font-semibold">{g.title}</h3>
              <span className="font-mono text-[10px] text-neutral-500">{String(g.items.length).padStart(2, "0")}</span>
            </div>
            <ul className="space-y-2">
              {g.items.map((item, i) => (
                <li key={item} className="flex items-center gap-3 font-mono text-[13px] text-neutral-300 group">
                  <span className="font-mono text-[10px] text-neutral-600 w-6">{String(i + 1).padStart(2, "0")}</span>
                  <span className="group-hover:text-neutral-50 transition-colors">{item}</span>
                  <span className="ml-auto h-px flex-1 bg-neutral-800 group-hover:bg-neutral-600 transition-colors" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- Projects ---------------- */
const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.type === active);
  }, [active]);
  return (
    <section id="projects" className="relative py-24 lg:py-28 border-t border-neutral-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <div className="font-mono text-[11px] text-neutral-500 tracking-widest mb-4">[ 03 · SELECTED WORK ]</div>
            <h2 className="font-plex font-semibold text-5xl lg:text-6xl leading-[0.95] tracking-tight text-neutral-950">
              Real projects,
              <br /> <span className="italic font-normal text-neutral-500">shipped</span>.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {projectTypes.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`px-3 py-1.5 text-[11px] font-mono border transition-colors ${
                  active === t
                    ? "bg-neutral-900 text-[#fafaf9] border-neutral-900"
                    : "border-neutral-300 text-neutral-700 hover:border-neutral-900"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="border-t border-neutral-300">
          {filtered.map((p, idx) => (
            <a
              key={p.id}
              href={p.href}
              className="group grid grid-cols-12 gap-6 py-8 border-b border-neutral-300 hover:bg-neutral-100/50 px-2 -mx-2 transition-colors"
            >
              <div className="col-span-2 lg:col-span-1 font-mono text-[11px] text-neutral-500 pt-2">{String(idx + 1).padStart(2, "0")}</div>
              <div className="col-span-10 lg:col-span-7">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[11px] text-neutral-500">{p.year}</span>
                  <span className="h-px w-8 bg-neutral-400" />
                  <span className="font-mono text-[10px] text-neutral-900 bg-neutral-100 px-2 py-0.5">{p.type}</span>
                </div>
                <h3 className="font-plex font-semibold text-3xl lg:text-4xl leading-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-700 max-w-2xl">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="font-mono text-[10px] px-2 py-1 bg-neutral-100 border border-neutral-200 text-neutral-700">{s}</span>
                  ))}
                </div>
              </div>
              <div className="col-span-12 lg:col-span-3 grid grid-cols-3 gap-4 content-start">
                {p.metrics.map((m) => (
                  <div key={m.k}>
                    <div className="font-plex text-xl lg:text-2xl text-neutral-950 tracking-tight font-semibold">{m.v}</div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 mt-1">{m.k}</div>
                  </div>
                ))}
              </div>
              <div className="col-span-12 lg:col-span-1 flex justify-end items-start pt-2">
                <ArrowUpRight
                  size={22}
                  className="text-neutral-400 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- Experience ---------------- */
const Experience = () => (
  <section id="experience" className="relative py-24 lg:py-28 border-t border-neutral-200 bg-neutral-100/60">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-4">
        <div className="font-mono text-[11px] text-neutral-500 tracking-widest mb-4">[ 04 · TIMELINE ]</div>
        <h2 className="font-plex font-semibold text-5xl lg:text-6xl leading-[0.95] tracking-tight text-neutral-950">
          Recent years,
          <br /> focused <span className="italic font-normal text-neutral-500">chapters</span>.
        </h2>
      </div>
      <div className="lg:col-span-8 relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-neutral-300 hidden sm:block" />
        <div className="space-y-10">
          {experience.map((e) => (
            <div key={e.id} className="relative sm:pl-10">
              <span className="hidden sm:block absolute left-0 top-3 w-[15px] h-[15px] rounded-full bg-neutral-100 border-2 border-neutral-900" />
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-mono text-[11px] text-neutral-500">{e.period}</span>
                <span className="h-px w-6 bg-neutral-400 hidden sm:inline-block" />
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">{e.location}</span>
              </div>
              <h3 className="mt-2 font-plex font-semibold text-2xl lg:text-3xl text-neutral-950 leading-tight">
                {e.role}
                <span className="text-neutral-500"> · </span>
                <span className="italic font-normal text-neutral-700">{e.org}</span>
              </h3>
              <ul className="mt-4 space-y-2">
                {e.bullets.map((b, j) => (
                  <li key={j} className="text-[15px] leading-relaxed text-neutral-700 pl-5 relative">
                    <span className="absolute left-0 top-[11px] w-2 h-px bg-neutral-400" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------------- Blog ---------------- */
const Blog = () => (
  <section id="writing" className="relative py-24 lg:py-28 border-t border-neutral-200">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
        <div>
          <div className="font-mono text-[11px] text-neutral-500 tracking-widest mb-4">[ 05 · WRITING ]</div>
          <h2 className="font-plex font-semibold text-5xl lg:text-6xl leading-[0.95] tracking-tight text-neutral-950">
            Notes from
            <br /> the <span className="italic font-normal text-neutral-500">notebook</span>.
          </h2>
        </div>
        <a href="#writing" className="font-mono text-[12px] link-underline text-neutral-700 inline-flex items-center gap-1">
          view all writing <ArrowUpRight size={13} />
        </a>
      </div>
      <div className="grid md:grid-cols-2 gap-px bg-neutral-200">
        {posts.map((p) => (
          <a
            key={p.id}
            href="#writing"
            className="group bg-[#fafaf9] hover:bg-white transition-colors p-7 lg:p-9 flex flex-col"
          >
            <div className="flex items-center justify-between font-mono text-[11px] text-neutral-500 mb-5">
              <div className="flex items-center gap-3">
                <span>{p.date}</span>
                <span className="h-px w-5 bg-neutral-400" />
                <span>{p.readTime}</span>
              </div>
              <span className="px-2 py-0.5 border border-neutral-300 text-[10px]">{p.tag}</span>
            </div>
            <h3 className="font-plex font-semibold text-3xl lg:text-4xl leading-[1.05] text-neutral-950 group-hover:text-neutral-700 transition-colors">{p.title}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">{p.excerpt}</p>
            <div className="mt-6 inline-flex items-center gap-1 font-mono text-[11px] text-neutral-900">
              read <ArrowUpRight size={13} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- Contact ---------------- */
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      window.alert("Fill name, email and message.");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 600));
    setSending(false);
    window.alert("Message queued locally. Frontend-only for now.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 lg:py-36 border-t border-neutral-200 bg-neutral-950 text-neutral-100 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fafaf9 1px, transparent 1px), linear-gradient(90deg, #fafaf9 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-6">
          <div className="font-mono text-[11px] text-neutral-500 tracking-widest mb-4">[ 06 · CONTACT ]</div>
          <h2 className="font-plex font-semibold text-6xl lg:text-[7rem] leading-[0.9] tracking-tight text-neutral-50">
            Let’s ship
            <br /> <span className="italic font-normal text-neutral-400">something</span>
            <br /> useful
            <span className="inline-block w-3 h-14 lg:h-24 bg-neutral-50 align-baseline ml-2 animate-blink" />
          </h2>
          <div className="mt-10 space-y-3 font-mono text-[13px]">
            {profile.email && (
              <a href={`mailto:${profile.email}`} className="block text-neutral-50 link-underline">
                {profile.email}
              </a>
            )}
            <div className="text-neutral-400">{profile.location}</div>
            <div className="flex flex-wrap gap-4 pt-4">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-neutral-50 transition-colors link-underline"
                >
                  {s.label} <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-6">
          <form onSubmit={onSubmit} className="bg-neutral-900 border border-neutral-800 p-8">
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { key: "name", label: "name", type: "text", ph: "Ada Lovelace" },
                { key: "email", label: "email", type: "email", ph: "ada@example.com" },
              ].map((f) => (
                <div key={f.key}>
                  <label className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">{f.label}</label>
                  <input
                    type={f.type}
                    value={form[f.key]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    placeholder={f.ph}
                    className="mt-2 w-full bg-transparent border-0 border-b border-neutral-700 rounded-none px-0 py-1 text-neutral-100 placeholder:text-neutral-600 focus-visible:ring-0 focus-visible:border-neutral-50 focus:outline-none"
                  />
                </div>
              ))}
            </div>
            <div className="mt-5">
              <label className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or problem..."
                className="mt-2 w-full min-h-[140px] bg-transparent border-0 border-b border-neutral-700 rounded-none px-0 py-1 text-neutral-100 placeholder:text-neutral-600 focus-visible:ring-0 focus-visible:border-neutral-50 focus:outline-none resize-none"
              />
            </div>
            <div className="mt-8 flex items-center justify-between">
              <span className="font-mono text-[10px] text-neutral-500">responses within 24-48h</span>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 px-5 py-3 bg-neutral-50 text-neutral-950 text-[12px] font-medium hover:bg-neutral-300 transition-colors disabled:opacity-60"
              >
                {sending ? "sending..." : "send message"}
                <Send size={13} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

/* ---------------- Footer ---------------- */
const Footer = () => (
  <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <span className="inline-block w-2 h-2 bg-neutral-50 rounded-full" />
        <span className="font-mono text-[11px]">ujjwal.dev<span className="text-neutral-600">/ai-engineer</span></span>
      </div>
      <div className="font-mono text-[11px] text-neutral-500 flex flex-wrap gap-x-6 gap-y-2">
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        <span>design A · terminal minimal</span>
      </div>
    </div>
  </footer>
);

/* ---------------- Page ---------------- */
const DesignA = () => {
  return (
    <div className="relative min-h-screen bg-[#fafaf9] text-neutral-900 font-plex">
      <DesignSwitcher theme="light" />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default DesignA;
