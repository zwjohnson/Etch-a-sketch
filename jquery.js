var squaresPerRow = 35;

$(document).ready(function(){	

	createGrid(squaresPerRow,"black");

	$(".button").click(function() {
		squaresPerRow = prompt('Please enter a number between 10 and 100');
		$(".square").remove();
		createGrid(squaresPerRow,"black");
	});
});

function createGrid(numSquares, option) {
	$grid = $('.grid')
	for(var i = 0; i < numSquares*numSquares; i++) 
	{
		$grid.append("<div class='square'></div>");
	}
	var width = ($(".container").width())/ squaresPerRow;  
	$(".square").css({"width":width ,"height":width});	

	$(".square").mouseenter(function(){
		$(this).css("background-color", "black");
	});
}

$(".button").click(function() {
	squaresPerRow = prompt('Please enter a number between 10 and 100')
	createGrid(squaresPerRow,"black");
});

