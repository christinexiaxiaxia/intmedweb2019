var keyAction = {

        65 : ['.key65', 'css', "background", ['blue','white'] ], // A key
        66 : ['.key66', 'css', "background", ['blue','white'] ], // B key
        67 : ['.key67', 'css', "background", ['blue','white'] ], // C key
        68 : ['.key68', 'css', "background", ['blue','white'] ], // D key
        69 : ['.key69', 'css', "background", ['blue','white'] ], // E key
        70 : ['.key70', 'css', "background", ['blue','white'] ], // F key
        71 : ['.key71', 'css', "background", ['blue','white'] ], // G key
        72 : ['.key72', 'css', "background", ['blue','white'] ], // H key
        73 : ['.key73', 'css', "background", ['blue','white'] ], // I key
        74 : ['.key74', 'css', "background", ['blue','white'] ], // J key
        75 : ['.key75', 'css', "background", ['blue','white'] ], // K key
        76 : ['.key76', 'css', "background", ['blue','white'] ], // L key
        77 : ['.key77', 'css', "background", ['blue','white'] ], // M key
        78 : ['.key78', 'css', "background", ['blue','white'] ], // N key
        79 : ['.key79', 'css', "background", ['blue','white'] ], // O key
        80 : ['.key80', 'css', "background", ['blue','white'] ], // P key
        81 : ['.key81', 'css', "background", ['blue','white'] ], // Q key
        82 : ['.key82', 'css', "background", ['blue','white'] ], // R key
        83 : ['.key83', 'css', "background", ['blue','white'] ], // S key
        84 : ['.key84', 'css', "background", ['blue','white'] ], // T key
        85 : ['.key85', 'css', "background", ['blue','white'] ], // U key
        86 : ['.key86', 'css', "background", ['blue','white'] ], // V key
        87 : ['.key87', 'css', "background", ['blue','white'] ], // W key
        88 : ['.key88', 'css', "background", ['blue','white'] ], // X key
        89 : ['.key89', 'css', "background", ['blue','white'] ], // Y key
        90 : ['.key90', 'css', "background", ['blue','white'] ], // Z key

      }


for (var i = 0; i < 26; i++) {
	// var keyNumber = i + 65;
	// console.log(keyNumber);

	var newLayer = $('<div class="layer key' + (i + 65) + '"></div>');

	$(".wrapper").append(newLayer);

	// $("body").keydown(function(event) {
	// 	if (event.which == keyNumber) {
	// 		console.log("Pressed A");
	// 		$(".key" + keyNumber).css({"background-color": "#FFFFFF"});
	// 	}
	// });
}

// https://stackoverflow.com/questions/16345870/keydown-keyup-events-for-specific-keys

$(document).ready(function () {

    $(document).on('keydown', function(e) {
      aK = ".key" + e.keyCode;
      $(aK).css({"background-color":"blue"});

      
      //     var key = e.which,              // Get the keyCode
      //     keyArr = keyAction[key],    // get our array from our list
      //     io = e.type=="keydown" ? 0 : 1, // io will be 0 || 1 depending if key is down or up
      //     element,
      //     method,
      //     property = {}; // the Method Properties Object will look like e.g: {"background":"red"}

      // if(typeof keyArr != "undefined"){
      //    element = keyArr[0], 
      //    method = keyArr[1],
      //    property[keyArr[2]] = keyArr[3][io];       
      //    $(element)[method](property);  // do stuff
      // }

      // console.log(key, io, element, method, property);

      console.log(e.keyCode)

    });

    $(document).on('keyup', function(e) {
      aK = ".key" + e.keyCode;
      $(aK).css({"background-color":"blue"});

    });




});


// $("body").keydown(function(event) {
// 	if (event.which == 65) {
// 		console.log("Pressed A");
// 		$(".key65").css({"background-color": "#FFFFFF"});
// 	} else if (event.which == 66) {
// 		console.log("Pressed B");
// 		$(".key66").css({"background-color": "#EEEEEE"});
// 	} else if (event.which == 67) {
// 		console.log("Pressed C");
// 		$(".key67").css({"background-color": "#DDDDDD"});
// 	} else if (event.which == 68) {
// 		console.log("Pressed D");
// 		$(".key68").css({"background-color": "#CCCCCC"});
// 	} else if (event.which == 69) {
// 		console.log("Pressed E");
// 		$(".key69").css({"background-color": "#BBBBBB"});
// 	} else if (event.which == 70) {
// 		console.log("Pressed F");
// 		$(".key70").css({"background-color": "#AAAAAA"});
// 	} else if (event.which == 71) {
// 		console.log("Pressed G");
// 		$(".key71").css({"background-color": "#FFFFFF"});
// 	} else if (event.which == 72) {
// 		console.log("Pressed H");
// 		$(".key72").css({"background-color": "#FFFFFF"});
// 	} else if (event.which == 73) {
// 		console.log("Pressed I");
// 		$(".key73").css({"background-color": "#FFFFFF"});
// 	} else if (event.which == 74) {
// 		console.log("Pressed J");
// 		$(".key74").css({"background-color": "#FFFFFF"});
// 	} else if (event.which == 75) {
// 		console.log("Pressed K");
// 		$(".key75").css({"background-color": "#FFFFFF"});
// 	} else if (event.which == 76) {
// 		console.log("Pressed L");
// 		$(".key76").css({"background-color": "#FFFFFF"});
// 	} else if (event.which == 77) {
// 		console.log("Pressed M");
// 		$(".key77").css({"background-color": "#FFFFFF"});
// 	} else if (event.which == 78) {
// 		console.log("Pressed N");
// 		$(".key78").css({"background-color": "#FFFFFF"});
// 	} else if (event.which == 79) {
// 		console.log("Pressed O");
// 		$(".key79").css({"background-color": "#FFFFFF"});
// 	} else if (event.which == 80) {
// 		console.log("Pressed P");
// 		$(".key80").css({"background-color": "#FFFFFF"});
// 	} else if (event.which == 81) {
// 		console.log("Pressed Q");
// 		$(".key81").css({"background-color": "#FFFFFF"});
// 	} else if (event.which == 82) {
// 		console.log("Pressed R");
// 		$(".key82").css({"background-color": "#FFFFFF"});
// 	} else if (event.which == 83) {
// 		console.log("Pressed S");
// 		$(".key83").css({"background-color": "#FFFFFF"});
// 	} else if (event.which == 84) {
// 		console.log("Pressed T");
// 		$(".key84").css({"background-color": "#FFFFFF"});
// 	} else if (event.which == 85) {
// 		console.log("Pressed U");
// 		$(".key85").css({"background-color": "#FFFFFF"});
// 	} else if (event.which == 86) {
// 		console.log("Pressed V");
// 		$(".key86").css({"background-color": "#FFFFFF"});
// 	} else if (event.which == 87) {
// 		console.log("Pressed W");
// 		$(".key87").css({"background-color": "#FFFFFF"});
// 	} else if (event.which == 88) {
// 		console.log("Pressed X");
// 		$(".key88").css({"background-color": "#FFFFFF"});
// 	} else if (event.which == 89) {
// 		console.log("Pressed Y");
// 		$(".key89").css({"background-color": "#FFFFFF"});
// 	} else if (event.which == 90) {
// 		console.log("Pressed Z");
// 		$(".key90").css({"background-color": "#FFFFFF"});
// 	} else {
// 		console.log("Nothing pressed")
// 		// $("key").css({"background-color": "#000000"})
// 	}
// });

// $("body").keyup(function(event) {
// 	console.log("Nothing pressed");
// 	$(this).css({"background-color": "#000000"});
// });