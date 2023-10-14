// let minDiameter;
// let maxDiameter;

// let myShapes = [];
// let maxNumShapes = 200;

function character1() {
  // Body
  fill(255, 150, 100);
  stroke(0);
  strokeWeight(1);
  beginShape();
  vertex(75, 150);
  vertex(100, 100);
  vertex(125, 150);
  endShape(CLOSE);

  // Head
  fill(255, 200, 150);
  noStroke();
  ellipse(100, 75, 60, 60);

  // Eyes
  fill(255);
  ellipse(85, 65, 15, 15);
  ellipse(115, 65, 15, 15);

  // Arms
  fill(255, 150, 100);
  noStroke();
  rect(50, 100, 100, 20);

  // Legs
  fill(255, 150, 100);
  rect(85, 150, 10, 100);
  rect (105,150,10,100);
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
 fill(255, 255, 0);
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
function setup() {
   createCanvas(windowWidth, windowHeight);
   background(240); 
//   maxDiameter = width / 10;
//   minDiameter = maxDiameter / 3;
// }

// function drawShape(aShape) {
//   ellipse(aShape.x, aShape.y, aShape.d, aShape.d);
 }

 function draw() {
  //character1(); 
  waldo(); 
//   background(239, 252, 255);
//   myShapes.forEach(drawShape);
 }

// function addShape() {
//   let newShape = {
//     x: random(width),
//     y: random(height),
//     d: random(minDiameter, maxDiameter),
//   };
//   myShapes.push(newShape);
// }

// function mouseClicked() {
//   // if more than maxCircles, then add the top box 
//   if (myShapes.length >= maxNumShapes) {
//     myShapes = [];
//   } else {
//     let shapesToAdd = random(8, 16);
//     for (let c = 0; c < shapesToAdd; c++) {
//       addShape();
//       fill (random(0,255), random(0,255), random (0,255)); 
//     }
//   }
// }
