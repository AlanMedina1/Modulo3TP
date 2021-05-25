class Scena1 extends Phaser.Scene {
   constructor () {
       super('inicio');
    }

     preload () 
     {
        this.load.image('intro', 'assets/intro.png');
        this.load.image('introjugar', 'assets/Introjugar.png');
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('groundmain', 'assets/platformpiso.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.audio('startilin', 'assets/Sounds/startilin.wav')
        this.load.audio('introsong', 'assets/Sounds/introsong.wav')
        this.load.audio('ded', 'assets/Sounds/ded.wav')
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
     }

   create() {
        //  Our player animations, turning, walking left and walking right.
     this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
   });

   this.anims.create({
      key: 'turn',
      frames: [ { key: 'dude', frame: 4 } ],
      frameRate: 20
   });

   this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
   });

   
   // Introduction of our game

   this.anims.create({
    key: 'introjugar',
    frames: this.anims.generateFrameNumbers('introjugar', { start: 0, end: 1 }),
    frameRate: 20,
  })

  this.add.image(400,300, 'intro').setScale(4)

  var introjugbutton = this.add.image(400,300, 'introjugar').setScale(1.50)
  introjugbutton.setInteractive()
  introjugbutton.on('pointerdown',()=> this.scene.start('juego') && this.sound.play('introsong'));

      
   }
    
}