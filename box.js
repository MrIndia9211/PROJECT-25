	    class Box {
    
        constructor(){
            this.bin1=Bodies.rectangle(800,680,150,18,{isStatic:true})
            this.bin2=Bodies.rectangle(850,625,18,70,{isStatic:true})
            this.bin3=Bodies.rectangle(685,625,18,70,{isStatic:true})
            this.image = loadImage("DUSTBIN.PNG");
            World.add(world,this.bin1)
            World.add(world,this.bin2)
            World.add(world,this.bin3)
            }
            
        display(){
            rectMode(CENTER);
           
            fill("green");
            imageMode(CENTER);     
            rect(this.bin1.position.x,this.bin1.position.y,150,20)
            rect(this.bin2.position.x,this.bin2.position.y,20,100)
            rect(this.bin3.position.x,this.bin3.position.y,20,100)
            image(this .image, 750,500,this.width,this.height);
           
            }
    }