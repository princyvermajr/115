function preload(){
    lipstick=loadImage("https://i.postimg.cc/pLb6R5dL/PNGPIX-COM-Lips-PNG-Transparent-Image-2-250x157-removebg-preview.png");
}
function setup(){
canvas=createCanvas(350,350);
camera=createCapture(VIDEO);
camera.hide();

poseNet=ml5.poseNet(camera,modelLoaded);
poseNet.on('pose',gotPoses);
}
function gotPoses(){
    
}
function draw(){
image(camera,0,0,350,350)
}
lipstickX= 0;
lipstickY= 0;

function modelLoaded(){
    console.log("poseNet loaded sucessfully");
}