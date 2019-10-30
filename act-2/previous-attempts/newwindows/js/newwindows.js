
var synonyms = ['act', 'advertise', 'air', 'announce', 'appear', 'brandish', 'broadcast', 'camouflage', 'charade', 'demonstration', 'discover', 'display', 'effect', 'exhibit', 'expose', 'facade', 'face', 'flaunt', 'front', 'gloss', 'guide', 'hint', 'herald', 'imply', 'lead', 'manifest', 'mentor', 'name', 'occur', 'parade', 'perform', 'portray', 'pose', 'prove', 'reveal', 'route', 'represent', 'resemble', 'simulate', 'suggest', 'trumpet', 'tutor', 'uncloak', 'uncover', 'unfold', 'unveil', 'validate', 'verify']

console.log(synonyms.length);


for (var i = 0; i < 48; i++) {

	var newLayer = $('<span class="synonym synonym' + i + '">' + synonyms[i] + ' </span>');

	$(".wrapper").append(newLayer);
}



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


