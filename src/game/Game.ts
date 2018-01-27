
export class Game {

   public phaserGame: Phaser.Game;

   constructor() {
      this.phaserGame = new Phaser.Game(
         800, 600,
         Phaser.AUTO,
         "game", {
            preload: () =>  this.preload(),
            create: () => this.create()
         });
   }

   private preload() : void {

   }

   private create(): void {

   }
}