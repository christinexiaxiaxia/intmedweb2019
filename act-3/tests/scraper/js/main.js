// CONTINUOUS LOOPING PAGE https://stackoverflow.com/questions/16993693/continuous-looping-page-not-infinite-scroll

// IM FAKING INFINITE SCROLL FOR NOW———but how can I change images-scraper's 'image search limit' to a RANGE of images? meaning it could search 15 images at a time and when the user scrolls to the bottom to grabs the NEXT 15 images after the already included ones?

$('document').ready(function() {
	$(document).scroll(function(){
		if(document.documentElement.clientHeight + 
			$(document).scrollTop() >= document.body.offsetHeight 
		)$(document).scrollTop(0);
    });
}); 


// LOAD DATA INTO VARIABLE https://stackoverflow.com/questions/2177548/load-json-into-variable

var img = (function () {
    var img = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "../data/img.json",
        'dataType': "json",
        'success': function (data) {
            img = data;
        }
    });
    return img;
})(); 

var text = (function () {
    var text = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "../data/text-array.txt",
        'dataType': "text",
        'success': function (data) {
            text = data;
        }
    });
    return text;
})(); 

// console.log('Image Data:', json[0].url)

console.log(text[2]);


// APPEND IMAGES AND TEXT

// $('.wrapper').append('<div class="text-container"><p src="' + text + '"></p></div>');

for (var i = 0; i < 500; i++) {
	$('.wrapper').append(
		$('<div class="img-container"><img src="' + img[i].url + '"></div>')
	)
}







