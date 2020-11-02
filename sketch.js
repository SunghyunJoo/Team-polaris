// skectch.js
// Polaris (Galaga)
// (GAM100)
// fall 2020
// sunwoo.won sunghyun.joo jaehyeon.nam 
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”

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
var intro;
var levels;

let scene = 'intro';

function preload() {

  pimg = loadImage('image/A.png');
  bimg = loadImage('image/missile1.png');
  ebimg = loadImage('image/missile2.png');

  ED = loadSound('sound/ED.mp3')
  ID = loadSound('sound/ID.mp3')
  IS = loadSound('sound/IS.mp3')
  ST = loadSound('sound/ST.mp3')

  jako = loadImage('image/character/B.png');
  goei = loadImage('image/character/C.png');
  boss1 = loadImage('image/character/D.png');
  boss2 = loadImage('image/character/E.png');
}

function setup() {
  createCanvas(670, 570);
  p = new Player(width / 2 - 30, height * 9 / 10, 50, 50);
  // enemies = new enemyArray();
  lifes = new Life();
  scores = new Score();
  intro = new Intro();
  levels = new Level();
  ST.setVolume(0.25)
}

function gameover() {
  background(0)
  push();
  textSize(30);
  textAlign(CENTER, CENTER);
  fill(255);
  text("Game Over", 335, 285);
  pop();
  ebullets.length = 1;
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

  if (scene == 'intro') {
    intro.draw();
    if (lifes.p == 0) {
      gameover();
      console.log("You die !");
    }

  } else if (scene == 'game') {

    if (lifes.p == 0) {
      scene = 'over';
    }

    p.draw();
    p.update();
    enemies.update();
    enemies.display();
    scores.draw();
    lifes.draw();
    levels.draw();
    //stage.update();
    if (enemies.deathCount==40) {
      levels.update();

      console.log("next level!");

      enemies = new enemyArray();
    }


    for (let i = 0; i < bullets.length; i++) {
      bullets[i].draw();
      bullets[i].move();
      if (enemies.collisionCheck(bullets[i].x, bullets[i].y)) {
        console.log("You destroyed the enemy ship !");
        ED.play()
        bullets[i].evaporate();
        scores.update();
      }
    }

    // for (let i = 0; i < enemies.arr.length; i++)
    //   if (random(999999999999999) < 0.000000000001) {
    //     ebullets.push(new Ebullet(enemies.arr[i].pos.x, enemies.arr[i].pos.y));
    //   }

    for (var g = 0; g < ebullets.length; g++) {
      ebullets[g].show();
      ebullets[g].update();


      if (ebullets[g].hits(p)) {
        console.log("You have been attacked by an enemy !");
        ID.setVolume(0.30)
        ID.play();
        ebullets[g].evaporate();
        lifes.update();
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
  } else if (scene == 'over') {
    gameover();
  }
}

function keyPressed() {
  if (key == 'Z' || key == 'z' || key == 'X' || key == 'x') {
    IS.play()
    var bullet1 = new Bullet(p.x + 25, height - 60);
    bullets.push(bullet1);
  }
  if (keyCode == ENTER && scene == 'intro') {
    scene = 'game';
    enemies = new enemyArray();

  } else if (keyCode == ENTER && scene == 'over') {
    scene = 'intro';
    lifes.p = 3;
  }
}