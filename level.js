// level.js
// Polaris (Galaga)
// (GAM100)
// fall 2020
// jaehyeon.nam 
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
function Level(){
  this.p = 1;
  this.draw=function(){
    
  
  text("level:"+ this.p,20,60);   
  }
  
  this.update=function(){
    this.p +=1;
  }
  
   }