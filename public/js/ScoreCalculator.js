define("ScoreCalculator", function() {
  function ScoreCalculator() {
  };

  ScoreCalculator.prototype.setSong = function(song, currentTrack) {
    this.song = song;
    this.currentTrack = currentTrack;
  };

  ScoreCalculator.prototype.calculate = function(keyState) {
    if (keyState[0] === undefined) {
      return 0;
    }

    var score = -1;

    this.currentTrack.some(function(note) {
      var beginGap = note.start - 200;
      var endGap = note.start + 200;

      if (this.song.getCurrentTime() > endGap) {
        return false;
      }

      if (this.song.getCurrentTime() > this.song.getTrackEnd(0).start + this.song.getTrackEnd(0).duration) 
      {
        this.song.resetSong();
      }

      if (keyState[0].start > beginGap && keyState[0].start < endGap) {
        score = 10;

        var minDuration = note.duration - 100;
        var maxDuration = note.duration + 100;
        if (keyState[0].duration < minDuration && keyState[0].duration > maxDuration) {
          score += 10;
        }
        return true;
      }
    }.bind(this));

    return score;
  };

  return ScoreCalculator;
});
