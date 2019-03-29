var minuteShow;
var hourShow;
var shapeShow;
var flavorShow = "sweet";

function switchC(){
	minuteShow = time.hourB;
	hourShow = time.hourB;	
	console.log(minuteShow);
	shapeShow = shapeP.file;

	var picture = document.getElementById('image');
	picture.src = "img/" + shapeShow + ".png";

	document.getElementById('text').innerHTML = minuteShow + " : " + hourShow;

	document.getElementById('text2').innerHTML = flavorShow;

}