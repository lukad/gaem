define("Gaem", ['Graphics', 'Player'], function (Graphics, Player) {

  function Gaem() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.showMenu = false;
    this.graphics = new Graphics();
    this.player = new Player();

    this.keys = new Date().getTime();
    this.last = this.timestamp();

    document.addEventListener('keydown', this.keydown.bind(this));
    document.addEventListener('keyup', this.keyup.bind(this));
  }

  Gaem.prototype.timestamp = function() {
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
  }

  Gaem.prototype.keydown = function(event) {
    this.keys[event.keyCode] = true;
  };

  Gaem.prototype.keyup = function(event) {
    this.keys[event.keyCode] = false;
  };

  Gaem.prototype.draw = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.player.draw(this.ctx);
    this.graphics.draw();
    if(this.showMenu) {
      this.graphics.draw_game_menu();
    }
  };

  Gaem.prototype.update = function(dt) {
    this.player.update(dt);
    console.log(dt);
  };

  Gaem.prototype.step = function() {
    var now = this.timestamp();
    var dt = Math.min(1, (now - this.last) / 1000);

    this.update(dt);
    this.draw();

    this.last = now;

    
    window.requestAnimationFrame(this.step.bind(this));
  };

  Gaem.prototype.step = function() {
    var now = this.timestamp();
    var dt = Math.min(1, (now - this.last) / 1000);

    this.update(dt);
    this.draw();

    this.last = now;
    window.requestAnimationFrame(this.step.bind(this));
  };

  Gaem.prototype.run = function() {
    window.requestAnimationFrame(this.step.bind(this));
  };

  return Gaem;
});
