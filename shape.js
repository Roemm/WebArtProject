var shape;
	var check = false;
	var shapeP


	function saveCircle(){
		if (check === false) {
			shape = "1";
			check = true;
			
			localStorage.setItem('shape', shape);
		}
	}

	function savePolygon(){
		if (check === false) {
			shape = "2";
			check = true;
			localStorage.setItem('shape', shape);
		}
	}

	function saveSquare(){
		if (check === false) {
			shape = "3";
			check = true;
			localStorage.setItem('shape', shape);
			
		}
	}

	function saveOther(){
		if (check === false) {
			shape = "4";
			check = true;
			localStorage.setItem('shape', shape);
			
		}
	}

	function saveRandom(){
		if (check === false) {
			shape = "5";
			check = true;
			localStorage.setItem('shape', shape);
			
		}
	}

	