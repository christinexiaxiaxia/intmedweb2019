// CHECK MOUSEMOVE TIMEOUT https://stackoverflow.com/questions/14094272/jquery-detect-if-the-mouse-is-still

var timeout = null;

$(document).on('mousemove', function() {
    clearTimeout(timeout);

	$('.wave').stop().animate({opacity: 0}, 1000, function() {
		$('.wave').toggle('fast', function(){
			$('.wave').animate({opacity: 1})
		})
	});
	console.log("Mouse is moving")

    timeout = setTimeout(function() {
		$('.wave').stop().animate({opacity: 1}, 15000, function() {
			$('.wave').toggle('fast', function (){
				$('.wave').animate({opacity: 1});
			})
		});
		console.log("Mouse is idle")
    }, 1000);
});