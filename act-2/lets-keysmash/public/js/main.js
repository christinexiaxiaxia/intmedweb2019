
      var socket = io();

var keyAction = {

  65 : ['#boxA', 'css', "background", ['white','black'] ], // A key
  66 : ['#boxB', 'css', "background", ['white','black'] ], // B key
  67 : ['#boxC', 'css', "background", ['white','black'] ], // C key
  68 : ['#boxD', 'css', "background", ['white','black'] ], // D key
  69 : ['#boxE', 'css', "background", ['white','black'] ], // E key
  70 : ['#boxF', 'css', "background", ['white','black'] ], // F key
  71 : ['#boxG', 'css', "background", ['white','black'] ], // G key
  72 : ['#boxH', 'css', "background", ['white','black'] ], // H key
  73 : ['#boxI', 'css', "background", ['white','black'] ], // I key
  74 : ['#boxJ', 'css', "background", ['white','black'] ], // J key
  75 : ['#boxK', 'css', "background", ['white','black'] ], // K key
  76 : ['#boxL', 'css', "background", ['white','black'] ], // L key
  77 : ['#boxM', 'css', "background", ['white','black'] ], // M key
  78 : ['#boxN', 'css', "background", ['white','black'] ], // N key
  79 : ['#boxO', 'css', "background", ['white','black'] ], // O key
  80 : ['#boxP', 'css', "background", ['white','black'] ], // P key
  81 : ['#boxQ', 'css', "background", ['white','black'] ], // Q key
  82 : ['#boxR', 'css', "background", ['white','black'] ], // R key
  83 : ['#boxS', 'css', "background", ['white','black'] ], // S key
  84 : ['#boxT', 'css', "background", ['white','black'] ], // T key
  85 : ['#boxU', 'css', "background", ['white','black'] ], // U key
  86 : ['#boxV', 'css', "background", ['white','black'] ], // V key
  87 : ['#boxW', 'css', "background", ['white','black'] ], // W key
  88 : ['#boxX', 'css', "background", ['white','black'] ], // X key
  89 : ['#boxY', 'css', "background", ['white','black'] ], // Y key
  90 : ['#boxZ', 'css', "background", ['white','black'] ], // Z key

}



// https://stackoverflow.com/questions/16345870/keydown-keyup-events-for-specific-keys

$(document).ready(function () {

    // $(document).on('keydown keyup', function(e) {
    $(document).on('keydown', function(e) { // CREATED TO TEST STUFF, COLOUR CHANGE STAYS

      
          var key = e.which,              // Get the keyCode
          keyArr = keyAction[key],    // get our array from our list
          io = e.type=="keydown" ? 0 : 1, // io will be 0 || 1 depending if key is down or up
          element,
          method,
          property = {}; // the Method Properties Object will look like e.g: {"background":"red"}

      if(typeof keyArr != "undefined"){
         element = keyArr[0], 
         method = keyArr[1],
         property[keyArr[2]] = keyArr[3][io];       
         $(element)[method](property);  // do stuff
      }

      // console.log(key, io, element, method, property);

    });




var graceInfo = {
  0 : ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'Amazing grace', 'Amazing grace', 'Amazing grace', 'Amazing grace', 'Amazing grace', 'Amazing grace', 'Amazing Grace', 'New Britain', 'At the cross', 'Amazing grace', 'Amazing grace (Untitled) / (Unissued)', 'Amazing grace', 'Amazing grace'],
  1 : ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'Carl Smith, Carter Sisters & Mother Maybell [Carter]', 'Willie Nelson, Geezenslaw Brothers, Jody Payne, David Allen Coe & C. J. Coe.', 'Johnny Cash', 'Golden Gate Quartet', 'Mighty Clouds of Joy', 'Mighty Clouds of Joy', 'Lemonheads', 'Boston Camerata', "Fiddlin' John Carson", 'Chet Atkins', 'The Byrds', 'Pipes and Drums and Military Band of the Royal Scots Dragoon Guards', 'Skeeter Davis'],
  2 : ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1 sound disc : analog, mono. ; 10 in.', '1 sound disc : analog, stereo. ; 12 in.', '1 sound disc : digital, stereo. ; 4 3/4 in.', 'N/A', '1 sound disc : analog, stereo. ; 12 in.', '1 sound disc : analog, stereo. ; 12 in.', '1 sound disc : digital, stereo ; 4 3/4 in.', '1 sound reel : analog, stereo ; 10 in. x 1/4 in.', '1 sound disc : analog, mono. ; 10 in.', '1 sound disc : analog, mono. ; 12 in.', '2 sound discs : digital, stereo. ; 4 3/4 in.', '1 sound disc : analog, stereo. ; 12 in.', '1 sound disc : analog, stereo. ; 12 in.'],
  3 : ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'Columbia Records, 1952, monographic.', 'Columbia Records, 1976, monographic.', 'Columbia, 1990, monographic.', 'Columbia Records, monographic.', 'MCA Records, 1972.', 'Peacock Records, 1972.', 'Taang! Records, Auburndale, MA, 1992.', 'Recorded in the Collidge Auditourium, Library of Congrss, Washington, DC on April 25, 1986', 'Okeh Records, 1931, monographic.', 'RCA Victor, 1962, monographic.', 'Sony Music Entertainment, New York, 2000, monographic.', 'RCA Victor, 1971, monographic.', 'RCA Victor, 1972, monographic.']
}

var audioFiles = ['grace1.mp3', 'grace2.mp3', 'grace3.mp3', 'grace4.mp3', 'grace5.mp3', 'grace6.mp3', 'grace7.mp3', 'grace8.mp3', 'grace9.mp3', 'grace10.mp3', 'grace11.mp3', 'grace12.mp3', 'grace13.mp3', 'grace14.mp3', 'grace15.mp3', 'grace16.mp3', 'grace17.mp3', 'grace18.mp3', 'grace19.mp3', 'grace20.mp3', 'grace21.mp3', 'grace22.mp3', 'grace23.mp3', 'grace24.mp3', 'grace25.mp3', 'grace26.mp3', 'grace27.mp3', 'grace28.mp3', 'grace29.mp3', 'grace30.mp3'];
var i = 0;

var keyNum = i + 65;
var audioNum = $('#audio' + (i + 1));


for (i = 0; i < 26; i++) {

	var newAudio = $('<audio id="audio' + (i + 1) + '" src="' + audioFiles[i] + '" preload="auto" loop ></audio>'); // TOOK OUT AUTOPLAY... FOR NOW?

  var newLayer = $('<div class="layer layer' + (i + 1) + '"></div');

  var title = graceInfo[0];
  var artist = graceInfo[1];
  var media = graceInfo[2];
  var publish = graceInfo[3];

  var newGraceInfo = $('<p class="grace-info"><span class="title">' + title[i] + ' //</span> <span class="artist">' + artist[i] + ' //</span> <span class="media">' + media[i] + ' //</span> <span class="publish">' + publish[i] + '</span></p>')

	$(".audio-wrapper").append(newAudio);
  $(".layer-wrapper").append(newLayer);
  $(".grace-info-wrapper").append(newGraceInfo);


  var boxLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  // var animationDuration = 2 + Math.floor(Math.random() * 2);

  // for (var j = 0; j < 26; j++) {
  //   $(".box" + boxLetters[j]).css({'animation-duration': 2 + Math.floor(Math.random() * 4) + 's'})
  // }
}


    $(document).keydown(function(e){
      if (e.which == 32){
        // document.getElementById("audio1").play();
        // document.getElementById("audio2").play();
        // document.getElementById("audio3").play();
        // document.getElementById("audio4").play();
        // document.getElementById("audio5").play();
        // document.getElementById("audio6").play();
        // document.getElementById("audio7").play();
        // document.getElementById("audio8").play();
        // document.getElementById("audio9").play();
        // document.getElementById("audio10").play();
        // document.getElementById("audio11").play();
        // document.getElementById("audio12").play();
        // document.getElementById("audio13").play();
        // document.getElementById("audio14").play();
        // document.getElementById("audio15").play();
        // document.getElementById("audio16").play();
        // document.getElementById("audio17").play();
        // document.getElementById("audio18").play();
        // document.getElementById("audio19").play();
        // document.getElementById("audio20").play();
        // document.getElementById("audio21").play();
        // document.getElementById("audio22").play();
        // document.getElementById("audio23").play();
        // document.getElementById("audio24").play();
        // document.getElementById("audio25").play();
        // document.getElementById("audio26").play();

        $('audio').animate({volume: 0.001}, 0);
        $('audio').animate({volume: 1.0}, 8000);

        // $('audio').stop().animate({volume: 1.0}, 8000, function() {
        //   $('audio').toggle('fast', function (){
        //     $('audio').animate({volume: 1.0}); 
        //   })
        // })



        // $('body').css({'background-color':'black'});
        // $('.box').css({'background-color':'black'});
        // $('.start-screen').css({'color':'white', 'opacity':'0'});

        // console.log('Pressed space, music playing');
      }
    })

// EXECUTE FUNCTION AFTER NOT PRESSING ANY KEYS FOR A SET AMOUNT OF TIME https://remysharp.com/2010/07/21/throttling-function-calls/

function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 10000);
  var last,
      deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date,
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

// $('body').on('keyup', throttle(function (event) {
//   $('.start-screen').css({'opacity':'1','transition-duration':'3s'});
//   console.log('Inactive, no keypresses.')
// }, 10000));


/// FADE AUDIO VOLUME https://stackoverflow.com/questions/39511353/play-pause-music-with-fade-in-fade-out-with-javascript?rq=1

/// PREVENT THE LAG FROM THE ANIMATION QUEUE BUILD UP CAUSED BY HOLDING KEYS DOWN https://stackoverflow.com/questions/14613498/how-to-prevent-this-strange-jquery-animate-lag

    // var audio1 = document.getElementById("audio1");
    var audio1 = $('#audio1');
    var audio2 = $('#audio2');
    var audio3 = $('#audio3');
    var audio4 = $('#audio4');
    var audio5 = $('#audio5');
    var audio6 = $('#audio6');
    var audio7 = $('#audio7');
    var audio8 = $('#audio8');
    var audio9 = $('#audio9');
    var audio10 = $('#audio10');
    var audio11 = $('#audio11');
    var audio12 = $('#audio12');
    var audio13 = $('#audio13');
    var audio14 = $('#audio14');
    var audio15 = $('#audio15');
    var audio16 = $('#audio16');
    var audio17 = $('#audio17');
    var audio18 = $('#audio18');
    var audio19 = $('#audio19');
    var audio20 = $('#audio20');
    var audio21 = $('#audio21');
    var audio22 = $('#audio22');
    var audio23 = $('#audio23');
    var audio24 = $('#audio24');
    var audio25 = $('#audio25');
    var audio26 = $('#audio26');


    // KEY DOWN

    $(document).keydown(function(e){
      if (e.which == 65){
        audio1.stop().animate({volume: 0.001}, 1800, function() {
          audio1.toggle('fast', function (){
            audio1.animate({volume: 0.001}); 
          })
        })
        /////////
        // audio2.stop().animate({volume: 0.001}, 1800, function() {
        //   audio2.toggle('fast', function (){
        //     audio2.animate({volume: 0.001}); 
        //   })
        // })
        // audio3.stop().animate({volume: 0.001}, 1800, function() {
        //   audio3.toggle('fast', function (){
        //     audio3.animate({volume: 0.001}); 
        //   })
        // })
        // audio5.stop().animate({volume: 0.001}, 1800, function() {
        //   audio5.toggle('fast', function (){
        //     audio5.animate({volume: 0.001}); 
        //   })
        // })
        // audio7.stop().animate({volume: 0.001}, 1800, function() {
        //   audio7.toggle('fast', function (){
        //     audio7.animate({volume: 0.001}); 
        //   })
        // })
        // audio8.stop().animate({volume: 0.001}, 1800, function() {
        //   audio8.toggle('fast', function (){
        //     audio8.animate({volume: 0.001}); 
        //   })
        // })
        // audio9.stop().animate({volume: 0.001}, 1800, function() {
        //   audio9.toggle('fast', function (){
        //     audio9.animate({volume: 0.001}); 
        //   })
        // })
        ///////////
        console.log('Pressed A');
      }
      if (e.which == 66){
        audio2.stop().animate({volume: 0.001}, 1800, function() {
          audio2.toggle('fast', function (){
            audio2.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed B');
      }
      if (e.which == 67){
        audio3.stop().animate({volume: 0.001}, 1800, function() {
          audio3.toggle('fast', function (){
            audio3.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed C');
      }
      if (e.which == 68){
        audio4.stop().animate({volume: 0.001}, 1800, function() {
          audio4.toggle('fast', function (){
            audio4.animate({volume: 0.001}); 
          })
        })
        ///////////
        // audio10.stop().animate({volume: 0.001}, 1800, function() {
        //   audio10.toggle('fast', function (){
        //     audio10.animate({volume: 0.001}); 
        //   })
        // })
        // audio11.stop().animate({volume: 0.001}, 1800, function() {
        //   audio11.toggle('fast', function (){
        //     audio11.animate({volume: 0.001}); 
        //   })
        // })
        // audio12.stop().animate({volume: 0.001}, 1800, function() {
        //   audio12.toggle('fast', function (){
        //     audio12.animate({volume: 0.001}); 
        //   })
        // })
        // audio13.stop().animate({volume: 0.001}, 1800, function() {
        //   audio13.toggle('fast', function (){
        //     audio13.animate({volume: 0.001}); 
        //   })
        // })
        // audio14.stop().animate({volume: 0.001}, 1800, function() {
        //   audio14.toggle('fast', function (){
        //     audio14.animate({volume: 0.001}); 
        //   })
        // })
        ///////////
        console.log('Pressed D');
      }
      if (e.which == 69){
        audio5.stop().animate({volume: 0.001}, 1800, function() {
          audio5.toggle('fast', function (){
            audio5.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed E');
      }
      if (e.which == 70){
        audio6.stop().animate({volume: 0.001}, 1800, function() {
          audio6.toggle('fast', function (){
            audio6.animate({volume: 0.001}); 
          })
        })
        ///////////
        // audio15.stop().animate({volume: 0.001}, 1800, function() {
        //   audio15.toggle('fast', function (){
        //     audio15.animate({volume: 0.001}); 
        //   })
        // })
        // audio16.stop().animate({volume: 0.001}, 1800, function() {
        //   audio16.toggle('fast', function (){
        //     audio16.animate({volume: 0.001}); 
        //   })
        // })
        // audio17.stop().animate({volume: 0.001}, 1800, function() {
        //   audio17.toggle('fast', function (){
        //     audio17.animate({volume: 0.001}); 
        //   })
        // })
        // audio18.stop().animate({volume: 0.001}, 1800, function() {
        //   audio18.toggle('fast', function (){
        //     audio18.animate({volume: 0.001}); 
        //   })
        // })
        // audio20.stop().animate({volume: 0.001}, 1800, function() {
        //   audio20.toggle('fast', function (){
        //     audio20.animate({volume: 0.001}); 
        //   })
        // })
        // audio21.stop().animate({volume: 0.001}, 1800, function() {
        //   audio21.toggle('fast', function (){
        //     audio21.animate({volume: 0.001}); 
        //   })
        // })
        ///////////
        console.log('Pressed F');
      }
      if (e.which == 71){
        audio7.stop().animate({volume: 0.001}, 1800, function() {
          audio7.toggle('fast', function (){
            audio7.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed G');
      }
      if (e.which == 72){
        audio8.stop().animate({volume: 0.001}, 1800, function() {
          audio8.toggle('fast', function (){
            audio8.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed H');
      }
      if (e.which == 73){
        audio9.stop().animate({volume: 0.001}, 1800, function() {
          audio9.toggle('fast', function (){
            audio9.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed I');
      }
      if (e.which == 74){
        audio10.stop().animate({volume: 0.001}, 1800, function() {
          audio10.toggle('fast', function (){
            audio10.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed J');
      }
      if (e.which == 75){
        audio11.stop().animate({volume: 0.001}, 1800, function() {
          audio11.toggle('fast', function (){
            audio11.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed K');
      }
      if (e.which == 76){
        audio12.stop().animate({volume: 0.001}, 1800, function() {
          audio12.toggle('fast', function (){
            audio12.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed L');
      }
      if (e.which == 77){
        audio13.stop().animate({volume: 0.001}, 1800, function() {
          audio13.toggle('fast', function (){
            audio13.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed M');
      }
      if (e.which == 78){
        audio14.stop().animate({volume: 0.001}, 1800, function() {
          audio14.toggle('fast', function (){
            audio14.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed N');
      }
      if (e.which == 79){
        audio15.stop().animate({volume: 0.001}, 1800, function() {
          audio15.toggle('fast', function (){
            audio15.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed O');
      }
      if (e.which == 80){
        audio16.stop().animate({volume: 0.001}, 1800, function() {
          audio16.toggle('fast', function (){
            audio16.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed P');
      }
      if (e.which == 81){
        audio17.stop().animate({volume: 0.001}, 1800, function() {
          audio17.toggle('fast', function (){
            audio17.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed Q');
      }
      if (e.which == 82){
        audio18.stop().animate({volume: 0.001}, 1800, function() {
          audio18.toggle('fast', function (){
            audio18.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed R');
      }
      if (e.which == 83){
        audio19.stop().animate({volume: 0.001}, 1800, function() {
          audio19.toggle('fast', function (){
            audio19.animate({volume: 0.001}); 
          })
        })
        ///////////
        // audio22.stop().animate({volume: 0.001}, 1800, function() {
        //   audio22.toggle('fast', function (){
        //     audio22.animate({volume: 0.001}); 
        //   })
        // })
        // audio23.stop().animate({volume: 0.001}, 1800, function() {
        //   audio23.toggle('fast', function (){
        //     audio23.animate({volume: 0.001}); 
        //   })
        // })
        // audio24.stop().animate({volume: 0.001}, 1800, function() {
        //   audio24.toggle('fast', function (){
        //     audio24.animate({volume: 0.001}); 
        //   })
        // })
        // audio25.stop().animate({volume: 0.001}, 1800, function() {
        //   audio25.toggle('fast', function (){
        //     audio25.animate({volume: 0.001}); 
        //   })
        // })
        // audio26.stop().animate({volume: 0.001}, 1800, function() {
        //   audio26.toggle('fast', function (){
        //     audio26.animate({volume: 0.001}); 
        //   })
        // })
        ///////////
        console.log('Pressed S');
      }
      if (e.which == 84){
        audio20.stop().animate({volume: 0.001}, 1800, function() {
          audio20.toggle('fast', function (){
            audio20.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed T');
      }
      if (e.which == 85){
        audio21.stop().animate({volume: 0.001}, 1800, function() {
          audio21.toggle('fast', function (){
            audio21.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed U');
      }
      if (e.which == 86){
        audio22.stop().animate({volume: 0.001}, 1800, function() {
          audio22.toggle('fast', function (){
            audio22.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed V');
      }
      if (e.which == 87){
        audio23.stop().animate({volume: 0.001}, 1800, function() {
          audio23.toggle('fast', function (){
            audio23.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed W');
      }
      if (e.which == 88){
        audio24.stop().animate({volume: 0.001}, 1800, function() {
          audio24.toggle('fast', function (){
            audio24.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed X');
      }
      if (e.which == 89){
        audio25.stop().animate({volume: 0.001}, 1800, function() {
          audio25.toggle('fast', function (){
            audio25.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed Y');
      }
      if (e.which == 90){
        audio26.stop().animate({volume: 0.001}, 1800, function() {
          audio26.toggle('fast', function (){
            audio26.animate({volume: 0.001}); 
          })
        })
        console.log('Pressed Z');
      }
    })

    // KEY UP

    // $(document).keyup(function(e){
    //   if (e.which == 65){
    //     audio1.stop().animate({volume: 1.0}, 1800, function() {
    //       audio1.toggle('fast', function (){
    //         audio1.animate({volume: 1.0}); 
    //       })
    //     })
    //     /////////
    //     // audio2.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio2.toggle('fast', function (){
    //     //     audio2.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     // audio3.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio3.toggle('fast', function (){
    //     //     audio3.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     // audio5.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio5.toggle('fast', function (){
    //     //     audio5.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     // audio7.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio7.toggle('fast', function (){
    //     //     audio7.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     // audio8.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio8.toggle('fast', function (){
    //     //     audio8.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     // audio9.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio9.toggle('fast', function (){
    //     //     audio9.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     ///////////
    //     console.log('Released A');
    //   }
    //   if (e.which == 66){
    //     audio2.stop().animate({volume: 1.0}, 1800, function() {
    //       audio2.toggle('fast', function (){
    //         audio2.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released B');
    //   }
    //   if (e.which == 67){
    //     audio3.stop().animate({volume: 1.0}, 1800, function() {
    //       audio3.toggle('fast', function (){
    //         audio3.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released C');
    //   }
    //   if (e.which == 68){
    //     audio4.stop().animate({volume: 1.0}, 1800, function() {
    //       audio4.toggle('fast', function (){
    //         audio4.animate({volume: 1.0}); 
    //       })
    //     })
    //     ///////////
    //     // audio10.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio10.toggle('fast', function (){
    //     //     audio10.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     // audio11.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio11.toggle('fast', function (){
    //     //     audio11.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     // audio12.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio12.toggle('fast', function (){
    //     //     audio12.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     // audio13.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio13.toggle('fast', function (){
    //     //     audio13.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     // audio14.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio14.toggle('fast', function (){
    //     //     audio14.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     ///////////
    //     console.log('Released D');
    //   }
    //   if (e.which == 69){
    //     audio5.stop().animate({volume: 1.0}, 1800, function() {
    //       audio5.toggle('fast', function (){
    //         audio5.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released E');
    //   }
    //   if (e.which == 70){
    //     audio6.stop().animate({volume: 1.0}, 1800, function() {
    //       audio6.toggle('fast', function (){
    //         audio6.animate({volume: 1.0}); 
    //       })
    //     })
    //     ///////////
    //     // audio15.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio15.toggle('fast', function (){
    //     //     audio15.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     // audio16.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio16.toggle('fast', function (){
    //     //     audio16.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     // audio17.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio17.toggle('fast', function (){
    //     //     audio17.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     // audio18.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio18.toggle('fast', function (){
    //     //     audio18.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     // audio20.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio20.toggle('fast', function (){
    //     //     audio20.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     // audio21.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio21.toggle('fast', function (){
    //     //     audio21.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     ///////////
    //     console.log('Released F');
    //   }
    //   if (e.which == 71){
    //     audio7.stop().animate({volume: 1.0}, 1800, function() {
    //       audio7.toggle('fast', function (){
    //         audio7.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released G');
    //   }
    //   if (e.which == 72){
    //     audio8.stop().animate({volume: 1.0}, 1800, function() {
    //       audio8.toggle('fast', function (){
    //         audio8.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released H');
    //   }
    //   if (e.which == 73){
    //     audio9.stop().animate({volume: 1.0}, 1800, function() {
    //       audio9.toggle('fast', function (){
    //         audio9.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released I');
    //   }
    //   if (e.which == 74){
    //     audio10.stop().animate({volume: 1.0}, 1800, function() {
    //       audio10.toggle('fast', function (){
    //         audio10.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released J');
    //   }
    //   if (e.which == 75){
    //     audio11.stop().animate({volume: 1.0}, 1800, function() {
    //       audio11.toggle('fast', function (){
    //         audio11.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released K');
    //   }
    //   if (e.which == 76){
    //     audio12.stop().animate({volume: 1.0}, 1800, function() {
    //       audio12.toggle('fast', function (){
    //         audio12.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released L');
    //   }
    //   if (e.which == 77){
    //     audio13.stop().animate({volume: 1.0}, 1800, function() {
    //       audio13.toggle('fast', function (){
    //         audio13.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released M');
    //   }
    //   if (e.which == 78){
    //     audio14.stop().animate({volume: 1.0}, 1800, function() {
    //       audio14.toggle('fast', function (){
    //         audio14.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released N');
    //   }
    //   if (e.which == 79){
    //     audio15.stop().animate({volume: 1.0}, 1800, function() {
    //       audio15.toggle('fast', function (){
    //         audio15.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released O');
    //   }
    //   if (e.which == 80){
    //     audio16.stop().animate({volume: 1.0}, 1800, function() {
    //       audio16.toggle('fast', function (){
    //         audio16.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released P');
    //   }
    //   if (e.which == 81){
    //     audio17.stop().animate({volume: 1.0}, 1800, function() {
    //       audio17.toggle('fast', function (){
    //         audio17.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released Q');
    //   }
    //   if (e.which == 82){
    //     audio18.stop().animate({volume: 1.0}, 1800, function() {
    //       audio18.toggle('fast', function (){
    //         audio18.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released R');
    //   }
    //   if (e.which == 83){
    //     audio19.stop().animate({volume: 1.0}, 1800, function() {
    //       audio19.toggle('fast', function (){
    //         audio19.animate({volume: 1.0}); 
    //       })
    //     })
    //     ///////////
    //     // audio22.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio22.toggle('fast', function (){
    //     //     audio22.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     // audio23.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio23.toggle('fast', function (){
    //     //     audio23.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     // audio24.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio24.toggle('fast', function (){
    //     //     audio24.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     // audio25.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio25.toggle('fast', function (){
    //     //     audio25.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     // audio26.stop().animate({volume: 1.0}, 1800, function() {
    //     //   audio26.toggle('fast', function (){
    //     //     audio26.animate({volume: 1.0}); 
    //     //   })
    //     // })
    //     ///////////
    //     console.log('Released S');
    //   }
    //   if (e.which == 84){
    //     audio20.stop().animate({volume: 1.0}, 1800, function() {
    //       audio20.toggle('fast', function (){
    //         audio20.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released T');
    //   }
    //   if (e.which == 85){
    //     audio21.stop().animate({volume: 1.0}, 1800, function() {
    //       audio21.toggle('fast', function (){
    //         audio21.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released U');
    //   }
    //   if (e.which == 86){
    //     audio22.stop().animate({volume: 1.0}, 1800, function() {
    //       audio22.toggle('fast', function (){
    //         audio22.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released V');
    //   }
    //   if (e.which == 87){
    //     audio23.stop().animate({volume: 1.0}, 1800, function() {
    //       audio23.toggle('fast', function (){
    //         audio23.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released W');
    //   }
    //   if (e.which == 88){
    //     audio24.stop().animate({volume: 1.0}, 1800, function() {
    //       audio24.toggle('fast', function (){
    //         audio24.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released X');
    //   }
    //   if (e.which == 89){
    //     audio25.stop().animate({volume: 1.0}, 1800, function() {
    //       audio25.toggle('fast', function (){
    //         audio25.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released Y');
    //   }
    //   if (e.which == 90){
    //     audio26.stop().animate({volume: 1.0}, 1800, function() {
    //       audio26.toggle('fast', function (){
    //         audio26.animate({volume: 1.0}); 
    //       })
    //     })
    //     console.log('Released Z');
    //   }
    // })




});