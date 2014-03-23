$(document).ready(function() {
    $('#start').click(function() {
        $('#start').fadeOut('slow');
        $('#hexagon').fadeIn();
        $('#colors').fadeIn();
        $('#timer').fadeIn();
    });
});



var generateList = function(){
  var array = [blue, purple, green, red, yellow, orange];
  var output = [];
  while (array.length) {
    output.push(array.splice(Math.floor(Math.random() * array.length), 1)[0]);
  }
  return output;
}

var count=0;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count+=1;
  if (count == 600)
  {
     clearInterval(counter);
     return ("You Lose!");
  }
}

var reset = function(){

}