
var students = ["Lina","Karlo","Sophia","Adrienne","Yasmin","Katherine","Oleg","Jaywhy","Mikayla","Siwoo","Justine","Andrea","Kyle","Alleesa","Oanh","Sabrina","Jillian","Allison","Cole","Christine"];




var i = 0;

while (i < students.length) {
		// console.log(students[i]);

	$("<div class='dragNames'></div>")
		.attr("id",students[i])
		.text("Hello, " + students[i] + "!")
		.appendTo("body")
		.css({"position":"absolute", "color":"red", "width": "auto", "border": "0"})
		.draggable()
		.click(function(){
		})

	$(".studentName").css({"animation-duration": (i / 4) + "s"});

	i = i + 1;
}

$(document).keydown(function(g){
	if (g.keyCode == 74) {
		alert("you pressed J");
	} else if (g.keyCode == 13) {
		$(".students").empty();
	}
});


function randomColor(){
	var randRed = Math.floor(Math.random() * 256);
	var randGreen = Math.floor(Math.random() * 256);
	var randBlue = Math.floor(Math.random() * 256);

	// var randRGB = {'color':'rgb(' + randRed + ',' + randGreen + ',' + randBlue + ')'};

	var rgb = 'rgb(' + randRed + ',' + randGreen + ',' + randBlue + ')';

	// return rgb;

	// $("#" + students[i]).css(rgb);
	$("body").css({'background-color':rgb});

	console.log(randRed);
	console.log(randGreen);
	console.log(randBlue);

	console.log(rgb);
};


$(document).click(function(eventInfo){

	var randomStudentNum = Math.ceil(Math.random() * (students.length - 1));

	$(".students").append('<p class="studentName">' + students[randomStudentNum] + '</p>');


	var randomX1 = Math.floor(Math.random() * ($(window).width() - 100) );
	var randomY1 = Math.floor(Math.random() * ($(document).height() - 100) );

	var randomX2 = Math.floor(Math.random() * ($(window).width() - 100) );
	var randomY2 = Math.floor(Math.random() * ($(document).height() - 100) );

	var CIRCDIAM = "100px";
	var randDiam1 = Math.floor(Math.random() * (500) + 50) + "px";
	var randDiam2 = Math.floor(Math.random() * (500) + 50) + "px";

	$(".red").css({"width": randDiam1, "height": randDiam1, "top": randomY1, "left": randomX1});

	$(".blue").css({"width": randDiam2, "height": randDiam2, "top": randomY2, "left": randomX2});

	randomColor();

	// console.log(eventInfo);
});




// console.log(randomX + ", " + randomY);

// console.log(randomStudentNum);
// console.log(Math.random());
// console.log(students[randomStudentNum]);

// console.log(students);