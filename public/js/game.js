var Gaem = function() {
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');

  this.player = new Player();
};

Gaem.prototype.draw = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.player.draw(this.ctx);
};

Gaem.prototype.update = function() {
  this.player.update(0.05);
};

Gaem.prototype.step = function() {
  this.update();
  this.draw();
  window.requestAnimationFrame(this.step.bind(this));
};

Gaem.prototype.run = function() {
  window.requestAnimationFrame(this.step.bind(this));
};

var Player = function() {
  this.x = 0;
  this.y = 0;
};

Player.prototype.draw = function(ctx) {
  ctx.fillRect(this.x, this.y, 20, 20);
};

Player.prototype.update = function(dt) {
  this.x += 5 * dt;
};

var gaem = new Gaem();
gaem.run();
