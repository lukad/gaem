// drawing the game menu
// drawing the game
// handle changes between game menu and game

define("Graphics", function () {

	function Graphics(ctx, keys, width, height) {
		this.ctx = ctx;
		this.keys = keys;
		this.width = width;
		this.height = height;
		this.buttons = [
			new Button(width / 3, height / 3, 200, 75),
			new Button(width / 3, 0.6 * height, 200, 75)
		];
	};

	Graphics.prototype.drawGameMenu = function() {
	 	console.log("Graphics:draw_game_menu");
		for(i = this.buttons.length - 1; i >= 0; i--) {
			this.buttons[i].draw(this.ctx);
		}
		//this.ctx.fillText(rect);
		//this.ctx.fillText();
	};

	Graphics.prototype.draw = function() {
	 console.log("Graphics:draw");
	};

	Graphics.prototype.update = function() {
		console.log("Graphics:update");
	};

	function Button(x, y, width, height, callback) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.callback = callback;
	}

	Button.prototype.draw = function(ctx) {
		ctx.strokeRect(this.x, this.y, this.width, this.height);	
	};

	return Graphics;

});
