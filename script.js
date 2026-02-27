/* Scroll progress */
window.addEventListener("scroll",()=>{
const scrollTop=document.documentElement.scrollTop;
const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
document.querySelector("#scrollProgress .bar").style.width=(scrollTop/height)*100+"%";
});

/* Typing animation */
const typing=document.getElementById("typing");
const messages=[
"Initializing Research Modules...",
"Loading Neural Pipelines...",
"Deploying Intelligent Systems..."
];
let msgIndex=0,charIndex=0;
function type(){
if(charIndex<messages[msgIndex].length){
typing.textContent+=messages[msgIndex][charIndex++];
setTimeout(type,40);
}else{
setTimeout(()=>{
typing.textContent="";
charIndex=0;
msgIndex=(msgIndex+1)%messages.length;
type();
},1500);
}}
type();

/* Particle background */
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");
function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;}
resize();window.addEventListener("resize",resize);
const particles=[];
for(let i=0;i<70;i++){
particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,vx:(Math.random()-0.5)*0.5,vy:(Math.random()-0.5)*0.5});
}
function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="rgba(0,255,255,0.7)";
particles.forEach(p=>{
p.x+=p.vx;p.y+=p.vy;
if(p.x<0||p.x>canvas.width)p.vx*=-1;
if(p.y<0||p.y>canvas.height)p.vy*=-1;
ctx.beginPath();ctx.arc(p.x,p.y,2,0,Math.PI*2);ctx.fill();
});
requestAnimationFrame(animate);
}
animate();
