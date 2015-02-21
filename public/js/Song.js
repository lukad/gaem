// drawing the game menu
// drawing the game
// handle changes between game menu and game


// Song Structre: Array of each Key that is used in the song. 
// Each Note is repreented with a start and a duration of the key stroke.

define("Song", function () {

  function Song() {
    this.song_files = ['songs/guitar_solo.mp3'];
    this.sample_song = [{"start": 1, "duration":100}];
    this.guitar_solo = [
      // baseine
      {"start": 245,   "duration":100},
      {"start": 886,   "duration":100},
      {"start": 2792,  "duration":100},
      {"start": 3419,  "duration":100},
      {"start": 5311,  "duration":100},
      {"start": 6269,  "duration":100},
      {"start": 7834,  "duration":100},
      {"start": 8469,  "duration":100},
      {"start": 1039,  "duration":100},
      {"start": 10958, "duration":100},
      {"start": 12826, "duration":100},
      {"start": 13431, "duration":100},
      {"start": 15293, "duration":100},
      {"start": 15921, "duration":100},
      {"start": 16214, "duration":100},
      {"start": 17779, "duration":100},
      {"start": 18257, "duration":100},
      {"start": 18396, "duration":100},
      {"start": 20895, "duration":100},
      {"start": 23341, "duration":100},
      {"start": 23960, "duration":100},
      {"start": 25775, "duration":100},
      {"start": 28216, "duration":100}
    ]
    this.songs = [this.guitar_solo];
  };

  Song.prototype.getTracks = function() {
    return this.songs;
  };

  Song.prototype.gettrack = function(track_id) {
    return this.songs[track_id];
  };

  Song.prototype.getTrackEnd = function(track_id) {
    this.songs[this.songs[track_id].length-1]; 
  }

  Song.prototype.getCurrentTime = function() {
    if (document.getElementsByTagName("audio").length != 0) {
      return document.getElementsByTagName("audio")[0].currentTime * 1000;
    } 
    return 0;
  }

  Song.prototype.resetSong = function() {
    if (document.getElementsByTagName("audio").length !== 0) {
      document.getElementsByTagName("audio")[0].remove();
    }
  }

  Song.prototype.playSong = function(track_id) {
    this.resetSong();
  	//Create the audio tag
  	// ony one audio element
		if (document.getElementsByTagName("audio").length==0) {
			var soundFile = document.createElement("audio");
				soundFile.preload = "auto";

				//Load the sound file (using a source element for expandability)
				var src = document.createElement("source");
				src.src = this.song_files[track_id];
				soundFile.appendChild(src);

				//Load the audio tag
				//It auto plays as a fallback
				soundFile.load();
				soundFile.volume = 1.000;
				soundFile.play();
				document.body.appendChild(soundFile);

				//Plays the sound
				function play() {
				   //Set the current time for the audio file to the beginning

				   soundFile.currentTime = 0.01;
				   soundFile.volume = volume;

				   //Due to a bug in Firefox, the audio needs to be played after a delay
				   setTimeout(function(){soundFile.play();},1);
				}
		}
  };

  return Song;

});
