import { Scene } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;
    ship: Phaser.Physics.Arcade.Image;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;


    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00000);

        // this.background = this.add.image(512, 384, 'background');
        // this.background.setAlpha(0.5);

        this.ship = this.physics.add.image(200, 250, 'ship');
        this.cursors = this.input.keyboard?.createCursorKeys();

        this.msg_text = this.add.text(512, 384, 'SpaceMech!', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#8888ff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });
        this.msg_text.setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });
    }

    update ()
    {
        if (this.cursors?.left.isDown)
        {
            this.ship.setVelocityX(-160);
        }
        else if (this.cursors?.right.isDown)
        {
            this.ship.setVelocityX(160);
        }
        else if (this.cursors?.up.isDown)
        {
            this.ship.setVelocityY(-160);
        }
        else if (this.cursors?.down.isDown)
        {
            this.ship.setVelocityY(160);
        }
    }



}
