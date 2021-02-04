
// Setup code goes here
function setup() {
  createCanvas(1000, 600);
  noCursor();
 }

//Global variables for sky color
let r = 0;
let g = 0;
let b = 0;
let rx = 0;
let gx = 0;
let bx = 0;

//function that changes the color of the sky
function changeSky() {
  //light blue = (173, 216, 230)
  if(mouseX < 250 && r != 173) { 
  	rx = 173 - r;
  	if(rx <= 0) {
  		r = r - 1;
  	} else {
  		r = r + 1;
  	}
  }
  if(mouseX < 250 && g != 216) {
  	gx = 216 - g;
  	if(gx <= 0) {
  		g = g - 1;
  	} else {
  		g = g + 1;
  	}
  }
  if(mouseX < 250 && b != 230) {
  	bx = 230 - b;
  	if(gx <= 0) {
  		b = b - 1;
  	} else {
  		b = b + 1;
  	}
  }
  
  //sky blue = (0,191,255)
  if(mouseX > 250 && mouseX < 500 && r != 0) { 
  	rx = 0 - r;
  	if(rx <= 0) {
  		r = r - 1;
  	} else {
  		r = r + 1;
  	}
  }
  if(mouseX > 250 && mouseX < 500 && g != 191) {
  	gx = 191 - g;
  	if(gx <= 0) {
  		g = g - 1;
  	} else {
  		g = g + 1;
  	}
  }
  if(mouseX > 250 && mouseX < 500 && b != 255) {
  	bx = 255 - b;
  	if(bx <= 0) {
  		b = b - 1;
  	} else {
  		b = b + 1;
  	}
  }
  
  //orange = (255,165,0) 
  if(mouseX > 500 && mouseX < 750 && r != 255) { 
  	rx = 255 - r;
  	if(rx <= 0) {
  		r = r - 1;
  	} else {
  		r = r + 1;
  	}
  }
  if(mouseX > 500 && mouseX < 750 && g != 165) {
  	gx = 165 - g;
  	if(gx <= 0) {
  		g = g - 1;
  	} else {
  		g = g + 1;
  	}
  }
  if(mouseX > 500 && mouseX < 750 && b != 0) {
  	bx = 0 - b;
  	if(bx <= 0) {
  		b = b - 1;
  	} else {
  		b = b + 1;
  	}
  }
  
  //tomato pink = (255,99,71)
  if(mouseX > 750 && mouseX < 900 && r != 255) { 
  	rx = 255 - r;
  	if(rx <= 0) {
  		r = r - 1;
  	} else {
  		r = r + 1;
  	}
  }
  if(mouseX > 750 && mouseX < 900 && g != 99) {
  	gx = 99 - g;
  	if(gx <= 0) {
  		g = g - 1;
  	} else {
  		g = g + 1;
  	}
  }
  if(mouseX > 750 && mouseX < 900 && b != 71) {
  	bx = 71 - b;
  	if(bx <= 0) {
  		b = b - 1;
  	} else {
  		b = b + 1;
  	}
  }
  
  //indigo (75,0,130)
  if(mouseX > 900 && mouseX < 1000 && r != 75) { 
  	rx = 75 - r;
  	if(rx <= 0) {
  		r = r - 1;
  	} else {
  		r = r + 1;
  	}
  }
  if(mouseX > 900 && mouseX < 1000 && g != 0) {
  	gx = 0 - g;
  	if(gx <= 0) {
  		g = g - 1;
  	} else {
  		g = g + 1;
  	}
  }
  if(mouseX > 900 && mouseX < 1000 && b != 130) {
  	bx = 130 - b;
  	if(bx <= 0) {
  		b = b - 1;
  	} else {
  		b = b + 1;
  	}
  }
  
}

// Draw code goes here
function draw() {
  background(r, g, b);
  
  //Changes the sky color to 'night'
  if(mouseIsPressed) {
    background(105,105,105);
    fill(255,255,191);
    circle(mouseX, mouseY, 100);
    
  } else {
    changeSky();
    fill(255,223,0);
    circle(mouseX, mouseY, 100);
  }


  noStroke();
  
  if(mouseIsPressed) {
    fill(0, 0, 0);
  } else {
    fill(105,105,105);
  }
  
  text('Drag the "sun" to change the time of day! Click to make it night!' , 50, 50);
  triangle(-100, 600, 20, 300, 250, 600);
  triangle(0, 600, 150, 350, 400, 600);
  triangle(175, 600, 300, 250, 500, 600);
  triangle(250, 600, 450, 175, 700, 600);
  triangle(475, 600, 575, 225, 800, 600);
  triangle(1000, 600, 750, 350, 600, 600);
  triangle(1100, 600, 950, 200, 600, 600);

}