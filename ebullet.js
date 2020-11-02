
function Ebullet(x,y){
this.x = x;
this.y = y;
this.r = 8;
this.speed = 4;

this.show = function (){
fill(255,0,255);
image(ebimg,this.x,this.y,this.r*2,this.r*2) 
}
this.update = function (){
this.y += this.speed;
}
  this.evaporate = function() {
    this.toDelete = true;
  }
  this.hits  = function(player){
  var d=dist(this.x,this.y,player.x,player.y);
    if (d < this.r + player.height-20) {
      return true;
    } else {
      return false;
    }
  }
}