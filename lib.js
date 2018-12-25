function Ibrah() {
	this.canvas;
	this.render;
	this.Draw = new Draw();
	this.Physics = new Physics();
}

function Physics() {
	this.sprite;
	this.gravity;

	this.createSprite = function(x, y, img) {
		this.sprite = {
			x : x,
			y: y,
			img: img
		}
		Ibrah.Draw.img(x, y, img);
	}

	// this.enablePhysics

	//this.enableGravity
}

function Draw() {
	this.createCanvas = function(x, y, w, h) {
		Ibrah.canvas = document.createElement("CANVAS");
		Ibrah.render = Ibrah.canvas.getContext("2d");


		Ibrah.canvas.width = w;
		Ibrah.canvas.height = h;
		Ibrah.canvas.style.left = x + "px";
		Ibrah.canvas.style.top = y + "px";
		Ibrah.canvas.style.position = "absolute";

	    document.body.appendChild(Ibrah.canvas);
	}

	this.canvasBg = function(bg) {
		Ibrah.rect(parseInt(Ibrah.canvas.style.left.replace(/\D/g,'')), parseInt(Ibrah.canvas.style.top.replace(/\D/g,'')), Ibrah.canvas.width, Ibrah.canvas.height, bg);
	}

	this.rect = function(x, y, w, h, fs) {
		Ibrah.render.fillStyle = fs;
		Ibrah.render.fillRect(x, y, w, h);
		Ibrah.render.fill();
	}

	this.ellipse = function(x, y, rx, ry, r, sa, ea, fs) {
		Ibrah.render.fillStyle = fs;
		Ibrah.render.ellipse(x, y, rx, ry, r, sa, ea);
		Ibrah.render.stroke();

		if(fs != undefined) {
			Ibrah.render.fill();
		}
	}

	this.circle = function(x, y, r, sa, ea, fs) {
		Ibrah.render.beginPath();
		Ibrah.render.fillStyle = fs;
		Ibrah.render.arc(x, y, r, sa, ea);
		Ibrah.render.stroke();
		Ibrah.render.closePath();

		if(fs != undefined) {
			Ibrah.render.fill();
		}
	}

	this.poly = function(x, y, polyPts, fs) {
		var args = polyPts;

		Ibrah.render.fillStyle = fs;
		Ibrah.render.beginPath();
		Ibrah.render.moveTo(x, y);

		for(let i = 0; i < args.length; i++) {
			Ibrah.render.lineTo(args[i][0], args[i][1]);
		}

		Ibrah.render.closePath();
		
		if(fs != undefined) {
			Ibrah.render.fill();
		}
	}

	this.line = function(x1, y1, x2, y2, fs, lw) {
		Ibrah.render.strokeStyle = fs;
		Ibrah.render.lineWidth = lw;
		Ibrah.render.beginPath();
		Ibrah.render.moveTo(x1, y1);
		Ibrah.render.lineTo(x2, y2);
		Ibrah.render.stroke();

		if(fs != undefined) {
			Ibrah.render.fill();
		}
	}

	this.triangle = function(x1, y1, x2, y2, x3, y3, fs, ls, lw) {
		Ibrah.render.fillStyle = fs;
		Ibrah.render.strokeStyle = ls;
		Ibrah.render.lineWidth = lw;
		Ibrah.render.beginPath();

		Ibrah.render.moveTo(x1, y1);
		Ibrah.render.lineTo(x2, y2);
		Ibrah.render.lineTo(x3, y3);
		Ibrah.render.stroke();

		if(fs != undefined) {
			Ibrah.render.fill();
		}
	}

	this.point = function(x, y, fs, lw) {
		this.circle(x, y, lw, 0, 2*Math.PI, fs);
	}

	this.drawImage = function(ctx, image, sx, sy, sw, sh) {
		if(!image.complete) {
			setTimeout(function() {
				Ibrah.Draw.drawImage(Ibrah.render, image, sx, sy, sw, sh);
			}, 50);
			return;
		}
		Ibrah.render.drawImage(image, sx, sy, sw, sh);
	}

	this.img = function(sx, sy, img, sw, sh, dx, dy, dw, dh) {
		let caller = this.img.caller;
		let image = new Image();
		image.src = img;
		if(caller != null) {
			image.onload = function() {
				sw = image.width;
				sh = image.height;
				Ibrah.Draw.drawImage(Ibrah.render, image, sx, sy, sw, sh);	
			}
		}
		this.drawImage(Ibrah.render, image, sx, sy, sw, sh);
	}
}


