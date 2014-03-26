var array_of_colors = [" blue", " purple", " green", " red", " yellow", " orange"];

function shuffle(array) {
  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var testing_array = shuffle(array_of_colors);
var testing_string = testing_array.toString();

$(document).ready(function() {
    $('#start').click(function() {
        $('#colors').append(testing_string);
        $('#start').fadeOut('slow');
        $('#title').fadeOut('slow');
        $('#description').fadeOut('slow');
    setTimeout(function() {
        // $('#blue').fadeIn(200);
        // $('#purple').fadeIn(300);
        // $('#red').fadeIn(400);
        // $('#orange').fadeIn(500);
        // $('#yellow').fadeIn(600);
        // $('#green').fadeIn(700);
        $('#hexagon').fadeIn(300);
        $('#colors').fadeIn(300);
        $('#timer').fadeIn(300);
        $('#hidethis').fadeIn(300);
        $('#footer').fadeIn(5000);
    }, 600);
    });
});

$('polygon').click(function() {
  $(this).css("fill", "#DDDDDD");
});

var buttonpressed = "";

$('#blue').click(function() {
  buttonpressed = "Blue";
  $('#buttonpressed').html(buttonpressed);
});
$('#red').click(function() {
  buttonpressed = "Red";
  $('#buttonpressed').html(buttonpressed);
});
$('#green').click(function() {
  buttonpressed = "Green";
  $('#buttonpressed').html(buttonpressed);
});
$('#purple').click(function() {
  buttonpressed = "Purple";
  $('#buttonpressed').html(buttonpressed);
});
$('#yellow').click(function() {
  buttonpressed = "Yellow";
  $('#buttonpressed').html(buttonpressed);
});
$('#orange').click(function() {
  buttonpressed = "Orange";
  $('#buttonpressed').html(buttonpressed);
});

// var endGame = function(){
//   $(h1).fadeOut();
//   $(p).fadeOut();
//   $("#hexagon").fadeOut();
// };