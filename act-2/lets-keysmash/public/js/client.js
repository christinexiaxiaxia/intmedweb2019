
$(function () {

    var socket = io();

    // $(document).click(function() {
    //     // alert(randomColor())
    //     socket.emit('random color', 'yes');
    // })

    // socket.on('random color', function(color){
    //     $('body').css({
    //         'background': color
    //     })
    // })


    // ONE TIME USE FUNCTION https://stackoverflow.com/questions/5353254/javascript-onkeydown-event-fire-only-once

    var fired = false;

    $(document).on('keydown', function(e) {
        if (e.which == 32) {
            console.log('Pressed SPACE')
            socket.emit('start', 'yes');
        }
    })

    socket.on('start', function(black){
        document.getElementById("audio1").play();
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
        document.getElementById("audio13").play();
        document.getElementById("audio14").play();
        // document.getElementById("audio15").play();
        // document.getElementById("audio16").play();
        // document.getElementById("audio17").play();
        document.getElementById("audio18").play();
        // document.getElementById("audio19").play();
        // document.getElementById("audio20").play(); // THE LEMONHEAD ONE
        // document.getElementById("audio21").play();
        // document.getElementById("audio22").play();
        // document.getElementById("audio23").play();
        document.getElementById("audio24").play();
        // document.getElementById("audio25").play();
        document.getElementById("audio26").play();


        // $('audio').animate({volume: 0.001}); 

        // $('audio').stop().animate({volume: 1.0}, 8000, function() {
        //   $('audio').toggle('fast', function (){
        //     $('audio').animate({volume: 1.0}); 
        //   })
        // })

        $('body').css({'background': black})
        $('.box').css({'background': black})
        $('.start-screen').css({'color':'white', 'opacity':'0'});

        console.log('Pressed space, music playing');
    })

    // $(document).on('keydown', function(e) {
    //     socket.emit('make transparent', 'yes');
    // })

    // $(document).on('keyup', function(e) {
    //     socket.emit('make transparent', 'no');
    // })

    // socket.on('make transparent', function(opacity){
    //     $('.start-screen').css({'opacity':opacity,'transition-duration':'2s'});
    // })



    /////// BRUTE FORCE SHENANIGANS

    // $(document).keydown(function(e) {
    //     if (e.which == 65) {
    //         console.log('Pressed A')
    //         socket.emit('make white', 'yes');
    //     }
    // })

    // socket.on('make white', function(white){
    //     $('.boxA').css({'background': white})
    // })






















// https://stackoverflow.com/questions/16345870/keydown-keyup-events-for-specific-keys

    // var keyAction = {

    //     65 : ['#boxA', 'css', "background", ['white','black'], ['make white','make black'] ], // A key
    //     66 : ['#boxB', 'css', "background", ['white','black'], ['make white','make black'] ], // B key
    //     67 : ['#boxC', 'css', "background", ['white','black'], ['make white','make black'] ], // C key
    //     68 : ['#boxD', 'css', "background", ['white','black'], ['make white','make black'] ], // D key
    //     69 : ['#boxE', 'css', "background", ['white','black'], ['make white','make black'] ], // E key
    //     70 : ['#boxF', 'css', "background", ['white','black'], ['make white','make black'] ], // F key
    //     71 : ['#boxG', 'css', "background", ['white','black'], ['make white','make black'] ], // G key
    //     72 : ['#boxH', 'css', "background", ['white','black'], ['make white','make black'] ], // H key
    //     73 : ['#boxI', 'css', "background", ['white','black'], ['make white','make black'] ], // I key
    //     74 : ['#boxJ', 'css', "background", ['white','black'], ['make white','make black'] ], // J key
    //     75 : ['#boxK', 'css', "background", ['white','black'], ['make white','make black'] ], // K key
    //     76 : ['#boxL', 'css', "background", ['white','black'], ['make white','make black'] ], // L key
    //     77 : ['#boxM', 'css', "background", ['white','black'], ['make white','make black'] ], // M key
    //     78 : ['#boxN', 'css', "background", ['white','black'], ['make white','make black'] ], // N key
    //     79 : ['#boxO', 'css', "background", ['white','black'], ['make white','make black'] ], // O key
    //     80 : ['#boxP', 'css', "background", ['white','black'], ['make white','make black'] ], // P key
    //     81 : ['#boxQ', 'css', "background", ['white','black'], ['make white','make black'] ], // Q key
    //     82 : ['#boxR', 'css', "background", ['white','black'], ['make white','make black'] ], // R key
    //     83 : ['#boxS', 'css', "background", ['white','black'], ['make white','make black'] ], // S key
    //     84 : ['#boxT', 'css', "background", ['white','black'], ['make white','make black'] ], // T key
    //     85 : ['#boxU', 'css', "background", ['white','black'], ['make white','make black'] ], // U key
    //     86 : ['#boxV', 'css', "background", ['white','black'], ['make white','make black'] ], // V key
    //     87 : ['#boxW', 'css', "background", ['white','black'], ['make white','make black'] ], // W key
    //     88 : ['#boxX', 'css', "background", ['white','black'], ['make white','make black'] ], // X key
    //     89 : ['#boxY', 'css', "background", ['white','black'], ['make white','make black'] ], // Y key
    //     90 : ['#boxZ', 'css', "background", ['white','black'], ['make white','make black'] ], // Z key

    // }

    // // $(document).on('keydown keyup', function(e) {
    // $(document).on('keydown', function(e) { // CREATED TO TEST STUFF, COLOUR CHANGE STAYS

      
    //         var key = e.which,              // Get the keyCode
    //         keyArr = keyAction[key],    // get our array from our list
    //         io = e.type=="keydown" ? 0 : 1, // io will be 0 || 1 depending if key is down or up
    //         element,
    //         method,
    //         property = {}; // the Method Properties Object will look like e.g: {"background":"red"}

    //     if(typeof keyArr != "undefined"){
    //         element = keyArr[0], 
    //         method = keyArr[1],
    //         property[keyArr[2]] = keyArr[3][io];   

    //         // $(element)[method](property);  // do stuff
    //         // socket.emit('make white', 'yes');
    //     }
    //     // console.log(key, io, element, method, property);

    // });
});





