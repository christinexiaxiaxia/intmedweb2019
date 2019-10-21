
for (var i = 0; i < 26; i++) {

	var newLayer = $('<div class="layer key' + (i + 65) + '"></div>');

	$(".wrapper").append(newLayer);
}




// CREATING KEYDOWN/KEYUP EVENTS WITH OBJECTS
// https://stackoverflow.com/questions/16345870/keydown-keyup-events-for-specific-keys

$(document).ready(function() {

    $('body').on('keydown keyup', function(e) {

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

      },
        key = e.which,              // Get the keyCode
        keyArr = keyAction[key],    // get our array from our list
        io = e.type=="keydown" ? 0 : 1, // io will be 0 || 1 depending if key is down or up
        element,
        method,
        property = {}; // the Method Properties Object will look like e.g: {"background":"blue"}

      if(typeof keyArr != "undefined"){
        element = keyArr[0], 
        method = keyArr[1],
        property[keyArr[2]] = keyArr[3][io];       
        $(element)[method](property);  // do stuff


      }

      console.log(key, io, element, method, property);

    });
});




// CREATING POSITIONABLE POPUP WINDOWS WITH PROPERTY VARIABLES
// https://www.quackit.com/javascript/popup_windows.cfm

// OPEN AND CLOSE POPUP WINDOWS
// https://www.w3schools.com/jsref/met_win_close.asp

var newWindow;

function openWindow(w,h,x,y) {
  newWindow = window.open('about:blank','title','height='+h+',width='+w+',left='+x+',top='+y+',resizable=0,scrollbar=0,toolbar=0,menubar=0,location=1,directories=1,status=yes');

  newWindow.blur(); // THIS DOESN'T WORK... EVEN IN THE EXAMPLE ON W3 IT DIDN'T WORK IN CHROME OR SAFARI
}

function closeWindow() {
  // newWindow.close(); // THIS DOESN'T WORK... close() uses jQuery UI
}





$("body").keydown(function(event) {
  if (event.which == 13) {
    console.log("Pressed ENTER");
    openWindow(100,200,300,400);
  } 
});

$("body").keyup(function() {
  console.log("Key released");
  closeWindow(); // NOT WORKING
});





// HOVER POPUP

$(".hover-me").hover(function() {
  openWindow(400,300,200,100);
});

// function focusHere() {
//   window.focus();
// }

// focusHere();


