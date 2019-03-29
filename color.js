var img;
var color;
var mouseclicked = false;
//var keypressed = false;
var colorstore = [];
var counter = 0;

function preload() {
	img = loadImage("img/color1_no_purple.jpg");
}

function setup() {
	createCanvas(windowWidth, windowHeight);	
}

function draw() {
	background(0);
	//draw image and get color
	image(img, 0, 0,1400,500);
	color = get(mouseX, mouseY);
	//append(colorstore, c);
	fill(color);
	//noStroke();
	strokeWeight(4);
	stroke(255,255,255);
	rect(mouseX-4, mouseY-4, 100, 120);

	if (mouseclicked === true) {
		textFont('Amatic SC');
		//noStroke();
		textStyle(BOLD);
		fill(colorstore[0],colorstore[1],colorstore[2]);
		textSize(80);
		//textAlign(CENTER);
		text("you've chosen your color!",20,80);
		console.log(colorstore);
	}
	

	// if (mousepressed === true){
	// 	console.log(colorstore[frameCount/2]);
	// }

	// if (keypressed === true){
	// 	console.log(colorstore);
	// }	
	//console.log(c);

	// if (mouseclicked===true){
	// 	append(color, c[0]);
	// 	append(color, c[1]);
	// 	append(color, c[2])l
	// }
	// console.log(color);
}
  // var mycolor;
  // mycolor = get(mouseX, mouseY);

  // if(red(mycolor) == 255){
  //   fill(255,255,255);
  //   rect (width/2,height/2,20,20);
  // }

  function mousePressed() {
  	counter += 1;
  	if (counter ===1) {
  		color = get(mouseX, mouseY);
  		colorstore = [];
  		//colorstore = c;
		 append(colorstore, color[0]);
		 append(colorstore, color[1]);
		 append(colorstore, color[2]);
		 //textFont('Amatic SC');
		 mouseclicked = true;
		 localStorage.setItem('r', colorstore[0]);
		 localStorage.setItem('g', colorstore[1]);
		 localStorage.setItem('b', colorstore[2]);
		 
  	}
  }

function keyPressed() {
	//console.log(key);
  	if (key===" "){
  		counter = 0;
  		mouseclicked = false;
  	}
}