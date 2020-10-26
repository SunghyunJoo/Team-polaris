let particles = [];
var ebullets = [];
var player;
var p
var b
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
  background(0);
  
  
  let p1 = new Particle();
  particles.push(p1);
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].die()) {
      particles.splice(i, 2);//i부터 2개식 제거
    }
  }
  
  p.draw();
  p.update();
  for(let i=0;i<enemyArray.length;i++) {
        enemyArray[i].update();
        enemyArray[i].display();
    }
  
 for(var i=0; i<bullets.length; i++)
     {
       bullets[i].draw();
       bullets[i].move();
  
     }
  
  for( var  i= 0;i < enemyArray.length;i++){
    if(random(1)<0.005){
    
  
    ebullets.push(new Ebullet(enemyArray[i].pos.x,enemyArray[i].pos.y));
    }
    }
  
  for( var g  = 0; g < ebullets.length; g++){
    ebullets[g].show();
    ebullets[g].update();
    
//     if(ebullets[g].hits(player)){
//       console.log("aaaaaa");
      
//       }
    }
}

//3




  function keyPressed(){           
     if (keyCode === UP_ARROW) 
     {
         
  var bullet1 = new Bullet(p.x+25, height-60);
      bullets.push(bullet1);
    } 
<<<<<<< HEAD
    
    }
=======
    }

function mousePressed() {
    // enemies.destroyEnemy(0);
}
>>>>>>> d6181f98098bf3937725ed352cee1201ee0303cf
