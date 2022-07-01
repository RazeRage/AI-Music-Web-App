song = "";
RightWristX = 0;
LeftWristX = 0;
RightWristY = 0;
LeftWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload() {
    song = loadSound("music.mp3")
}
function draw() {
    Image(video, 0, 0, 500, 400);
    fill('#FF0000');
    stroke('#FF0000');



    if (scoreRightWrist > 0.2) {
        circle(rightWristX, rightWristY, 20);
        if (rightWristY > 0 && rightWristY <= 100) {
            document.getElementById("speed").innerHTML = "speed = 0.5x";
            song.rate(0.5)

        } else if (rightWristY > 100 && rightWristY <= 200) {
            document.getElementById("speed").innerHTML = "speed = 1.0x";
            song.rate(1)
        } else if (rightWristY > 200 && rightWristY <= 300) {
            document.getElementById("speed").innerHTML = "speed = 1.5x";
            song.rate(1.5)
        } else if (rightWristY > 300 && rightWristY <= 400) {
            document.getElementById("speed").innerHTML = "speed = 2.0x";
            song.rate(2)
        } else if (rightWristY > 400 && rightWristY <= 500) {
            document.getElementById("speed").innerHTML = "speed = 2.5x";
            song.rate(2.5)
        }
    }
    if (scoreLeftWrist > 0.2) {
        circle(leftWristX, leftWristY, 20);
        InNumberLeftWristX = Number(leftWristY);
        remove_decimals = floor(InNumberLeftWristX);
        leftWristY_divide_1000 = remove_decimals / 500;
        document.getElementById("vol").innerHTML = "Volume =" + volume;
        song.setVolume(volume);
    }
}
function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function setup() {
    video = createCapture(VIDEO)
    video.size(550, 500)
    video.hide()

    canvas = createCanvas(500, 400)
    canvas.center()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('poseNet is Initialized')
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        scoreLeftWrist = results[0].poseNet.keypoints[9].score
        scoreRightWrist = results[0].poseNet.keypoints[10].score

        LeftWristX = results[0].pose.leftWrist.x;
        LeftWristY = results[0].pose.leftWrist.y;
        console.log("LeftWristX =" + leftWristX + "LeftWristY =" + LeftWristY);

        RightWristX = results[0].pose.rightWrist.x;
        RightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX =" + RightWristX + "RightWristY =" + RightWristY);
    }
}