function Game(x, y, w, h) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	//this.canvas;
	//this.render;

	this.draw = function(x, y, w, h) {
		x = this.x;
		y = this.y;
		w = this.w;
		h = this.h;
		new Draw(this.x, this.y, this.w, this.h);
	}

	/*this.draw = function(x, y, w, h) {
		console.log("Creating Canvas");
		var canvas = document.createElement("CANVAS");
		var render = canvas.getContext("2d");

		canvas.left = x;
		canvas.top = y;
		canvas.width = w;
		canvas.height = h;
		canvas.style.position = "absolute";

		console.log(canvas.width);

		render.fillStyle = "#FF0000";
		render.fillRect(0, 0, 10, 10);
		console.log("Canvas Created");
	}*/
}


// I NEED TO MAKE FS AN OPTIONAL PARAMETER AND GET RID OF FILL

function Draw() {
	this.canvas;
	this.render;

	this.createCanvas = function(x, y, w, h) {
		this.canvas = document.createElement("CANVAS");
		this.render = this.canvas.getContext("2d");

		this.canvas.style.position = "absolute";

		this.canvas.width = w;
		this.canvas.height = h;
		this.canvas.style.left = x;
		this.canvas.style.top = y;

	    document.body.appendChild(this.canvas);
	}

	this.rect = function(x, y, w, h, fs) {
		this.render.fillStyle = fs;
		this.render.fillRect(x, y, w, h);
	}

	this.ellipse = function(x, y, rx, ry, r, sa, ea, fs, fill) {
		this.render.fillStyle = fs;
		this.render.ellipse(x, y, rx, ry, r, sa, ea);
		this.render.stroke();

		if(fill) {
			this.render.fill();
		}
	}

	this.circle = function(x, y, r, sa, ea, fs, fill) {
		this.render.fillStyle = fs;
		this.render.arc(x, y, r, sa, ea);
		this.render.stroke();

		if(fill) {
			this.render.fill();
		}
	}

	this.poly = function(polyPts, fs, fill) {
		var args = polyPts;
		this.render.fillStyle = fs;

		this.render.beginPath();
		this.render.moveTo(0, 0);
		this.render.moveTo(10, 50)
		this.render.lineTo(100,50);;
		//this.render.moveTo(args[0][0], args[0][1]);
		//this.render.lineTo(args[1][0], args[1][1]);

		this.render.closePath();
		//for(arg in args) {

		//}
		if(fill) {
			this.render.fill();
		}
	}
}
