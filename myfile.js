$(document).ready(function() {

  var j = 0;
  var delay = 2000; //millisecond delay between cycles
  function cycleThru() {
    var jmax = $("div#cyclelist h2").length - 1;
    $("div#cyclelist h2:eq(" + j + ")")
      .animate({
        "opacity": "1"
      }, 450)
      .animate({
        "opacity": "1"
      }, delay)
      .animate({
        "opacity": "0"
      }, 450, function() {
        (j == jmax) ? j = 0: j++;
        cycleThru();
      });
  };
cycleThru();

});
