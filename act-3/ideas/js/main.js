

// HOVER LINK

$('a').hover(function(){
	$('.link-ind').css({'opacity':0})
}, function(){
	$('.link-ind').css({'opacity':1})	
})


// CURSOR TEXT

$(document).mousemove(function(e){
	$('.main-title').css({'top': e.clientY + 15, 'left': e.clientX + 15})
})


// COLOUR SWITCH

$('.left').hover(function(){
	$(this).css({'background-color':'white','color':'red'});
	$('.left-link').css({'color':'red'});
}, function(){
	$(this).css({'background-color':'red','color':'white'});
	$('.left-link').css({'color':'white'});
})

$('.right').hover(function(){
	$(this).css({'background-color':'white','color':'red'});
	$('.right-link').css({'color':'red'});
}, function(){
	$(this).css({'background-color':'red','color':'white'});
	$('.right-link').css({'color':'white'});
})