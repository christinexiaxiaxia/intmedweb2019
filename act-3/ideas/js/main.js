
// for (var i = 0; i < 250; i++) {
// 	var leftText = $('<p>I am on the left</p>');
// 	var rightText = $('<p>I am on the right</p>');
// 	console.log('Appended');

// 	$('.left').append(leftText);
// 	$('.right').append(rightText);
// }

///// HOVER LINK

$('a').hover(function(){
	$('.link-ind').css({'opacity':0})
}, function(){
	$('.link-ind').css({'opacity':1})	
})

// var linkIndicator = $('.link-ind').css({'opacity':'0'});

// $('a').hover(linkIndicator);