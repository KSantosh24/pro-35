//Create variables here
var dog,dog2,dogimg,happydog;
var canvas;
function preload()
{
  //load images here
  dog = loadImage("dogimg.png",dogimg);
  dog2 = loadImage("dogimg1.png",happydog);



}

function setup() {
  canvas = createCanvas(500,500);
  database = firebase.database();
  dog = createsprite(400,400,50,50);
  dog.addImage(dogimg);
  var foodstork  = database.ref('food');
  foodstork.no("value",readstrok);
}


function draw() {  
  background(46, 139, 87);
  drawSprites();
  //add styles here
  if (keyWantDown(UP_ARROW)){
     writeStrok(foodS);
     dog.addImage(happydog);
  }
}

function readstrok(data){
foodS=data.val();
}

function writeStrok(x){
  if (x<=0) {
    x=0
  } else {
    x=x-1
  }
database.ref('/').updata({
  food:x
})
}