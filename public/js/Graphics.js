// drawing the game menu
// drawing the game
// handle changes between game menu and game

define("Graphics", function () {

	function Graphics(ctx, keys) {
		this.ctx = ctx;
		this.keys = keys;
		
		
		function Note(start, duration) {
			this.start = start;
			this.duration = duration;
		}

		function Song() {
			this.currentTime = 0;
			this.tracks = new Array();
			this.tracks.push(new Array());
			
			this.tracks[0].push(new Note(50, 100));
			this.tracks[0].push(new Note(210, 40));
			this.tracks[0].push(new Note(280, 60));
			this.tracks[0].push(new Note(400, 80));
			
			this.getTracks = function() {
				return this.tracks;
			}
			
			this.getCurrentTime = function() {
				this.currentTime++;
				return this.currentTime;
			}
		}
		
		this.song = new Song();

	};

	
	
	Graphics.prototype.draw_game_menu = function() {
	 	console.log("Graphics:draw_game_menu");
		ctx.drawImage(start_button, ctx.getWidth / 3, ctx.getHeight / 3);
			
	};

	Graphics.prototype.draw = function() {
	
		var currentTime = this.song.getCurrentTime();
		var tracks = this.song.getTracks();
		var columns = tracks.length;
		
		for (var i=0; i<columns; ++i) {
			for (j=0; j<tracks[i].length; ++j) {
				var note = tracks[i][j];
				//console.log(currentTime);
			//	if(currentTime >= note.start && currentTime <= note.start + note.duration) {
					var diff = currentTime-note.start;
					
					if(diff <= 400 && diff >= 400-note.duration) {
						this.ctx.fillStyle="#000000";
					} else {
						this.ctx.fillStyle="#555555";
					}
					
					this.ctx.fillRect(100, diff, 20, note.duration);
				//	this.ctx.stroke();
		//		}
			}
		}
		
		this.ctx.beginPath();
		this.ctx.moveTo(0,400);
		this.ctx.lineTo(512,400);
		this.ctx.stroke();
	};
	

	Graphics.prototype.update = function() {
		console.log("Graphics:update");
	};

	return Graphics;

});
