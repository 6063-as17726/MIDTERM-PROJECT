//How to avoid/decrease overlap of the characters 

function character0(X,Y) {
  push();
  translate(X,Y);
  
  // Body
 fill(0);
 stroke(0);
 strokeWeight(2);
 rect(0, 10, 20, 50);

 //face 
 strokeWeight(0); 
 fill("LightSalmon"); 
 ellipse(10, 15, 30,30); 

 // Glasses
 fill(0);
 noStroke();
 ellipse(5,10,10,10);
 ellipse(15,10,10,10);

 // Striped Shirt
 fill(255, 255, 0);
 noStroke();
 rect(0, 25, 20, 10);
 rect(0, 40, 20, 10);
 rect(0, 55, 20, 10);

 // Hat
 fill(0);
 noStroke();
 triangle(-10,5, 30,5, 10, -10);
 fill(255,255,0); 
 ellipse(10,-10,10,10);


 // Pants
 fill(0);
 noStroke();
 rect(0, 60, 20, 20);

 pop(); 
}
function waldo(X,Y) {
  push();
  translate(X,Y);

 // Body
 fill(255, 0, 0);
 stroke(0);
 strokeWeight(2);
 rect(0, 10, 20, 50);

 //face 
 strokeWeight(0); 
 fill("LightSalmon"); 
 ellipse(10, 15, 30,30); 

 // Glasses
 fill(255);
 noStroke();
 ellipse(5,10,10,10);
 ellipse(15,10,10,10);

 // Striped Shirt
 fill(255, 255, 255);
 noStroke();
 rect(0, 25, 20, 10);
 rect(0, 40, 20, 10);
 rect(0, 55, 20, 10);

 // Hat
 fill(255, 0, 0);
 noStroke();
 triangle(-10,5, 30,5, 10, -10);
 strokeWeight(1); 
 stroke(255, 0, 0); 
 fill(255); 
 ellipse(10,-10,10,10);


 // Pants
 fill(0, 0, 255);
 noStroke();
 rect(90, 150, 20, 20);

 pop(); 
}

//need to update
function character1(X,Y) {
  push();
  translate(X,Y);

//stick
 strokeWeight(1); 
 stroke(0); 
 fill(255); 
 rect(115,30,5,140); 

 //stripes 
 strokeWeight(0); 
 fill(255,0,0); 
 rect(115,30,5,15); 
 rect(115,90,5,15); 
 rect(115,150,5,15); 
 fill(0,0,255); 
 rect(115,60,5,15); 
 rect(115,120,5,15); 


 // Body
 fill(255, 0, 0);
 stroke(0);
 strokeWeight(1);
 beginShape();
 vertex (90, 100); 
 vertex(80,170); 
 vertex(120,170);
 vertex(110,100);
 endShape();  

 //beard 
 strokeWeight(1); 
 stroke(0); 
 fill(255); 
 triangle(90,90,110,90, 100,140);
 
 //face 
 strokeWeight(0); 
 fill("LightSalmon"); 
 ellipse(100, 85, 30,30); 

 // Hat
 fill(0,0,255);
 noStroke();
 triangle(80, 75, 120, 75, 100, 40);

 pop(); 
}

//need to update
function character2(X,Y) {
  push();
  translate(X,Y);
  
  // Body
 fill(255, 0, 0);
 stroke(0);
 strokeWeight(2);
 rect(90, 100, 20, 25);
 rect(90, 145, 20, 25);

  //hair 
  strokeWeight(0); 
  fill(108,80,26);
  triangle(80, 100, 120, 100, 100, 50);

 //face 
 strokeWeight(0); 
 fill("LightSalmon"); 
 ellipse(100, 85, 30,30); 

 // Glasses
 fill(255);
 noStroke();
 ellipse(95,80,10,10);
 ellipse(105,80,10,10);

 // Striped Shirt
 fill(255, 255, 255);
 noStroke();
 rect(90, 100, 20, 10);
 rect(90, 115, 20, 10);
 rect(90, 150, 20, 10);

 // Hat
 fill(255, 0, 0);
 noStroke();
 triangle(80, 70, 120, 70, 100, 50);
 strokeWeight(1); 
 stroke(255, 0, 0); 
 fill(255); 
 ellipse(100,45,10,10);


 //Skirt
 fill(0, 0, 255);
 noStroke();
 rect(87, 125, 25, 20);

 pop();
}

function banner() {
  rectMode(CENTER); 
  background (116,196,214);
  push(); 
  translate(width/2, height/2); 
  rotate(-0.1); 
  fill(255); 
  rect (0,0, 350, 450 ); 
  fill(116,196,214); 
  rect (0, 0, 300, 350 ); 
  pop();
}

function setup() {
  createCanvas(800, windowHeight);
   background(240); 
   noLoop(); 
 }

function draw() {
  let F = [character0,character1, character2]; 
  let rowheight = windowHeight/7;  
  let xpos = random(0, width); 
  let ypos = random(0, rowheight);  

for (let y = 0; y<height; y+=rowheight) {
  for (let i = 0; i<10; i++) {
  let myFun = random(F); 
  let dy = random(y,y+rowheight/2); 
  let x = random(0, width-50); 
  myFun(x,dy); 
  ypos = random(dy, ypos);  
  }
}
  waldo(xpos,ypos); 
 }

function mouseClicked() {
  if (
    mouseX > xpos &&
    mouseX < xpos + 30 &&
    mouseY > ypos &&
    mouseY < ypos +80
    )  
     { banner(); 
      }
}
