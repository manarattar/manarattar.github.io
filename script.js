/* Scroll progress */
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / height) * 100;
  document.querySelector("#scrollProgress .bar").style.width = progress + "%";
});

/* Typing animation */
const typing = document.getElementById("typing");
const messages = [
  "Initializing AI Research Interface...",
  "Loading NLP Pipelines...",
  "Deploying Intelligent Systems..."
];

let msgIndex = 0;
let charIndex = 0;

function typeEffect(){
  if(charIndex < messages[msgIndex].length){
    typing.textContent += messages[msgIndex][charIndex];
    charIndex++;
    setTimeout(typeEffect,40);
  }else{
    setTimeout(()=>{
      typing.textContent = "";
      charIndex = 0;
      msgIndex = (msgIndex + 1) % messages.length;
      typeEffect();
    },1500);
  }
}

typeEffect();

/* Filtering */
const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

buttons.forEach(btn=>{
  btn.addEventListener("click",()=>{
    buttons.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    cards.forEach(card=>{
      const tags = card.dataset.tags.split(" ");
      if(filter === "all" || tags.includes(filter)){
        card.style.display = "block";
      }else{
        card.style.display = "none";
      }
    });
  });
});

/* Stable particle background */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize",resize);

const particles = [];
for(let i=0;i<80;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    vx:(Math.random()-0.5)*0.4,
    vy:(Math.random()-0.5)*0.4
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="rgba(0,255,255,0.7)";
  particles.forEach(p=>{
    p.x+=p.vx;
    p.y+=p.vy;

    if(p.x<0||p.x>canvas.width) p.vx*=-1;
    if(p.y<0||p.y>canvas.height) p.vy*=-1;

    ctx.beginPath();
    ctx.arc(p.x,p.y,2,0,Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
