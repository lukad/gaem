// drawing the game menu
// drawing the game
// handle changes between game menu and game

define("Graphics", function () {

	function Graphics(ctx) {
		var this.ctx = ctx;
		var start_button = new Image(200, 75);
		start_button.src = "res/start.png";
	};

	Graphics.prototype.draw_game_menu = function() {
	 	console.log("Graphics:draw_game_menu");
		ctx.clearRect(0, 0, ctx.);
		ctx.drawImage(start_button, ctx.getWidth / 3, ctx.getHeight / 3);
	};

	Graphics.prototype.draw = function() {
	 console.log("Graphics:draw");
	};

	Graphics.prototype.update = function() {
		console.log("Graphics:update");
	};

	return Graphics;

});
