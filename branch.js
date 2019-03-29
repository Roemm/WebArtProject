function Branch(begin, end, angle){
	this.begin = begin;
	this.end = end;
	this.angle = angle;

	this.current = createVector(0, height);

	this.show = function(){
		stroke(255);
		strokeWeight(5);

		angleMode(RADIANS)

		var hy = 180;
		var wx = 25;
		
		line(this.begin.x, this.begin.y, this.end.x, this.end.y);

		// if(this.current.x < this.end.x){
		// 	this.current.x = lerp(this.current.x, this.end.x, 0.01);
		// }

		// if(this.current.y > this.end.y){
		// 	this.current.y = lerp(this.current.y, this.end.y, 0.01);
		// }
		
		push();
		translate(this.end.x, this.end.y);
		rotate(angle);

		line(0, 0, 0, - hy);
		line(0, - hy * 0.5, - wx * 0.88 , - hy * 1.1);
		line(0, - hy * 0.75, wx * 0.75, - hy * 1.03);

		noStroke();
		fill(220);
		

		beginShape();
		vertex(0, - hy * 0.9);
		bezierVertex(10, - hy * 1.02, 3, -hy * 1.1, 0, -hy * 1.15);
		vertex(0, - hy * 0.9);
		bezierVertex(- 10, - hy * 1.02, - 3, -hy * 1.1, 0, -hy * 1.15);
		endShape();

		
		beginShape();
		vertex(- wx * 0.78, -hy * 1.05);
		bezierVertex(- wx * 0.4, -hy * 1.1, - wx * 0.72, -hy * 1.18, - wx*1.1, -hy * 1.25);
		vertex(- wx * 0.78,- hy * 1.05);
		bezierVertex(- wx * 1.28, -hy * 1.1, - wx * 1.3, -hy * 1.18, - wx * 1.1, -hy * 1.25);
		endShape();

		
		beginShape();
		vertex(wx * 0.65, -hy * 0.98);
		bezierVertex(wx * 1.27, -hy * 1.05, wx * 1.26, -hy * 1.1, wx * 1.25, -hy * 1.2);
		vertex(wx * 0.65, -hy * 0.98);
		bezierVertex(wx * 0.52, -hy * 1.05, wx * 0.57, -hy * 1.1, wx * 1.25, -hy * 1.2);
		endShape();
		pop();

		

		var dir = p5.Vector.sub(this.end, this.begin);
		newEnd = p5.Vector.add(this.end, dir);
		newBegin = this.end;
		// return newBegin;
		// return newEnd;
		
	}

}

