var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var turn = -1;
var gameState = "start";
var score = 0;
var particle;
var line1;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground1 = new Ground(0,400,5,height);
  ground = new Ground(width/2,height,width,1);
  ground2 = new Ground(800,400,5,height);

  for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, 780, 10, divisionHeight));
   }

    for (var j = 40; j <=width; j=j+50) 
    {
      plinkos.push(new Plinko(j,175));
      plinkos.push(new Plinko(j,375));
    }
    
    for(var i = 20; i<width; i=i+50){
      plinkos.push(new Plinko(i,75));
      plinkos.push(new Plinko(i,275));
    }

    mousePressed();
}
 


function draw() {
  background("black");
  textSize(20);
  strokeWeight(4);
  stroke(random(0, 255), random(0, 255), random(0, 255));
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  if(turn >= 0){
    text("Turns : " + turn, 700, 30);
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
     
   }

   if(gameState == "end" || turn>=5){
     textSize(40);
     text("GAME OVER! YOUR SCORE IS: " + score, 55, 500);
   }

   if(particle!==null && gameState =="start"){
    particle.display();
     if(particle.body.position.y>760){
       if(particle.body.position.x>0 && particle.body.position.x<80){
         score = score + 100;
         particle = null;
         if(turn>=5){
          gameState = "end";
         }
       }
       else if(particle.body.position.x>80 && particle.body.position.x<160){
        score = score + 200;
        particle = null;
        if(turn>=5){
         gameState = "end";
        }
      }
      else if(particle.body.position.x>160 && particle.body.position.x<240){
        score = score + 300;
        particle = null;
        if(turn>=5){
         gameState = "end";
        }
      }
      else if(particle.body.position.x>240 && particle.body.position.x<320){
        score = score + 400;
        particle = null;
        if(turn>=5){
         gameState = "end";
        }
      }
      else if(particle.body.position.x>320 && particle.body.position.x<400){
        score = score + 500;
        particle = null;
        if(turn>=5){
         gameState = "end";
        }
      }
      else if(particle.body.position.x>400 && particle.body.position.x<480){
        score = score + 600;
        particle = null;
        if(turn>=5){
         gameState = "end";
        }
      }
      else if(particle.body.position.x>480 && particle.body.position.x<560){
        score = score + 700;
        particle = null;
        if(turn>=5){
         gameState = "end";
        }
      }
      else if(particle.body.position.x>560 && particle.body.position.x<640){
        score = score + 800;
        particle = null;
        if(turn>=5){
         gameState = "end";
        }
      }
      else if(particle.body.position.x>640 && particle.body.position.x<720){
        score = score + 900;
        particle = null;
        if(turn>=5){
         gameState = "end";
        }
      }
     else if(particle.body.position.x>720 && particle.body.position.x<800){
        score = score + 1000;
        particle = null;
        if(turn>=5){
         gameState = "end";
        }
      }
     }
   }
   for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

}
function mousePressed(){
  if(turn<=4){
   turn++
   particle = new Particle(mouseX, 0, 10, 10);
  }
}