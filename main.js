/* global data */

var $car = document.querySelector('div');
var intervalID = null;

function engine() {
  switch (data.orientation) {
    case 'north':
      data.location.y -= data.speed;
      $car.style.top = data.location.y + 'px';
      break;
    case 'east':
      data.location.x += data.speed;
      $car.style.left = data.location.x + 'px';
      break;
    case 'south':
      data.location.y += data.speed;
      $car.style.top = data.location.y + 'px';
      break;
    case 'west':
      data.location.x -= data.speed;
      $car.style.left = data.location.x + 'px';
  }
}

document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'ArrowUp':
      switch (data.orientation) {
        case 'east':
          data.rotation -= 0.25;
          break;
        case 'south':
          data.rotation += 0.5;
          break;
        case 'west':
          data.rotation += 0.25;
      }
      $car.style.transform = 'rotate(' + data.rotation + 'turn)';
      data.orientation = 'north';
      break;
    case 'ArrowRight':
      switch (data.orientation) {
        case 'south':
          data.rotation -= 0.25;
          break;
        case 'west':
          data.rotation += 0.5;
          break;
        case 'north':
          data.rotation += 0.25;
      }
      $car.style.transform = 'rotate(' + data.rotation + 'turn)';
      data.orientation = 'east';
      break;
    case 'ArrowDown':
      switch (data.orientation) {
        case 'west':
          data.rotation -= 0.25;
          break;
        case 'north':
          data.rotation += 0.5;
          break;
        case 'east':
          data.rotation += 0.25;
      }
      $car.style.transform = 'rotate(' + data.rotation + 'turn)';
      data.orientation = 'south';
      break;
    case 'ArrowLeft':
      switch (data.orientation) {
        case 'north':
          data.rotation -= 0.25;
          break;
        case 'east':
          data.rotation += 0.5;
          break;
        case 'south':
          data.rotation += 0.25;
      }
      $car.style.transform = 'rotate(' + data.rotation + 'turn)';
      data.orientation = 'west';
      break;
    case ' ':
      if (!data.enginesOn) {
        data.enginesOn = true;
        intervalID = setInterval(engine, 16);
      } else {
        data.enginesOn = false;
        clearInterval(intervalID);
      }
  }
});
