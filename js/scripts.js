var ping = function(number2) {
  if(number2 % 3 === 0) {
    return true;
  }
  else if (number2 % 5 === 0) {
    return true;
  }
  else if (number2 % 15 === 0) {
    return true;
  }
};

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number2").val());
    var result = ping(number);

  });
  
});
