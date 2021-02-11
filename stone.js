class Stone
{
      constructor(x,y,width,height)
      {
            var options = 
            {
                isStatic:false,
                restitution:0.5,
                friction : 1,
                density : 1
            }
            this.x = x;
            this.y = y;
            this.width = width;
            this.height=height;
            this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
            this.image=loadImage("stone.png");
            World.add(world,this.body);
            
      }
      display()
      {
            this.body.position.x = mouseX;
            //ellipseMode(RADIUS);
            //circle(this.body.position.x,this.body.position.y,this.r/2);
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
      }
}