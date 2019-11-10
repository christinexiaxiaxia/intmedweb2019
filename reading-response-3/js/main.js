// CHECK MOUSEMOVE TIMEOUT https://stackoverflow.com/questions/14094272/jquery-detect-if-the-mouse-is-still

var timeout = null;

$(document).on('mousemove', function() {
    clearTimeout(timeout);

	$('.wave').stop().animate({opacity: 0}, 2000, function() { // LENGTH OF TIME FOR BLUE FADE OUT ON MOUSE MOVE
		$('.wave').toggle('fast', function(){
			$('.wave').animate({opacity: 1})
		})
	});
	console.log("Mouse is moving")

    timeout = setTimeout(function() {
		$('.wave').stop().animate({opacity: 1}, 15000, function() { // LENGTH OF TIME FOR BLUE TO FADE IN WHEN MOUSE STILL
			$('.wave').toggle('fast', function (){
				$('.wave').animate({opacity: 1});
			})
		});
		console.log("Mouse is idle")
    }, 1000); // LAG BEFORE BLUE STARTS APPEARING
});