class Mango 
{
        constructor(x,y,width,height)
    {
        var options = {
            isStatic : true,
            restitution : 0.8,
            friction : 0.1,
            density : 1,
        }
        this.body = Bodies.rectangle(x, y,width,height, options);
        this.x = x;
        this.y = y;
        this.width=width;
        this.height=height;
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }

    display()
    {
        
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
       
        
    }
}