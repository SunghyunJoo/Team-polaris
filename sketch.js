var p;
var b;
var bullets = [];
let enemies;
function setup() {
  createCanvas(670, 570);
  frameRate(30);
    p = new Player(width/2-30,height*9/10,50,50);
    enemies = new enemyArray();
}

function draw() {
  background(50);
  
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
    bullets.push(new Bullet(p.x+25, height-60));
    enemies.createEnemy(0,0,100,100);
}
