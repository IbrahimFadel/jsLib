//var Game = new Game(0, 0, 100, 100);

//Game.draw();

var Draw = new Draw();
Draw.createCanvas(100, 150, 300, 350);
//Draw.ellipse(150, 160, 150, 100, Math.PI / 2, 0, 2 * Math.PI, "#FF0000", true);
//Draw.circle(50, 50, 30, 0, 1*Math.PI, "blue", true);
Draw.poly(0, 0, [[0, 0], [0, 10], [20, 0]], "blue", true)