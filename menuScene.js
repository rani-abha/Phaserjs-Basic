class MenuScene extends Phaser.Scene {
    constructor() {
        super('menu');
    }

    create() {

        function addButtonWithPadding(scene, button, padding) {
            var buttonBorder = scene.add.graphics();
            buttonBorder.lineStyle(2, 0xffffff, 1);
            buttonBorder.strokeRect(
                button.x - button.width / 2 - padding,
                button.y - button.height / 2 - padding,
                button.width + padding * 2,
                button.height + padding * 2
            );
            return buttonBorder;
        }

        var startButton = this.add.text(400, 200, 'Start', {
            font: '32px monospace',
            fill: '#ffffff'
        });
        startButton.setOrigin(0.5);
        startButton.setInteractive();

        var startButtonBorder = addButtonWithPadding(this, startButton, 5);

        startButton.on('pointerdown', function () {
            // Transition to the game scene when "Start" is clicked
            this.scene.start('game'); // Transition to the 'game' scene
        }, this);

        var helpButton = this.add.text(400, 250, 'Help', {
            font: '32px monospace',
            fill: '#ffffff'
        });
        helpButton.setOrigin(0.5);
        var helpButtonBorder = addButtonWithPadding(this, helpButton, 5);

        var settingsButton = this.add.text(400, 300, 'Settings', {
            font: '32px monospace',
            fill: '#ffffff'
        });
        settingsButton.setOrigin(0.5);
        var settingsButtonBorder = addButtonWithPadding(this, settingsButton, 5);

        var quitButton = this.add.text(400, 350, 'Quit', {
            font: '32px monospace',
            fill: '#ffffff'
        });
        quitButton.setOrigin(0.5);
        var quitButtonBorder = addButtonWithPadding(this, quitButton, 5);
        quitButton.setInteractive();
        quitButton.on('pointerdown', function () {
            this.scene.stop('menu');
        }, this);
    }
}

module.exports =MenuScene;
