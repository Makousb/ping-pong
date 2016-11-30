 //Business logic

var ping = function(number) {
  if(number % 3 === 0) {
    $('#result').append("ping");
  }
  else if (number % 5 === 0) {
    $('#result').append("pong");
  }
  else if (number % 15 === 0) {
    $('#result').append("pingpong");
  }
};


//Front-end logic

$(document).ready(function() {
  $("#button1").click(function(event) {
    event.preventDefault();
    var number = parseInt($("#number2").val());
    var result = ping(number);

    $("#number2").text(number);








  });

});
