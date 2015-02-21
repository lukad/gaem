// drawing the game menu
// drawing the game
// handle changes between game menu and game

define("Graphics", ['Button', 'Song'], function(Button, Song) {

	function Graphics(ctx, keys, width, height) {
		this.ctx = ctx;
		this.keys = keys;
		this.song = new Song();
		this.width = width;
		this.height = height;
	}

	Graphics.prototype.draw = function() {
		var currentTime = this.song.getCurrentTime();
		var tracks = this.song.getTracks();
		var columns = tracks.length;
		var lineY = 400;
		
		for (var i=0; i<columns; ++i) {
			for (j=0; j<tracks[i].length; ++j) {
				var note = tracks[i][j];
				var start = note.start+lineY;

					if(currentTime >= start && currentTime <= start + note.duration) {
						this.ctx.fillStyle="#000000";
						this.ctx.shadowColor = '#ff0000';
						this.ctx.shadowBlur = 20;
					} else {
						this.ctx.fillStyle="#555555";
						this.ctx.shadowBlur = 0;
					}
					
					this.ctx.fillRect(100+50*i, lineY-note.duration+currentTime-start, 20, note.duration);

			}
		}
		
		this.ctx.beginPath();
		this.ctx.moveTo(0,lineY);
		this.ctx.lineTo(512,lineY);
		this.ctx.stroke();
	};
	

	Graphics.prototype.update = function() {
	};

	Graphics.prototype.onMouseDown = function(event) {
		var x = event.clientX,
		    y = event.clientY;

		for (i = this.buttons.length - 1; i >= 0; i--) {
			if (x >= this.buttons[i].x && x <= this.buttons[i].x + this.buttons[i].width &&
					y >= this.buttons[i].y && y <= this.buttons[i].y + this.buttons[i].height) {
						console.log("Pressed button:", this.buttons[i]);
			}
		}
	};

	return Graphics;
});
