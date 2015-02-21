define('Button', function()	{
	function Button(text, x, y, width, height, callback) {
		this.text = text;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.callback = callback;
	}

	Button.prototype.draw = function(ctx) {
		ctx.font = "36px monospace";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.strokeRect(this.x, this.y, this.width, this.height);
		ctx.fillText(this.text, this.width / 2 + this.x, this.height / 2 + this.y);
	};

	return Button;
});
