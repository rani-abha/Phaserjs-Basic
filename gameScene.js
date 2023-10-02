class GameScene extends Phaser.Scene {
    constructor() {
        super('game');
    }

    create() {

        var gameStartedText = this.add.text(400, 300, 'Game Started', {
            font: '32px monospace',
            fill: '#ffffff'
        });
        gameStartedText.setOrigin(0.5);
    }
}

module.exports = GameScene;
