var p
var b
var bullets = [];
let enemyArray=[];
function setup() {
  createCanvas(670, 570);
 // bullet = new Bullet(width/2,height/2);
  frameRate(30);
  setInterval(function(){for(let i=0;i<8;i++)
        setTimeout(function(){enemyArray.push(new enemy(0,0,(enemyArray.length%10)*width/12+width/12,(enemyArray.length-enemyArray.length%10)/10*height/10+height/10))},250*i);
},4000);
p = new Player(width/2-30,height*9/10,50,50);
//p = new Player()
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
  for(let i=0;i<enemyArray.length;i++) {
        enemyArray[i].update();
        enemyArray[i].display();
    }
}

  function keyPressed(){           
     if (keyCode === UP_ARROW) 
     {
  var bullet1 = new Bullet(p.x+25, height-60);
      bullets.push(bullet1);
    } 
    }
