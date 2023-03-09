status="";
load="<img src='page-load.jpg' height='55px'>"
function preload(){
    img= loadImage("game.jpg");
}
function setup(){
    canvas= createCanvas(550 ,470);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML=load;
}
function modelLoaded(){
    console.log("model loaded");
    status=true;
    objectDetector.detect(img,gotResult);

}
function gotResult(error,results){
    
    if (error){
        console.log(error);
    }
    console.log(results);
}
function draw(){
    image(img,0,0,548,468);
    fill("red");
    noFill();
    stroke("yellow");
    text("desktop",265,145);
    rect(220,130,175,160);
    
}