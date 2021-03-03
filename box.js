class Box{
    constructor(x, y, width, height){
     var options = {
        isStatic:true
     }

     this.x = x;
     this.y = y;
     this.width = width;
     this.height = height;
     this.dustbin = loadImage("dustbin.png");
     this.body = Bodies.rectangle(x, y, width, height, options);
     World.add(world, this.body);
    }

    display(){

    var rectpos = this.body.position;		

	push()
	translate(rectpos.x, rectpos.y);
	rectMode(CENTER)
	fill(255,0,0)
    rect(0, 0, this.width, this.height);
    image(this.dustbin, -75, -140, 150, 150)
	pop()



    }


}