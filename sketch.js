var p;
var b;
var bullets = [];
let particles = [];
let enemies;
function setup() {
  createCanvas(670, 570);
  frameRate(30);
    p = new Player(width/2-30,height*9/10,50,50);
    enemies = new enemyArray();
}

function draw() {
  background(50);
  

  let p1 = new Particle();
  particles.push(p1);
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].die()) {
      particles.splice(i, 2);//i부터 2개식 제거
    }
  }
  
  p.draw()
  p.update();
  for(var i=0; i<bullets.length; i++)
    {
      bullets[i].draw();
      bullets[i].move()
    }
    enemies.update();
    enemies.display();
}

  function keyPressed(){           
     if (keyCode === UP_ARROW) 
     {
  var bullet1 = new Bullet(p.x+25, height-60);
      bullets.push(bullet1);
    } 
    }

function mousePressed() {
    // enemies.destroyEnemy(0);
}
