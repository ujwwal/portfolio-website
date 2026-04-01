import { useState, useEffect, useRef, useCallback } from "react";

/* ─── Data ─────────────────────────────────────────────────── */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";
const ROLES = ["Full-Stack Developer", "AI/ML Engineer", "Cloud Architect", "Creative Coder"];
const PROJECTS = [
  {
    id: 1, title: "CyberVantage", icon: "⚡",
    desc: "AI-powered cybersecurity training platform with adaptive threat simulations.",
    tags: ["Gemini AI", "Flask", "Python"], accent: "#f472b6",
    stats: [{ l: "Users", v: "2.4k" }, { l: "Threats", v: "150+" }, { l: "Accuracy", v: "96%" }], progress: 92,
  },
  {
    id: 2, title: "InfraBeacon", icon: "◎",
    desc: "Civic infrastructure platform powered by Google Vertex AI for issue detection.",
    tags: ["Vertex AI", "Maps", "Node.js"], accent: "#34d399",
    stats: [{ l: "Reports", v: "8.1k" }, { l: "Cities", v: "12" }, { l: "Resolved", v: "78%" }], progress: 85,
  },
  {
    id: 3, title: "OpenClaw", icon: "◈",
    desc: "AI assistant gateway with WhatsApp, Brave Search & daily check-ins via cron.",
    tags: ["DigitalOcean", "WhatsApp", "Gemini"], accent: "#38bdf8",
    stats: [{ l: "Uptime", v: "99.9%" }, { l: "Msgs/d", v: "40+" }, { l: "Latency", v: "200ms" }], progress: 78,
  },
];
const SKILL_GROUPS = [
  { label: "AI / ML", color: "#a78bfa", items: ["Python", "TensorFlow", "Gemini API", "Vertex AI", "Vision API", "Scikit-learn"] },
  { label: "Frontend", color: "#38bdf8", items: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind"] },
  { label: "Backend", color: "#34d399", items: ["Flask", "Node.js", "PHP", "REST APIs", "WebSockets"] },
  { label: "Cloud & DevOps", color: "#fb923c", items: ["Google Cloud", "DigitalOcean", "Docker", "Linux", "Nginx", "Cron"] },
  { label: "Data & DB", color: "#facc15", items: ["MySQL", "PostgreSQL", "SQLite", "Firebase"] },
  { label: "Tools", color: "#f472b6", items: ["Git", "Home Assistant", "ESPHome", "Figma", "VS Code"] },
];
const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  id: i, x: Math.random() * 100, y: Math.random() * 100,
  s: Math.random() * 3 + 2 + "px",
  d: Math.random() * 4 + 3, delay: Math.random() * 5,
  c: ["#a78bfa", "#38bdf8", "#34d399", "#fb7185"][i % 4],
}));

/* ─── Scramble Hook ─────────────────────────────────────────── */
function useScramble(text, active) {
  const [display, setDisplay] = useState(text);
  const timer = useRef(null);
  useEffect(() => {
    if (!active) { setDisplay(text); return; }
    let iter = 0;
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      setDisplay(text.split("").map((c, i) => {
        if (c === " ") return " ";
        if (i < iter) return text[i];
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join(""));
      if (iter >= text.length) clearInterval(timer.current);
      iter += 0.4;
    }, 28);
    return () => clearInterval(timer.current);
  }, [active, text]);
  return display;
}

/* ─── Skill Group ───────────────────────────────────────────── */
function SkillGroup({ group, idx, go }) {
  return (
    <div style={{
      opacity: go ? 1 : 0, transform: go ? "none" : "translateY(14px)",
      transition: `opacity 0.5s ${idx * 0.08}s, transform 0.5s ${idx * 0.08}s`,
      background: "#111118", borderRadius: 14, padding: "1rem 1.15rem",
      border: "1px solid rgba(255,255,255,0.07)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.7rem" }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: group.color, boxShadow: `0 0 8px ${group.color}88`, flexShrink: 0 }} />
        <span style={{ fontSize: 11, letterSpacing: "0.12em", color: group.color, fontFamily: "monospace", textTransform: "uppercase" }}>{group.label}</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {group.items.map((item, i) => (
          <span key={item} style={{
            padding: "4px 11px", borderRadius: 100, fontSize: 12,
            background: group.color + "10", color: "rgba(255,255,255,0.65)",
            border: `1px solid ${group.color}25`,
            opacity: go ? 1 : 0,
            transition: `opacity 0.45s ${idx * 0.08 + i * 0.05}s`,
          }}>{item}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── Project Card ──────────────────────────────────────────── */
function Card({ p }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50 });
  const [hov, setHov] = useState(false);
  const ref = useRef(null);
  const progRef = useRef(null);
  useEffect(() => {
    if (progRef.current) progRef.current.style.width = hov ? p.progress + "%" : "0%";
  }, [hov, p.progress]);
  const mm = (e) => {
    const r = ref.current.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    setTilt({ x: -dy * 7, y: dx * 7 });
    setShine({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };
  return (
    <div ref={ref} onMouseMove={mm} onMouseEnter={() => setHov(true)}
      onMouseLeave={() => { setHov(false); setTilt({ x: 0, y: 0 }); }}
      style={{
        transform: `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hov ? 1.025 : 1})`,
        transition: hov ? "transform 0.1s" : "transform 0.5s cubic-bezier(.23,1,.32,1), border-color 0.3s",
        position: "relative", borderRadius: 14,
        background: "#111118", padding: "1.25rem",
        border: `1px solid ${hov ? p.accent + "44" : "rgba(255,255,255,0.07)"}`,
        overflow: "hidden", cursor: "pointer",
      }}>
      <div style={{ position: "absolute", inset: 0, borderRadius: 14, pointerEvents: "none",
        background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.05) 0%, transparent 55%)`,
        opacity: hov ? 1 : 0, transition: "opacity 0.3s" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, borderRadius: "14px 14px 0 0",
        background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)`,
        opacity: hov ? 1 : 0, transition: "opacity 0.3s" }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: 20,
          background: p.accent + "15", border: `1px solid ${p.accent}33`,
          transform: hov ? "rotateY(180deg)" : "none", transition: "transform 0.5s" }}>
          {p.icon}
        </div>
        <span style={{ fontSize: 10, letterSpacing: "0.1em", padding: "3px 9px", borderRadius: 100,
          background: p.accent + "15", color: p.accent, border: `1px solid ${p.accent}30`,
          opacity: hov ? 1 : 0, transition: "opacity 0.3s" }}>LIVE ↗</span>
      </div>
      <h3 style={{ margin: "0 0 6px", fontSize: "1.05rem", fontWeight: 700, color: "#fff", fontFamily: "monospace" }}>{p.title}</h3>
      <p style={{ margin: "0 0 12px", fontSize: 12.5, lineHeight: 1.6, color: "rgba(255,255,255,0.4)" }}>{p.desc}</p>
      <div style={{ display: "flex", gap: 14, marginBottom: 12 }}>
        {p.stats.map(s => (
          <div key={s.l}>
            <div style={{ fontSize: 15, fontWeight: 700, color: p.accent, fontFamily: "monospace" }}>{s.v}</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.l}</div>
          </div>
        ))}
      </div>
      <div style={{ marginBottom: 12 }}>
        <div style={{ height: 2, borderRadius: 100, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
          <div ref={progRef} style={{ height: "100%", borderRadius: 100,
            background: `linear-gradient(90deg, ${p.accent}77, ${p.accent})`,
            width: "0%", transition: "width 0.8s cubic-bezier(.23,1,.32,1)" }} />
        </div>
      </div>
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
        {p.tags.map(t => <span key={t} style={{ padding: "2px 9px", borderRadius: 100, fontSize: 11,
          background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.35)",
          border: "1px solid rgba(255,255,255,0.08)" }}>{t}</span>)}
      </div>
    </div>
  );
}

/* ─── Main App ──────────────────────────────────────────────── */
export default function Portfolio() {
  const [scramble, setScramble] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const [roleVis, setRoleVis] = useState(true);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });
  const [skillsGo, setSkillsGo] = useState(false);
  const [activeNav, setActiveNav] = useState("hero");
  const btnRef = useRef(null);
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const name = useScramble("UJJWAL GUPTA", scramble);

  // Start scramble after mount
  useEffect(() => { const t = setTimeout(() => setScramble(true), 300); return () => clearTimeout(t); }, []);

  // Role cycling
  useEffect(() => {
    const id = setInterval(() => {
      setRoleVis(false);
      setTimeout(() => { setRoleIdx(p => (p + 1) % ROLES.length); setRoleVis(true); }, 380);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  // Skills observer
  useEffect(() => {
    const t = setTimeout(() => setSkillsGo(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const mm = useCallback((e) => {
    if (!heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    setMouse({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
    if (btnRef.current) {
      const br = btnRef.current.getBoundingClientRect();
      const dx = e.clientX - (br.left + br.width / 2);
      const dy = e.clientY - (br.top + br.height / 2);
      const d = Math.sqrt(dx * dx + dy * dy);
      setMagnet(d < 110 ? { x: dx * 0.33, y: dy * 0.33 } : { x: 0, y: 0 });
    }
  }, []);

  return (
    <div style={{ background: "#08080e", minHeight: "100vh", color: "#fff", fontFamily: "system-ui, sans-serif" }}>
      <style>{`
        @keyframes floatUp { 0%{opacity:0;transform:translateY(0)} 20%{opacity:.6} 80%{opacity:.3} 100%{opacity:0;transform:translateY(-70px) scale(.5)} }
        @keyframes scan { 0%{transform:translateY(-100%)} 100%{transform:translateY(200%)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeDown { from{opacity:1;transform:translateY(0)} to{opacity:0;transform:translateY(-10px)} }
        @keyframes dotBeat { 0%,100%{transform:scale(1)} 50%{transform:scale(1.6)} }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: rgba(167,139,250,0.3); border-radius: 2px; }
        .nav-link { transition: color .2s; cursor:pointer; }
        .nav-link:hover { color: #a78bfa !important; }
        .sec-btn { transition: all .2s; cursor:pointer; }
        .sec-btn:hover { background: rgba(167,139,250,0.15) !important; border-color: rgba(167,139,250,0.6) !important; }
      `}</style>

      {/* ── Nav ── */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(16px)",
        background: "rgba(8,8,14,0.7)", borderBottom: "1px solid rgba(255,255,255,0.05)",
        display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 32px" }}>
        <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", fontFamily: "monospace", color: "#a78bfa" }}>UJ/</span>
        <div style={{ display: "flex", gap: 28 }}>
          {["Work", "Skills", "Contact"].map(n => (
            <span key={n} className="nav-link" style={{ fontSize: 12, letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>{n}</span>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", animation: "blink 2s infinite" }} />
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}>OPEN TO WORK</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section ref={heroRef} onMouseMove={mm} onMouseLeave={() => setMagnet({ x: 0, y: 0 })}
        style={{ position: "relative", minHeight: "90vh", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", padding: "4rem 2rem", overflow: "hidden", textAlign: "center" }}>
        {/* Glow */}
        <div style={{ position: "absolute", width: "45vw", height: "45vw", borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 65%)",
          left: mouse.x * 0.45 - 22 + "%", top: mouse.y * 0.45 - 22 + "%", transition: "left .6s, top .6s" }} />
        <div style={{ position: "absolute", width: "30vw", height: "30vw", borderRadius: "50%", pointerEvents: "none",
          background: "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 65%)", right: "5%", bottom: "15%" }} />
        {/* Grid */}
        <div style={{ position: "absolute", inset: 0, opacity: .035, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)",
          backgroundSize: "60px 60px" }} />
        {/* Scanline */}
        <div style={{ position: "absolute", left: 0, right: 0, height: 2, pointerEvents: "none",
          background: "linear-gradient(90deg,transparent,rgba(167,139,250,0.12),transparent)", animation: "scan 7s linear infinite" }} />
        {/* Particles */}
        {PARTICLES.map(p => (
          <div key={p.id} style={{ position: "absolute", left: p.x + "%", top: p.y + "%", width: p.s, height: p.s,
            borderRadius: "50%", background: p.c, opacity: 0, pointerEvents: "none",
            animation: `floatUp ${p.d}s ${p.delay}s ease-in-out infinite` }} />
        ))}

        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: "2rem",
          padding: "6px 18px", borderRadius: 100, border: "1px solid rgba(167,139,250,0.3)",
          background: "rgba(167,139,250,0.07)", animation: "fadeUp 0.6s ease both" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80", animation: "blink 2s infinite" }} />
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.18em" }}>AVAILABLE FOR WORK</span>
        </div>

        {/* Name */}
        <h1 onMouseEnter={() => setScramble(true)}
          style={{ fontSize: "clamp(2.5rem,8vw,5.5rem)", fontWeight: 900, letterSpacing: "-0.02em",
            lineHeight: 1, fontFamily: "monospace", cursor: "crosshair", userSelect: "none",
            background: "linear-gradient(135deg,#fff 0%,rgba(255,255,255,.55) 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "1rem" }}>
          {name}
        </h1>

        {/* Role */}
        <div style={{ height: 38, display: "flex", alignItems: "center", marginBottom: "1.5rem", overflow: "hidden" }}>
          <span style={{ fontSize: "1.15rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#a78bfa",
            animation: roleVis ? "fadeUp .38s ease forwards" : "fadeDown .38s ease forwards" }}>
            {ROLES[roleIdx]}
          </span>
        </div>

        {/* Bio */}
        <p style={{ maxWidth: 480, fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.4)", marginBottom: "2rem" }}>
          BCA student @ Bharati Vidyapeeth Delhi. Building AI-first products and smart systems. Targeting EY Analyst 🇦🇺
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: "2.5rem" }}>
          {["React", "Python", "GCP", "TensorFlow", "Docker", "Node.js", "Home Assistant"].map(t => (
            <span key={t} style={{ padding: "4px 14px", borderRadius: 100, fontSize: 12,
              border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.45)", letterSpacing: "0.05em", cursor: "default",
              transition: "transform .2s, background .2s" }}
              onMouseEnter={e => e.currentTarget.style.cssText += ";transform:translateY(-2px);background:rgba(167,139,250,0.12)"}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}>
              {t}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12 }}>
          <button ref={btnRef} className="sec-btn" style={{
            transform: `translate(${magnet.x}px,${magnet.y}px)`,
            transition: "transform .2s cubic-bezier(.23,1,.32,1), background .3s, border-color .3s",
            padding: "13px 30px", borderRadius: 9, background: "rgba(167,139,250,0.1)",
            border: "1px solid rgba(167,139,250,0.4)", color: "#c4b5fd", fontSize: 13,
            cursor: "pointer", letterSpacing: "0.1em", fontFamily: "monospace" }}>
            VIEW WORK →
          </button>
          <button style={{ padding: "13px 30px", borderRadius: 9, background: "transparent",
            border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.35)",
            fontSize: 13, cursor: "pointer", letterSpacing: "0.1em", fontFamily: "monospace",
            transition: "all .2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.35)"; }}>
            CONTACT
          </button>
        </div>

        {/* Geo label */}
        <div style={{ position: "absolute", bottom: 20, left: 28, fontSize: 11, color: "rgba(255,255,255,0.18)", letterSpacing: "0.1em" }}>
          28.6°N 77.2°E · NEW DELHI
        </div>
        <div style={{ position: "absolute", bottom: 20, right: 28, fontSize: 11, color: "rgba(255,255,255,0.18)", letterSpacing: "0.1em" }}>
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} IST
        </div>
      </section>

      {/* ── Projects ── */}
      <section style={{ padding: "4rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "rgba(255,255,255,0.25)", marginBottom: 8, fontFamily: "monospace" }}>SELECTED WORK</div>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 800, letterSpacing: "-0.03em" }}>Projects</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
          {PROJECTS.map(p => <Card key={p.id} p={p} />)}
        </div>
      </section>

      {/* ── Skills ── */}
      <section ref={skillsRef} style={{ padding: "4rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "rgba(255,255,255,0.25)", marginBottom: 8, fontFamily: "monospace" }}>CAPABILITIES</div>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 800, letterSpacing: "-0.03em" }}>Skills</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1rem", marginBottom: "3rem" }}>
          {SKILL_GROUPS.map((g, i) => <SkillGroup key={g.label} group={g} idx={i} go={skillsGo} />)}
        </div>

        {/* Timeline */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)", margin: "2rem 0" }} />
        <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "rgba(255,255,255,0.25)", marginBottom: "1.5rem", fontFamily: "monospace" }}>TIMELINE</div>
        <div style={{ position: "relative", paddingLeft: 28 }}>
          <div style={{ position: "absolute", left: 6, top: 4, bottom: 4, width: 1,
            background: "linear-gradient(to bottom,rgba(167,139,250,.4),transparent)" }} />
          {[
            { y: "2022", l: "Started BCA @ Bharati Vidyapeeth, Delhi", c: "#38bdf8", pulse: false },
            { y: "2024", l: "Won Tech Brilliance Award — Macquarie Tech^Us Showcase", c: "#facc15", pulse: false },
            { y: "2025", l: "Built CyberVantage & InfraBeacon", c: "#34d399", pulse: false },
            { y: "2026", l: "Graduating Jul · Targeting EY Analyst (Australia)", c: "#a78bfa", pulse: true },
          ].map((item, i) => (
            <div key={item.y} style={{ position: "relative", marginBottom: i < 3 ? "1.5rem" : 0,
              opacity: skillsGo ? 1 : 0, transform: skillsGo ? "none" : "translateX(-10px)",
              transition: `opacity .5s ${.3 + i * .12}s, transform .5s ${.3 + i * .12}s` }}>
              <div style={{ position: "absolute", left: -23, top: 4, width: 9, height: 9, borderRadius: "50%",
                background: item.c, boxShadow: `0 0 8px ${item.c}55`,
                animation: item.pulse ? "dotBeat 1.5s infinite" : "none" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 3 }}>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", letterSpacing: ".1em", fontFamily: "monospace" }}>{item.y}</span>
              </div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{item.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section style={{ padding: "4rem 2rem 6rem", maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "rgba(255,255,255,0.25)", marginBottom: 8, fontFamily: "monospace" }}>GET IN TOUCH</div>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1rem" }}>Let's build something</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
          Open to internships, freelance projects, and full-time opportunities. Especially interested in AI/cloud roles in Australia.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          {[
            { label: "ujwwal@gmail.com", icon: "✉", color: "#a78bfa" },
            { label: "GitHub", icon: "⌘", color: "#38bdf8" },
            { label: "LinkedIn", icon: "◈", color: "#34d399" },
          ].map(c => (
            <button key={c.label} style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "12px 22px", borderRadius: 10, cursor: "pointer",
              background: c.color + "10", border: `1px solid ${c.color}33`,
              color: c.color, fontSize: 13, letterSpacing: "0.05em", fontFamily: "system-ui",
              transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = c.color + "1f"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = c.color + "10"; e.currentTarget.style.transform = "none"; }}>
              <span style={{ fontSize: 14 }}>{c.icon}</span> {c.label}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
