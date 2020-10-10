var p
var b
var bullets = [];

function setup() {
  createCanvas(600, 400);
 // bullet = new Bullet(width/2,height/2);
  
p = new Player(width/2-30,350,50,550)
//p = new Player()
}

function draw() {
  background(65);
  
  p.draw()
  p.update();
  for(var i=0; i<bullets.length; i++)
    {
      bullets[i].draw();
      bullets[i].move()
    }
  
}


  function keyPressed(){           
     if (keyCode === UP_ARROW) 
     {
  var bullet1 = new Bullet(p.x+25, height-60);
      bullets.push(bullet1);
    } 
   
  
  
    }
