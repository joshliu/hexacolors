//define objects
var finalScore = 0;
var array_of_colors = ["Blue", "Purple", "Green", "Red", "Yellow", "Orange"];

function shuffle(array) {
  var currentIndex = array.length,
  temporaryValue,
  randomIndex;

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

function endGame() {
  finalScore = currentTime.toFixed(2);
  $('.panel').fadeOut(200);
  $('#hexagon').fadeOut(200);
  $('.well').fadeOut(200);
  $('#timer').fadeOut(200);
  $('#seconds').fadeOut(200);
  setTimeout(function(){
    $('#hexagon').fadeIn(200);
    $('#score').html(finalScore);
    var your_rank = "";
      if (currentTime < 3){
        your_rank = "Light";
      }else
      if (currentTime < 3.5){
        your_rank = "Superhuman";
      }else
      if (currentTime < 4){
        your_rank = "Rocket";
      }else
      if (currentTime < 6){
        your_rank = "Average";
      }else
      if (currentTime < 8){
        your_rank = "Slower";
      }else
      if (currentTime < 12){
        your_rank = "Sloth";
      }else
      if (currentTime < 36){
        your_rank = 'Slowpoke';
      }else{
        your_rank = "You lose";
      }
    $('#rank').html(your_rank);
    $('#endgame').fadeIn(200);
  }, 300);
}

function startTimer() {
  var timer = setInterval(function(){
    currentTime += 0.01;
    $('#timer').html(currentTime.toFixed(2));
    if (currentTime >= 36) {clearInterval(timer);
      endGame();
    }
    if (testing_array.length === 0) {clearInterval(timer);
      setTimeout(endGame(), 1);
    }
  }, 10);
}

function checkButton(color) {
  buttonpressed = color;
  if (buttonpressed === testing_array[0]) {
    testing_array.shift();
    var nextColor = testing_array[0];
    $('#colors').html(nextColor);
  }
  else {
    currentTime += 1;
  }
}

var testing_array = shuffle(array_of_colors);
var testing_string = testing_array[0];
var currentTime = 0;

//on click: do this

$(document).ready(function() {
    $('#start').click(function() {
        $('#colors').html(testing_string);
        $('#start').fadeOut(100);
        $('#title').fadeOut(200);
        $('#hidethis').fadeOut(200);
        $('#description').fadeOut(200);
        $('#footer').fadeOut(500);
        startTimer();
    setTimeout(function() {
        // $('#blue').fadeIn(200);
        // $('#purple').fadeIn(300);
        // $('#red').fadeIn(400);
        // $('#orange').fadeIn(500);
        // $('#yellow').fadeIn(600);
        // $('#green').fadeIn(700);
        $('.panel').fadeIn(200);
        $('#hexagon').fadeIn(200);
        $('.well').fadeIn(200);
        $('#timer').fadeIn(200);
        $('#seconds').fadeIn(200);
    }, 200);
    });
});

//Sense what button is pressed

// $('polygon').click(function() {
//   $(this).css("fill", "#DDDDDD");
// });

var buttonpressed = "";

$('#blue').click(function() {
  checkButton("Blue");
});
$('#red').click(function() {
  checkButton("Red");
});
$('#green').click(function() {
  checkButton("Green");
});
$('#purple').click(function() {
  checkButton("Purple");
});
$('#yellow').click(function() {
  checkButton("Yellow");
});
$('#orange').click(function() {
  checkButton("Orange");
});
