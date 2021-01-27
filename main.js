var canvas = new fabric.Canvas("myCanvas");
x = 10;
y = 10;
block_width = 30;
block_height = 30;
var player = "";
var block = "";
function update(){
fabric.Image.fromURL("player.png",function(Img){
 player = Img;
 player.scaleToWidth(150);
 player.scaleToHeight(140);
 player.set({
     top:y,
     left:x
 });
 canvas.add(player);
});
}
function blck(get_Img){
    fabric.Image.fromURL(get_Img,function(Img){
     block = Img;
     block.scaleToWidth(block_width);
     block.scaleToHeight(block_height);
     block.set({
         top:y,
         left:x
     });
     canvas.add(block);
    });
    }
    window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if(e.shiftKey == true && keyPressed == '80'){
            console.log("Shift and P are pressed");
block_width = block_width + 10;
block_height = block_height + 10;
document.getElementById("current_width").innerHTML = block_width;
document.getElementById("current_height").innerHTML = block_height;
        }
        if(e.shiftKey == true && keyPressed == '77'){
            console.log("Shift and M are pressed");
block_width = block_width - 10;
block_height = block_height - 10;
document.getElementById("current_width").innerHTML = block_width;
document.getElementById("current_height").innerHTML = block_height;
        }
        if(keyPressed == '38')
{
up();
console.log("up");
}
if(keyPressed == '40')
{
down();
console.log("down");
}
if(keyPressed == '37')
{
left();
console.log("left");
}
if(keyPressed == '39')
{
right();
console.log("right");
}
if(keyPressed == '87')
{
blck('wall.jpg');
console.log("w");
}
if(keyPressed == '71')
{
blck('ground.png');
console.log("g");
}
if(keyPressed == '76')
{
blck('light_green.png');
console.log("l");
}
if(keyPressed == '84')
{
blck('trunk.jpg');
console.log("t");
}
if(keyPressed == '82')
{
blck('roof.jpg');
console.log("r");
}
if(keyPressed == '89')
{
blck('yellow_wall.png');
console.log("y");
}
if(keyPressed == '68')
{
blck('dark_green.png');
console.log("d");
}
if(keyPressed == '85')
{
blck('unique.png');
console.log("u");
}
if(keyPressed == '67')
{
blck('cloud.jpg');
console.log("c");
}
    }
function up()
{
if(y >=0)
{
y = y - block_height;
console.log("block image height = " + block_height);
console.log("When Up arrow key is pressed, X = " + x + " , Y = "+y); 
canvas.remove(player);
update();
}
}
function left()
{
if(x >=0)
{
x = x - block_width;
console.log("block image width = " + block_width);
console.log("When Up arrow key is pressed, X = " + x + " , Y = "+y); 
canvas.remove(player);
update();
}
}
function right()
{
if(x <=850)
{
x = x + block_width;
console.log("block image width = " + block_width);
console.log("When Up arrow key is pressed, X = " + x + " , Y = "+y); 
canvas.remove(player);
update();
}
}
function down()
{
if(y <=500)
{
y = y + block_height;
console.log("block image height = " + block_height);
console.log("When Up arrow key is pressed, X = " + x + " , Y = "+y); 
canvas.remove(player);
update();
}
}