//define objects

var array_of_colors = ["Blue", "Purple", "Green", "Red", "Yellow", "Orange"];

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

function endGame() {
  $('.panel').fadeOut(300);
  $('#hexagon').fadeOut(300);
  $('#colors').fadeOut(300);
  $('#timer').fadeOut(300);
  setTimeout(function(){
    $('#hexagon').fadeIn(300);
    $('#score').html(current_time)
    var your_rank = ""
      if (current_time < 300){
        your_rank = "Light";
      }else
      if (current_time < 350){
        your_rank = "Sound";
      }else
      if (current_time < 400){
        your_rank = "Racecar";
      }else
      if (current_time < 500){
        your_rank = "Cheetah";
      }else
      if (current_time < 600){
        your_rank = "Horsey";
      }else
      if (current_time < 800){
        your_rank = "Human";
      }else
      if (current_time < 1000){
        your_rank = "Sloth";
      }else
      {    
        your_rank = "Turtle";
      }
    $('#rank').html(your_rank)
    $('#endgame').fadeIn(300);
  }, 400);
}


function startTimer() {
  var timer = setInterval(function(){
    current_time += 1;
    $('#timer').html(current_time);
    if (current_time >= 3600) {clearInterval(timer);
      $('#timer').html('You Lose! <a href="javascript:history.go(0)" class="btn btn-lg btn-default">Play Again?</a>');
    }
    if (testing_array.length == 0) {clearInterval(timer);
      setTimeout(endGame(), 1000);
    }
  }, 10);
}

function checkButton(color) {
  buttonpressed = color;
  $('#buttonpressed').html(buttonpressed);
  if (buttonpressed === testing_array[0]) {
    testing_array.shift();
    $(this).css("fill", "#DDDDDD");
  }
  else {
    current_time += 100;
  }
}

var testing_array = shuffle(array_of_colors);
var testing_string = testing_array.toString();
var current_time = 0;

//on click: do this

$(document).ready(function() {
    $('#start').click(function() {
        $('#colors').html(testing_string);
        $('#start').fadeOut(100);
        $('#title').fadeOut('slow');
        $('#hidethis').fadeOut('slow');
        $('#description').fadeOut('slow');
        $('#footer').fadeOut(500);
        startTimer();
    setTimeout(function() {
        // $('#blue').fadeIn(200);
        // $('#purple').fadeIn(300);
        // $('#red').fadeIn(400);
        // $('#orange').fadeIn(500);
        // $('#yellow').fadeIn(600);
        // $('#green').fadeIn(700);
        $('.panel').fadeIn(300);
        $('#hexagon').fadeIn(300);
        $('#colors').fadeIn(300);
        $('#timer').fadeIn(300);
    }, 600);
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