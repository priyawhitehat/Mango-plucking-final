class Boy 
{
    constructor(x,y,width,height)
    {
        this.body = Bodies.rectangle(x, y, width, height,{isStatic : true});
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("boy.png");
        World.add(world,this.body);
    }

    display()
    {
        image(this.image,this.x,this.y,this.width,this.height);
    }

}