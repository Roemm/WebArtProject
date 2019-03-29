function speak(){
		var text = document.getElementById('type').value;
		responsiveVoice.speak(text);

		localStorage.setItem('speech', text);
	}