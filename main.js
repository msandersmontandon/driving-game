/* global data */

var $car = document.querySelector('div');
var intervalID = null;

function engine() {
  data.location.x += data.speed;
  $car.style.left = data.location.x + 'px';
}

document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'ArrowUp':
      $car.className = 'north';
      data.orientation = 'north';
      break;
    case 'ArrowRight':
      $car.className = 'east';
      data.orientation = 'east';
      break;
    case 'ArrowDown':
      $car.className = 'south';
      data.orientation = 'south';
      break;
    case 'ArrowLeft':
      $car.className = 'west';
      data.orientation = 'west';
      break;
    case ' ':
      intervalID = setInterval(engine, 16);
  }
});
