console.log("hello world");

// alert("AAAAHHHH");


var i;

for (i = 0; i < 255; i++) {
	var newElement = $('<div class="element" style="color:rgb(' + i + ',' + (255 - i) + ',255"></div>').text('I am element #' + (i + 1));
	$("#first-element").append(newElement);
}

$(".element").css({"width":"100%", "font-size":"18pt", "text-align":"center"})