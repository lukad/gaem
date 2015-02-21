define("Gaem", ['Graphics', 'Player'], function (Graphics, Player) {

  function Gaem() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.showMenu = false;
    this.player = new Player();
    this.keys = []
    this.last = this.timestamp();
	  
    this.graphics = new Graphics(this.ctx, this.keys);
    this.player = new Player();

    document.addEventListener('keydown', this.keydown.bind(this));
    document.addEventListener('keyup', this.keyup.bind(this));
  }

  Gaem.prototype.timestamp = function() {
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
  }


  Gaem.prototype.keydown = function(event) {
    if (event.keyCode === 49) 
    {
      // update keys data
      var storage = this.keys[event.keyCode-49];
      if (storage == undefined) 
      {
        this.keys[event.keyCode-49] = {"start":this.timestamp(), "duration":0};
      }
      else 
      {
        var new_duration = this.timestamp() - storage.start;  
        this.keys[event.keyCode-49] = {"start":storage.start, "duration":new_duration};
      }
    }
  };

  Gaem.prototype.keyup = function(event) {
     this.keys[event.keyCode-49] = undefined;
  };

  Gaem.prototype.draw = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //this.player.draw(this.ctx);
    if(this.showMenu) {
      this.graphics.draw_game_menu();
    } else {
      this.graphics.draw();
    }
  };

  Gaem.prototype.update = function(dt) {
    this.player.update(dt);
    // console.log(this.keys[0])
  };

  Gaem.prototype.step = function() {
    var now = this.timestamp();
    var dt = Math.min(1, (now - this.last) / 1000);

    if (!this.showMenu) {
      this.update(dt);
    }

    this.draw();
    this.last = now;

    window.requestAnimationFrame(this.step.bind(this));
  };

  Gaem.prototype.run = function() {
    window.requestAnimationFrame(this.step.bind(this));
  };

  return Gaem;
});
