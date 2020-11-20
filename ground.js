class Ground{
    constructor(){
        this.body=Bodies.rectangle(400,680,1100,40,{isStatic:true});
        this.image = loadImage("g.jpg");
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("yellow");
        rect(this.body.position.x,this.body.position.y,1200,15)
        imageMode(CENTER);
        image(this.image,400,680,1200,50);
    }
}