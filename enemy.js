// enemy.js
// Polaris (Galaga)
// (GAM100)
// fall 2020
// sunwoo.won
//“All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
class enemy {
  constructor(x, y, tx, ty, cx, cy, entry, exit, rotate, invert, isDead, type) {
    this.isDead = isDead;

    this.pos = createVector(x, y);
    this.targetPos = createVector(tx, ty);
    this.xOffSet = 0;
    this.finalPos = createVector(x + this.xOffSet, y);
    this.direction = createVector(this.finalPos.x - this.pos.x, this.finalPos.y - this.pos.y);
    this.previousPos = createVector(x, y);
    this.angle = 0;
    this.angleVec = createVector(this.pos.x - this.previousPos.x, this.pos.y - this.previousPos.y);

    this.blink = false;

    this.type = type;
    this.state = 'spawning' //spawning hovering attacking
    this.spawnState = this.spawn_curve;
    this.attackState = this.attackStart;

    this.circle = {
      x: cx,
      y: cy,
      radius: 120,
      entry: entry,
      exit: exit,
      current_angle: entry,
      rotation: rotate,
    };

    this.begin = createVector(x, y);
    let endx = this.circle.x + cos(this.circle.entry) * this.circle.radius / 2;
    let endy = this.circle.y + sin(this.circle.entry) * this.circle.radius / 2;
    this.end = createVector(endx, endy)
    this.dis = createVector(this.end.x - this.begin.x, this.end.y - this.begin.y);
    this.exponent = 4;
    this.step = 0.01;
    this.pct = 0.0;
    this.invert = invert;
  }
  update() {
    if (!this.isDead) {
      switch (this.state) {
        case 'spawning':
          this.finalPos.set(this.pos.x, this.pos.y);
          this.spawnState();
          break;
        case 'hovering':
          this.hoveringState();
          this.finalPos.set(this.pos.x + this.xOffSet, this.pos.y);
          break;
        case 'attacking':
          this.attackState();
          break;
      }
    }
  }
  display() {
    if (!this.isDead) {
        push();
        imageMode(CENTER);
        translate(this.finalPos.x, this.finalPos.y);
      if (this.blink)
        switch(this.type) {
            case'jako':
            rotate(this.angle+HALF_PI);
            image(jako,0,0, 30,30);
            break;
            case'goei' :
            rotate(this.angle+HALF_PI);
            image(goei,0,0, 30,30);
            break;
            case'boss' :
            rotate(this.angle+HALF_PI);
            image(boss1,0,0, 30,30);
            break;
        }
      else
        switch(this.type) { 
            case'jako':
            rotate(this.angle+HALF_PI);
            image(jako,0,0, 30,30);
            break;
            case'goei' :
            rotate(this.angle+HALF_PI);
            image(goei,0,0, 30,30);
            break;
            case'boss' :
            rotate(this.angle+HALF_PI);
            image(boss2,0,0, 30,30);
            break;
        }
      // strokeWeight(1);
      // circle(this.finalPos.x, this.finalPos.y, 20);
      // let dx = this.finalPos.x + cos(this.angle) * 20;
      // let dy = this.finalPos.y + sin(this.angle) * 20;
      // stroke(255);
      // line(this.finalPos.x, this.finalPos.y, dx, dy);
      pop();
    }
  }

  changePos(x, y) {
    this.previousPos.set(this.pos.x, this.pos.y);
    this.pos.set(x, y);
    this.calculateAngle();
  }
  calculateAngle() {
    let idleAngle = 270;
    let hoverRotation = 3;
    if (this.previousPos.x == this.pos.x && this.previousPos.y == this.pos.y) {
      this.angle = (this.angle + TWO_PI) % TWO_PI;
      if (this.angle <= radians(idleAngle - 2) || this.angle >= radians(idleAngle + 2)) {
        if (this.angle < radians(idleAngle) || this.angle > radians(idleAngle + degrees(PI)))
          this.angle += radians(hoverRotation);
        else
          this.angle -= radians(hoverRotation);
      }
    } else {
      this.angleVec.set(this.pos.x - this.previousPos.x, this.pos.y - this.previousPos.y);
      this.angle = this.angleVec.heading();
    }
  }

  shoot() {
    ebullets.push(new Ebullet(this.pos.x, this.pos.y));
  }

  spawn_curve() {
    this.pct += this.step;
    if (this.pct < 1.0) {
      if (this.invert) {
        let x = this.begin.x + this.pct * this.dis.x;
        let y = this.begin.y + pow(this.pct, this.exponent) * this.dis.y;
        this.changePos(x, y);
      } else {
        let x = this.begin.x + pow(this.pct, this.exponent) * this.dis.x;
        let y = this.begin.y + this.pct * this.dis.y;
        this.changePos(x, y);
      }
    } else
      this.spawnState = this.spawn_circle;
  }
  spawn_circle() {
    let x = this.circle.x + cos(this.circle.current_angle) * this.circle.radius / 2;
    let y = this.circle.y + sin(this.circle.current_angle) * this.circle.radius / 2;
    this.changePos(x, y);
    if (this.circle.rotation > 0) {
      if (this.circle.current_angle <= this.circle.exit)
        this.circle.current_angle += this.circle.rotation;
      else
        this.spawnState = this.spawn_form;
    } else {
      if (this.circle.current_angle >= this.circle.exit)
        this.circle.current_angle += this.circle.rotation;
      else
        this.spawnState = this.spawn_form;
    }
  }
  spawn_form() {
    this.direction = createVector(this.targetPos.x + this.xOffSet - this.pos.x, this.targetPos.y - this.pos.y);
    let length = 10;
    if (this.direction.mag() <= length) {
      this.changePos(this.targetPos.x, this.targetPos.y);
      this.state = 'hovering';
    } else {
      this.direction.setMag(length);
      let x = this.pos.x + this.direction.x;
      let y = this.pos.y + this.direction.y;
      this.changePos(x, y);
    }
  }
  hoveringState() {
    this.changePos(this.targetPos.x, this.targetPos.y);
    this.finalPos.set(this.targetPos.x + this.xOffSet, this.targetPos.y);
  }
  attackStart() {
    let downAngle = 90;
    let rotationSpeed = 3;
    let attackSpeed = 3;
    this.angle = (this.angle + TWO_PI) % TWO_PI;
    if (this.angle <= radians(downAngle - 2) || this.angle >= radians(downAngle + 2)) {
      if (this.angle < radians(downAngle) || this.angle > radians(downAngle + degrees(PI)))
        this.angle += radians(rotationSpeed);
      else
        this.angle -= radians(rotationSpeed);
    }
    let x = cos(this.angle) * attackSpeed;
    let y = sin(this.angle) * attackSpeed;
    this.pos.add(x, y);
    if (this.pos.y > height) {
      this.attackState = this.attackEnd;
      this.pos.y = this.pos.y % height;
    }
    this.finalPos.set(this.pos.x, this.pos.y);
  }
  attackEnd() {
    this.direction = createVector(this.targetPos.x + this.xOffSet - this.pos.x, this.targetPos.y - this.pos.y);
    let heading = this.direction.heading();
    let rotationSpeed = 3;
    let length = 10;
    let attackSpeed = 5;

    if (this.direction.mag() <= length) {
      this.pos.set(this.targetPos.x + this.xOffSet, this.targetPos.y);
      let px = this.pos.x - cos(this.angle);
      let py = this.pos.y - sin(this.angle);
      this.previousPos.set(px,py);
      this.state = 'hovering';
      this.attackState = this.attackStart;
    } else {

      if (this.angle <= radians(degrees(heading) - 2) || this.angle >= radians(degrees(heading) + 2)) {
        if (this.angle < heading || this.angle > heading + PI)
          this.angle += radians(rotationSpeed);
        else
          this.angle -= radians(rotationSpeed);
      }

      let x = cos(this.angle) * attackSpeed;
      let y = sin(this.angle) * attackSpeed;
      this.pos.add(x, y);
      this.finalPos.set(this.pos.x, this.pos.y);
    }
  }
}