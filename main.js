/* global data */

var $car = document.querySelector('img');
var intervalID = null;

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
      intervalID = setInterval(function () {}, 16);
  }
});
