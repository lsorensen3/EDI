function setup() {//runs once
  createCanvas(windowWidth, windowWidth);
  fill("purple");
  strokeWeight(1);
}

function draw() {//runs in a loop


  //variable for number of squares in array
  var num = 10;
  //variable for side length of each square
  var sideLen = windowWidth/num;

  //create rows in y direction
  for(var y = 0; y < windowWidth; y = y + sideLen){

    //loop creates a row in x direction
    for(var x = 0; x < windowWidth; x = x+sideLen){

      quad(x,y,
      x+sideLen,y,
      x+sideLen,y + sideLen,
      x,y + sideLen);

    }

  }


  noLoop(); //runs function once
}
