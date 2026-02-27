/* ============================================================
   Manar Systems Lab
   - Force-directed graph physics
   - Structured dossiers (CV-derived)
   - Advanced command system
   - Subtle audio feedback (toggleable)
   - Cinematic transitions (boot -> app; panel slide; modal)
   ============================================================ */

/* ---------------------------
   CV-derived structured data
   (projects, experience, education, publications, skills)
   Source: uploaded CV :contentReference[oaicite:1]{index=1}
--------------------------- */
const DATA = {
  identity: {
    name: "Manar Attar",
    role: "AI Consultant • NLP • Data Science",
    location: "Amstelveen / Amsterdam",
    languages: ["English (Fluent)", "Dutch (B2)", "Arabic (Fluent)"],
    hobbies: ["Travel", "Walks", "Football", "Meeting new people"],
    summary:
      "Artificial Intelligence graduate with a data science background, focused on building applied AI systems that improve decision-making and operational efficiency through robust pipelines."
  },

  experience: [
    {
      id: "exp_vervai",
      title: "AI Consultant — Vervai",
      meta: "Apr 2024 – Present",
      bullets: [
        "Designed and implemented applied AI solutions with practical innovation focus.",
        "Organized and led AI workshops and training sessions bridging theory and practice."
      ],
      tags: ["Applied AI", "Workshops", "Delivery"]
    },
    {
      id: "exp_daffee",
      title: "Innovation Consultant — Daffee",
      meta: "Jun 2024 – Sep 2025",
      bullets: [
        "Created role-specific GPT assistants to enhance productivity and decision-making.",
        "Built semi-automated workflows across marketing, sales, and operations to reduce manual tasks."
      ],
      tags: ["GPT Assistants", "Automation", "Ops"]
    }
  ],

  education: [
    {
      id: "edu_msc",
      title: "MSc Language & AI — Vrije Universiteit Amsterdam",
      meta: "Sep 2025 – Present",
      bullets: [
        "Advanced NLP and AI-driven language modeling; data annotation & labeling.",
        "Text analytics and large language models for extracting linguistic patterns from text."
      ],
      tags: ["NLP", "LLMs", "Annotation"]
    },
    {
      id: "edu_bsc",
      title: "BSc Artificial Intelligence — Vrije Universiteit Amsterdam",
      meta: "Sep 2020 – Aug 2023",
      bullets: [
        "Machine learning, statistical methods, probability theory, hypothesis testing."
      ],
      tags: ["ML", "Statistics", "Foundations"]
    },
    {
      id: "edu_minor",
      title: "Minor Data Science",
      meta: "Text analysis & NLP emphasis",
      bullets: [
        "Extracting insights from unstructured data using machine learning."
      ],
      tags: ["Text Mining", "NLP"]
    },
    {
      id: "edu_startup",
      title: "Amsterdam Startup Launch Program — VU Amsterdam",
      meta: "Sep 2024 – Jan 2025",
      bullets: [
        "Validated business concepts using the Business Model Canvas in an entrepreneurship track."
      ],
      tags: ["Entrepreneurship", "BMC"]
    }
  ],

  projects: [
    {
      id: "proj_linked4resilience",
      name: "LINKED4RESILIENCE",
      badge: "Research System • Crisis Response",
      problem:
        "Crisis datasets are fragmented and inconsistent, limiting resilience planning and response.",
      method:
        "Built pipelines for cleaning, processing, and visualizing geo-annotated crisis datasets; used Linked Data methodologies and implemented a unification algorithm.",
      result:
        "Publication at ACM SIGSPATIAL focusing on crisis response and resilience planning.",
      stack: ["Python", "RDF", "Ontology", "Linked Data", "SPARQL", "GitHub", "Geodata", "Data Visualization"],
      tags: ["Linked Data", "Pipelines", "Research"]
    },
    {
      id: "proj_income",
      name: "Predicting Annual Income",
      badge: "ML Study • Imbalance & Robustness",
      problem:
        "Severe class imbalance reduced model reliability for income estimation.",
      method:
        "Performed distribution analysis; evaluated oversampling strategies including random duplication and synthetic generation (SMOTE).",
      result:
        "Improved accuracy and robustness of predictive models under imbalance.",
      stack: ["Machine Learning", "Data Cleaning", "Data Processing", "Data Visualization"],
      tags: ["Imbalance", "SMOTE", "Evaluation"]
    },
    {
      id: "proj_swipeeat",
      name: "SwipeEat",
      badge: "Product System • Recommender + UX",
      problem:
        "Restaurant menu selection is noisy; users need fast preference-driven decision support.",
      method:
        "Implemented preference-based recommendation algorithm; designed swipe-driven UI; deployed as lightweight mobile web app.",
      result:
        "Demo product delivered; MVP under production.",
      stack: ["Python", "Flask", "JavaScript", "HTML", "CSS"],
      tags: ["Recommender", "Product", "UX"]
    },
    {
      id: "proj_emotion",
      name: "Emotion & Sentiment Analysis",
      badge: "NLP System • Robust Evaluation",
      problem:
        "Emotion labels are often imbalanced; naive accuracy hides precision–recall trade-offs.",
      method:
        "Built baseline and optimized SVM models; applied TF–IDF feature engineering and error analysis on large-scale conversational/social text.",
      result:
        "Competitive performance with documented precision–recall trade-offs under imbalance.",
      stack: ["Python", "NLP", "TF–IDF", "SVM", "Text Mining", "Data Labeling"],
      tags: ["NLP", "SVM", "Imbalance"]
    },
    {
      id: "proj_cooking",
      name: "Cooking Assistant Bot",
      badge: "Conversational System • Dialogue UX",
      problem:
        "Kitchen guidance requires step-by-step interactive instructions under time constraints.",
      method:
        "Contributed to design and implementation of a conversational agent delivering structured recipe guidance.",
      result:
        "Accessible cooking assistant improving practical user interaction.",
      stack: ["Conversational AI", "NLP", "Dialogue Systems"],
      tags: ["Conversational", "UX", "NLP"]
    },
    {
      id: "proj_worldcup",
      name: "World Cup Twitter Text Mining",
      badge: "NLP Pipeline • Social Data",
      problem:
        "Large-scale social text requires robust extraction of semantic and affective signals.",
      method:
        "Combined ML and rule-based approaches; implemented topic classification and named entity recognition.",
      result:
        "Sentiment analysis framework supporting NLP workflows.",
      stack: ["Text Mining", "Sentiment Analysis", "Topic Classification", "NER"],
      tags: ["Text Mining", "NER", "Sentiment"]
    }
  ],

  publications: [
    {
      id: "pub_sigspatial",
      name: "Converting and Enriching Geoannotated Event Data: Integrating Information for Ukraine Resilience",
      badge: "ACM SIGSPATIAL 2023",
      meta: "Nov 13–16, 2023",
      note: "Geo-annotated event integration via Linked Data for resilience planning."
    },
    {
      id: "pub_bnaic",
      name: "Using Integrated and Enriched Linked Data for Ukraine Resilience",
      badge: "BNAIC 2023",
      meta: "Nov 8–10, 2023",
      note: "Integrated and enriched Linked Data to support crisis resilience analysis."
    }
  ],

  skills: [
    { id:"sk_python", name:"Python", group:"Core" },
    { id:"sk_sql", name:"SQL", group:"Core" },
    { id:"sk_ml", name:"Machine Learning", group:"Core" },
    { id:"sk_nlp", name:"NLP", group:"Core" },
    { id:"sk_llm", name:"LLMs", group:"Core" },

    { id:"sk_fastapi", name:"FastAPI", group:"Engineering" },
    { id:"sk_flask", name:"Flask", group:"Engineering" },
    { id:"sk_js", name:"JavaScript", group:"Engineering" },
    { id:"sk_html", name:"HTML", group:"Engineering" },
    { id:"sk_css", name:"CSS", group:"Engineering" },
    { id:"sk_firebase", name:"Firebase", group:"Engineering" },
    { id:"sk_github", name:"GitHub", group:"Engineering" },
    { id:"sk_api", name:"API Integration", group:"Engineering" },

    { id:"sk_pandas", name:"Pandas", group:"Data" },
    { id:"sk_numpy", name:"NumPy", group:"Data" },
    { id:"sk_matplotlib", name:"Matplotlib", group:"Data" },
    { id:"sk_seaborn", name:"Seaborn", group:"Data" },
    { id:"sk_excel", name:"Excel", group:"Data" },
    { id:"sk_prep", name:"Data Preparation", group:"Data" },
    { id:"sk_viz", name:"Data Visualization", group:"Data" },

    { id:"sk_rdf", name:"RDF", group:"Linked Data" },
    { id:"sk_onto", name:"Ontology", group:"Linked Data" },
    { id:"sk_sparql", name:"SPARQL", group:"Linked Data" },
    { id:"sk_linked", name:"Linked Data", group:"Linked Data" }
  ]
};

/* ---------------------------
   DOM
--------------------------- */
const boot = document.getElementById("boot");
const bootLog = document.getElementById("bootLog");
const app = document.getElementById("app");

const btnRecenter = document.getElementById("btnRecenter");
const btnMute = document.getElementById("btnMute");
const btnTheme = document.getElementById("btnTheme");

const panel = document.getElementById("panel");
const panelTitle = document.getElementById("panelTitle");
const panelMeta = document.getElementById("panelMeta");
const panelChip = document.getElementById("panelChip");
const hudSelected = document.getElementById("hudSelected");

const termOut = document.getElementById("termOut");
const termIn = document.getElementById("termIn");

const modal = document.getElementById("modal");
const modalBg = document.getElementById("modalBg");
const modalClose = document.getElementById("modalClose");
const modalBody = document.getElementById("modalBody");

/* ---------------------------
   Utilities
--------------------------- */
function esc(s){
  return String(s).replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[m]));
}
function nowTag(){
  const d = new Date();
  return `${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}:${String(d.getSeconds()).padStart(2,"0")}`;
}
function logLine(html){
  const div = document.createElement("div");
  div.className = "termLine";
  div.innerHTML = html;
  termOut.appendChild(div);
  termOut.scrollTop = termOut.scrollHeight;
}

/* ---------------------------
   Audio (subtle WebAudio beeps)
--------------------------- */
let audioEnabled = true;
let audioCtx = null;

function ensureAudio(){
  if (!audioCtx){
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}
function beep(type="ok"){
  if (!audioEnabled) return;
  try{
    ensureAudio();
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = "sine";
    const base = type === "err" ? 160 : type === "nav" ? 220 : 260;
    o.frequency.value = base;
    g.gain.value = 0.0001;

    o.connect(g);
    g.connect(audioCtx.destination);

    const t = audioCtx.currentTime;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.03, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.06);

    o.start(t);
    o.stop(t + 0.07);
  }catch(_){}
}

btnMute.addEventListener("click", () => {
  audioEnabled = !audioEnabled;
  btnMute.textContent = audioEnabled ? "Mute" : "Unmute";
  beep(audioEnabled ? "ok" : "err");
});

/* Theme toggle: switch accent between cyan and violet (minimal, not decorative) */
let themeFlip = false;
btnTheme.addEventListener("click", () => {
  themeFlip = !themeFlip;
  const root = document.documentElement;
  if (themeFlip){
    root.style.setProperty("--accentRGB", "138,125,255");
    root.style.setProperty("--accent2RGB", "0,245,255");
  } else {
    root.style.setProperty("--accentRGB", "0,245,255");
    root.style.setProperty("--accent2RGB", "138,125,255");
  }
  beep("ok");
});

/* ---------------------------
   Boot sequence + cinematic transition
--------------------------- */
const bootLines = [
  `[${nowTag()}] boot: initializing systems lab`,
  `[${nowTag()}] load: identity module`,
  `[${nowTag()}] load: project dossiers (${DATA.projects.length})`,
  `[${nowTag()}] load: research artifacts (${DATA.publications.length})`,
  `[${nowTag()}] verify: ACM SIGSPATIAL 2023 ✓`,
  `[${nowTag()}] verify: BNAIC 2023 ✓`,
  `[${nowTag()}] status: ready`
];

let bootIdx = 0;
function bootTick(){
  if (bootIdx < bootLines.length){
    bootLog.textContent += bootLines[bootIdx] + "\n";
    bootIdx++;
    setTimeout(bootTick, 420);
  }
}
bootTick();

function enterApp(){
  boot.setAttribute("aria-hidden", "true");
  boot.style.opacity = "0";
  boot.style.pointerEvents = "none";

  app.setAttribute("aria-hidden", "false");
  app.classList.add("ready");

  beep("ok");
  logLine(`<span class="ok">[${nowTag()}] system online</span> — type <span class="cmd">help</span>`);
  termIn.focus();
}

window.addEventListener("keydown", (e) => {
  if (boot.getAttribute("aria-hidden") === "false" && e.key === "Enter"){
    enterApp();
  }
});

/* ---------------------------
   Modal
--------------------------- */
function openModal(html){
  modalBody.innerHTML = html;
  modal.setAttribute("aria-hidden", "false");
  beep("nav");
}
function closeModal(){
  modal.setAttribute("aria-hidden", "true");
}
modalBg.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* ---------------------------
   Dossier builders
--------------------------- */
function tagsHtml(tags){
  return `<div class="tags">${tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>`;
}

function dossierProject(p){
  return `
    <div class="dHead">
      <h2 class="dTitle">${esc(p.name)}</h2>
      <span class="dBadge">${esc(p.badge)}</span>
    </div>
    <div class="dGrid">
      <div class="dBlock">
        <h3>Problem</h3>
        <p>${esc(p.problem)}</p>
      </div>
      <div class="dBlock">
        <h3>Method</h3>
        <p>${esc(p.method)}</p>
      </div>
      <div class="dBlock dWide">
        <h3>Result</h3>
        <p>${esc(p.result)}</p>
        ${tagsHtml(p.tags)}
      </div>
      <div class="dBlock dWide">
        <h3>Stack</h3>
        <p>${esc(p.stack.join(" • "))}</p>
      </div>
    </div>
  `;
}

function dossierPublication(pub){
  return `
    <div class="dHead">
      <h2 class="dTitle">${esc(pub.name)}</h2>
      <span class="dBadge">${esc(pub.badge)}</span>
    </div>
    <div class="dGrid">
      <div class="dBlock">
        <h3>Venue</h3>
        <p>${esc(pub.badge)} • ${esc(pub.meta)}</p>
      </div>
      <div class="dBlock">
        <h3>Research Note</h3>
        <p>${esc(pub.note)}</p>
      </div>
      <div class="dBlock dWide">
        <h3>Founder Interpretation</h3>
        <p>
          This artifact demonstrates rigorous systems thinking: integrating heterogeneous crisis data into a unified
          representation that can support decisions under uncertainty.
        </p>
      </div>
    </div>
  `;
}

function panelRender({title, meta, chip, bodyHtml}){
  panelTitle.textContent = title;
  panelMeta.textContent = meta;
  panelChip.textContent = chip;

  // cinematic panel slide
  panel.classList.remove("panelSlideIn");
  void panel.offsetWidth; // reflow
  panel.classList.add("panelSlideIn");

  // replace body
  const existing = panel.querySelector(".panelBody");
  if (existing) existing.remove();

  const b = document.createElement("div");
  b.className = "panelBody";
  b.innerHTML = bodyHtml;
  panel.appendChild(b);
}

/* ---------------------------
   Force Graph (physics + drag + pan + zoom)
--------------------------- */
const canvas = document.getElementById("map");
const ctx = canvas.getContext("2d");

let W=0, H=0, DPR=1;
function resizeCanvas(){
  DPR = Math.max(1, Math.floor(window.devicePixelRatio || 1));
  W = canvas.clientWidth;
  H = canvas.clientHeight;
  canvas.width = W * DPR;
  canvas.height = H * DPR;
  ctx.setTransform(DPR,0,0,DPR,0,0);
}
window.addEventListener("resize", resizeCanvas);

const camera = { x: 0, y: 0, z: 1.0 };
function toScreen(wx, wy){
  return { x: (wx - camera.x) * camera.z + W/2, y: (wy - camera.y) * camera.z + H/2 };
}
function toWorld(sx, sy){
  return { x: (sx - W/2)/camera.z + camera.x, y: (sy - H/2)/camera.z + camera.y };
}
function clamp(v,a,b){ return Math.max(a, Math.min(b, v)); }

function nodeColor(type){
  const css = getComputedStyle(document.documentElement);
  const a = css.getPropertyValue("--accentRGB").trim() || "0,245,255";
  const v = css.getPropertyValue("--accent2RGB").trim() || "138,125,255";
  const g = css.getPropertyValue("--goodRGB").trim() || "44,255,126";
  if (type === "core") return a;
  if (type === "project") return a;
  if (type === "publication") return v;
  if (type === "experience") return g;
  if (type === "education") return v;
  if (type === "skillhub" || type === "skill") return a;
  if (type === "anchor") return "255,255,255";
  if (type === "contact") return g;
  return "255,255,255";
}

const nodes = [];
const links = [];
function addNode(n){ nodes.push(n); return n; }
function link(a,b,w=1){ links.push({a:a.id, b:b.id, w}); }

function ring(count, r){
  const out = [];
  for (let i=0;i<count;i++){
    const t = (Math.PI*2) * (i/count) - Math.PI/2;
    out.push({ x: Math.cos(t)*r, y: Math.sin(t)*r });
  }
  return out;
}

const core = addNode({ id:"core", label:"Manar", type:"core", r:18, x:0, y:0, vx:0, vy:0, fixed:true });

const anchors = [
  { id:"a_projects", label:"Systems", type:"anchor", r:14 },
  { id:"a_research", label:"Research", type:"anchor", r:14 },
  { id:"a_experience", label:"Experience", type:"anchor", r:14 },
  { id:"a_education", label:"Education", type:"anchor", r:14 },
  { id:"a_skills", label:"Skills", type:"anchor", r:14 },
  { id:"a_contact", label:"Contact", type:"contact", r:14 }
];

const ap = ring(anchors.length, 220);
anchors.forEach((a,i)=>{
  const n = addNode({ ...a, x: ap[i].x, y: ap[i].y, vx:0, vy:0 });
  link(core, n, 1.6);
});

// projects cluster
const pAnchor = anchors[0].id;
const projPos = ring(DATA.projects.length, 135);
DATA.projects.forEach((p,i)=>{
  const anchorNode = nodes.find(n => n.id === pAnchor);
  const n = addNode({
    id: p.id,
    label: p.name,
    type:"project",
    r: 11,
    x: anchorNode.x + projPos[i].x,
    y: anchorNode.y + projPos[i].y,
    vx:0, vy:0,
    ref: p
  });
  link(anchorNode, n, 1.25);
});

// publications cluster
const rAnchor = anchors[1].id;
const pubPos = ring(DATA.publications.length, 85);
DATA.publications.forEach((p,i)=>{
  const anchorNode = nodes.find(n => n.id === rAnchor);
  const n = addNode({
    id: p.id,
    label: p.badge,
    type:"publication",
    r: 10,
    x: anchorNode.x + pubPos[i].x,
    y: anchorNode.y + pubPos[i].y,
    vx:0, vy:0,
    ref: p
  });
  link(anchorNode, n, 1.1);
});

// experience cluster
const eAnchor = anchors[2].id;
const expPos = ring(DATA.experience.length, 90);
DATA.experience.forEach((e,i)=>{
  const anchorNode = nodes.find(n => n.id === eAnchor);
  const n = addNode({
    id: e.id,
    label: e.title.split(" — ")[0],
    type:"experience",
    r: 10,
    x: anchorNode.x + expPos[i].x,
    y: anchorNode.y + expPos[i].y,
    vx:0, vy:0,
    ref: e
  });
  link(anchorNode, n, 1.1);
});

// education cluster
const edAnchor = anchors[3].id;
const eduPos = ring(DATA.education.length, 110);
DATA.education.forEach((ed,i)=>{
  const anchorNode = nodes.find(n => n.id === edAnchor);
  const n = addNode({
    id: ed.id,
    label: ed.title.split(" — ")[0],
    type:"education",
    r: 10,
    x: anchorNode.x + eduPos[i].x,
    y: anchorNode.y + eduPos[i].y,
    vx:0, vy:0,
    ref: ed
  });
  link(anchorNode, n, 1.1);
});

// skills cluster: hubs by group
const sAnchor = anchors[4].id;
const groups = [...new Set(DATA.skills.map(s => s.group))];
const gp = ring(groups.length, 150);
groups.forEach((g,i)=>{
  const anchorNode = nodes.find(n => n.id === sAnchor);
  const hubId = `hub_${g.toLowerCase().replace(/\s+/g,"_")}`;
  const hub = addNode({
    id: hubId,
    label: g,
    type:"skillhub",
    r: 10,
    x: anchorNode.x + gp[i].x,
    y: anchorNode.y + gp[i].y,
    vx:0, vy:0,
    ref: { group: g }
  });
  link(anchorNode, hub, 1.05);

  const items = DATA.skills.filter(s => s.group === g);
  const sp = ring(items.length, 55);
  items.forEach((s,k)=>{
    const sn = addNode({
      id: s.id,
      label: s.name,
      type:"skill",
      r: 7,
      x: hub.x + sp[k].x,
      y: hub.y + sp[k].y,
      vx:0, vy:0,
      ref: s
    });
    link(hub, sn, 0.95);
  });
});

let selected = null;
let hovered = null;

const physics = {
  repel: 6800,
  spring: 0.018,
  damping: 0.86,
  linkDist: 78,
  maxV: 3.2
};

function physicsStep(){
  // repulsion
  for (let i=0;i<nodes.length;i++){
    const a = nodes[i];
    for (let j=i+1;j<nodes.length;j++){
      const b = nodes[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const d2 = dx*dx + dy*dy + 0.001;
      const d = Math.sqrt(d2);

      const force = physics.repel / d2;
      const fx = (dx / d) * force * 0.002;
      const fy = (dy / d) * force * 0.002;

      if (!a.fixed){ a.vx += fx; a.vy += fy; }
      if (!b.fixed){ b.vx -= fx; b.vy -= fy; }
    }
  }

  // springs
  for (const l of links){
    const a = nodes.find(n => n.id === l.a);
    const b = nodes.find(n => n.id === l.b);
    if (!a || !b) continue;

    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const d = Math.sqrt(dx*dx + dy*dy) + 0.001;

    const target = physics.linkDist * l.w;
    const diff = d - target;

    const fx = (dx/d) * diff * physics.spring;
    const fy = (dy/d) * diff * physics.spring;

    if (!a.fixed){ a.vx += fx; a.vy += fy; }
    if (!b.fixed){ b.vx -= fx; b.vy -= fy; }
  }

  // integrate
  for (const n of nodes){
    if (n.fixed) continue;

    n.vx *= physics.damping;
    n.vy *= physics.damping;

    const v = Math.sqrt(n.vx*n.vx + n.vy*n.vy);
    if (v > physics.maxV){
      n.vx = (n.vx / v) * physics.maxV;
      n.vy = (n.vy / v) * physics.maxV;
    }

    n.x += n.vx;
    n.y += n.vy;
  }
}

function draw(){
  ctx.clearRect(0,0,W,H);

  // subtle wash
  ctx.fillStyle = "rgba(0,0,0,0.35)";
  ctx.fillRect(0,0,W,H);

  // links
  for (const l of links){
    const a = nodes.find(n => n.id === l.a);
    const b = nodes.find(n => n.id === l.b);
    if (!a || !b) continue;

    const A = toScreen(a.x,a.y);
    const B = toScreen(b.x,b.y);

    const hi = selected && (selected.id === a.id || selected.id === b.id);
    ctx.strokeStyle = hi ? "rgba(138,125,255,0.28)" : "rgba(255,255,255,0.08)";
    ctx.lineWidth = hi ? 1.35 : 1.0;

    ctx.beginPath();
    ctx.moveTo(A.x,A.y);
    ctx.lineTo(B.x,B.y);
    ctx.stroke();
  }

  // nodes
  for (const n of nodes){
    const p = toScreen(n.x,n.y);
    const rgb = nodeColor(n.type);

    const isH = hovered && hovered.id === n.id;
    const isS = selected && selected.id === n.id;

    // glow
    const glowA = isS ? 0.38 : isH ? 0.26 : 0.12;
    ctx.fillStyle = `rgba(${rgb},${glowA})`;
    ctx.beginPath();
    ctx.arc(p.x,p.y,(n.r+7)*camera.z,0,Math.PI*2);
    ctx.fill();

    // core dot
    ctx.fillStyle = `rgba(${rgb},0.90)`;
    ctx.beginPath();
    ctx.arc(p.x,p.y,n.r*camera.z,0,Math.PI*2);
    ctx.fill();

    // label
    ctx.font = `${Math.max(10, 12*camera.z)}px ${n.type==="core" ? "Inter" : "JetBrains Mono"}`;
    ctx.fillStyle = "rgba(255,255,255,0.74)";
    ctx.textBaseline = "middle";
    ctx.fillText(n.label, p.x + (n.r+10)*camera.z, p.y);
  }
}

/* selection + hit testing */
function hitTest(sx,sy){
  const w = toWorld(sx,sy);
  const ordered = [...nodes].sort((a,b) => (b.r - a.r));
  for (const n of ordered){
    const dx = w.x - n.x;
    const dy = w.y - n.y;
    const rr = (n.r + 7) / camera.z;
    if (dx*dx + dy*dy <= rr*rr) return n;
  }
  return null;
}

function recenter(){
  camera.x = 0;
  camera.y = 0;
  camera.z = 1.0;
  beep("nav");
  logLine(`<span class="ok">[${nowTag()}]</span> map recentered`);
}
btnRecenter.addEventListener("click", recenter);
window.addEventListener("keydown",(e)=>{ if (e.key.toLowerCase()==="r") recenter(); });

/* zoom */
canvas.addEventListener("wheel", (e)=>{
  e.preventDefault();
  const before = toWorld(e.offsetX, e.offsetY);

  const dz = Math.sign(e.deltaY);
  const factor = dz > 0 ? 0.92 : 1.08;
  camera.z = clamp(camera.z * factor, 0.62, 2.1);

  const after = toWorld(e.offsetX, e.offsetY);
  camera.x += (before.x - after.x);
  camera.y += (before.y - after.y);
}, { passive:false });

/* drag/pan */
let draggingNode = null;
let dragOffset = {x:0,y:0};
let panning = false;
let panStart = {x:0,y:0};
let camStart = {x:0,y:0};

canvas.addEventListener("mousemove",(e)=>{
  hovered = hitTest(e.offsetX, e.offsetY);
  canvas.style.cursor = hovered ? "pointer" : (panning ? "grabbing" : "default");
});

canvas.addEventListener("mousedown",(e)=>{
  // right button pan
  if (e.button === 2){
    panning = true;
    panStart = {x:e.clientX, y:e.clientY};
    camStart = {x:camera.x, y:camera.y};
    canvas.style.cursor = "grabbing";
    return;
  }

  const n = hitTest(e.offsetX, e.offsetY);
  if (n){
    draggingNode = n;
    const w = toWorld(e.offsetX, e.offsetY);
    dragOffset.x = n.x - w.x;
    dragOffset.y = n.y - w.y;
  }
});

window.addEventListener("mouseup",()=>{
  draggingNode = null;
  panning = false;
  canvas.style.cursor = hovered ? "pointer" : "default";
});

window.addEventListener("mousemove",(e)=>{
  if (draggingNode){
    const rect = canvas.getBoundingClientRect();
    const w = toWorld(e.clientX - rect.left, e.clientY - rect.top);
    draggingNode.x = w.x + dragOffset.x;
    draggingNode.y = w.y + dragOffset.y;
    draggingNode.vx = 0; draggingNode.vy = 0;
  }
  if (panning){
    const dx = (e.clientX - panStart.x) / camera.z;
    const dy = (e.clientY - panStart.y) / camera.z;
    camera.x = camStart.x - dx;
    camera.y = camStart.y - dy;
  }
});

// disable context menu for right-drag pan
canvas.addEventListener("contextmenu",(e)=> e.preventDefault());

function selectNode(n){
  selected = n;
  hudSelected.textContent = n ? n.label : "none";
  if (!n){
    panelRender({
      title:"Initialize",
      meta:"This interface is navigated by graph selection and terminal commands.",
      chip:"SYSTEM",
      bodyHtml: `<p class="lead">Select nodes to inspect dossiers, or type <span class="mono">help</span> to navigate.</p>`
    });
    return;
  }

  beep("nav");

  // behavior: projects & publications open modal deep-dive; others render panel
  if (n.type === "project"){
    openModal(dossierProject(n.ref));
    logLine(`<span class="ok">[${nowTag()}]</span> opened dossier: <span class="cmd">${esc(n.ref.name)}</span>`);
    return;
  }
  if (n.type === "publication"){
    openModal(dossierPublication(n.ref));
    logLine(`<span class="ok">[${nowTag()}]</span> opened artifact: <span class="cmd">${esc(n.ref.badge)}</span>`);
    return;
  }
  if (n.type === "experience"){
    panelRender({
      title:"Experience",
      meta:n.ref.meta,
      chip:"LOG",
      bodyHtml: `
        <p class="lead"><strong>${esc(n.ref.title)}</strong></p>
        <div class="card"><div class="cardK">Highlights</div><div class="cardV">${esc(n.ref.bullets.join(" "))}</div></div>
        <div class="card" style="margin-top:10px;"><div class="cardK">Tags</div><div class="cardV">${esc(n.ref.tags.join(" • "))}</div></div>
      `
    });
    return;
  }
  if (n.type === "education"){
    panelRender({
      title:"Education",
      meta:n.ref.meta,
      chip:"ACADEMIC",
      bodyHtml: `
        <p class="lead"><strong>${esc(n.ref.title)}</strong></p>
        <div class="card"><div class="cardK">Notes</div><div class="cardV">${esc(n.ref.bullets.join(" "))}</div></div>
        <div class="card" style="margin-top:10px;"><div class="cardK">Tags</div><div class="cardV">${esc(n.ref.tags.join(" • "))}</div></div>
      `
    });
    return;
  }
  if (n.type === "skillhub"){
    const list = DATA.skills.filter(s => s.group === n.ref.group).map(s => s.name);
    panelRender({
      title:"Skill Cluster",
      meta:`Group: ${n.ref.group}`,
      chip:"TOPOLOGY",
      bodyHtml: `
        <p class="lead">This cluster represents tools used together in real builds.</p>
        <div class="card"><div class="cardK">Nodes</div><div class="cardV">${esc(list.join(" • "))}</div></div>
      `
    });
    return;
  }
  if (n.type === "skill"){
    panelRender({
      title:"Skill Node",
      meta:`Group: ${n.ref.group || "—"}`,
      chip:"CAPABILITY",
      bodyHtml: `
        <p class="lead"><strong>${esc(n.ref.name)}</strong></p>
        <div class="card"><div class="cardK">Interpretation</div><div class="cardV">A practical capability used across systems and pipelines.</div></div>
      `
    });
    return;
  }
  if (n.type === "contact"){
    openModal(`
      <div class="dHead">
        <h2 class="dTitle">Contact</h2>
        <span class="dBadge">Connect</span>
      </div>
      <div class="dGrid">
        <div class="dBlock">
          <h3>Email</h3>
          <p><a href="mailto:manarattar77@gmail.com">manarattar77@gmail.com</a></p>
        </div>
        <div class="dBlock">
          <h3>LinkedIn</h3>
          <p><a href="https://www.linkedin.com/in/manar-attar" target="_blank" rel="noreferrer">linkedin.com/in/manar-attar</a></p>
        </div>
        <div class="dBlock dWide">
          <h3>Message Template</h3>
          <p class="mono">Subject: Collaboration — Applied AI / NLP<br/>Hi Manar, I came across your Systems Lab and would like to discuss…</p>
        </div>
      </div>
    `);
    return;
  }

  // anchors and core
  if (n.id === "core"){
    panelRender({
      title: DATA.identity.name,
      meta: `${DATA.identity.role} • ${DATA.identity.location}`,
      chip:"OVERVIEW",
      bodyHtml: `
        <p class="lead">${esc(DATA.identity.summary)}</p>
        <div class="grid">
          <div class="card"><div class="cardK">Languages</div><div class="cardV">${esc(DATA.identity.languages.join(" • "))}</div></div>
          <div class="card"><div class="cardK">Hobbies</div><div class="cardV">${esc(DATA.identity.hobbies.join(" • "))}</div></div>
          <div class="card"><div class="cardK">Next</div><div class="cardV mono">try: ls projects</div></div>
        </div>
      `
    });
    return;
  }

  if (n.type === "anchor"){
    // show compact summaries in panel; deep dives via open/focus
    if (n.id === "a_projects"){
      panelRender({
        title:"Systems",
        meta:"Project dossiers: research systems and product builds.",
        chip:"DOSSIERS",
        bodyHtml: `
          <p class="lead">Click a project node or run <span class="mono">ls projects</span> then <span class="mono">open &lt;id&gt;</span>.</p>
          <div class="card"><div class="cardK">Available</div><div class="cardV">${esc(DATA.projects.map(p=>p.id).join(" • "))}</div></div>
        `
      });
      return;
    }
    if (n.id === "a_research"){
      panelRender({
        title:"Research",
        meta:"Peer-reviewed artifacts validating rigorous system integration.",
        chip:"ARTIFACTS",
        bodyHtml: `
          <p class="lead">Click a research node or run <span class="mono">ls publications</span>.</p>
          <div class="card"><div class="cardK">Artifacts</div><div class="cardV">${esc(DATA.publications.map(p=>p.badge).join(" • "))}</div></div>
        `
      });
      return;
    }
    if (n.id === "a_experience"){
      panelRender({
        title:"Experience",
        meta:"Applied AI delivery + automation workflows.",
        chip:"LOGS",
        bodyHtml: `
          ${DATA.experience.map(e => `
            <div class="card" style="margin-bottom:10px;">
              <div class="cardK">${esc(e.meta)}</div>
              <div class="cardV"><strong>${esc(e.title)}</strong> — ${esc(e.bullets.join(" "))}</div>
            </div>
          `).join("")}
        `
      });
      return;
    }
    if (n.id === "a_education"){
      panelRender({
        title:"Education",
        meta:"Research foundation + language AI specialization.",
        chip:"ACADEMIC",
        bodyHtml: `
          ${DATA.education.map(ed => `
            <div class="card" style="margin-bottom:10px;">
              <div class="cardK">${esc(ed.meta)}</div>
              <div class="cardV"><strong>${esc(ed.title)}</strong> — ${esc(ed.bullets.join(" "))}</div>
            </div>
          `).join("")}
        `
      });
      return;
    }
    if (n.id === "a_skills"){
      panelRender({
        title:"Skills",
        meta:"Topology grouped by operational use, not a flat list.",
        chip:"GRAPH",
        bodyHtml: `
          <p class="lead">Skill hubs represent real working clusters. Select a hub to inspect its nodes.</p>
          <div class="card"><div class="cardK">Groups</div><div class="cardV">${esc(groups.join(" • "))}</div></div>
        `
      });
      return;
    }
  }
}

/* click selection */
canvas.addEventListener("click",(e)=>{
  const n = hitTest(e.offsetX, e.offsetY);
  selectNode(n || null);
});

/* loop */
function frame(){
  physicsStep();
  draw();
  requestAnimationFrame(frame);
}

/* init canvas */
function init(){
  resizeCanvas();
  recenter();
  selectNode(core);
  frame();
}
init();

/* ---------------------------
   Terminal command system
--------------------------- */
const INDEX = new Map();
function indexAll(){
  INDEX.clear();
  for (const n of nodes){
    INDEX.set(n.id.toLowerCase(), n);
  }
  // also allow lookups by label
  for (const n of nodes){
    INDEX.set(String(n.label).toLowerCase(), n);
  }
  // allow project names
  for (const p of DATA.projects){
    INDEX.set(p.name.toLowerCase(), nodes.find(n=>n.id===p.id));
  }
}
indexAll();

function findNodeByToken(tok){
  if (!tok) return null;
  return INDEX.get(tok.toLowerCase()) || null;
}

function printHelp(){
  logLine(`<span class="ok">help</span> — commands:`);
  logLine(`<span class="cmd">help</span> — show commands`);
  logLine(`<span class="cmd">whoami</span> — overview`);
  logLine(`<span class="cmd">ls</span> [projects|publications|experience|education|skills] — list`);
  logLine(`<span class="cmd">open</span> &lt;id|name&gt; — open dossier/panel`);
  logLine(`<span class="cmd">focus</span> &lt;id|name&gt; — focus node on map`);
  logLine(`<span class="cmd">search</span> &lt;term&gt; — find nodes/projects`);
  logLine(`<span class="cmd">map</span> — recenter`);
  logLine(`<span class="cmd">clear</span> — clear console`);
  logLine(`<span class="cmd">mute</span> / <span class="cmd">unmute</span> — audio`);
  logLine(`<span class="cmd">theme</span> — toggle accent`);
}

function ls(category){
  const cat = (category || "").toLowerCase();
  if (!cat){
    logLine(`modules: <span class="cmd">projects</span> <span class="cmd">publications</span> <span class="cmd">experience</span> <span class="cmd">education</span> <span class="cmd">skills</span>`);
    return;
  }
  if (cat === "projects"){
    logLine(`<span class="ok">projects</span> (${DATA.projects.length})`);
    DATA.projects.forEach(p => logLine(`- <span class="cmd">${esc(p.id)}</span> — ${esc(p.name)}`));
    return;
  }
  if (cat === "publications"){
    logLine(`<span class="ok">publications</span> (${DATA.publications.length})`);
    DATA.publications.forEach(p => logLine(`- <span class="cmd">${esc(p.id)}</span> — ${esc(p.badge)}`));
    return;
  }
  if (cat === "experience"){
    logLine(`<span class="ok">experience</span> (${DATA.experience.length})`);
    DATA.experience.forEach(e => logLine(`- <span class="cmd">${esc(e.id)}</span> — ${esc(e.title)} (${esc(e.meta)})`));
    return;
  }
  if (cat === "education"){
    logLine(`<span class="ok">education</span> (${DATA.education.length})`);
    DATA.education.forEach(ed => logLine(`- <span class="cmd">${esc(ed.id)}</span> — ${esc(ed.title)} (${esc(ed.meta)})`));
    return;
  }
  if (cat === "skills"){
    logLine(`<span class="ok">skills</span> (${DATA.skills.length}) — grouped`);
    groups.forEach(g => {
      const items = DATA.skills.filter(s => s.group === g).map(s => s.name);
      logLine(`- <span class="cmd">${esc(g)}</span> — ${esc(items.slice(0,6).join(", "))}${items.length>6 ? "…" : ""}`);
    });
    return;
  }

  logLine(`<span class="err">unknown module:</span> ${esc(category)}`);
  beep("err");
}

function openToken(tok){
  const n = findNodeByToken(tok);
  if (!n){
    logLine(`<span class="err">not found:</span> ${esc(tok)}`);
    beep("err");
    return;
  }
  selectNode(n);
}

function focusToken(tok){
  const n = findNodeByToken(tok);
  if (!n){
    logLine(`<span class="err">not found:</span> ${esc(tok)}`);
    beep("err");
    return;
  }
  camera.x = n.x;
  camera.y = n.y;
  camera.z = 1.15;
  selectNode(n);
  logLine(`<span class="ok">focused</span> ${esc(n.id)}`);
}

function search(term){
  const q = (term || "").trim().toLowerCase();
  if (!q){
    logLine(`<span class="err">usage:</span> search &lt;term&gt;`);
    beep("err");
    return;
  }

  const results = [];
  for (const n of nodes){
    if (n.id.toLowerCase().includes(q) || String(n.label).toLowerCase().includes(q)){
      results.push(n);
    }
  }
  if (!results.length){
    logLine(`<span class="err">no matches</span> for "${esc(term)}"`);
    beep("err");
    return;
  }

  logLine(`<span class="ok">matches</span> (${results.length}):`);
  results.slice(0,12).forEach(r => logLine(`- <span class="cmd">${esc(r.id)}</span> — ${esc(r.label)}`));
  if (results.length > 12){
    logLine(`… ${results.length - 12} more`);
  }
}

function whoami(){
  const i = DATA.identity;
  panelRender({
    title: i.name,
    meta: `${i.role} • ${i.location}`,
    chip: "IDENTITY",
    bodyHtml: `
      <p class="lead">${esc(i.summary)}</p>
      <div class="grid">
        <div class="card"><div class="cardK">Languages</div><div class="cardV">${esc(i.languages.join(" • "))}</div></div>
        <div class="card"><div class="cardK">Hobbies</div><div class="cardV">${esc(i.hobbies.join(" • "))}</div></div>
        <div class="card"><div class="cardK">Next</div><div class="cardV mono">try: ls projects</div></div>
      </div>
    `
  });
  beep("ok");
}

function clearConsole(){
  termOut.innerHTML = "";
  beep("ok");
}

function parseAndRun(input){
  const raw = input.trim();
  if (!raw) return;

  logLine(`<span class="cmd">&gt; ${esc(raw)}</span>`);
  const [cmd, ...rest] = raw.split(/\s+/);
  const arg = rest.join(" ");

  switch (cmd.toLowerCase()){
    case "help": beep("ok"); printHelp(); break;
    case "ls": beep("ok"); ls(rest[0] || ""); break;
    case "open":
      if (!arg){ logLine(`<span class="err">usage:</span> open &lt;id|name&gt;`); beep("err"); break; }
      beep("nav"); openToken(arg); break;
    case "focus":
      if (!arg){ logLine(`<span class="err">usage:</span> focus &lt;id|name&gt;`); beep("err"); break; }
      beep("nav"); focusToken(arg); break;
    case "map": recenter(); break;
    case "search": search(arg); break;
    case "whoami": whoami(); break;
    case "clear": clearConsole(); break;
    case "mute": audioEnabled = false; btnMute.textContent = "Unmute"; beep("err"); break;
    case "unmute": audioEnabled = true; btnMute.textContent = "Mute"; beep("ok"); break;
    case "theme": btnTheme.click(); break;
    default:
      logLine(`<span class="err">unknown command:</span> ${esc(cmd)} (try <span class="cmd">help</span>)`);
      beep("err");
      break;
  }
}

termIn.addEventListener("keydown",(e)=>{
  if (e.key === "Enter"){
    const v = termIn.value;
    termIn.value = "";
    parseAndRun(v);
  }
});

/* initial console greeting */
logLine(`<span class="ok">[${nowTag()}]</span> boot staged — press Enter to continue`);
