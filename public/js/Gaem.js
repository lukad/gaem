define("Gaem", ['Graphics', 'Song', 'ScoreCalculator', 'Menu'],
       function (Graphics, Song, ScoreCalculator, Menu) {

  function Gaem() {
    this.width = 500;
    this.height = 500;

    var canvas = document.getElementById('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    canvas.style.position = 'absolute';
    canvas.style.marginLeft = -0.5*this.width+'px';
    canvas.style.marginTop = -0.5*this.height+'px';

    this.ctx = canvas.getContext('2d');

    this.audioCreated = false;
    this.showMenu = true;
    this.keys = []
    this.last = this.timestamp();
    this.song = new Song();
    this.scoreCalculator = new ScoreCalculator();
    this.score = 0;

    this.graphics = new Graphics(this.ctx, this.keys, this.width, this.height);
    this.menu = new Menu(this.ctx, canvas, canvas.width, canvas.height, this.play.bind(this));

    document.addEventListener('keydown', this.keydown.bind(this));
    document.addEventListener('keyup', this.keyup.bind(this));
  }

  Gaem.prototype.timestamp = function() {
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
  }

  Gaem.prototype.keydown = function(event) {
    if (event.keyCode === 49) {
      // update keys data
      var storage = this.keys[event.keyCode-49];
      if (storage == undefined) {
        this.keys[event.keyCode-49] = {"start": this.song.getCurrentTime(), "duration":0};
      }
      else {
        var new_duration = this.song.getCurrentTime() - storage.start;
        this.keys[event.keyCode-49] = {"start": storage.start, "duration":new_duration};
      }
    }
    if(event.keyCode === 27 && this.audioCreated) {
      this.score = 0;
      this.showMenu = !this.showMenu;
    }
	if (event.keyCode === 38) this.graphics.makeLarger();
	if (event.keyCode === 40) this.graphics.makeSmaller();
  };

  Gaem.prototype.keyup = function(event) {
    if (event.keyCode === 49) {
      this.keys[event.keyCode-49] = undefined;
    }
  };

  Gaem.prototype.draw = function() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    if(this.showMenu) {
      this.menu.draw();
	if(this.audioCreated){
		document.getElementsByTagName("audio")[0].currentTime = 0;
	}
    } else {
      this.graphics.draw();
      this.graphics.drawScore(this.score);
    }
  };

  Gaem.prototype.play = function() {
    this.song.playSong(0);
    this.score = 0;
    this.showMenu = !this.showMenu;
    this.audioCreated = true;
  };

  Gaem.prototype.frame = function() {
    this.draw();
    var now = this.timestamp();

    if (!this.showMenu) {
      this.score += this.scoreCalculator.calculate(this.keys, now);
    }

    window.requestAnimationFrame(this.frame.bind(this));
  };

  Gaem.prototype.selectSong = function() {
    this.currentTrack = this.song.gettrack(0);
    this.scoreCalculator.setSong(this.song, this.currentTrack);
  };

  Gaem.prototype.run = function() {
    this.selectSong();

    window.requestAnimationFrame(this.frame.bind(this));
  };

  return Gaem;
});
