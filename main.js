noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 550);
    canvas.position(560, 150);
    // Initalizing The Post Net 
    poseNet=ml5.poseNet(video, modelLoaded);
    // Executing the Pose Net
    poseNet.on('Pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);
        leftWristX=results[0].leftWrist.x;
        rightWristX=results[0].rightWrist.x;
        difference=leftWristX-rightWristX;
        console.log("LefrWristX="+leftWristX+"RightWristX="+rightWristX+"Difference="+difference);
    }
}

function modelLoaded()
{
    console.log('Pose Net Is Initialized');
}

function draw()
{
    background("#d6ff85");
    document.getElementById("text_font").innerHTML="Font Of a text will be="+difference+"px";
    
    fill("#18e7f2");
    stroke("#dcfcf7");
    text("Samith Thomas", 250 , 250);
}







