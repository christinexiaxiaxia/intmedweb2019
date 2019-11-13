var key = '45a2cfe14035ca90349484705c15e550';

var city = 'Toronto';
var country = 'ca';

var api = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=' + key;


$.ajax({
	url: api,
	dataType: 'JSON',
	success: function(goblinFire) {
		// console.log(goblinFire)

		var kelvin = goblinFire.main.temp;
		var newTemp = $('<span class="temp">The temperature in ' + city + ' is ' + celsius(kelvin) + '&#8451!</span>')

		$('.temperature').append(newTemp);

		$('body').css({'background': color(celsius(kelvin))})
		// $('body').css({'background': color(23)})

	}
})

function celsius(temp) {
	var celsiusTemp = Math.round((temp - 273.15) * 100) / 100;
	return celsiusTemp;
}

function color(temp) {
	var r = 255 * (temp / 30);
	var b = 255 - r;

	var rgb = 'rgb(' + r + ',0,' + b + ')';

	return rgb;
}


// for (var i = 0; i < 250; i++) {
// 	var newElement = $('<div class="thing" id="thing' + i + '">Hello there</div>')
// 	$('.wrapper').append(newElement);
// }

// $('.travel-link').click(function() {

// 	var t = $(this). attr('data-target')

// 	$('body').scrollTo(t, 200)
// })