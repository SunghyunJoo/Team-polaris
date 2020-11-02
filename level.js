function Level(){
  this.p = 1;
  this.draw=function(){
    
  
  text("level:"+round(this.p/60),20,60);   
  }
  
  this.update=function(){
    this.p +=1;
  }
  
   }