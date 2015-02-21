define("Menu", ['Button'], function(Button) {

	function Menu(ctx, canvas, width, height, onPlayPressed) {
		this.ctx = ctx;
		this.width = width;
		this.height = height;
		this.canvas = canvas;

		var buttonMargin = width / 8;
		var buttonWidth = width - buttonMargin * 2;

		this.buttons = [
			new Button("play", buttonMargin, height / 3, buttonWidth, 75, onPlayPressed),
			new Button("credits", buttonMargin, 0.6 * height, buttonWidth, 75)
		];
		canvas.addEventListener("mousedown", this.onMouseDown.bind(this));
	}

	Menu.prototype.draw = function() {
		for (i = this.buttons.length - 1; i >= 0; i--) {
			this.buttons[i].draw(this.ctx);
		}
	};

	Menu.prototype.onMouseDown = function(event) {
		var rect = this.canvas.getBoundingClientRect();
		var x = event.clientX - rect.left,
		    y = event.clientY - rect.top;

		for (var i = 0; i < this.buttons.length; i++) {
			if (this.buttons[i].contains(x, y)) {	
				this.buttons[i].callback();
			}
		}
	};

	return Menu;	

});
