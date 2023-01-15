function preload()
{

}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on("pose", gotPoses)
}
function ModelLoaded()
{
    console.log("Model Loaded");
}
function gotPoses(results)
{
    if(results > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 10;
        noseY = results[0].pose.nose.y - 10;
        console.log('nosex = '+noseX);
        console.log('nosey = '+noseY);
    }
}
function draw()
{

}
function take_snapshot()
{
    save("filter.tiff");
}