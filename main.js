song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
song1=loadSound("music.mp3");
song2=loadSound("music2.mp3");

}
function setup(){
canvas=createCanvas(500,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotPoses);

}
function draw(){
image(video,0,0,500,400);


}
function modelloaded(){
    console.log("poseNet is initialized");


}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("     leftWristX=   " + leftWristX + "      leftWristY   " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("     rightWristX=   " + rightWristX + "      rightWristY   " + rightWristY);
    }
}
