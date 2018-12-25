let img;
let classifier;
function fready() {
  console.log("ready");
}
function ans(err, results) {
  if (err) {
    console.log("notloaded");
  } else {
    console.log(results[0].className);
  }
}
classifier = ml5.imageClassifier("MobileNet", fready);

function setup() {
  createCanvas(600, 400);
  img = createImg("images/download.jpg", imageReady);
  img.hide();
}
function imageReady() {
  image(img, 0, 0, 600, 400);
  classifier.predict(img, ans);
}
