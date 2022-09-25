// Phaser webgl
var config = {
  type: Phaser.CANVAS, // For better performance
  width: 780,
  height: 550,
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  callbacks: {
    postBoot: function (game) {
      game.canvas.style.width = "100%";
      game.canvas.style.height = "100%";
    },
  },
};

var game = new Phaser.Game(config);

function preload() {
  
}

function create() {
  
}

function update() {

}