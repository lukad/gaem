define("Gaem", ['Graphics', 'Player', 'Song', 'Gap', 'Menu'], function (Graphics, Player, Song, Gap, Menu) {

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

    this.showMenu = false;
    this.player = new Player();
    this.keys = []
    this.last = this.timestamp();
    this.song = new Song();
    this.gap = new Gap();

    this.score = 0;

    this.graphics = new Graphics(this.ctx, this.keys, this.width, this.height);
    this.menu = new Menu(this.ctx, canvas.width, canvas.height);

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
        this.keys[event.keyCode-49] = {"start":this.timestamp(), "duration":0};
      }
      else {
        var new_duration = this.timestamp() - storage.start;
        this.keys[event.keyCode-49] = {"start":storage.start, "duration":new_duration};
      }
    }
  };

  Gaem.prototype.keyup = function(event) {
    if (event.keyCode === 49) {
      this.keys[event.keyCode-49] = undefined;
    }
  };

  Gaem.prototype.draw = function() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    //this.player.draw(this.ctx);
    if(this.showMenu) {
      this.menu.draw();
    } else {
      this.graphics.draw();
    }
  };

  Gaem.prototype.update = function(dt) {
    this.player.update(dt);
  };

  Gaem.prototype.step = function() {
    var now = this.timestamp();
    var dt = Math.min(1, (now - this.last) / 1000);

    if (!this.showMenu) {
      this.update(dt);
    }

    this.draw();
    this.last = now;

    this.score += this.gap.calculate(this.keys, now);
    console.log(now, this.score);
    window.requestAnimationFrame(this.step.bind(this));
  };

  Gaem.prototype.selectSong = function() {
    this.currentTrack = this.song.gettrack(1);
    this.gap.setSong(this.currentTrack);
  };

  Gaem.prototype.run = function() {
    this.selectSong();
    this.song.playSong(1);

    window.requestAnimationFrame(this.step.bind(this));
  };

  return Gaem;
});
