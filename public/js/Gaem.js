define("Gaem", ['Graphics', 'Player'], function (Graphics, Player) {

	function Gaem() {
	  this.canvas = document.getElementById('canvas');
	  this.ctx = this.canvas.getContext('2d');

	  this.keys = {};
	  
	  this.showMenu = false;
	  this.graphics = new Graphics(this.ctx, this.keys);
	  this.player = new Player();


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

		if(this.showMenu) {
			this.graphics.draw_game_menu();
		} else {
			this.update();
			this.graphics.draw();		
		}
	
		window.requestAnimationFrame(this.step.bind(this));
	};

	Gaem.prototype.run = function() {
	  window.requestAnimationFrame(this.step.bind(this));
	};

	return Gaem;
});
