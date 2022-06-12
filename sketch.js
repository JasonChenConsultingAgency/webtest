let img, font1, font2;
function preload()
{
  img = loadImage ('hangzhou base.jpg')
  //font1 = loadFont ("Helvetica-40.vlw");
 // font2 = loadFont ("hel.ttc");
 // textFont(font1);
}
function setup() {
  createCanvas(500,1079);

}
function draw()
{
  image(img,0,0,500,1079);
  var h = hour(); //
  var m = minute(); //
  var s = second(); //
  var date = day();    // Values from 1 - 31
  var months = month();  // Values from 1 - 12
  var years = year();
  textFont('Poppins');
  fill(50);
  textSize(75); //
  textAlign(CENTER); //
  text(h + ":" + m + ":" + s, 250, 270);
  textFont('Noto Sans SC');
      textSize(57);
  text( months + "月"+date + "日", 250, 190);

}