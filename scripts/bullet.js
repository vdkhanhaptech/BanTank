class Bullet{
      constructor(x, y){
        this.sprite = TankOnline.game.add.sprite(x, y, 'bulletLeft');
        TankOnline.game.physics.arcade.enable(this.sprite);
      }
      
      fire(){
          var speed = 10;
          this.sprite.body.velocity.x += speed;
          
      }
}