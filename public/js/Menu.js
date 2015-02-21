define("Menu", ['Button'], function(Button) {

	function Menu(ctx, width, height) {
		this.ctx = ctx;
		this.width = width;
		this.height = height;
		this.buttons = [
			new Button("play", width / 3, height / 3, 200, 75),
			new Button("credits", width / 3, 0.6 * height, 200, 75)
		];
		document.addEventListener("mousedown", this.onMouseDown.bind(this));
	}

	Menu.prototype.draw = function() {
		for(i = this.buttons.length - 1; i >= 0; i--) {
			this.buttons[i].draw(this.ctx);
		}
	};

	Menu.prototype.onMouseDown = function(event) {
		var x = event.clientX,
		    y = event.clientY;

		for (i = this.buttons.length - 1; i >= 0; i--) {
			if(this.button[i].contains(x, y)) {	
				console.log("Pressed button:", this.buttons[i]);
			}
		}
	};

	return Menu;	

});
