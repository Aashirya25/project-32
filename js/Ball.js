class Ball {
  constructor(x, y, w, h) {
    let options = {
      restitution: 0.2
    };
    this.image = loadImage("ball.png");
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;

    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
