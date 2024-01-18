// Create a new Phaser game instance
const game = new Phaser.Game({
    // Specify the width and height of the game canvas
    width: 800,
    height: 600,
    // Specify the rendering context (either WebGL or Canvas)
    type: Phaser.AUTO,
    // Specify the parent element to which the game canvas will be added
    parent: 'game-container',
    // Specify the game scene(s)
    scene: {
        // The preload function is used to load game assets
        preload: function() {
            // Load your game assets here
        },
        // The create function is used to set up the initial state of the game
        create: function() {
            // Set up your game objects and logic here
        },
        // The update function is called every frame to update the game state
        update: function() {
            // Update your game logic here
        }
    }
});
