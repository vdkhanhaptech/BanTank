var TankOnline = {};

window.onload = function(){
  TankOnline.game = new Phaser.Game(window.innerWidth,
                                    window.innerHeight,
                                    Phaser.AUTO,
                                    '',
                                    { preload: preload, create: create, update: update });
}

var tank, tank2,bullet,spaceKey;
var preload = function(){
  TankOnline.game.load.image('tankDown', './images/tank_player1_down_c0_t1_s1.png');
  TankOnline.game.load.image('tankUp', './images/tank_player1_up_c0_t1_s1.png');
  TankOnline.game.load.image('tankLeft', './images/tank_player1_left_c0_t1_s1.png');
  TankOnline.game.load.image('tankRight', './images/tank_player1_right_c0_t1_s1.png');
  TankOnline.game.load.image('bulletLeft','./images/bullet_left.png');
}

var create = function(){
  TankOnline.game.physics.startSystem(Phaser.Physics.ARCADE);
  TankOnline.keyboard = TankOnline.game.input.keyboard;

  tank = new Tank(window.innerWidth/2, window.innerHeight/2);
  tank2 = new Tank(window.innerWidth/2 - 200, window.innerHeight/2);
  
  spaceKey = TankOnline.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  spaceKey.onDown.add(function(){
    if(bullet) return;
    bullet = new Bullet(0, window.innerHeight/2);
  }, this);
}
var update = function(){
  var directionX, directionY;
  if(TankOnline.keyboard.isDown(Phaser.KeyCode.LEFT)) directionX = -1;
  else if (TankOnline.keyboard.isDown(Phaser.KeyCode.RIGHT)) directionX = 1;
  else directionX = 0;

  if(TankOnline.keyboard.isDown(Phaser.KeyCode.UP)) directionY = -1;
  else if (TankOnline.keyboard.isDown(Phaser.KeyCode.DOWN)) directionY = 1;
  else directionY = 0;


  if(bullet != undefined){
    
    bullet.fire();
    //console.log(bullet.sprite.x);
    if(bullet.sprite.x > window.innerWidth){
      bullet.sprite.destroy();
      bullet = undefined;
    }
    
  }
  tank.update(directionX, directionY);
  tank2.update(directionX, directionY);
}
