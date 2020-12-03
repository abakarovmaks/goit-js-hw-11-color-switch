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
    this.disabledStop();
  }

  disabledStop() {
    stopBtn.disabled = true;
  }

  btnStart() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      this.onChangeColor();
    }, 1000);

    this.startButtonDisable();
  }

  btnStop() {
    clearInterval(this.intervalId);
    this.isActive = false;

    this.stopButtonDisable();
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

  startButtonDisable() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }
  stopButtonDisable() {
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
}

startBtn.addEventListener('click', () => {
  colorPicker.btnStart();
});
stopBtn.addEventListener('click', () => {
  colorPicker.btnStop();
});

const colorPicker = new ColorPicker();
