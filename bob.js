class chain{
    constructor(x,y,r){
        var opt={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r,opt)
        World.add(world,this.body)
        
    }
    display(){
       
        
        fill("pink")
        ellipse(this.x,this.y,this.r,this.r)
       
    }

}