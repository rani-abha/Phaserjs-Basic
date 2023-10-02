class LoadingScene extends Phaser.Scene {
    constructor() {
        super('loading');
    }

    preload() {
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(240, 270, 320, 50);

        var width = this.cameras.main.width;
        var height = this.cameras.main.height;

        var loadingText = this.add.text(width / 2, height / 2 - 50, 'Loading...', {
            font: '20px monospace',
            fill: '#ffffff'
        });
        loadingText.setOrigin(0.5, 0.5);

        var percentText = this.add.text(width / 2, height / 2 - 5, '0%', {
            font: '18px monospace',
            fill: '#ffffff'
        });
        percentText.setOrigin(0.5, 0.5);

        var assetText = this.add.text(width / 2, height / 2 + 50, '', {
            font: '18px monospace',
            fill: '#ffffff'
        });
        assetText.setOrigin(0.5, 0.5);

        var imageUrls = ['abc.png'];
        for (var i = 0; i < 5000; i++) {
            imageUrls.push('abc.png');
        }

        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(250, 280, 300 * value, 30);
        });

        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();

            // Transition to the menu scene
            this.scene.start('menu');
        }, this);

        for (var j = 0; j < imageUrls.length; j++) {
            this.load.image('image' + j, imageUrls[j]);
        }
    }

    create() {
    }
}

module.exports = LoadingScene;
