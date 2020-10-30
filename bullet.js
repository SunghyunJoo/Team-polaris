function Bullet(x,y)
{ 
    this.x=x
    this.y=y
    this.r = 8;
    this.toDelete = false;
  
  this.draw=function()
  {
    fill(255,255,200);
   ellipse(this.x,this.y,this.r*2,this.r*2);
  }
  
 
  this.move=function()
  {
  
  this.y=this.y-25;
  
  }  
  
  this.evaporate = function() {
    this.toDelete = true;
  }
  
  this.hits=function(enemy) {
    
    var b = dist(this.x, this.y, enemy.pos.x, enemy.pos.y);
    if (b < this.r + 20) {
      return true;
    } else {
      return false;
    }
    
  }


}