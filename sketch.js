var r;
var b ;
var g;

function setup(){
  createCanvas(1200,400);
}
function draw(){
  
   fill("black");
  stroke('red');
  ellipse(mouseX,mouseY,50,50);
 
  let r = map(mouseX,0,1200,0,255,true);
  let g = map(mouseY,0,400,0,255,true);
  let b = map(mouseX,400,1200,0,255,true);
  background(r,g,b);
}
