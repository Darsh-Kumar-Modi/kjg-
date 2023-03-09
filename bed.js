status="";
function preload(){
    img= loadImage("bed.jpg");
}
function setup(){
    canvas= createCanvas(550 ,470);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="loading";
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
    stroke("blue");
    text("bed",125,275);
    rect(115,250,275,200);
    stroke("black");
    text("chair",400,295);
    rect(390,280,80,150);
    stroke("red");
    text("book shelf",400,45);
    rect(380,32,140,250);
}