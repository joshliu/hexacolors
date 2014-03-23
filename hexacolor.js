$(document).ready(function() {
    $('#start').click(function() {
        $('#start').fadeOut('slow');
        $('#hexagon').fadeIn()
    });
});

var generateList = function(){
  $('#start_button').fadeOut();
  $('#hexagon').fadeIn();
}