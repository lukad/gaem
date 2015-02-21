define("Gap", function() {
  function Gap() {
  };

  Gap.prototype.setSong = function(song) {
    this.song = song;
  };

  Gap.prototype.calculate = function(currentKeyState, currentTimestamp) {
    if (currentKeyState[0] === undefined) {
      return 0;
    }

    this.song.forEach(function(note) {
      var beginningGap = note.start - 100;
      var endGap = note.start + 100;
      var keyPressedStart = currentKeyState[0].start;
      if (keyPressedStart > beginningGap && keyPressedStart < endGap) {
        return 1;
      }
    });

    return -1;
  };

  return Gap;
});
