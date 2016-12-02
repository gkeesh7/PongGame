var scl=10;

function setup() {
    createCanvas(400,400);
    mybat= new Bat();
    myball = new Ball();
    frameRate(10);
}

function draw() {
    background(51);
    mybat.show();
    myball.show();
    myball.aishow();
    myball.update();
    myball.collide(mybat.yloc,myball.aiY);
    fill(255)
    text("Your score: "+myball.myscore,50,10);
    text("AI's score: "+myball.aiscore,250,10);
}

function keyPressed(){
    if(keyCode==UP_ARROW){
        mybat.dir(-1);
    }
    if(keyCode==DOWN_ARROW){
        mybat.dir(1);
    }
}
