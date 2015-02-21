// drawing the game menu
// drawing the game
// handle changes between game menu and game

define("Graphics", function () {

	function Graphics() {
	  
	};

	Graphics.prototype.draw_game_menu = function() {
	 console.log("Graphics:draw_game_menu");
	};

	Graphics.prototype.draw = function() {
	 console.log("Graphics:draw");
	};

	Graphics.prototype.update = function() {
		console.log("Graphics:update");
	};

	return Graphics;

});
