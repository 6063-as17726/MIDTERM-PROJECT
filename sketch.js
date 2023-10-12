
angleMode(DEGREES); 
rectMode(CENTER); 
ellipseMode(RADIUS); 

class Shapes {
  constructor() { 
    this.xPos = random(0, width); 
    this.yPos = random(0, height); 
    this.x = 10; 
    this.y = 10;  
  }
  drawShapes() {
    fill(0); 
    ellipse(this.xPos, this.yPos, x, y); 
    //for (i = 0; i<3; i++) {
     // let a = rect(this.xPos, this.yPos, this.x, this.y); 
      //let b = ellipse(this,xPos, this.yPos, this.x, this.y); 
      //let c = triangle(this.xPos, this.yPos, this.xPos - this.x, this.yPos, this.xPos, this.yPos - this.y); 
      //random(a, b, c);
    //}
  //drawMainShape() 
  }
}

let numShapes = 50; 
let shapeArray = []; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let d = 0; d< numShapes; d++) {
    let aShape = new Shapes(); 
    shapeArray.push(aShape); 
  }
}

function createLayout() {
  strokeWeight(2); 
  rectMode(CENTER); 
  background (116,196,214);
  translate(width/2, height/2); 
  rotate(-0.1); 
  fill(255); 
  rect (0,0, 350, 450 ); 
  fill(116,196,214); 
  rect (0, 0, 300, 350 ); 
}

function draw() {
  createLayout(); 
  for (let d = 0; d < shapeArray.length; d++) {
    let aShape = shapeArray[d];

    // draw
    aShape.drawShapes();
  }
}


