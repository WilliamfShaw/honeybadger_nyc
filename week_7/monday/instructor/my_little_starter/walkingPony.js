$(function() {
  console.log('Loaded, bro');
  walkingPony();
});

var walkingPony = function() {
  var $pony = $('#pony');
  let distance = 1625;

  setInterval(function () {
    $pony.css('left', `${distance}px`);
    if (distance < -600) {
      distance = 1625;
    } else {
      distance -= 5;
    }
  }, 60);
};
