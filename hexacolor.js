var array = ["blue", "purple", "green", "red", "yellow", "orange"];

var generateList = function(){
  var array = ["blue", "purple", "green", "red", "yellow", "orange"];
  var output = [];
  while (array.length) {
    output.push(array.splice(Math.floor(Math.random() * array.length), 1)[0]);
  }
  return output;
};

$(document).ready(function() {
    $('#start').click(function() {
        $('#start').fadeOut('slow');
        $('#title').fadeOut('slow');
        $('#description').fadeOut('slow');
    setTimeout(function() {
        $('#hexagon').fadeIn('slow').slideUp;
        $('#colors').fadeIn().slideUp;
        $('#timer').fadeIn().slideUp;
        $('#footer').fadeIn(5000);
    }, 600);
    });
});

$('polygon').click(function() {
  $(this).css("fill", "#DDDDDD");
});

// $('#').click(function() {
//   $('#').


function timer()
{
var count=0.00;

var counter=setInterval(timer, 10); //1000 will  run it every 1 second

  count+=0.01;
  // document.getElementById(#timer).innerHTML=count
  document.write(count);
  if (count == 600)
  {
     clearInterval(counter);
     document.write("You Lose!");
  }
}