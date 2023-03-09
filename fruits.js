status="";
function preload(){
    img= loadImage("fruits.jpg");
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
    text("basket containg red and black berries",265,15);
    rect(250,0,295,300);
    
}