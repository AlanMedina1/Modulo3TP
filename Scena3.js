class Scena3 extends Phaser.Scene {
    constructor() {
      super("reinicioescena");
    }

    preload ()
    {
      this.load.image('logo2D', 'assets/logo2D.png');   
    }
    
    create() {
      this.add.image(400, 300, 'sky');
      this.add.image(400, 568, 'ground').setScale(2)
      this.add.image(500, 450, 'logo2D');


      var puntajefinal = this.add.text(0, 0, 'Score: ' + score,  { fontFamily: 'Trajan Pro', fontSize: 80, color: '#F59249' });
      //scene.add.zone(x, y, width, height)
        // X Y del centro del rectangulo invisible
        // width, height del rectangulo invisible
      Phaser.Display.Align.In.Center(puntajefinal, this.add.zone(400, 300, 800, 600));



      var restartButton = this.add.text(700, 500, 'Restart', { fontFamily: 'Trajan Pro', fontSize: 20, color: '#EBDA65' })
      .setInteractive()
      .on('pointerdown', () => this.reiniciar() );
    }

    reiniciar() {
      this.scene.start('juego');
    }

    
}