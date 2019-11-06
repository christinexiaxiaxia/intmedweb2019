// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-3103984-3']);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// Other Setup
$(function(){
  var $body = $('body');
  // Allow LTI iframes to display fullscreen content
  $('iframe#tool_content').attr('allowfullscreen', '1');

  // 'Pages' content isn't injected until after this script runs
  // Delay updates until after DOM modifications are complete
  var timeout;
  $('div.user_content').bind("DOMSubtreeModified", function(){
    if(timeout){ window.clearTimeout(timeout); }
    timeout = setTimeout(function(){
        // Allow iframes to be fullscreen
        $('div.user_content iframe').attr('allowfullscreen', '1');

        // Allow audio elements with controls
        $('div.user_content audio').attr('controls', '1');
      },
      100
    );
  });
  // $('div#wiki_page_show').bind("DOMSubtreeModified", function(){
  //   if(timeout){ window.clearTimeout(timeout); }
  //   timeout = setTimeout(
  //     function(){ $('div.user_content iframe').attr('allowfullscreen', '1'); },
  //     100
  //   );
  // });

  // Hide "Scoring details"
  if($body.hasClass('gradebook2') || $body.hasClass('grades')) {
    $('#show_all_details_button').remove();    // Remove sidebar button to show all grade details
    $('.toggle_score_details_link').remove();  // Remove assignment row button
    $('tr.grade_details').remove();            // Remove the detail content
  }

  // Trigger Canvas' built-in jQuery plugin to make elements fill their containers, even when resizing
  // Used, for example, in the Supervisor/Worker Safety Awarenes Training.
  if (typeof $().fillWindowWithMe == 'function') {
    $('.ocadu-fill-window').fillWindowWithMe()
  }


});
