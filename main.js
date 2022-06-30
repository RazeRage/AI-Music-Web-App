song = "";
RightWristX = 0;
LeftWristX = 0;
RightWristY = 0;
LeftWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload() {
    song = loadSound("XXXTENTACION-MOONLIGHT.mp3")
    song = loadSound("Justin_Bieber_-_Love_Yourself.mp3")
}
function draw() {
    Image(video, 0, 0, 500, 400);
    fill('#FF0000');
    stroke('#FF0000');
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
}