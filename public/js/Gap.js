define("Gap", function() {
  function Gap() {
  };

  Gap.prototype.setSong = function(song) {
    this.song = song;
  };

  Gap.prototype.calculate = function(keyState) {
    if (keyState[0] === undefined) {
      return 0;
    }

    var score = -1;

    this.song.some(function(note) {
      var beginGap = note.start - 100;
      var endGap = note.start + 100;
      if (keyState[0].start > beginGap && keyState[0].start < endGap) {
        score = 1;
        return true;
      }
    });

    return score;
  };

  return Gap;
});
