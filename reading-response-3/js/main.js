// CHECK MOUSEMOVE TIMEOUT https://stackoverflow.com/questions/14094272/jquery-detect-if-the-mouse-is-still

var timeout = null;

$(document).on('mousemove', function() {
    clearTimeout(timeout);

    timeout = setTimeout(function() {
		$('.wave').animate({
			opacity: 1,
			}, 15000, function() {
		});
		$('img').animate({
			'filter': 'blur(100px)',
			}, 15000, function() {
		});
    }, 2000);
});

