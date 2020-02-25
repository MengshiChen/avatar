let angleWag2;

let angleWag3;

let mic;

let micLevel;

let ballon0;

let ballon1;

let ballon2;

let ballon3;

let ballon4;

let ballon5;

let ballon6;

let ballon7;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  
  ballon0 = new Ballon (30,50,50, 1);
  ballon1 = new Ballon (80,80,50, .5);
  ballon2 = new Ballon (150,150,50, 1.5);
  ballon3 = new Ballon (200,200,50, .8);
  ballon4 = new Ballon (60,180,50, .5);
  ballon5 = new Ballon (90,300,50, 1.5);
  ballon6 = new Ballon (250,260,50, .8);
  ballon7 = new Ballon (350,340,50, .8);
  
  mic = new p5.AudioIn();
  mic.start();
  
  
}

function draw(){
   console.log(" mic level " + mic.getLevel());
  
  

  //console.log("mouse x is : " + mouseX);
   
  //console.log("mouse y is : " + mouseY);
  
  //angleWag = map(mouseY,0, 400, 20,50);
  
   
   micLevel = mic.getLevel();
  
   //angleWag = map(mic.getLevel(), 0, 1,30, 100);
   
   angleWag2 = map(mic.getLevel(), 0, 1,10, 300);
   
   angleWag3 = map(mic.getLevel(), 0, 1,20, 200);
  
  background(230,148,136);

  //background(230,148,136);
  
  drawFeet(); 
  drawBody();
  //drawBallonShape(30,50,10); 
  
  ballon0.display();
  ballon1.display();
  ballon2.display();
  ballon3.display();
  ballon4.display();
  ballon5.display();
  ballon6.display();
  ballon7.display();
  ballon0.move();
  ballon1.move();
  ballon2.move();
  ballon3.move();
  ballon4.move();
  ballon5.move();
  ballon6.move();
  ballon7.move();
  
  drawHands(angleWag2); 
  drawHead();
  drawEyelashes();
  drawEyes();
  drawMouth();
  drawMarks();
  drawBallonRope();
   
}

function drawFeet(angleWag2) { 
  //feet;
  push();
  noStroke();
  fill("#FFC127");
  translate(150, 300);
  rotate(angleWag3);
  triangle(10,30,40,20,40,50);
  pop();
  
  push();
  noStroke();
  fill("#FFC127");
  translate(150,300);
  triangle(55,60,65,40,95,60);
  pop();

} 

function drawBody(){
  //body;
  noStroke();
  fill("#A0D7FA");  
  ellipse(200,275,100,150);
  
};

function drawBallonRope(){
  
  strokeWeight(5);
 
  line(30,160,130,280);
  

};



function drawHands(angleWag2){
  //hands;
  noStroke();
  
  push();
  translate(140,290);
  rotate(angleWag2);
  fill("#F1F75C");
  ellipse(0,0,50,30);
  
  pop();
  
  push();
  translate(140,290);
  fill("#F1F75C");
  ellipse(50,0,50,30);
  pop();

};

function drawHead(){
  //head;
  noStroke();
  fill("#FFE93B");
  ellipse(200,150,250,250);

};

function drawEyelashes(){
  //eyelashes;
  stroke("black");
  strokeWeight(5);
  line(125,90,125,120);
  line(150,80,150,120);
  line(175,90,175,120);
  line(225,90,225,120);
  line(250,80,250,120);
  line(275,90,275,120);

};

function drawEyes(){
  //eyes;
  fill(50);
  stroke(235);
  strokeWeight(10);
  circle(150,120,50);
  circle(250,120,50);

};

function drawMouth(){
  //mouth;
  noStroke();
  fill("#FF8135");
  arc(200,190,50,50,220,150);

};

function drawMarks(){
  //mark;
  stroke("black");
  strokeWeight(7);
  point(130,190);
  strokeWeight(3);
  point(220,220);

};

//triangle(150,350,195,350,170,330);
//triangle(200,350,245,350,220,330);







