define("Gap", function() {
  function Gap() {
  };

  Gap.prototype.setSong = function(song) {
    this.song = song;
  };

  Gap.prototype.calculate = function(keyState, currentTimestamp) {
    if (keyState[0] === undefined) {
      return 0;
    }

    var score = -1;

    this.song.some(function(note) {
      var beginGap = note.start - 200;
      var endGap = note.start + 200;

      if (currentTimestamp > endGap) {
        return false;
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
    });

    return score;
  };

  return Gap;
});
