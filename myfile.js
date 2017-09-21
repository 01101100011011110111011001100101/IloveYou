$('.fader2').hide().delay(1000).fadeIn(9000);
$(document).ready(function() {

  var j = 0;
  var delay = 2100; //millisecond delay between cycles
  function cycleThru() {
    var jmax = $("div#cyclelist h2").length - 1;
    $("div#cyclelist h2:eq(" + j + ")")
      .animate({
        "opacity": "1"
      }, 400)
      .animate({
        "opacity": "1"
      }, delay)
      .animate({
        "opacity": "0"
      }, 400, function() {
        (j == jmax) ? j = 0: j++;
        cycleThru();
      });
  };
  
});

