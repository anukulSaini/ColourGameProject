var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickCoolor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDiaplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");


easybtn.addEventListener("click",function(){
hardbtn.classList.remove("selected");
easybtn.classList.add("selected");
numSquares = 3;
colors = generateRandomColors(numSquares);
pickedColor = pickCoolor();
colorDisplay.textContent = pickedColor;
for(var i=0; i<squares.length; i++)
{
	if(colors[i]){
	squares[i].style.backgroundColor=colors[i];}
    else{
	squares[i].style.display= "none" ;}
}
});


hardbtn.addEventListener("click",function(){
hardbtn.classList.add("selected");
easybtn.classList.remove("selected");
numSquares=6;
colors = generateRandomColors(numSquares);
pickedColor = pickCoolor();
colorDisplay.textContent = pickedColor;
for(var i=0; i<squares.length; i++)
{
	
	squares[i].style.backgroundColor=colors[i];
   
	squares[i].style.display= "block" ;
}
});


reset.addEventListener("click",function(){
colors =generateRandomColors(numSquares);
 pickedColor = pickCoolor();
 messageDiaplay.textContent = "";
 colorDisplay.textContent = pickedColor;
 for (var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor=colors[i];
}
h1.style.backgroundColor = "steelblue";
this.textContent = "New Colors";
});

colorDisplay.textContent = pickedColor;

for (var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click",function(){
      var clickedColor = this.style.backgroundColor;
       if(clickedColor === pickedColor)
       {
            messageDiaplay.textContent = "Correct"
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
            reset.textContent ="Play Again";

       }
       else
       {
            this.style.backgroundColor = "#232323";
            messageDiaplay.textContent = "Try Again"

       }  
	});
}

function changeColors(color){
	 for(var i=0; i<squares.length; i++){
	 	squares[i].style.backgroundColor =color;
	 }
}

function pickCoolor(){
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}

function generateRandomColors(num){
	var arr =[]
	for (var i=0;i<num;i++){
		arr.push(randomColor())
	}
return arr;
}




function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var rr = Math.floor(Math.random() * 256);
	var rrr = Math.floor(Math.random() * 256);

	return "rgb(" + r +", " + rr +", " + rrr +")";
}