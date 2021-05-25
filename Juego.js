var config = {
    
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 240 },
            debug: false
        }
    },
    scene: [Scena1, Scena2, Scena3]
};

var game = new Phaser.Game(config);

var player;
var stars;
var pinkstars;
var bombs;
var platforms;
var cursors;
var score;
var gameOver;
var scoreText;
var level = 0;

