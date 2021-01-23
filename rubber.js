class rubber extends base {
    constructor (x,y,width,height)
    {
      super(x,y,width,height)
      ellipse(x,y,width,height);
      var options={
        'density':0.3,
        'friction':5,
        'restitution':1
      }
      fill ("red");
    }
    }