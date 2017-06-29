let theWorld;
let theOrbit;

function preload() {
    theWorld = loadImage('earth.png')
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    theOrbit = new theGlobe();
}
// class
function theGlobe() {
    this.x = random(-200, width - 200);
    this.y = random(-200, height - 200);
    this.Xspeed = random(25, 50);
    this.Yspeed = random(25, 50);
    this.direction = random(-0.7, 0.7);
    this.move = function() {
        this.x += this.Xspeed * this.direction;
        this.y += this.Yspeed * this.direction;
    }
    this.bounce = function() {
        if (this.x < -25) {
            this.x = -25;
            this.direction = 0.1 + -this.direction;
        } else if (this.y < -25) {
            this.y = -25;
            this.direction = 0.1 + -this.direction;
        } else if (this.x > width - 25) {
            this.x = width - 25;
            this.direction = 0.1 + -this.direction;
        } else if (this.y > height - 25) {
            this.x = height - 25;
            this.direction = 0.1 + -this.direction;
        }
    }
    this.display = function() {
        image(theWorld, this.x, this.y, 300, 300);
    }
}

function draw() {
    background(0);
    pop();
    stroke(40);
    for (var i = 0; i <= width; i += 50) { // horizontal grid
        line(i, 0, i, height);
    }
    for (var l = 0; l <= height; l += 50) { // vertical grid
        line(0, l, width, l);
    }
    push();
    theOrbit.display();
    theOrbit.move();
    theOrbit.bounce();
}
