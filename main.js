
var canvas = newfabric.canvas ('myCanvas');
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(get_Image)
{
	fabric.Image.fromUrl(get_Image, function(img){
block_image_object=img;

block_image_object.scaleToWidht(block_image_Widht);
block_image_object.scaleToHeight(block_image_Height);
block_image_object.set({

top:block_y,
left:block_x
});
canvas.add(block_image_object);
});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
		newImage('rr1.png')
		console.log("r")
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		newImage('gr.png')
		console.log("g")
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		newImage('yr.png')
		console.log("y")
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		newImage('prback.png')
		console.log("p")
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		newImage('br.png')
		console.log("b")
	}
	
}

