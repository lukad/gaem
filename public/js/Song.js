// drawing the game menu
// drawing the game
// handle changes between game menu and game


// Song Structre: Array of each Key that is used in the song. 
// Each Note is repreented with a start and a duration of the key stroke.

define("Song", function () {

	function Song() {
	  this.sample_song = [{"start": "1", "duration":"0"}];
	  this.songs = [this.sample_song];
	};

	Song.prototype.gettrack = function(track_id = 0) {
	 return this.song[track_id];
	};

	Song.prototype.update = function() {
	 console.log("Song:update");
	};

	return Song;

});
