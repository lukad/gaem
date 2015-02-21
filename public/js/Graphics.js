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
		this.buttons = [
			new Button("start", width / 3, height / 3, 200, 75),
			new Button("credits", width / 3, 0.6 * height, 200, 75)
		];
		document.addEventListener("mousedown", this.onMouseDown.bind(this));
	}

	Graphics.prototype.drawGameMenu = function() {
		for(i = this.buttons.length - 1; i >= 0; i--) {
			this.buttons[i].draw(this.ctx);
		}
	};


	Graphics.prototype.draw = function() {
		var currentTime = this.song.getCurrentTime();
		console.log(currentTime);
		var tracks = this.song.getTracks();
		var columns = tracks.length;
		var lineY = 400;
		var zoom = 0.1;
		var pxPerMs = 0.05;
		
		this.ctx.fillText("time: " + Math.round(currentTime),10,10);

		for (var i=0; i<columns; ++i) {
			for (j=0; j<tracks[i].length; ++j) {
				var note = tracks[i][j];
				var start = note.start;
				
				if(currentTime >= start && currentTime <= start + note.duration) {
					this.ctx.fillStyle="#000000";
					this.ctx.shadowColor = '#ff0000';
					this.ctx.shadowBlur = 5;
				} else {
					this.ctx.fillStyle="#555555";
					this.ctx.shadowBlur = 0;
				}
			
				msLeftToBePlayed = Math.round(start-currentTime);
				rectY = lineY - (msLeftToBePlayed+note.duration)*pxPerMs;
			
				this.ctx.fillRect(100+50*i, rectY, 100*pxPerMs, note.duration*pxPerMs);

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
