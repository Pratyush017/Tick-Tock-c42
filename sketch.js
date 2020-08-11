

var clock;

function setup() {
  var canvas = createCanvas(1020,820);
  
  angleMode(DEGREES);
 
  clock = new Clock(500,260,20,20);
}

function draw() {
  background("black");
  
  translate(500,260)
  clock.display();
  rotate (-90);

  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(8);
  stroke("blue");
  noFill();
  let end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke("green");
  let end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke("red");
  let end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);
  
  push();
  rotate(end);
  stroke("blue");
  line(0,0,150,0);
  pop();
  
  
  push();
  rotate(end2);
  stroke("green");
  line(0,0,105,0);
  pop();
  
  push();
  rotate(end3);
  stroke("red");
  line(0,0,50,0);
  pop();
  
  stroke("Black");
  point (0,0);

  


  
  drawSprites();
  
}
