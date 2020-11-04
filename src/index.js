import './css/common';
import colors from './js/colors';

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

class ColorPicker {
  constructor() {
    this.intervalId = null;
    this.isActive = false;
    this.colors = colors;
  }

  onBtnStart() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      this.onChangeColor();
    }, 1000);
  }

  onBtnStop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  }

  randomIntegerFromInterval(min, max) {
    const index = this.colors[
      Math.floor(Math.random() * (max - min + 1) + min)
    ];
    if (index === this.index) {
      this.randomIntegerFromInterval(min, max);
    } else {
      this.index = index;
    }
  }
  onChangeColor() {
    this.randomIntegerFromInterval(0, this.colors.length - 1);
    body.style.backgroundColor = this.index;
  }
}

startBtn.addEventListener('click', () => {
  colorPicker.onBtnStart();
});
stopBtn.addEventListener('click', () => {
  colorPicker.onBtnStop();
});

const colorPicker = new ColorPicker();
