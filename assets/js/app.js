var keyData = {
	q: {
		sound: new Howl({
		  urls: ['assets/media/sounds/bubbles.mp3']
		}),
		color: '#1abc9c'
	},
	w: {
		sound: new Howl({
		  urls: ['assets/media/sounds/clay.mp3']
		}),
		color: '#2ecc71'
	},
	e: {
		sound: new Howl({
		  urls: ['assets/media/sounds/confetti.mp3']
		}),
		color: '#3498db'
	},
	r: {
		sound: new Howl({
		  urls: ['assets/media/sounds/corona.mp3']
		}),
		color: '#9b59b6'
	},
	t: {
		sound: new Howl({
		  urls: ['assets/media/sounds/dotted-spiral.mp3']
		}),
		color: '#34495e'
	},
	y: {
		sound: new Howl({
		  urls: ['assets/media/sounds/flash-1.mp3']
		}),
		color: '#16a085'
	},
	u: {
		sound: new Howl({
		  urls: ['assets/media/sounds/flash-2.mp3']
		}),
		color: '#27ae60'
	},
	i: {
		sound: new Howl({
		  urls: ['assets/media/sounds/flash-3.mp3']
		}),
		color: '#2980b9'
	},
	o: {
		sound: new Howl({
			urls: ['assets/media/sounds/glimmer.mp3']
		}),
		color: '#8e44ad'
	},
	p: {
		sound: new Howl({
		  urls: ['assets/media/sounds/moon.mp3']
		}),
		color: '#2c3e50'
	},
	a: {
		sound: new Howl({
		  urls: ['assets/media/sounds/pinwheel.mp3']
		}),
		color: '#f1c40f'
	},
	s: {
		sound: new Howl({
		  urls: ['assets/media/sounds/piston-1.mp3']
		}),
		color: '#e67e22'
	},
		d: {
		sound: new Howl({
		  urls: ['assets/media/sounds/piston-2.mp3']
		}),
		color: '#e74c3c'
	},
	f: {
		sound: new Howl({
		  urls: ['assets/media/sounds/prism-1.mp3']
		}),
		color: '#95a5a6'
	},
	g: {
		sound: new Howl({
		  urls: ['assets/media/sounds/prism-2.mp3']
		}),
		color: '#f39c12'
	},
	h: {
		sound: new Howl({
		  urls: ['assets/media/sounds/prism-3.mp3']
		}),
		color: '#d35400'
	},
	j: {
		sound: new Howl({
		  urls: ['assets/media/sounds/splits.mp3']
		}),
		color: '#1abc9c'
	},
	k: {
		sound: new Howl({
		  urls: ['assets/media/sounds/squiggle.mp3']
		}),
		color: '#2ecc71'
	},
	l: {
		sound: new Howl({
		  urls: ['assets/media/sounds/strike.mp3']
		}),
		color: '#3498db'
	},
	z: {
		sound: new Howl({
		  urls: ['assets/media/sounds/suspension.mp3']
		}),
		color: '#9b59b6'
	},
	x: {
		sound: new Howl({
		  urls: ['assets/media/sounds/timer.mp3']
		}),
		color: '#34495e'
	},
	c: {
		sound: new Howl({
		  urls: ['assets/media/sounds/ufo.mp3']
		}),
		color: '#16a085'
	},
	v: {
		sound: new Howl({
		  urls: ['assets/media/sounds/veil.mp3']
		}),
		color: '#27ae60'
	},
	b: {
		sound: new Howl({
		  urls: ['assets/media/sounds/wipe.mp3']
		}),
		color: '#2980b9'
	},
	n: {
		sound: new Howl({
			urls: ['assets/media/sounds/zig-zag.mp3']
		}),
		color: '#8e44ad'
	},
	m: {
		sound: new Howl({
		  urls: ['assets/media/sounds/moon.mp3']
		}),
		color: '#2c3e50'
	}
}; // keyData//

var circles = [];
function onKeyDown(event) {
	if(keyData[event.key]){
		var maxPoint = new Point(view.size.width, view.size.height);
		var randomPoint = Point.random();
		var point = maxPoint * randomPoint;
		var newCircle = new Path.Circle(point, 500);
		newCircle.fillColor = keyData[event.key].color;
		keyData[event.key].sound.play();
		circles.push(newCircle);
	}
}

function onFrame(event){
	for(var i = 0; i < circles.length; i++){
		circles[i].scale(0.9);
		circles[i].fillColor.hue += 1;
		if(circles[i].area < 1){
			circles[i].remove();
			circles.splice(i, 1);
			console.log(circles);
		}
	}
}

document.addEventListener("keypress", function(){
	var text = document.querySelector("h1");
	text.style.display = "none";
});
