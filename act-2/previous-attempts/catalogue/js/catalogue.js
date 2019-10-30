// change image src from array https://stackoverflow.com/questions/39004593/changing-image-src-from-array-using-jquery

// create for loop to make an array https://stackoverflow.com/questions/8069315/create-array-of-all-integers-between-two-numbers-inclusive-in-javascript-jquer

var lowEnd = 1;
var highEnd = 76;


for (var i = lowEnd; i <= highEnd; i++) {

	// CREATE IMAGES

    var newImage = $('<img class="item item' + i + '" src="images/item' + i + '.jpg" onclick="clickCounter()">')

    $(".imageAppend").append(newImage);


    // HIDE IMAGES

	var item = ".item" + i;

	// $(".item" + i).click(function() {
	// 	$(this).fadeOut(2000);
	// });

	$(item).click(function() {
		// $(this).css({"opacity": "0", "transition-duration": "2s"});
	});



	// CHANGE CURSOR FROM POINTER TO DEFAULT ONCE CLICKED

	var imgOpacity = $(".item" + i).css("opacity");

	if (imgOpacity == 0){
		$(".item" + i).css("cursor", "default");
	}

	// console.log(n);
	// console.log($(".item" + i).css("cursor"));


	// REMEMBER CLICKS

	// var target = $( event.target );
 
}






	var n = $(".item1").css("opacity");

	if (n == 0){
		$(".item1").css("cursor", "default");
	}

	console.log(n);
	console.log($(".item1").css("cursor"));





// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_localstorage2

function clickCounter() {
	if (typeof(Storage) !== "undefined") {
		if (localStorage.clickcount >= 0) {
			localStorage.clickcount = Number(localStorage.clickcount) + 1;
			$(".item").css({"opacity":"0", "transition-duration":"2s"})
		} else {
			localStorage.clickcount = 1;
		}
		// document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";

		console.log(localStorage.clickcount)
	}
}

$(document).keydown(function(event) {
	if (event.keyCode == 8) {
		console.log("Local storage cleared.");
		localStorage.clear();
	}
})


console.log("All good");