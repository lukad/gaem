// drawing the game menu
// drawing the game
// handle changes between game menu and game

define("Graphics", ['Button'], function(Button) {

	function Graphics(ctx, keys, width, height) {
		this.ctx = ctx;
		this.keys = keys;
		this.width = width;
		this.height = height;
		this.buttons = [
			new Button("start", width / 3, height / 3, 200, 75),
			new Button("credits", width / 3, 0.6 * height, 200, 75)
		];
		document.addEventListener("mousedown", this.onMouseDown.bind(this));
	};

	Graphics.prototype.drawGameMenu = function() {
	 	console.log("Graphics:draw_game_menu");
		for(i = this.buttons.length - 1; i >= 0; i--) {
			this.buttons[i].draw(this.ctx);
		}
	};

	Graphics.prototype.draw = function() {
	 console.log("Graphics:draw");
	};

	Graphics.prototype.update = function() {
		console.log("Graphics:update");
	};

	Graphics.prototype.onMouseDown = function(event) {
		var x = event.clientX,
		    y = event.clientY;
		for(i = this.buttons.length - 1; i >= 0; i--) {
			this.buttons[i].draw(this.ctx);
		}
	};

	return Graphics;
});
