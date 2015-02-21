define("Player", function () {

  function Player() {
    this.x = 0;
    this.y = 0;
  }

  Player.prototype.draw = function(ctx) {
    ctx.fillRect(this.x, this.y, 20, 20);
  };

  Player.prototype.update = function(dt) {
    this.x += 50 * dt;
  };

  return Player;

});
