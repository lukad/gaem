define('Button', function()	{
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

	return Button;
});
