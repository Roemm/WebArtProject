var dx, dy;
var sinVal;
var v1, v2;
var timecount, minute, minuteA, hour;
var r;

var showClock = true;


function setup(){
		createCanvas(windowWidth, windowHeight);
		angleMode(DEGREES);

		v1 = createVector(0,-height);
		hour = 0;
		r = 250;
}
	

	function draw(){
		background(0);


		if(showClock == true){
			drawClock();
			textFont("Amatic SC");
			textAlign(CENTER);
			textSize(30);
  			text("Drag the pointer to choose your favorite time in a day. Close the window after you make decision.", width/2, 35);
		}


		// d = int(dist(mouseX, mouseY, width/2, height/2));

		// if(d < 253 && d > 247){
		// 	push();
		// 	noStroke();
		// 	fill(255);
		// 	translate(mouseX, mouseY);
		// 	rect(-10,-10,20,20);
		// 	pop();
		// 	oldx = mouseX;
		// 	oldy = mouseY;
		// } else{
		// 	push();
		// 	noStroke();
		// 	fill(255);
		// 	translate(oldx, oldy);
		// 	rect(-10,-10,20,20);
		//  pop();
		// }

	}

	function drawClock(){
		push();
		translate(width/2,height/2);
		noFill();
		stroke(255);
		strokeWeight(5);
		ellipse(0,0,r * 2,r * 2);

		sinVal = v1.heading();
		//console.log(sinVal);
		line(0,0,r * cos(sinVal),r * sin(sinVal));
		fill(255);
		ellipse(0,0,10,10);
		rectMode(CENTER);
		rect(r * cos(sinVal),r * sin(sinVal), 20,20);
		pop();
		
		
		timecount = sinVal;
		//console.log(timecount);
		if(timecount >= -180 && timecount <-90){
			timecount = timecount + 450;
		} else {
			timecount = timecount + 90;
		}
		minute = floor(timecount * 4);
		hour = floor(minute/60);
		minuteA = minute - hour * 60;

		pmAm = " AM";

		if(hour > 11){
			pmAm = " PM";
			hour -= 12;
		}

		minuteA = ("00" + minuteA).slice(-2);
		hour = ("00" + hour).slice(-2);
		
		textSize(48);
		textFont("Amatic SC");
		fill(255);
		textAlign(CENTER);
		
		text(hour + " : " + minuteA + pmAm, width/2, height * 0.67);
		localStorage.setItem('minute', minuteA);
		localStorage.setItem('hour', hour);
		localStorage.setItem('APM', pmAm);
		// minuteB = minuteA;
		// hourB = hour;
		// console.log(minuteB);
		
	}

	function mouseDragged(){
		if(showClock == true){
			dx = mouseX;
			dy = mouseY;
			v2 = createVector(dx - width/2, dy - height/2);
			v1 = v2.copy();
			cursor(HAND);	
		}

	}

	function mouseReleased(){
		if(showClock == true){
			cursor(ARROW);
		}
	}
