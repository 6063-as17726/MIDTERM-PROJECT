
let xpos; 
let ypos;

//refine characters 

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
 fill(255,0,0);
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
 fill(116,196,214);
 noStroke();
 rect(0, 60, 20, 20);

 pop(); 
}

function character1(X,Y) {
  push();
  translate(X,Y);

//stick
 strokeWeight(1); 
 stroke(0); 
 fill(255); 
 rect(35,-40,5,140); 

 //stripes 
 strokeWeight(0); 
 fill(255,0,0); 
 rect(35,-40,5,15); 
 rect(35,20,5,15); 
 rect(35,80,5,15); 
 fill(0,0,255); 
 rect(35,-10,5,15); 
 rect(35,50,5,15); 


 // Body
 fill(255, 0, 0);
 stroke(0);
 strokeWeight(1);
 beginShape();
 vertex (10,30); 
 vertex(0,100); 
 vertex(45,100);
 vertex(30,30);
 endShape();  

 //beard 
 strokeWeight(1); 
 stroke(0); 
 fill(255); 
 triangle(10,30,30,30, 20,90);
 
 //face 
 strokeWeight(0); 
 fill("LightSalmon"); 
 ellipse(20, 25, 30,30); 

 // Hat
 fill(0,0,255);
 noStroke();
 triangle(0, 15, 40, 15, 20, -40);

 pop(); 
}

function character2(X,Y) {
  push();
  translate(X,Y);
  
  // Body
 fill(255, 0, 0);
 stroke(0);
 strokeWeight(2);
 rect(0, 10, 20, 25);
 rect(0, 55, 20, 25);

  //hair 
  strokeWeight(0); 
  fill(108,80,26);
  beginShape(); 
  vertex(-10, 20); 
  vertex(30, 20); 
  vertex(20,-10); 
  vertex(0, -10); 
  endShape();

 // Striped Shirt
 fill(255, 255, 255);
 noStroke();
 rect(0, 15, 20, 10);
 rect(0, 30, 20, 10);
 rect(0, 60, 20, 10);

 //face 
 strokeWeight(0); 
 fill("LightSalmon"); 
 ellipse(10, 5, 30,30); 

  // Glasses
  fill(255);
  noStroke();
  ellipse(5,0,10,10);
  ellipse(15,0,10,10);
 

 // Hat
 fill(255, 0, 0);
 noStroke();
 triangle(-10,-5, 30,-5, 10, -20);
 strokeWeight(1); 
 stroke(255, 0, 0); 
 fill(255); 
 ellipse(10,-20,10,10);


 //Skirt
 fill(0, 0, 255);
 noStroke();
 beginShape(); 
 vertex(0, 35);
 vertex(20,35); 
 vertex(30,55);
 vertex(-10,55);
 endShape(); 

 pop();
}

function banner() { 
  background(0,0,0,127);
  push(); 
  rectMode(CENTER); 
  ellipseMode(CENTER);
  translate(width/2, height/2); 
  rotate(-0.1); 
  fill(0,0,0,150); 
  rect (-15,35, 350, 450 );
  fill(255); 
  rect (0,20, 350, 450 ); 
  fill(116,196,214); 
  rect (0, 0, 300, 350 ); 
  scale(5); 

  // Body
 fill(255,0,0);
 stroke(0);
 strokeWeight(0);
 rect(0, 10, 20, 50);

  // Striped Shirt
  fill(255, 255, 255);
  noStroke();
  rect(0, 25, 20, 10);
  rect(0, 40, 20, 10);

  //face 
 strokeWeight(0); 
 fill("LightSalmon"); 
 ellipse(0, 0, 30,30); 

 // Glasses
 fill(255);
stroke(0);
strokeWeight(0.5); 
 ellipse(-5,-5,10,10);
 ellipse(5,-5,10,10);
 noStroke(); 
 fill(0); 
 ellipse(-5,-5,2,2);
 ellipse(5,-5,2,2);

//smile and nose
stroke(0);
strokeWeight(1); 
noFill(); 
arc(0, 5, 15, 10, 0, PI, OPEN);
strokeWeight(0.5); 
arc(0, 2, 5, 2, 0, PI, OPEN);

 // Hat
 fill(255, 0, 0);
 noStroke();
 triangle(-15,-10, 15,-10, 0, -35);
 strokeWeight(1); 
 stroke(255, 0, 0); 
 fill(255); 
 ellipse(0,-35,10,10);

 textSize(6); 
 fill(255,0,0); 
 stroke(0); 
 strokeWeight(0.5); 
 text('YOU FOUND WALDO!', -30, 42);
 
 textSize(2); 
 fill(116,196,214); 
 strokeWeight(0); 
 text('PRESS s TO SAVE IMAGE', -30, 45);
 text('PRESS r TO RESET', -30, 48);

pop();
}

function setup() {
  createCanvas(800, windowHeight);
   background(240); 
   noLoop(); 
   
 }

function draw() {

  let F = [character0, character1, character2]; 
  let rowheight = windowHeight/7;  
  let columnheight = windowWidth/25; 
  let xArray = [];
  let yArray = [];

  for (let y = 0; y<height; y+=rowheight) {
    for (let x = 0; x<width; x+=columnheight) {
        let myFun = random(F); //picks character
        let dy = random(y,y+rowheight/2); 
        let dx = random(x, x+columnheight); 
        xArray.push(dx);
        yArray.push(dy);
        myFun(dx,dy); //draws character
    }
  }
  xpos = xArray[floor(random(0,xArray.length))]; 
  ypos = yArray[floor(random(0,yArray.length))]; 

  waldo(xpos,ypos); 
 }

function mouseClicked() {
  if (
    mouseX > xpos &&
    mouseX < xpos + 100 &&
    mouseY > ypos &&
    mouseY < ypos + 100
    )  
     { banner();
      }
}

function keyPressed() {
  if (key == 's') {
    saveCanvas('myCanvas', 'jpg');
  }

  if(key == 'r') {
    background(240); 
    redraw(); 
  }
}