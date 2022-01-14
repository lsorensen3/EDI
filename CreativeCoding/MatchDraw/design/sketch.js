/* export SVG
DDF 2019
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/

var pageWidth = 11; //width of paper in inches
var pageHeight = 8.5; //height of paper in inches

function setup() {
  createCanvas(pageWidth * 72, pageHeight * 72, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
  //background(230);
}

function draw() {
  translate(((pageWidth*72)-600)/2,((pageHeight*72)-600)/2);
  for(var y = 0; y < 600; y+=random(50,100)){
    for(var x = 0; x < 600; x+=random(50,100)){
      ellipse(x,y,random(50,100), random(50,100));

    }
  }
  //uncomment below to be able to download (svg) the image created
  save("mySVG.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once
}
