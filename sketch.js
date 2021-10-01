let count = 0;
let angle = 0;
let cloudx = 50;
let cloudy = 50;
let direction = "right"; 
let x = 0;
let blue = 255;
let bubbles = [];


function preload(){
    song = loadSound("lofimusic.mp3");
  
  
}  ///////////////////////////// SETUP ///////////////////////////////////


function setup() {
  
  //Canvas Size
    createCanvas(400, 400);

  
  //MUSIC //////// comment out to pause and work
    song.play();

  
  //Control the angle of rotation by degrees iside the Push and Pop objects
    angleMode(DEGREES);
  
  
  //Allow Mic
    mic = new p5.AudioIn();
    mic.start();
  
  
  
  
}  /////////////////////////////// DRAW //////////////////////////////////


function draw() {
  
    if(count<360){
     count++
    }else if (count==360){count=0};
  
 //Wallpaper:Change color with mouse or put a # for a variable
    background(mouseX,mouseY,blue,10);
  
 //Bubbles
    push();
    background(color(mouseX, mouseY, 10, 5));
    bubbles.forEach(bubble=> {
      bubble.update();
      bubble.display();
    });
    pop();
   
  //CLOUDS:Change the amount of Clouds by adding or deleting a line to the bottom. 
     makeCloud(cloudx + x, cloudy);
     makeCloud(cloudx + x + 250, cloudy);
     makeCloud(cloudx + x+ 120, cloudy + -10);
  
  

  
  ///////////////////////////// MOUNTAINS ///////////////////////////////////
  
  
   //Mountains
    push();
    fill(10, 200, 30);
    rectMode(CENTER);
    //rotate();
    triangle(175, 400, 300, 400, 240,350);
    triangle(50, 400, 200, 400, 150, 300);
    pop();
   
  
    ///////////////////////////// CAR ///////////////////////////////////
  
  
  //Car Build
    push();
    fill(200);
    rectMode(CENTER);
    rect(200, 375, 50, 25);
    pop();
  
  //Left Tire
    push();
    beginShape();
    fill(random(255)/5);
    ellipse(185,390,15,15);
    endShape();
    pop();
  
   //Right Tire
    push();
    beginShape();
    fill(random(255)/5);
    ellipse(215,390,15,15);
    endShape();
    pop();
  
  //Right Tire Rim
    push();
    translate(215,390);
    rotate(count);
    fill(200);
    rectMode(CENTER);  //Spin fron center of rect
    rect(0,0,15,5);
    pop();
  
  //Left Tire Rim
    push();
    translate(185,390);
    rotate(count);
    fill(200);
    rectMode(CENTER);  //Spin fron center of rect
    rect(0,0,15,5);
    pop();
  
  
  ///////////////////////// LEFT SPEAKER /////////////////////////////////
  
  
  //Left Speaker Background
    push();
    strokeWeight(3);
    beginShape();
    fill(50,200,232);
    rect(width*.01,height*.2,125,250);
    endShape();
    pop();

  //Left Tweeter
    push();
    beginShape();
    fill(random(255)/2);
    ellipse(65,150, mic.getLevel()*500,60);
    endShape();
    pop();
  
  //Left Mid-Low Speaker
    push();
    beginShape();
    fill(random(255)/5);
    ellipse(66,250,100,100);
    endShape();
    pop();
  
  //Left spinning square
    push();
    translate(65,250);
    rotate(count);
    fill(200,200,10);
    rectMode(CENTER);  //Spin fron center of rect
    rect(0,0,50,30);
    pop();
  
  
  ////////////////////////// RIGHT SPEAKER ///////////////////////////////
  
  
  //Right Speaker Background
    push();
    strokeWeight(3);
    beginShape();
    fill(50,200,232);
    rect(width*.679,height*.2,125,250);
    endShape();
    pop();
  
  //Right Tweeter
    push();
    beginShape();
    fill(random(255)/2);
    ellipse(335,150, mic.getLevel()*500,60);
    endShape();
    pop();
  
  //Right Mid-Low Speaker
    push();
    beginShape();
    fill(random(255)/5);
    ellipse(336,250,100,100);
    endShape();
    pop();
  
   //Right spinning square
    push();
    translate(336,250);
    rotate(count);
    fill(200,200,10);
    rectMode(CENTER);  //Spin from center of rect
    rect(0,0,50,30);
    pop();
  
  
}  /////////////////////////////// CLOUD BUILD ///////////////////////////


   //Cloud Build
function makeCloud(cloudx, cloudy){
    push();
    fill(250);
    noStroke();
    ellipse(cloudx, cloudy, 70, 50);
    ellipse(cloudx + 10, cloudy + 10, 70, 50);
    ellipse(cloudx - 20, cloudy + 10, 70, 50);
    pop();
  
   //Cloud Movement
      if (direction=="right"){
          x=x+.1;
      }  
      if (direction=="left") {
          x=x-.1;
      }
      if (x >= 100) {
          direction = "left";
      }
      if (x <= -50) {
          direction = "right";
      }
  
  
  //////////////////// BUBBLE BUILD /////////////////////////////////////
  
  
} //Bubble button function

function mousePressed() {
     const position = createVector(mouseX, mouseY);
  
     const col = color(random(0,255), random(0,255), random(0,255));
  
     const bubble = new Bubble(position, col);
   
     bubbles.push(bubble);
  
} 


class Bubble {
     constructor(position, col) {
       this.position = position;
       this.col = col;
       this.velocity = createVector(random(-3,3), random(-2,2));
      
     }
  
     display(){
      push();
      fill(this.col);
      ellipse(this.position.x, this.position.y, mic.getLevel()*300, mic.getLevel()*300);
      pop();
     }

   update(){
      this.position.add(this.velocity);
   }

}  

