// let bumb = [];
// var bb=0
let pimg;
let bimg;
let ebimg;
let particles = [];
var ebullets = [];
var players;
var p
var b
var bullets = [];
let enemies;
let lifes;
let scores;
var reset;

function preload() {

  pimg = loadImage('image/A.png');
  bimg = loadImage('image/missile1.png');
  ebimg = loadImage('image/missile2.png');

  //   for(var i=1;i<8;i++)
  //   {bumb.push(loadImage('effect/effect'+i+'.png'))}

  //   
}

function setup() {
  createCanvas(670, 570);
  p = new Player(width / 2 - 30, height * 9 / 10, 50, 50);
  enemies = new enemyArray();
  lifes = new Life();
  scores = new Score();
}

function gameover() {
  // ebullets = [];
  // bullets = [];
  // enemies.arr.length = 0;
  // ebullets.length = 0;
  // bullets.length = 0;
  //lifes.p = 999999999;
}

function draw() {
  background(0);

  let p1 = new Particle();
  particles.push(p1);
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].die()) {
      particles.splice(i, 1);
    }
  }

  p.draw();
  p.update();
  enemies.update();
  enemies.display();
  scores.draw();
  lifes.draw();

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].draw();
    bullets[i].move();
    if (enemies.collisionCheck(bullets[i].x, bullets[i].y)) {
      console.log("You destroyed the enemy ship !");
      bullets[i].evaporate();
      scores.update();
    }
    // for (let v = 0; v < enemies.arr.length; v++) {
    //   if (bullets[i].hits(enemies.arr[v])) {
    //     enemies.arr.splice(v,1);
    //     console.log("You destroyed the enemy ship !");
    //     bullets[i].evaporate();
    //     scores.update();
    //   }
    // }


  }

  for (let i = 0; i < enemies.arr.length; i++)
    if (random(5) < 0.005) {
      ebullets.push(new Ebullet(enemies.arr[i].pos.x, enemies.arr[i].pos.y));
    }

  for (var g = 0; g < ebullets.length; g++) {
    ebullets[g].show();
    ebullets[g].update();


    if (ebullets[g].hits(p)) {
      console.log("You have been attacked by an enemy !");
      ebullets[g].evaporate();
      lifes.update();

      if (lifes.p == 0) {


        gameover();
        console.log("You die !");

      }

    }


  }

  for (var x1 = ebullets.length - 1; x1 >= 0; x1--) {
    if (ebullets[x1].toDelete) {
      ebullets.splice(x1, 1);
    }
  }

  for (var x = bullets.length - 1; x >= 0; x--) {
    if (bullets[x].toDelete) {
      bullets.splice(x, 1);
    }
  }

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    var bullet1 = new Bullet(p.x + 25, height - 60);
    bullets.push(bullet1);
  }

}