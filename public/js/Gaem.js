define("Gaem", ['Player'], function (Player) {

  function Gaem() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

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

  Gaem.prototype.run = function() {
    window.requestAnimationFrame(this.step.bind(this));
  };

  return Gaem;
});
