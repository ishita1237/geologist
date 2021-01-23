class hammer extends base {
    constructor (x,y,width,height)
    {
      super(x,y,width,height)
      var options={
        'density':2,
        'friction':1.0,
        'restitution':0.5
      }
      fill ("yellow");
      this.body.pos.x=mouseX;
      this.body.pos.y=mouseY;
    }
    }