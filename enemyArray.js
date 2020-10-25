class enemyArray {
  constructor() {
    this.arr = [];
    // this.createFormation(0);
    // this.createFormation(5000);
    // this.createFormation(10000);
    this.createFormation(5000);
  }
  update() {
    // this.arr.forEach(function(arr) {
    //     arr.update();
    // });


    for (let i = 0; i < this.arr.length; i++)
      this.arr[i].update();
  }
  display() {
    // this.arr.forEach(function(arr) {
    //     arr.update();
    // });
    for (let i = 0; i < this.arr.length; i++)
      this.arr[i].display();
    // print(millis());
  }
  createEnemy(x, y, tx, ty) {
    this.arr.push(new enemy(x, y, tx, ty));
  }
  createFormation(delay) {
    print(delay);
    setTimeout(function(){print("boo")},delay);
    // setTimeout(function(){this.createEnemy(0, 0, 100, 100)}, delay + 1000);
    setTimeout(this.createEnemy(0, 0, 100, 200), delay + 2000);
    setTimeout(this.createEnemy(0, 0, 100, 300), delay + 3000);
    setTimeout(this.createEnemy(0, 0, 100, 400), delay + 4000);
  }
  collisionCheck(x,y) {

    for(let i=0;i<this.arr.length;i++)
      if(arr[i].pos.x-5<x&&arr[i].pos.x+5>x)
        if(arr[i].pos.y-5<y&&arr[i].pos.y+5>y) {
            
        }
  }
}