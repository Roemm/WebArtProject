var b, c, r, o, s, t;
var counter = 0;

function preload(){
		b = loadImage('images/shape.png');
		c = loadImage('images/circle.png');
		r = loadImage('images/random.png');
		o = loadImage('images/other.png');
		s = loadImage('images/square.png');
		t = loadImage('images/triangle.png');
	}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  //imageMode(CENTER);
  
}

function draw() {
  // put drawing code here
  image(c, 0,0);
  image(r, 0,0);
  image(o, 0,0);
  image(s, 0,0);
  image(t, 0,0);
  c.opacity = "0.5";
}

function keyPressed() {
	if (key ==="1"){
		if (counter <= 3){
			counter += 1;
		}
	}
	if (counter === 1){
		c.opacity = "0.8";
	}
	else if (counter === 2){
		r.opacity = "0.8";
	}
}