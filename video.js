let video;
let classifier;
let title = " ";
function fready() {
  console.log("ready");
  classifier.predict(ans);
}
function ans(err, results) {
  if (err) {
    console.log("notloaded");
  } else {
    console.log(results);
    title = results[0].className;
    classifier.predict(ans);
  }
}

function setup() {
  createCanvas(600, 400);
  background(0);
  video = createCapture(VIDEO);

  video.hide();
  classifier = ml5.imageClassifier("MobileNet", video, fready);
}
function draw() {
  background(0);
  image(video, 0, 0, 600, 360);
  fill(255);
  textSize(30);
  text(title, 10, 400);
}
