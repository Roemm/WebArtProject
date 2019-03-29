var a, b, c, a1, b1;
var startX;
var len;
var tree = [];
// var last = [];
var count = 0;
var newBegin, newEnd;


var dx, dy;
var sinVal;
var v1, v2;
var timecount, minute, minuteA, hour;

var choiceColor;
var counter = 0;

// var showClock = false;
// var clockPosX, clockPosY = 300;

// var g1;
// var w, h;
var r;
var d = [];
//var show = [false,false,false,false,false,false];
var branchX, branchY;
var mode;
var w;

//color
var colorstore = [];

function setup(){
		//pixelDensity(1);

	createCanvas(windowWidth, windowHeight);
	background(0);
	startX = width * 0.13;
	len = width * 0.065; 
	branchX = [startX + 120, startX * 2 + 170,startX * 3 + 120,startX * 4 + 170,startX * 5 + 120,startX * 6 + 170];
	branchY  = [height - len - 100, height - len *2, height - len *3 - 100, height - len *4, height - len * 5 - 100, height - len * 6];
	// w = 200;
	// h = height/4;
	a = createVector(10, height);
	b = createVector(10 + startX, height - len);
	c = PI/2;


	v1 = createVector(0, - height);
	hour = 0;
	
	// g1 = createGraphics(w , h);
	r = 50;
}

	function draw(){
		background(0);
		// if(mode == 0 && show[0] == true){
		// 	drawClock();	
		// } else if(mode == 1 && show[1] == true){
		// 	showFlavor();
		// } else if (mode == 4 && show[4] == true){
		// 	showSpeak();
		// }
		popUp();
	
		

		for(var i = 1; i < tree.length; i++){
			tree[i].show();
		}

	}

	function mousePressed(){
		console.log(mouseX + " , " + mouseY);
		for (var i = 0; i < branchX.length; i++) {
			
			d[i] = dist(branchX[i], branchY[i], mouseX, mouseY);
			if(d[i] < 70){
				mode = i;
				// show[i] = true;
				//console.log(d[i]);
				
			}
		}
	}


	
	function keyPressed(){
		
		if(keyCode === RIGHT_ARROW){

	
			count ++;
			console.log(count);
			// clockPosX = b.x;
			// clockPosY = b.y - height / 2;
			// showClock = true;
				if(count % 2 == 0 && count <= 6){
					c = c + PI/4;
					tree[count] = new Branch(a, b, c);
					tree[count].show();
					
				} else if(count % 2 != 0 && count <=6){
					c = c - PI/4;
					tree[count] = new Branch(a, b, c);
					tree[count].show();
					
				// } else {
				// 	a1 = createVector(a.x, a.y);
				// 	b1 = createVector(b.x, b.y);
				// 	last[0] = new Last(a1, b1);
				// 	for (var i = last.length - 1; i >= 0; i--) {
				// 		last[i].play();
    //  					last.push(last[i].lastA());
    //   					last.push(last[i].lastB());
    				}
    			a = newBegin;
				b = newEnd;

				}
		}
				
			
		
		function popUp(){
			if(mode == 0){
				// drawClock();	
				w = window.open('clock.html','','width=1000,height=600,top=100,left=100');
				console.log("clock");
			} else if(mode == 1){
				//showFlavor();
				w = window.open('shape.html','','width=1000,height=600,top=100,left=100');
			} else if (mode == 2){
				//showSpeak();
				w = window.open('color.html','','width=1000,height=600,top=100,left=100');
			} else if (mode == 3){
				w = window.open('flavor.html','','width=1000,height=600,top=100,left=100');
			} else if (mode == 4){
				w = window.open('speak.html','','width=1000,height=600,top=100,left=100');
			} else if (mode == 5){
				w = window.open('animation.html','','width=1000,height=600,top=100,left=100');
			}
		}