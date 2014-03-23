$(document).ready(function() {
    $('#start').click(function() {
        $('#start').fadeOut('slow');
        $('#hexagon').fadeIn()
        // $('#colors')
        // startTimer();
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

var startTimer = function(){
  var x = true;
  while (x === true);{
    if x.
  }
}

var reset = function(){

}