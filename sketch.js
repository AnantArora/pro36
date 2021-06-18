var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[]


var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions (k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
 textSize(20)
 textFont("Broadway");
   fill("yellow");
   stroke("red");
   strokeWeight(5);
    
 text("500 ",20,550);
 text("450 ",100,550);
 text("400 ",180,550);
 text("350 ",260,550);
 text("300 ",330,550);
 text("300 ",410,550);
 text("350 ",490,550);
 text("400 ",570,550);
 text("450 ",650,550);
 text("500 ",730,550);
 text("T   O   T   A   L      S   C   O   R   E :     "+ score ,20,30)
 
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
     if(particles[j].body.position.x<0)
     { score=score+500
     }

     else if( 100 && 200)
     {
        score=score+300
    }

   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
