let defaultColor = 'black'; //global variable for color selector buttons
let rgbColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const boxes = document.querySelectorAll('.grid-box-column');
setColor(defaultColor);

function setColor(selectedColor) {
  boxes.forEach((box) => {

    box.addEventListener('mouseenter', function (e) {
      if (selectedColor == 'rgb') { //Random color generator
        let randomColor = rgbColors[Math.floor(Math.random() * 6)];
        e.target.style.background = randomColor;
      } else { //Else just use color parameter
        e.target.style.background = selectedColor;
      }
    });
  });
}

const black = document.querySelector('#black-btn');
const eraser = document.querySelector('#erase-btn');
const reset = document.querySelector('#reset-btn');
const rgb = document.querySelector('#gay-btn');

//eraser button
eraser.addEventListener('click', () => {
  setColor('white');
});

//monochrome button
black.addEventListener('click', () => {
  setColor(defaultColor);
});

//reset button
reset.addEventListener('click', () => {
  boxes.forEach((box) => {
    box.style.background = 'white';
  });
});

//rainbow button
rgb.addEventListener('click', () => {
  setColor('rgb');
});