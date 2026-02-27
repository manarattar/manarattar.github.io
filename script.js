/* Scroll Progress */
window.addEventListener("scroll",()=>{
const scrollTop=document.documentElement.scrollTop;
const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
document.querySelector("#scrollProgress .bar").style.width=(scrollTop/height)*100+"%";
});

/* Typing */
const typing=document.getElementById("typing");
const messages=[
"Loading NLP Pipelines...",
"Deploying Machine Learning Systems...",
"Integrating Linked Data..."
];
let m=0,c=0;
function type(){
if(c<messages[m].length){
typing.textContent+=messages[m][c++];
setTimeout(type,40);
}else{
setTimeout(()=>{typing.textContent="";c=0;m=(m+1)%messages.length;type();},1500);
}}
type();

/* Modal */
const modal=document.getElementById("modal");
const modalBody=document.getElementById("modalBody");

function openModal(project){
let content="";

if(project==="linked"){
content=`<h2>Linked4Resilience</h2>
<p>Built pipelines for cleaning and integrating geo-annotated crisis datasets using RDF and SPARQL.</p>
<p>Result: Publication at ACM SIGSPATIAL focusing on resilience planning.</p>`;
}
if(project==="income"){
content=`<h2>Income Prediction Study</h2>
<p>Analyzed class imbalance. Compared duplication vs SMOTE synthetic oversampling.</p>
<p>Result: Improved predictive robustness and accuracy.</p>`;
}
if(project==="swipeeat"){
content=`<h2>SwipeEat</h2>
<p>Implemented preference-based recommendation algorithm with swipe UI.</p>
<p>Built using Python, Flask, JavaScript, HTML & CSS.</p>`;
}
if(project==="emotion"){
content=`<h2>Emotion & Sentiment Analysis</h2>
<p>Applied TF-IDF, SVM optimization, error analysis under imbalance.</p>
<p>Achieved strong precision-recall trade-offs.</p>`;
}

modalBody.innerHTML=content;
modal.style.display="flex";
}

function closeModal(){
modal.style.display="none";
}

/* Neural Skill Network */
const canvas=document.getElementById("skillNetwork");
const ctx=canvas.getContext("2d");
canvas.width=canvas.offsetWidth;
canvas.height=400;

const skills=["Python","NLP","Machine Learning","SQL","Flask","SPARQL","Data Visualization","LLMs","RDF"];

const nodes=skills.map(()=>({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*1,
vy:(Math.random()-0.5)*1
}));

function animateNetwork(){
ctx.clearRect(0,0,canvas.width,canvas.height);

nodes.forEach((n,i)=>{
n.x+=n.vx;
n.y+=n.vy;
if(n.x<0||n.x>canvas.width)n.vx*=-1;
if(n.y<0||n.y>canvas.height)n.vy*=-1;

ctx.beginPath();
ctx.arc(n.x,n.y,6,0,Math.PI*2);
ctx.fillStyle="cyan";
ctx.fill();
ctx.fillText(skills[i],n.x+8,n.y);
});

for(let i=0;i<nodes.length;i++){
for(let j=i+1;j<nodes.length;j++){
let dx=nodes[i].x-nodes[j].x;
let dy=nodes[i].y-nodes[j].y;
let dist=Math.sqrt(dx*dx+dy*dy);
if(dist<150){
ctx.beginPath();
ctx.moveTo(nodes[i].x,nodes[i].y);
ctx.lineTo(nodes[j].x,nodes[j].y);
ctx.strokeStyle="rgba(0,255,255,0.3)";
ctx.stroke();
}
}
}

requestAnimationFrame(animateNetwork);
}
animateNetwork();
