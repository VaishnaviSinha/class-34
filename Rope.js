class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.200,
            length:250
        }
        this.pointB=pointB
        this.rope = Constraint.create(options)
        World.add(world,this.rope)
    
    }
    fly(){
        this.rope.bodyA=null
    }
    display(){
        if(this.rope.bodyA){
            strokeWeight(4)
            var pointA=this.rope.bodyA.position
            var pointB=this.pointB
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
        
    
    }
    
}