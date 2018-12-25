function Ibrah() {
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
		console.log(this.sprite.x);
		Ibrah.Draw.img(x, y, img);
	}

	// this.enablePhysics

	//this.enableGravity
}

function Draw() {
	this.canvas;
	this.render;

	this.createCanvas = function(x, y, w, h) {
		this.canvas = document.createElement("CANVAS");
		this.render = this.canvas.getContext("2d");


		this.canvas.width = w;
		this.canvas.height = h;
		this.canvas.style.left = x + "px";
		this.canvas.style.top = y + "px";
		this.canvas.style.position = "absolute";

	    document.body.appendChild(this.canvas);
	}

	this.canvasBg = function(bg) {
		this.rect(parseInt(this.canvas.style.left.replace(/\D/g,'')), parseInt(this.canvas.style.top.replace(/\D/g,'')), this.canvas.width, this.canvas.height, bg);
	}

	this.rect = function(x, y, w, h, fs) {
		this.render.fillStyle = fs;
		this.render.fillRect(x, y, w, h);
		this.render.fill();
	}

	this.ellipse = function(x, y, rx, ry, r, sa, ea, fs) {
		this.render.fillStyle = fs;
		this.render.ellipse(x, y, rx, ry, r, sa, ea);
		this.render.stroke();

		if(fs != undefined) {
			this.render.fill();
		}
	}

	this.circle = function(x, y, r, sa, ea, fs) {
		this.render.beginPath();
		this.render.fillStyle = fs;
		this.render.arc(x, y, r, sa, ea);
		this.render.stroke();
		this.render.closePath();

		if(fs != undefined) {
			this.render.fill();
		}
	}

	this.poly = function(x, y, polyPts, fs) {
		var args = polyPts;

		this.render.fillStyle = fs;
		this.render.beginPath();
		this.render.moveTo(x, y);

		for(let i = 0; i < args.length; i++) {
			this.render.lineTo(args[i][0], args[i][1]);
			console.log(args[i][0] + args[i][1])
		}

		this.render.closePath();
		
		if(fs != undefined) {
			this.render.fill();
		}
	}

	this.line = function(x1, y1, x2, y2, fs, lw) {
		this.render.strokeStyle = fs;
		this.render.lineWidth = lw;
		this.render.beginPath();
		this.render.moveTo(x1, y1);
		this.render.lineTo(x2, y2);
		this.render.stroke();

		if(fs != undefined) {
			this.render.fill();
		}
	}

	this.triangle = function(x1, y1, x2, y2, x3, y3, fs, ls, lw) {
		this.render.fillStyle = fs;
		this.render.strokeStyle = ls;
		this.render.lineWidth = lw;
		this.render.beginPath();

		this.render.moveTo(x1, y1);
		this.render.lineTo(x2, y2);
		this.render.lineTo(x3, y3);
		this.render.stroke();

		if(fs != undefined) {
			this.render.fill();
		}
	}

	this.point = function(x, y, fs, lw) {
		this.circle(x, y, lw, 0, 2*Math.PI, fs);
	}

	this.drawImage = function(ctx, image, sx, sy, sw, sh) {
		if(!image.complete) {
			setTimeout(function() {
				Ibrah.Draw.drawImage(this.render, image, sx, sy, sw, sh);
			}, 50);
			return;
		}

		this.render.drawImage(image, sx, sy, sw, sh);
	}

	this.img = function(sx, sy, img, sw, sh, dx, dy, dw, dh) {
		let image = new Image();
		image.src = img;
		this.drawImage(this.render, image, sx, sy, sw, sh);
	}
}


