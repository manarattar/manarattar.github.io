/* ---------------------------
   Progress bar (for small scroll situations)
--------------------------- */
const progressBar = document.querySelector("#scrollProgress .bar");
function updateProgress(){
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const scrollHeight = doc.scrollHeight - doc.clientHeight;
  const p = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  progressBar.style.width = `${p}%`;
}
window.addEventListener("scroll", updateProgress, { passive:true });
updateProgress();

/* ---------------------------
   Data model (from CV)
   Source CV: education, experience, projects, publications, skills, languages
--------------------------- */
const DATA = {
  overview: {
    title: "Manar Attar",
    subtitle: "AI Consultant • NLP • Data Science",
    summary:
      "Artificial Intelligence graduate with a data science background, focused on building applied systems that improve decision-making and operational efficiency through robust AI pipelines.",
    location: "Amstelveen / Amsterdam",
    languages: ["English (Fluent)", "Dutch (B2)", "Arabic (Fluent)"],
    hobbies: ["Travel", "Walks", "Football", "Meeting new people"]
  },

  experience: [
    {
      id: "exp_vervai",
      title: "AI Consultant — Vervai",
      meta: "Apr 2024 – Present",
      bullets: [
        "Designed and implemented applied AI solutions with emphasis on practical innovation.",
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
        "Built semi-automated workflows in marketing, sales, and operations to reduce manual tasks."
      ],
      tags: ["GPT Assistants", "Automation", "Ops Efficiency"]
    }
  ],

  education: [
    {
      id: "edu_msc",
      title: "MSc Language & AI — Vrije Universiteit Amsterdam",
      meta: "Sep 2025 – Present",
      bullets: [
        "Strong foundation in NLP, AI-driven language modeling, and data annotation & labeling.",
        "Text analytics and large language models applied to extract meaningful linguistic patterns."
      ],
      tags: ["NLP", "LLMs", "Annotation"]
    },
    {
      id: "edu_bsc",
      title: "BSc Artificial Intelligence — Vrije Universiteit Amsterdam",
      meta: "Sep 2020 – Aug 2023",
      bullets: [
        "Solid foundation in AI concepts, machine learning, statistical methods, probability and hypothesis testing."
      ],
      tags: ["ML", "Statistics", "Foundations"]
    },
    {
      id: "edu_minor",
      title: "Minor Data Science — VU Amsterdam",
      meta: "Focus: NLP & Text Analysis",
      bullets: ["Extracting insights from unstructured data using machine learning."],
      tags: ["Text Mining", "NLP"]
    },
    {
      id: "edu_startup",
      title: "Amsterdam Startup Launch Program — VU Amsterdam",
      meta: "Sep 2024 – Jan 2025",
      bullets: ["Entrepreneurship program focused on validating concepts using the Business Model Canvas."],
      tags: ["Entrepreneurship", "BMC"]
    }
  ],

  projects: [
    {
      id: "proj_linked4resilience",
      name: "LINKED4RESILIENCE",
      badge: "Research / Crisis Response",
      problem: "Crisis datasets are fragmented and inconsistent, limiting resilience planning and response.",
      method:
        "Built pipelines for cleaning, processing, and visualizing geo-annotated crisis datasets. Used Linked Data methodologies and implemented an algorithm for data unification and integration.",
      result:
        "Resulted in a paper publication at ACM SIGSPATIAL focused on crisis response and resilience planning.",
      stack: ["Python", "RDF", "Ontology", "Linked Data", "SPARQL", "GitHub", "Geodata", "Data Visualization"],
      tags: ["Linked Data", "Pipelines", "Research"]
    },
    {
      id: "proj_income",
      name: "Predicting Annual Income",
      badge: "ML Evaluation / Imbalance",
      problem: "Income prediction data exhibited significant class imbalance, reducing model robustness.",
      method:
        "Performed distribution analysis; evaluated oversampling strategies including random duplication and synthetic generation (e.g., SMOTE).",
      result:
        "Improved accuracy and robustness of predictive models for income estimation.",
      stack: ["Machine Learning", "Data Cleaning", "Data Processing", "Data Visualization"],
      tags: ["ML", "Imbalance", "SMOTE"]
    },
    {
      id: "proj_swipeeat",
      name: "SwipeEat",
      badge: "Recommender System / Product",
      problem: "Restaurant menu selection is noisy; users want a fast, preference-driven decision process.",
      method:
        "Implemented a preference-based recommendation algorithm; designed a swipe-driven UI; deployed as a lightweight mobile web app.",
      result:
        "Demo product built; MVP under production.",
      stack: ["Python", "Flask", "JavaScript", "HTML", "CSS"],
      tags: ["Recommender", "UI", "Product"]
    },
    {
      id: "proj_emotion",
      name: "Emotion & Sentiment Analysis",
      badge: "NLP / Robust Evaluation",
      problem: "Emotion labels in text data are often imbalanced, making standard accuracy misleading.",
      method:
        "Developed baseline and optimized SVM models on large-scale conversational/social media text. Applied TF–IDF, error analysis, and trade-off evaluation under imbalance.",
      result:
        "Achieved competitive performance and documented precision–recall trade-offs.",
      stack: ["Python", "NLP", "TF–IDF", "SVM", "Text Mining", "Data Labeling"],
      tags: ["NLP", "SVM", "Evaluation"]
    },
    {
      id: "proj_cooking",
      name: "Cooking Assistant Bot",
      badge: "Conversational AI",
      problem: "Step-by-step cooking guidance benefits from interaction and clarity under time pressure.",
      method:
        "Contributed to the design and implementation of a conversational agent delivering structured recipe guidance.",
      result:
        "An intuitive and accessible cooking assistant improving practical kitchen interaction.",
      stack: ["Conversational AI", "NLP", "Dialogue Systems"],
      tags: ["Conversational", "UX", "NLP"]
    },
    {
      id: "proj_worldcup",
      name: "World Cup Twitter Text Mining",
      badge: "Text Mining",
      problem: "Large-scale social media text requires robust pipelines to extract semantic and affective patterns.",
      method:
        "Combined conventional ML and rule-based approaches; implemented topic classification and named entity recognition.",
      result:
        "Sentiment analysis framework supporting NLP workflows.",
      stack: ["Text Mining", "Sentiment Analysis", "Topic Classification", "NER"],
      tags: ["Text Mining", "NLP", "Social Data"]
    }
  ],

  publications: [
    {
      id: "pub_sigspatial",
      name: "Converting and Enriching Geoannotated Event Data: Integrating Information for Ukraine Resilience",
      badge: "ACM SIGSPATIAL 2023",
      meta: "Nov 13–16, 2023",
      note: "Linked Data integration of geo-annotated events for resilience planning."
    },
    {
      id: "pub_bnaic",
      name: "Using Integrated and Enriched Linked Data for Ukraine Resilience",
      badge: "BNAIC 2023",
      meta: "Nov 8–10, 2023",
      note: "Enriched Linked Data for improved situational awareness and resilience analysis."
    }
  ],

  skills: [
    // Core + tooling from CV
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
   UI references
--------------------------- */
const hudSelected = document.getElementById("hudSelected");
const panelTitle = document.getElementById("panelTitle");
const panelChip  = document.getElementById("panelChip");
const panelIntro = document.getElementById("panelIntro");
const panelDynamic = document.getElementById("panelDynamic");

const btnRecenter = document.getElementById("btnRecenter");
const btnOpenOverview = document.getElementById("btnOpenOverview");
const btnOpenContact = document.getElementById("btnOpenContact");

const modal = document.getElementById("modal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalContent = document.getElementById("modalContent");

/* ---------------------------
   Typing line (subtle, not gimmicky)
--------------------------- */
const hudMode = document.getElementById("hudMode");
let modeFrames = ["Cognitive Map", "Semantic Graph", "Knowledge Topology", "Conceptual Index"];
let mf = 0;
setInterval(() => {
  mf = (mf + 1) % modeFrames.length;
  hudMode.textContent = modeFrames[mf];
}, 2400);

/* ---------------------------
   Modal
--------------------------- */
function openModal(html){
  modalContent.innerHTML = html;
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal(){
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
modalBackdrop.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") closeModal();
});

/* ---------------------------
   Dossier builders
--------------------------- */
function tagRow(tags){
  return `<div class="tagRow">${tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>`;
}
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[m]));
}

function buildProjectDossier(p){
  return `
    <div class="dossierHead">
      <h2 class="dossierTitle">${escapeHtml(p.name)}</h2>
      <span class="dossierBadge">${escapeHtml(p.badge)}</span>
    </div>

    <div class="dossierGrid">
      <div class="dossierBlock">
        <h3>Problem</h3>
        <p>${escapeHtml(p.problem)}</p>
      </div>
      <div class="dossierBlock">
        <h3>Method</h3>
        <p>${escapeHtml(p.method)}</p>
      </div>
      <div class="dossierBlock dossierWide">
        <h3>Result</h3>
        <p>${escapeHtml(p.result)}</p>
        ${tagRow(p.tags)}
      </div>
      <div class="dossierBlock dossierWide">
        <h3>Stack</h3>
        <p>${escapeHtml(p.stack.join(" • "))}</p>
      </div>

      <div class="dossierBlock dossierWide">
        <h3>Actions</h3>
        <div class="dossierLinks">
          <a class="linkBtn" href="#"
             onclick="navigator.clipboard?.writeText('${escapeHtml(p.name)}'); return false;">
             Copy project title
          </a>
          <a class="linkBtn" href="assets/ManarAttarCV.pdf" target="_blank" rel="noreferrer">Open CV</a>
        </div>
      </div>
    </div>
  `;
}

function buildPublicationDossier(pub){
  return `
    <div class="dossierHead">
      <h2 class="dossierTitle">${escapeHtml(pub.name)}</h2>
      <span class="dossierBadge">${escapeHtml(pub.badge)}</span>
    </div>

    <div class="dossierGrid">
      <div class="dossierBlock">
        <h3>Venue & Date</h3>
        <p>${escapeHtml(pub.badge)} • ${escapeHtml(pub.meta)}</p>
      </div>
      <div class="dossierBlock">
        <h3>Research Note</h3>
        <p>${escapeHtml(pub.note)}</p>
      </div>
      <div class="dossierBlock dossierWide">
        <h3>Why it matters</h3>
        <p>
          This artifact demonstrates research-grade delivery: integrating heterogeneous crisis data into a unified
          representation usable for resilience planning and decision support.
        </p>
      </div>
    </div>
  `;
}

function buildOverviewDossier(){
  const o = DATA.overview;
  return `
    <div class="dossierHead">
      <h2 class="dossierTitle">${escapeHtml(o.title)}</h2>
      <span class="dossierBadge">Overview</span>
    </div>

    <div class="dossierGrid">
      <div class="dossierBlock">
        <h3>Positioning</h3>
        <p>${escapeHtml(o.summary)}</p>
      </div>
      <div class="dossierBlock">
        <h3>Location</h3>
        <p>${escapeHtml(o.location)}</p>
      </div>
      <div class="dossierBlock dossierWide">
        <h3>Languages</h3>
        <p>${escapeHtml(o.languages.join(" • "))}</p>
      </div>
      <div class="dossierBlock dossierWide">
        <h3>Hobbies</h3>
        <p>${escapeHtml(o.hobbies.join(" • "))}</p>
      </div>
    </div>
  `;
}

function buildContactDossier(){
  return `
    <div class="dossierHead">
      <h2 class="dossierTitle">Contact</h2>
      <span class="dossierBadge">Connect</span>
    </div>

    <div class="dossierGrid">
      <div class="dossierBlock">
        <h3>Email</h3>
        <p><a href="mailto:manarattar77@gmail.com">manarattar77@gmail.com</a></p>
      </div>
      <div class="dossierBlock">
        <h3>LinkedIn</h3>
        <p><a href="https://www.linkedin.com/in/manar-attar" target="_blank" rel="noreferrer">linkedin.com/in/manar-attar</a></p>
      </div>
      <div class="dossierBlock dossierWide">
        <h3>Quick message template</h3>
        <p class="mono">
          Subject: Collaboration — Applied AI / NLP<br/>
          Hi Manar, I came across your cognitive portfolio and would like to discuss…
        </p>
      </div>
    </div>
  `;
}

/* ---------------------------
   Panel rendering
--------------------------- */
function showPanel(payload){
  panelIntro.hidden = true;
  panelDynamic.hidden = false;

  panelTitle.textContent = payload.title;
  panelChip.textContent = payload.chip;

  panelDynamic.innerHTML = payload.html;
}

function resetPanel(){
  panelIntro.hidden = false;
  panelDynamic.hidden = true;
  panelTitle.textContent = "Initialize";
  panelChip.textContent = "SYSTEM";
  hudSelected.textContent = "None";
}

/* ---------------------------
   Graph Engine (canvas)
--------------------------- */
const canvas = document.getElementById("graphCanvas");
const ctx = canvas.getContext("2d");

let W=0, H=0, DPR=1;
function resize(){
  DPR = Math.max(1, Math.floor(window.devicePixelRatio || 1));
  W = canvas.clientWidth;
  H = canvas.clientHeight;
  canvas.width = W * DPR;
  canvas.height = H * DPR;
  ctx.setTransform(DPR,0,0,DPR,0,0);
}
window.addEventListener("resize", resize);
resize();

const camera = { x: 0, y: 0, zoom: 1.0 };
const WORLD = { cx: 0, cy: 0 };

function toScreen(wx, wy){
  return {
    x: (wx - camera.x) * camera.zoom + W/2,
    y: (wy - camera.y) * camera.zoom + H/2
  };
}
function toWorld(sx, sy){
  return {
    x: (sx - W/2)/camera.zoom + camera.x,
    y: (sy - H/2)/camera.zoom + camera.y
  };
}

function lerp(a,b,t){ return a + (b-a)*t; }

function colorRGBA(rgb, a){ return `rgba(${rgb},${a})`; }

// Build graph nodes
// Central identity node + clusters for experience/projects/publications/skills/education
const nodes = [];
const links = [];

function addNode(n){ nodes.push(n); return n; }
function link(a,b,w=1){ links.push({a:a.id, b:b.id, w}); }

const palette = {
  cyan: "0,245,255",
  violet:"138,125,255",
  good:"44,255,126",
  white:"255,255,255"
};

const center = addNode({
  id:"core",
  label:"Manar",
  type:"core",
  color: palette.cyan,
  r: 18,
  x: 0, y: 0,
  vx:0, vy:0,
  fixed: true
});

function ringPositions(count, radius){
  const out = [];
  for (let i=0;i<count;i++){
    const a = (Math.PI*2) * (i/count) - Math.PI/2;
    out.push({ x: Math.cos(a)*radius, y: Math.sin(a)*radius });
  }
  return out;
}

// Category anchors
const anchors = [
  { id:"a_experience", label:"Experience", color: palette.good },
  { id:"a_projects", label:"Systems", color: palette.cyan },
  { id:"a_publications", label:"Research", color: palette.violet },
  { id:"a_skills", label:"Skills", color: palette.cyan },
  { id:"a_education", label:"Education", color: palette.violet },
  { id:"a_contact", label:"Contact", color: palette.good }
];

const anchorPos = ringPositions(anchors.length, 220);
anchors.forEach((a,i)=>{
  const n = addNode({
    id: a.id,
    label: a.label,
    type:"anchor",
    color: a.color,
    r: 14,
    x: anchorPos[i].x,
    y: anchorPos[i].y,
    vx:0, vy:0
  });
  link(center, n, 1.6);
});

// Experience nodes
const expPos = ringPositions(DATA.experience.length, 90);
DATA.experience.forEach((e,i)=>{
  const n = addNode({
    id: e.id,
    label: e.title.replace(" — ", "\n"),
    type:"experience",
    color: palette.good,
    r: 10,
    x: anchorPos[0].x + expPos[i].x,
    y: anchorPos[0].y + expPos[i].y,
    vx:0, vy:0,
    ref: e
  });
  link(nodes.find(x=>x.id==="a_experience"), n, 1.2);
});

// Education nodes
const eduPos = ringPositions(DATA.education.length, 105);
DATA.education.forEach((ed,i)=>{
  const n = addNode({
    id: ed.id,
    label: ed.title.split(" — ")[0],
    type:"education",
    color: palette.violet,
    r: 10,
    x: anchorPos[4].x + eduPos[i].x,
    y: anchorPos[4].y + eduPos[i].y,
    vx:0, vy:0,
    ref: ed
  });
  link(nodes.find(x=>x.id==="a_education"), n, 1.2);
});

// Project nodes
const projPos = ringPositions(DATA.projects.length, 135);
DATA.projects.forEach((p,i)=>{
  const n = addNode({
    id: p.id,
    label: p.name,
    type:"project",
    color: palette.cyan,
    r: 11,
    x: anchorPos[1].x + projPos[i].x,
    y: anchorPos[1].y + projPos[i].y,
    vx:0, vy:0,
    ref: p
  });
  link(nodes.find(x=>x.id==="a_projects"), n, 1.35);
});

// Publication nodes
const pubPos = ringPositions(DATA.publications.length, 85);
DATA.publications.forEach((p,i)=>{
  const n = addNode({
    id: p.id,
    label: p.badge,
    type:"publication",
    color: palette.violet,
    r: 10,
    x: anchorPos[2].x + pubPos[i].x,
    y: anchorPos[2].y + pubPos[i].y,
    vx:0, vy:0,
    ref: p
  });
  link(nodes.find(x=>x.id==="a_publications"), n, 1.2);
});

// Skill cluster: group hubs + skill nodes
const groups = [...new Set(DATA.skills.map(s => s.group))];
const groupPos = ringPositions(groups.length, 150);
groups.forEach((g,i)=>{
  const hub = addNode({
    id: "hub_"+g.replace(/\s+/g,"_").toLowerCase(),
    label: g,
    type:"skillhub",
    color: palette.cyan,
    r: 10,
    x: anchorPos[3].x + groupPos[i].x,
    y: anchorPos[3].y + groupPos[i].y,
    vx:0, vy:0,
    ref: { group: g }
  });
  link(nodes.find(x=>x.id==="a_skills"), hub, 1.15);

  const skillItems = DATA.skills.filter(s => s.group === g);
  const sp = ringPositions(skillItems.length, 55);
  skillItems.forEach((s, k)=>{
    const sn = addNode({
      id: s.id,
      label: s.name,
      type:"skill",
      color: palette.cyan,
      r: 7,
      x: hub.x + sp[k].x,
      y: hub.y + sp[k].y,
      vx:0, vy:0,
      ref: s
    });
    link(hub, sn, 0.95);
  });
});

// Contact node
const contactNode = nodes.find(n => n.id === "a_contact");
contactNode.type = "contact";
contactNode.r = 12;

// physics settings
const physics = {
  repel: 6800,
  spring: 0.018,
  damping: 0.86,
  linkDist: 80,
  maxV: 3.2
};

let selected = null;
let hover = null;

function recenter(){
  camera.x = 0;
  camera.y = 0;
  camera.zoom = 1.0;
}
btnRecenter.addEventListener("click", recenter);

window.addEventListener("keydown",(e)=>{
  if (e.key.toLowerCase() === "r") recenter();
});

/* Interaction: drag + zoom + click */
let draggingNode = null;
let dragOffset = {x:0,y:0};
let isPanning = false;
let panStart = {x:0,y:0};
let camStart = {x:0,y:0};

canvas.addEventListener("wheel", (e)=>{
  e.preventDefault();
  const delta = Math.sign(e.deltaY);
  const factor = delta > 0 ? 0.92 : 1.08;
  const mouseWorld = toWorld(e.offsetX, e.offsetY);

  camera.zoom = Math.min(2.0, Math.max(0.62, camera.zoom * factor));

  // zoom around cursor
  const after = toWorld(e.offsetX, e.offsetY);
  camera.x += (mouseWorld.x - after.x);
  camera.y += (mouseWorld.y - after.y);
}, { passive:false });

function hitTest(sx, sy){
  const w = toWorld(sx, sy);
  // prioritize larger nodes first
  const ordered = [...nodes].sort((a,b)=> (b.r - a.r));
  for (const n of ordered){
    const dx = w.x - n.x;
    const dy = w.y - n.y;
    const rr = (n.r + 6) / camera.zoom; // slightly forgiving
    if ((dx*dx + dy*dy) <= rr*rr) return n;
  }
  return null;
}

canvas.addEventListener("mousemove", (e)=>{
  hover = hitTest(e.offsetX, e.offsetY);
});

canvas.addEventListener("mousedown", (e)=>{
  const n = hitTest(e.offsetX, e.offsetY);
  if (n){
    draggingNode = n;
    const w = toWorld(e.offsetX, e.offsetY);
    dragOffset.x = n.x - w.x;
    dragOffset.y = n.y - w.y;
  } else {
    isPanning = true;
    panStart.x = e.clientX;
    panStart.y = e.clientY;
    camStart.x = camera.x;
    camStart.y = camera.y;
  }
});

window.addEventListener("mouseup", ()=>{
  draggingNode = null;
  isPanning = false;
});

window.addEventListener("mousemove", (e)=>{
  if (draggingNode){
    const rect = canvas.getBoundingClientRect();
    const w = toWorld(e.clientX - rect.left, e.clientY - rect.top);
    draggingNode.x = w.x + dragOffset.x;
    draggingNode.y = w.y + dragOffset.y;
    draggingNode.vx = 0;
    draggingNode.vy = 0;
  }
  if (isPanning){
    const dx = (e.clientX - panStart.x) / camera.zoom;
    const dy = (e.clientY - panStart.y) / camera.zoom;
    camera.x = camStart.x - dx;
    camera.y = camStart.y - dy;
  }
});

canvas.addEventListener("click", (e)=>{
  const n = hitTest(e.offsetX, e.offsetY);
  if (!n) {
    selected = null;
    resetPanel();
    return;
  }
  selected = n;
  hudSelected.textContent = n.label.replace("\n"," ");

  // Anchor nodes show panel, project/publication open dossier, skills show detail, contact opens contact dossier.
  if (n.type === "project"){
    openModal(buildProjectDossier(n.ref));
  } else if (n.type === "publication"){
    openModal(buildPublicationDossier(n.ref));
  } else if (n.type === "contact"){
    openModal(buildContactDossier());
  } else if (n.type === "experience"){
    const eRef = n.ref;
    showPanel({
      title: "Experience",
      chip: "LOG",
      html: `
        <div class="card">
          <div class="cardTitle">${escapeHtml(eRef.title)}</div>
          <div class="cardMeta">${escapeHtml(eRef.meta)}</div>
          <p class="cardText">${escapeHtml(eRef.bullets.join(" "))}</p>
          ${tagRow(eRef.tags)}
          <div class="ctaRow" style="margin-top:12px;">
            <button class="primaryBtn" onclick="openModal(buildOverviewDossier())">Open Overview</button>
            <button class="ghostBtn" onclick="openModal(buildContactDossier())">Contact</button>
          </div>
        </div>
      `
    });
  } else if (n.type === "education"){
    const ed = n.ref;
    showPanel({
      title: "Education",
      chip: "ACADEMIC",
      html: `
        <div class="card">
          <div class="cardTitle">${escapeHtml(ed.title)}</div>
          <div class="cardMeta">${escapeHtml(ed.meta)}</div>
          <p class="cardText">${escapeHtml(ed.bullets.join(" "))}</p>
          ${tagRow(ed.tags)}
        </div>
      `
    });
  } else if (n.type === "skillhub"){
    const g = n.ref.group;
    const list = DATA.skills.filter(s => s.group === g).map(s => s.name);
    showPanel({
      title: "Skill Cluster",
      chip: "GRAPH",
      html: `
        <div class="card">
          <div class="cardTitle">${escapeHtml(g)}</div>
          <div class="cardMeta">Cluster</div>
          <p class="cardText">A coherent set of tools used together in real builds.</p>
          ${tagRow(list)}
        </div>
      `
    });
  } else if (n.type === "skill"){
    showPanel({
      title: "Skill Node",
      chip: "CAPABILITY",
      html: `
        <div class="card">
          <div class="cardTitle">${escapeHtml(n.ref.name)}</div>
          <div class="cardMeta">${escapeHtml(n.ref.group)}</div>
          <p class="cardText">
            This node is part of your operational toolkit. In the graph, it connects to the clusters and systems where it is used.
          </p>
          <div class="ctaRow" style="margin-top:12px;">
            <button class="ghostBtn" onclick="openModal(buildOverviewDossier())">Overview</button>
          </div>
        </div>
      `
    });
  } else if (n.type === "anchor"){
    // show a curated overview depending on which anchor
    if (n.id === "a_projects"){
      showPanel({
        title: "Systems",
        chip: "DOSSIERS",
        html: `
          <div class="card">
            <div class="cardTitle">Project Dossiers</div>
            <div class="cardMeta">Click any project node to open a deep-dive dossier.</div>
            <p class="cardText">
              The systems cluster contains research and product builds, ranging from Linked Data crisis integration to
              recommender systems and robust NLP evaluation.
            </p>
            ${tagRow(DATA.projects.slice(0,6).map(p=>p.name))}
          </div>
        `
      });
    } else if (n.id === "a_publications"){
      showPanel({
        title: "Research",
        chip: "ARTIFACTS",
        html: `
          <div class="card">
            <div class="cardTitle">Publications</div>
            <div class="cardMeta">Click a publication node to inspect the research artifact.</div>
            <p class="cardText">
              These outputs represent peer-reviewed work connecting Linked Data integration with resilience planning.
            </p>
            ${tagRow(DATA.publications.map(p=>p.badge))}
          </div>
        `
      });
    } else if (n.id === "a_experience"){
      showPanel({
        title: "Experience",
        chip: "LOGS",
        html: `
          ${DATA.experience.map(e => `
            <div class="card">
              <div class="cardTitle">${escapeHtml(e.title)}</div>
              <div class="cardMeta">${escapeHtml(e.meta)}</div>
              <p class="cardText">${escapeHtml(e.bullets.join(" "))}</p>
              ${tagRow(e.tags)}
            </div>
          `).join("")}
        `
      });
    } else if (n.id === "a_education"){
      showPanel({
        title: "Education",
        chip: "ACADEMIC",
        html: `
          ${DATA.education.map(ed => `
            <div class="card">
              <div class="cardTitle">${escapeHtml(ed.title)}</div>
              <div class="cardMeta">${escapeHtml(ed.meta)}</div>
              <p class="cardText">${escapeHtml(ed.bullets.join(" "))}</p>
              ${tagRow(ed.tags)}
            </div>
          `).join("")}
        `
      });
    } else if (n.id === "a_skills"){
      showPanel({
        title: "Skills",
        chip: "TOPOLOGY",
        html: `
          <div class="card">
            <div class="cardTitle">Skill Topology</div>
            <div class="cardMeta">Grouped by how you actually use them in systems.</div>
            <p class="cardText">
              Instead of listing tools, this map shows clusters (Core, Data, Engineering, Linked Data)
              and their dependencies in your work.
            </p>
            ${tagRow(groups)}
          </div>
        `
      });
    }
  } else if (n.type === "core"){
    openModal(buildOverviewDossier());
  }
});

/* buttons */
btnOpenOverview.addEventListener("click", ()=> openModal(buildOverviewDossier()));
btnOpenContact.addEventListener("click", ()=> openModal(buildContactDossier()));

/* ---------------------------
   Physics step
--------------------------- */
function physicsStep(){
  // repel
  for (let i=0;i<nodes.length;i++){
    const a = nodes[i];
    for (let j=i+1;j<nodes.length;j++){
      const b = nodes[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const d2 = dx*dx + dy*dy + 0.001;
      const d = Math.sqrt(d2);

      // weaker repulsion for distant nodes
      const force = physics.repel / d2;
      const fx = (dx / d) * force;
      const fy = (dy / d) * force;

      if (!a.fixed){ a.vx += fx * 0.002; a.vy += fy * 0.002; }
      if (!b.fixed){ b.vx -= fx * 0.002; b.vy -= fy * 0.002; }
    }
  }

  // springs
  for (const l of links){
    const a = nodes.find(n=>n.id===l.a);
    const b = nodes.find(n=>n.id===l.b);
    if (!a || !b) continue;

    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const d = Math.sqrt(dx*dx + dy*dy) + 0.001;

    const target = physics.linkDist * l.w;
    const diff = d - target;

    const k = physics.spring;
    const fx = (dx/d) * diff * k;
    const fy = (dy/d) * diff * k;

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

/* ---------------------------
   Draw
--------------------------- */
function draw(){
  ctx.clearRect(0,0,W,H);

  // background grain-like wash
  ctx.fillStyle = "rgba(0,0,0,0.22)";
  ctx.fillRect(0,0,W,H);

  // links
  for (const l of links){
    const a = nodes.find(n=>n.id===l.a);
    const b = nodes.find(n=>n.id===l.b);
    if (!a || !b) continue;

    const A = toScreen(a.x,a.y);
    const B = toScreen(b.x,b.y);

    const baseAlpha = 0.16 + 0.06*(l.w);
    ctx.strokeStyle = `rgba(0,245,255,${baseAlpha})`;
    ctx.lineWidth = 1;

    // highlight if connected to selection
    if (selected && (selected.id === a.id || selected.id === b.id)){
      ctx.strokeStyle = "rgba(138,125,255,0.30)";
      ctx.lineWidth = 1.4;
    }

    ctx.beginPath();
    ctx.moveTo(A.x,A.y);
    ctx.lineTo(B.x,B.y);
    ctx.stroke();
  }

  // nodes
  for (const n of nodes){
    const p = toScreen(n.x,n.y);

    // glow ring
    const isHover = hover && hover.id === n.id;
    const isSel = selected && selected.id === n.id;

    const glow = isSel ? 0.55 : isHover ? 0.40 : 0.22;
    ctx.fillStyle = `rgba(${n.color},${glow})`;
    ctx.beginPath();
    ctx.arc(p.x,p.y,(n.r+6)*camera.zoom,0,Math.PI*2);
    ctx.fill();

    // core fill
    ctx.fillStyle = `rgba(${n.color},0.88)`;
    ctx.beginPath();
    ctx.arc(p.x,p.y,n.r*camera.zoom,0,Math.PI*2);
    ctx.fill();

    // label
    const label = n.label || "";
    ctx.font = `${Math.max(10, 12*camera.zoom)}px ${n.type==="core" ? "Inter" : "JetBrains Mono"}`;
    ctx.fillStyle = "rgba(255,255,255,0.78)";
    ctx.textBaseline = "middle";

    const lines = label.split("\n");
    const offset = (lines.length-1) * 10 * camera.zoom * 0.5;
    lines.forEach((line, idx)=>{
      ctx.fillText(line, p.x + (n.r+10)*camera.zoom, p.y + (idx*10*camera.zoom - offset));
    });
  }

  // subtle reticle at center
  const c = toScreen(0,0);
  ctx.strokeStyle = "rgba(255,255,255,0.10)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(c.x,c.y,90,0,Math.PI*2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(c.x-120, c.y);
  ctx.lineTo(c.x+120, c.y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(c.x, c.y-120);
  ctx.lineTo(c.x, c.y+120);
  ctx.stroke();
}

/* ---------------------------
   Loop
--------------------------- */
function loop(){
  physicsStep();
  draw();
  requestAnimationFrame(loop);
}
loop();

/* default panel state */
resetPanel();
