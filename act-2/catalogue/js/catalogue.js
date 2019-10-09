// change image src from array https://stackoverflow.com/questions/39004593/changing-image-src-from-array-using-jquery

// create for loop to make an array https://stackoverflow.com/questions/8069315/create-array-of-all-integers-between-two-numbers-inclusive-in-javascript-jquer

var lowEnd = 1;
var highEnd = 76;


for (var i = lowEnd; i <= highEnd; i++) {

	// CREATE IMAGES

    var newImage = $('<img class="item item' + i + '" src="images/item' + i + '.jpg">')

    $(".imageAppend").append(newImage);


    // HIDE IMAGES

	var item = ".item" + i;

	// $(".item" + i).click(function() {
	// 	$(this).fadeOut(2000);
	// });

	$(item).click(function() {
		$(this).css({"opacity": "0", "transition-duration": "2s"});
	});



	// CHANGE CURSOR FROM POINTER TO DEFAULT ONCE CLICKED

	// https://stackoverflow.com/questions/12273525/how-to-get-the-value-of-css-style-using-jquery

	// $(".item" + i).hover(
	// 	if ($(this).css("opacity") === "0") {
	// 		$(this).css({"cursor": "default"});
	// 	}
	// );

	// if ($(".item" + i).css("opacity") == "0") {

	// 	var item = ".item" + i;

	// 	$(item).css({"cursor": "default"});
	// 	console.log("I'm gone! Goodbye")
	// }

	var n = $(".item" + i).css("opacity");

	if (n == 0){
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





// https://stackoverflow.com/questions/4343120/jquery-click-remember-old-value


// $(document).ready(
// 	function(){
//     	$('img').focus(
//     		function(){
// 				//store old value
// 				$(this).data('oldValue',$(this).val());
// 			}
// 		);
//     	$('img').change(
//     		function(){
// 				//do something
// 				$('span').text($(this).data('oldValue'));
// 				//trigger focus to set new oldValue
// 				$(this).trigger('focus');
// 			}
// 		);
// 	}
// );

console.log("All good");