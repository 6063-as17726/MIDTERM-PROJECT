//How to run the mouseclick function to identify Waldo 
//How to avoid/decrease overlap of the characters 

function character0() {
  //push();
  //translate(x,y);
  //pop(); 

  // Body
 fill(0);
 stroke(0);
 strokeWeight(2);
 rect(90, 100, 20, 50);

 //face 
 strokeWeight(0); 
 fill("LightSalmon"); 
 ellipse(100, 85, 30,30); 

 // Glasses
 fill(0);
 noStroke();
 ellipse(95,80,10,10);
 ellipse(105,80,10,10);

 // Striped Shirt
 fill(255, 255, 0);
 noStroke();
 rect(90, 100, 20, 10);
 rect(90, 115, 20, 10);
 rect(90, 130, 20, 10);

 // Hat
 fill(0);
 noStroke();
 triangle(80, 70, 120, 70, 100, 50);
 fill(255,255,0); 
 ellipse(100,45,10,10);


 // Pants
 fill(0);
 noStroke();
 rect(90, 150, 20, 20);
}
function waldo() {
 // Body
 fill(255, 0, 0);
 stroke(0);
 strokeWeight(2);
 rect(90, 100, 20, 50);

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
 rect(90, 130, 20, 10);

 // Hat
 fill(255, 0, 0);
 noStroke();
 triangle(80, 70, 120, 70, 100, 50);
 strokeWeight(1); 
 stroke(255, 0, 0); 
 fill(255); 
 ellipse(100,45,10,10);


 // Pants
 fill(0, 0, 255);
 noStroke();
 rect(90, 150, 20, 20);
}
function character1() {
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

}
function character2() {
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
}
function banner() {
  
}

function setup() {
   //fixed canvas dimensions 
  createCanvas(500, windowHeight);
   background(0); 
   let F = [character0(),character1(), character2()]; 
   noloop(); 
 }

 function draw() {
  //run loop to draw functions - x is random, y is incrementing 
  let rowheight = windowHeight/7; 

  let xpos = random(0, width); 
  let ypos = random()
  waldo(xpos,ypos); 

  for (let y = 0; y<height; y+=rowheight) {
    for (let i = 0; i<20; i++) {
      let myFun = random(F);
      dy = random(0,rowheight/2); 
      x = random (width); 
      myFun(x,dy);  
    }
  }
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
