
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background("black");
  
if (keyIsDown(UP_ARROW))
{
 background("red");
}

if (keyIsDown(DOWN_ARROW))
{
 background("yellow");
}

if (keyIsDown(LEFT_ARROW))
{
 background("green");
}

if (keyIsDown(RIGHT_ARROW))
{
 background("blue");
}

}




