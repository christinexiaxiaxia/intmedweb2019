
// AUDIO CITATIONS

console.log('Audio track #1: "Amazing grace" | Sister Rosetta Tharpe (vocalist) | 1 sound disc : analog, mono. ; 10 in. | Decca, 1950, monographic.');
console.log('Audio track #2: "Amazing grace" | Wendy Saivetz (vocalist) | 1 sound disc : digital, stereo ; 4 3/4 in. | Abaca Productions, 1991.');
console.log('Audio track #3: "Amazing grace" | Carl Smith (performer), Carter Sisters (performer), Mother Maybell Carter (performer) | 1 sound disc : analog, mono. ; 10 in. | Columbia Records, 1952, monographic.');
console.log('Audio track #4: "Amazing grace" | Mighty Clouds of Joy (performer) | 1 sound disc : analog, stereo. ; 12 in. | MCA Records, 1972.');
console.log('Audio track #5: "Amazing grace (Untitled) / (Unissued)" | The Byrds (performer) | 2 sound discs : digital, stereo. ; 4 3/4 in. | Sony Music Entertainment, New York, 2000, monographic.');
console.log('Audio track #6: "Amazing grace" | Pipes and Drums and Military Band of the Royal Scots Dragoon Guards (performer) | 1 sound disc : analog, stereo. ; 12 in. | RCA Victor, 1972, monographic.');






// CREATE ELEMENTS

var audioFiles = ['grace1.mp3','grace13.mp3','grace14.mp3','grace18.mp3','grace24.mp3','grace26.mp3'];

for (var i = 0; i < 6; i++) {

  var newAudio = $('<audio id="audio' + (i + 1) + '" src="' + audioFiles[i] + '" preload="auto" loop ></audio>');
  var newLayer = $('<div class="layer layer' + (i + 1) + '"></div');

  $(".audio-wrapper").append(newAudio);
  $(".layer-wrapper").append(newLayer);

}


// PRESS SPACE TO START

$(document).one('keydown', function(e) {
  if (e.which == 32) {
    // console.log('Pressed SPACE');
    document.getElementById("audio1").play();
    document.getElementById("audio2").play();
    document.getElementById("audio3").play();
    document.getElementById("audio4").play();
    document.getElementById("audio5").play();
    document.getElementById("audio6").play();

    $('audio').animate({volume: 0.001}, 0);
    $('audio').animate({volume: 1.0}, 8000);

    $('body').css({'background': 'black'});
    $('.start-screen').css({'color':'white', 'opacity':'0', 'z-index':'-100'});
    $('.box').css({'cursor':'pointer'});
    $('.footer-title').css({'opacity':'1','cursor':'help'});
    $('.footer').css({'z-index':'100'})
  }
})


// HOVER STUFF

$('.footer-title-left').hover(function() {
  $('.footer-text-left').css({'opacity':'1','filter':'blur(0.3px)'})
}, function(){
  $('.footer-text-left').css({'opacity':'0','filter':'blur(3px)'}) 
})

$('.footer-title-right').hover(function() {
  $('.footer-text-right').css({'opacity':'1','filter':'blur(0.3px)'})
}, function(){
  $('.footer-text-right').css({'opacity':'0','filter':'blur(3px)'}) 
})









