class Slingshot 
{
        constructor(bodya,pointb)
        {
            var options = 
            {
                     bodyA:bodya,
                     pointB:pointb,
                     length:10,
                     stiffness:0.04
            }
            this.sling = Matter.Constraint.create(options);
            World.add(world,this.sling);
        }
        fly()
        {
               // Matter.Body.applyForce(this.sling.bodyA,this.sling.bodyA.position,{x:100,y:100});
                this.sling.bodyA = null;
               
        }
        attach(body)
        {
                this.sling.bodyA = body;
        }
        display()
        {
                if(this.sling.bodyA != null)
                {
                strokeWeight(5);
                line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y);
                }
        }
}