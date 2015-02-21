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
		this.pxPerMs = 0.2;
		
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

	Graphics.prototype.drawScore = function(score) {
		this.ctx.textAlign = 'left';
		this.ctx.textBaseline = 'top';
		this.ctx.fillText("score: " + score, 10, 10);
	};


	Graphics.prototype.draw = function() {
		var currentTime = this.song.getCurrentTime();
		var tracks = this.song.getTracks();
		var columns = tracks.length;
		var lineY = 400;
		var zoom = 0.1;
		
		var columnColors = [
			{"playing" : "#bb0000", "notplaying" : "#8800000", "highlight" : "#ff0000"},
			{"playing" : "#00bb00", "notplaying" : "#0008800", "highlight" : "#00ff00"},
			{"playing" : "#0000bb", "notplaying" : "#0000088", "highlight" : "#0000ff"},
		]
		
		
		for (var i=0; i<columns; ++i) {
			for (j=0; j<tracks[i].length; ++j) {
				var note = tracks[i][j];
				var start = note.start;
				
				if(currentTime >= start && currentTime <= start + note.duration) {
					this.ctx.fillStyle="#000000"; //columnColors[i].playing;
					this.ctx.shadowColor = "#000000"; //columnColors[i].highlight;
					this.ctx.shadowBlur = 100*this.pxPerMs;
				} else {
					this.ctx.fillStyle="#000000"; //columnColors[i].notplaying;
					this.ctx.shadowBlur = 0;
				}
			
				var msLeftToBePlayed = Math.round(start-currentTime);
				var rectY = lineY - (msLeftToBePlayed+note.duration)*this.pxPerMs;
				var dx = this.width / (columns+1);
				var rectX = dx + i*dx - 50*this.pxPerMs
				
				this.ctx.fillRect(rectX, rectY, 100*this.pxPerMs, note.duration*this.pxPerMs);
			}
		}
		
		this.ctx.beginPath();
		this.ctx.moveTo(0,lineY);
		this.ctx.lineTo(512,lineY);
		this.ctx.stroke();
	};

	Graphics.prototype.onMouseDown = function(event) {
		var x = event.clientX,
		    y = event.clientY;

		for (i = this.buttons.length - 1; i >= 0; i--) {
			if (x >= this.buttons[i].x && x <= this.buttons[i].x + this.buttons[i].width &&
					y >= this.buttons[i].y && y <= this.buttons[i].y + this.buttons[i].height) {
			}
		}
	};

	Graphics.prototype.makeLarger = function() {
		this.pxPerMs += 0.03;
	};
	
	Graphics.prototype.makeSmaller = function() {
		this.pxPerMs -= 0.03;
	};

	
	return Graphics;
});
