class Ballon{
  constructor(_xPos, _yPos, _rotation, _size){
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;
 }
  
  display(){
    noStroke();
  push();
  translate(this.xPos, this.yPos);
  rotate(this.rotation);
  scale(this.size);
  fill(192, mouseX, 140);
  rectMode(CENTER);
  rect(60,50,50,50,10,70,5,40);
  pop();
  }
  
  move(){
    
    this.rotation++
    
    if (this.yPos <= height * 1.08){
    //this.yPos = this.yPos + 2;
    //shorthand below is += ;
    
    this.yPos += 2;
    }
    
    else {
      
      this.yPos = -height * 0.2;
    
    }
  }


}





// function drawBallonShape(30,50,30){
  
//   noStroke();
//   push();
//   translate(xPos,yPos);
//   rotate(rotation);
//   fill("192	245	140");
//   rectMode(CENTER);
//   rect(mouseX,mouseY,50,50,10,70,5,40);
//   pop();

// };