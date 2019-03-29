var choiceColor;
var counter = 0;

function setup() {
  //createCanvas(windowWidth, windowHeight);
  //background(0);
}

function draw() {
  
}

function getText(textVal) {
	//choiceColor = textVal;
	console.log(choiceColor);
	counter += 1;
	if (counter == 1){
	document.getElementById(textVal).style.color = "pink";
	document.getElementById(textVal).style.fontSize = "100px";
	//alert("the flavor you have chosen is " + textVal);
	document.getElementById("further").style.display = "block";
	var flavorC = document.getElementById(textVal).innerHTML.split(">")[1].split("<")[0]; //"sour" sent
	localStorage.setItem('flavor', flavorC);
	console.log(flavorC);
	}

}