class plinko{
   constructor(x,y){
       var options = {
        isStatic: false
       }
       this.body = Bodies.circle(x,y,this.r,options);
       World.add(world,this.body)
   }
  display(){
     
      this.color =color(random(0,255),random(0,255),random(0,255));

  }


}