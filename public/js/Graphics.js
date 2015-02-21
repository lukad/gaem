// drawing the game menu
// drawing the game
// handle changes between game menu and game

define("Graphics", function () {

	function Graphics(ctx, keys) {
		this.ctx = ctx;
		this.keys = keys;
	};

	Graphics.prototype.draw_game_menu = function() {
	 	console.log("Graphics:draw_game_menu");
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
