define("Gaem", ['Player'], function (Player) {

	function Gaem() {
	  this.canvas = document.getElementById('canvas');
	  this.ctx = this.canvas.getContext('2d');

	  this.player = new Player();

	  this.keys = {};

	  document.addEventListener('keydown', this.keydown.bind(this));
	  document.addEventListener('keyup', this.keyup.bind(this));
	}

	Gaem.prototype.keydown = function(event) {
		this.keys[event.keyCode] = true;
	};

	Gaem.prototype.keyup = function(event) {
		this.keys[event.keyCode] = false;
	};

	Gaem.prototype.draw = function() {
	  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	  this.player.draw(this.ctx);
	};

	Gaem.prototype.update = function() {
	  this.player.update(0.05);
	};

	Gaem.prototype.step = function() {
	  this.update();
	  this.draw();
	  window.requestAnimationFrame(this.step.bind(this));
	};

	Gaem.prototype.run = function() {
	  window.requestAnimationFrame(this.step.bind(this));
	};

	return Gaem;
});
