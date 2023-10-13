let minDiameter;
let maxDiameter;

let myShapes = [];
let maxNumShapes = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  maxDiameter = width / 10;
  minDiameter = maxDiameter / 3;
}

function drawShape(aShape) {
  ellipse(aShape.x, aShape.y, aShape.d, aShape.d);
}

function draw() {
  background(239, 252, 255);
  myShapes.forEach(drawShape);
}

function addShape() {
  let newShape = {
    x: random(width),
    y: random(height),
    d: random(minDiameter, maxDiameter),
  };
  myShapes.push(newShape);
}

function mouseClicked() {
  // if more than maxCircles, then add the top box 
  if (myShapes.length >= maxNumShapes) {
    myShapes = [];
  } else {
    let shapesToAdd = random(8, 16);
    for (let c = 0; c < shapesToAdd; c++) {
      addShape();
      fill (random(0,255), random(0,255), random (0,255)); 
    }
  }
}
