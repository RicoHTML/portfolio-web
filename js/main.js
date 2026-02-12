const loader=document.getElementById("loader");
loader.style.display="none";

/* SCROLL ANIMATION */

const obs=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting)e.target.classList.add("show");
});
});

document.querySelectorAll("section").forEach(s=>obs.observe(s));

/* PARTICLES */

const c=document.getElementById("particles");
const ctx=c.getContext("2d");

function resize(){
c.width=innerWidth;
c.height=innerHeight;
}
resize();
addEventListener("resize",resize);

let p=[];

for(let i=0;i<50;i++)
p.push({
x:Math.random()*c.width,
y:Math.random()*c.height,
vx:1,
vy:1
});

function draw(){
ctx.clearRect(0,0,c.width,c.height);

p.forEach(o=>{
o.x+=o.vx;
o.y+=o.vy;

if(o.x<0||o.x>c.width)o.vx*=-1;
if(o.y<0||o.y>c.height)o.vy*=-1;

ctx.fillStyle="#2aa8ff";
ctx.fillRect(o.x,o.y,2,2);
});

requestAnimationFrame(draw);
}

draw();

const form=document.querySelector("form");
const success=document.getElementById("success");

form.addEventListener("submit",async e=>{
e.preventDefault();

const data=new FormData(form);

await fetch(form.action,{
method:"POST",
body:data,
headers:{'Accept':'application/json'}
});

form.reset();
success.style.display="block";
});
