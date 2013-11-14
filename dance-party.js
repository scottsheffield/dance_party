var body = document.getElementsByTagName('body')[0],
	prevBackground = body.style.background,
	prevWindowBackground,
	audio = document.createElement('audio'),
	strobeMe;

	if (window.body) {
		prevWindowBackground = window.body.style.background;
	}

function ohGodItsKickingIn () {
	audio.play();

	setTimeout(function () {
		strobeMe = setInterval(function () {
			var strobeColor = 'rgb(' + Math.floor(Math.random() * 155 + 100) + ',' + Math.floor(Math.random() * 155 + 100) + ',' + Math.floor(Math.random() * 155 + 100) + ')';
			body.style.background = strobeColor;
			if (window.body) {
				window.body.style.background = strobeColor;
			}
		}, 63.02083325); // Based on "Out With My Girlfriends" BPM of 121
	}, 4050);

	setTimeout(function () {
		clearInterval(strobeMe);
		body.style.background = prevBackground;
		if (window.body) {
			window.body.style.background = prevWindowBackground;
		}
	}, 106000);
}

audio.addEventListener('loadedmetadata', ohGodItsKickingIn, false);
body.appendChild(audio);
audio.src = "http://georgeandjonathan.com/thebestmusic/mp3/5.mp3";