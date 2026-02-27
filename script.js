/* ---------------------------
   Year
--------------------------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------------------------
   Scroll progress indicator
--------------------------- */
const progressBar = document.querySelector("#scrollProgress .bar");
function updateProgress(){
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop || document.body.scrollTop;
  const scrollHeight = doc.scrollHeight - doc.clientHeight;
  const p = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  progressBar.style.width = `${p}%`;
}
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

/* ---------------------------
   Reveal on scroll
--------------------------- */
const reveals = document.querySelectorAll(".reveal");
const revealObs = new IntersectionObserver((entries) => {
  for (const e of entries){
    if (e.isIntersecting){
      e.target.classList.add("visible");
      revealObs.unobserve(e.target);
    }
  }
}, { threshold: 0.15 });
reveals.forEach(el => revealObs.observe(el));

/* ---------------------------
   AI-style typing animation
--------------------------- */
const typingEl = document.getElementById("typing");
const typingOut = document.getElementById("typingOutput");

const commands = [
  { cmd: "run portfolio --mode=lab-ui", out: "Initializing interface… rendering modules… ✓" },
  { cmd: "scan projects --tags=nlp,data,recsys", out: "Indexed 5 artifacts. Filters enabled. ✓" },
  { cmd: "evaluate --robustness imbalance", out: "Diagnostics ready: precision–recall trade-offs logged. ✓" },
  { cmd: "deploy --target=github-pages", out: "Static build prepared for GitHub Pages. ✓" }
];

let cmdIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop(){
  const current = commands[cmdIndex].cmd;

  if (!deleting){
    typingEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length){
      typingOut.textContent = commands[cmdIndex].out;
      deleting = true;
      setTimeout(typeLoop, 1200);
      return;
    }
    setTimeout(typeLoop, 28);
  } else {
    // delete quickly but keep output line for a lab-console feel
    typingEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0){
      deleting = false;
      cmdIndex = (cmdIndex + 1) % commands.length;
      typingOut.textContent = "";
      setTimeout(typeLoop, 250);
      return;
    }
    setTimeout(typeLoop, 16);
  }
}
typeLoop();

/* ---------------------------
   Interactive project filtering
--------------------------- */
const chips = document.querySelectorAll(".chip");
const cards = document.querySelectorAll(".card");

function setActiveChip(target){
  chips.forEach(c => c.classList.toggle("active", c === target));
}

function applyFilter(tag){
  cards.forEach(card => {
    const tags = (card.getAttribute("data-tags") || "").split(/\s+/).filter(Boolean);
    const show = (tag === "all") || tags.includes(tag);

    if (show){
      card.classList.remove("hidden");
      // small reflow to allow transition-friendly reappearance
      card.style.display = "";
      requestAnimationFrame(() => card.style.opacity = "1");
    } else {
      card.classList.add("hidden");
    }
  });
}

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    setActiveChip(chip);
    applyFilter(chip.getAttribute("data-filter"));
  });
});

/* ---------------------------
   3D card tilt effect
--------------------------- */
const tiltCards = document.querySelectorAll(".tilt");

function attachTilt(card){
  let raf = null;

  function onMove(e){
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;  // 0..1
    const y = (e.clientY - rect.top) / rect.height; // 0..1
    const rotY = (x - 0.5) * 10; // degrees
    const rotX = (0.5 - y) * 10;

    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-2px)`;
    });
  }

  function onLeave(){
    if (raf) cancelAnimationFrame(raf);
    card.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  }

  card.addEventListener("mousemove", onMove);
  card.addEventListener("mouseleave", onLeave);
  card.addEventListener("touchstart", onLeave, { passive: true });
}
tiltCards.forEach(attachTilt);

/* ---------------------------
   Particle background (canvas)
--------------------------- */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let W = 0, H = 0, DPR = 1;
function resize(){
  DPR = Math.max(1, Math.floor(window.devicePixelRatio || 1));
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W * DPR;
  canvas.height = H * DPR;
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  ctx.setTransform(DPR,0,0,DPR,0,0);
}
window.addEventListener("resize", resize);
resize();

const particleCount = Math.min(120, Math.floor((W * H) / 12000) + 40);
const particles = [];
const maxLinkDist = 120;

function rand(min,max){ return Math.random() * (max - min) + min; }

function initParticles(){
  particles.length = 0;
  for (let i=0; i<particleCount; i++){
    particles.push({
      x: rand(0,W),
      y: rand(0,H),
      vx: rand(-0.35,0.35),
      vy: rand(-0.35,0.35),
      r: rand(1.0,2.2),
      // two-tone lab palette (cyan / violet)
      hue: Math.random() < 0.72 ? "0,245,255" : "138,125,255"
    });
  }
}
initParticles();

let mouse = { x: -9999, y: -9999, active:false };
window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  mouse.active = true;
}, { passive:true });
window.addEventListener("mouseleave", () => { mouse.active = false; }, { passive:true });

function step(){
  ctx.clearRect(0,0,W,H);

  // subtle vignette wash
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0,0,W,H);

  // update
  for (const p of particles){
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < -20) p.x = W + 20;
    if (p.x > W + 20) p.x = -20;
    if (p.y < -20) p.y = H + 20;
    if (p.y > H + 20) p.y = -20;
  }

  // links
  for (let i=0; i<particles.length; i++){
    for (let j=i+1; j<particles.length; j++){
      const a = particles[i], b = particles[j];
      const dx = a.x - b.x, dy = a.y - b.y;
      const d = Math.hypot(dx,dy);
      if (d < maxLinkDist){
        const alpha = (1 - d / maxLinkDist) * 0.25;
        ctx.strokeStyle = `rgba(0,245,255,${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x,a.y);
        ctx.lineTo(b.x,b.y);
        ctx.stroke();
      }
    }
  }

  // mouse links (adds “lab interactivity”)
  if (mouse.active){
    for (const p of particles){
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const d = Math.hypot(dx,dy);
      if (d < 140){
        const alpha = (1 - d / 140) * 0.35;
        ctx.strokeStyle = `rgba(${p.hue},${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x,p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();

        // gentle attraction
        p.vx += (-dx / (d + 30)) * 0.0008;
        p.vy += (-dy / (d + 30)) * 0.0008;
      }
    }
  }

  // draw particles
  for (const p of particles){
    ctx.fillStyle = `rgba(${p.hue},0.65)`;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
  }

  requestAnimationFrame(step);
}
step();
