// JS for Curricular sub-account only
$(function(){
  var $body = $('body');
  if($body.hasClass('gradebook')) {
    // Insert link to submit grades from gradebook page
    var gradesToolId = 2242; // ID of the LTI tool
    var submitGradesUrlPrefix = ENV.GRADEBOOK_OPTIONS.context_url;
    var submitGradesUrl = submitGradesUrlPrefix+'/external_tools/'+gradesToolId;
    var buttonHTML = '<a href="'+submitGradesUrl+'" class="ui-button"><i class="icon-assignment"></i> Submit Final Grades</a>';
    $('.gradebook_menu').prepend(buttonHTML);
  }

  if($body.hasClass('syllabus')) {
    // Add a button to launch the Outline Builder, which triggers the RTE LTI Launch
    $('.edit_syllabus_link').after('<a class="Button Button--primary icon-compose" id="launch_outline_editor_button">Course Outline Builder</a>');
    $('#launch_outline_editor_button').click(function(){
      $('#edit_course_syllabus_form').triggerHandler("edit");
      setTimeout(
        function(){ $('div[aria-label="Course Outline Builder"]').click(); },
        100
      );
    });
  }
});
