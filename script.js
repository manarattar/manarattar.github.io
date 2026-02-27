/* Boot Sequence */
const bootLines = [
"Initializing Manar Systems Lab...",
"Loading AI Modules...",
"Verifying Research Credentials...",
"ACM SIGSPATIAL 2023 ✓",
"BNAIC 2023 ✓",
"System Ready."
];

let i=0;
const bootText=document.getElementById("bootText");
const bootScreen=document.getElementById("bootScreen");
const app=document.getElementById("app");

function boot(){
if(i<bootLines.length){
bootText.textContent+=bootLines[i]+"\n";
i++;
setTimeout(boot,700);
}else{
setTimeout(()=>{
bootScreen.style.display="none";
app.classList.remove("hidden");
},1000);
}}
boot();

/* Cognitive Graph */
const canvas=document.getElementById("graphCanvas");
const ctx=canvas.getContext("2d");

function resize(){
canvas.width=canvas.offsetWidth;
canvas.height=canvas.offsetHeight;
}
resize();
window.addEventListener("resize",resize);

const nodes=[
{x:200,y:200,label:"Research"},
{x:400,y:150,label:"Systems"},
{x:350,y:300,label:"Founder"},
{x:150,y:320,label:"NLP"}
];

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

nodes.forEach(n=>{
ctx.beginPath();
ctx.arc(n.x,n.y,10,0,Math.PI*2);
ctx.fillStyle="#fff";
ctx.fill();
ctx.fillText(n.label,n.x+15,n.y);
});

for(let i=0;i<nodes.length;i++){
for(let j=i+1;j<nodes.length;j++){
ctx.beginPath();
ctx.moveTo(nodes[i].x,nodes[i].y);
ctx.lineTo(nodes[j].x,nodes[j].y);
ctx.strokeStyle="#222";
ctx.stroke();
}}
requestAnimationFrame(draw);
}
draw();

/* Panel Logic */
const panel=document.getElementById("panel");
canvas.addEventListener("click",e=>{
const rect=canvas.getBoundingClientRect();
const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

nodes.forEach(n=>{
const dx=x-n.x;
const dy=y-n.y;
if(Math.sqrt(dx*dx+dy*dy)<15){
panel.innerHTML=`<h2>${n.label}</h2><p>Detailed system dossier for ${n.label}.</p>`;
}
});
});

/* Terminal */
const cmd=document.getElementById("cmd");
const output=document.getElementById("terminalOutput");

cmd.addEventListener("keydown",e=>{
if(e.key==="Enter"){
const value=cmd.value.trim();
output.innerHTML+=`<div>> ${value}</div>`;
if(value==="help"){
output.innerHTML+=`<div>Available: research, systems, founder, contact</div>`;
}
if(value==="research"){
panel.innerHTML="<h2>Research</h2><p>Peer-reviewed AI publications and applied data systems.</p>";
}
if(value==="systems"){
panel.innerHTML="<h2>Systems</h2><p>AI architecture and intelligent workflows.</p>";
}
if(value==="founder"){
panel.innerHTML="<h2>Founder Philosophy</h2><p>AI must move from experimentation to execution.</p>";
}
cmd.value="";
}
});
