
const getCoordinates = (elem : HTMLDivElement) => {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top,
    left: box.left
  }
}

const move = (elem : HTMLDivElement, event: MouseEvent, offset:number) => {
  elem.style.left = event.pageX + offset + 'px';
}

const slider: HTMLDivElement | null = document.querySelector('.slider');
const thumb: HTMLDivElement | null = document.querySelector('.thumb');

if (thumb) {
  thumb.onmousedown = (ev: MouseEvent) => {
    var coordinates = getCoordinates(thumb);
    var shiftX = ev.pageX + coordinates.left;

    move(thumb, ev, shiftX);
  }
}


// ball.onmousedown = function(e) {
//
//   var coords = getCoords(ball);
//   var shiftX = e.pageX - coords.left;
//   var shiftY = e.pageY - coords.top;
//
//   ball.style.position = 'absolute';
//   document.body.appendChild(ball);
//   moveAt(e);
//
//   ball.style.zIndex = 1000; // над другими элементами
//
//   function moveAt(e) {
//     ball.style.left = e.pageX - shiftX + 'px';
//     ball.style.top = e.pageY - shiftY + 'px';
//   }
//
//   document.onmousemove = function(e) {
//     moveAt(e);
//   };
//
//   ball.onmouseup = function() {
//     document.onmousemove = null;
//     ball.onmouseup = null;
//   };
//
// }
//
// ball.ondragstart = function() {
//   return false;
// };
//
// function getCoords(elem) {   // кроме IE8-
//   var box = elem.getBoundingClientRect();
//   return {
//     top: box.top + pageYOffset,
//     left: box.left + pageXOffset
//   };
// }
//
