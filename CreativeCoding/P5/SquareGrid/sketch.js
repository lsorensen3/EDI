function setup() {//runs once
  createCanvas(720, 720);
  fill("purple");
  strokeWeight(8);
}

function draw() {//runs in a loop

  translate(60,60);

  background(220);

  quad(0,0,
      300,0,
      300,300,
      0,300);

  quad(300,0,
      600,0,
      600,300,
      300,300); //increase x 300px

  //increase y by 300px
  quad(0,300,
      300,300,
      300,600,
      0,600);

  quad(300,300,
      600,300,
      600,600,
      300,600); //increase x 300px

  noLoop(); //runs function once
}
