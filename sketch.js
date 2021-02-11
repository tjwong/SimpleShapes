/***************************************************************
    P5.js Self Portrait
        by Tyler Wong

    Overview - This project uses different shaping techniques in P5.js
    to create a "self portrait" in a style inspired by the popular "POP FUNKO"
    figurines.

    ---------------------------------------------------------------------
    Notes: 
     (1) There is debug code that is commented out for the final release
     (2) I attempted to use mousePressed() functions but I could not get them 
          to work. Clarifying that would be helpful.
****************************************************************/

// var debugMode = false;

// Setup code goes here
function setup() {
  createCanvas(1000, 800);

  textSize(24);
  textAlign(LEFT);
 }

// Draw code goes here
function draw() {
  background(255,223,0);

  drawFace();

  drawEyes();
  
  drawHair();

  drawShirt();

  drawNose();

  //Debug toggle for coordinates
  if (debugMode == true) {
    drawDebug();
  }

}

//Draws the face, neck, and ears
function drawFace() {
  noStroke();
  fill(241, 194, 125);

  // Draws the face/neck
  rect(200, 200, 600, 400, 150);
  rect(450, 600, 100, 150);

  // Code that draws the ears
  ellipse(200, 400, 70);
  ellipse(800, 400, 70);
}

//Draws the eyes 
function drawEyes() {
  fill(0);
  ellipse(350, 425, 90);
  ellipse(650, 425, 90);

  fill(225);
  ellipse(360, 400, 15);
  ellipse(660, 400, 15);
}

//Draws the hair in two different sections
function drawHair() {
  fill(0);

  //Draws the left side of the hair
  beginShape();
  vertex(200, 400);
  vertex(200, 250);
  vertex(270, 190);
  vertex(380, 160);
  vertex(410, 200);
  vertex(410, 310);
  vertex(310, 310);
  vertex(310, 310);
  vertex(230, 370);
  endShape(CLOSE);

  //Draws the right side of the hair
  beginShape();
  vertex(410, 200);
  vertex(435, 160);
  vertex(550, 155);
  vertex(600, 140);
  vertex(595, 160);
  vertex(710, 165);
  vertex(755, 155);
  vertex(740, 180);
  vertex(755, 155);
  vertex(740, 190);
  vertex(790, 190);
  vertex(810, 185);
  vertex(800, 220);
  vertex(800, 400);
  vertex(770, 370);
  vertex(690, 310);
  vertex(410, 310);
  endShape(CLOSE);
}

//Draws the red-orange shirt using buidShape()
function drawShirt() {
  fill(255, 83, 73);
  noStroke();

  beginShape();
  vertex(275, 800);
  vertex(280, 710);
  vertex(330, 670);
  vertex(450, 655);
  vertex(500, 690);
  vertex(550, 655);
  vertex(670, 670);
  vertex(720, 710);
  vertex(735, 800);
  endShape(CLOSE);
}

//Draws the nose using arc()
function drawNose() {
  noFill();
  stroke(0);
  strokeWeight(3);
  
  arc(500, 500, 50, 50, HALF_PI + PI , 0, OPEN);
}

// Code that outputs coordinates for easier plotting
function drawDebug() {
  fill(255);
  text("X: " + mouseX + "   Y: " + mouseY, 20, height - 20);
}

// Registers whether the space bar key was typed or not
function keyTyped() {
  if (key === ' ') {
    debugMode = !debugMode;
  }
}