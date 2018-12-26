var Ibrah = new Ibrah();

Ibrah.Draw.createCanvas(0, 0, 600, 600);
Ibrah.Draw.canvasBg("blue")

var sprite = Ibrah.Physics.createSprite(0, 10, "pic.jpeg");
Ibrah.Physics.enablePhysics(sprite);
sprite.velocity.y = 10;
Ibrah.Physics.enableGravity(sprite);

function Update() {
	console.log("test")
	sprite.y += sprite.velocity.y;
	updatePos(sprite);
	//Ibrah.Draw.img(sprite.x, sprite.y, sprite.img);
}