import './css/common.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const setRandomBodyColor = () => {
  const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  document.body.style.backgroundColor = color;
};

let interval = null;

refs.startBtn.addEventListener(
  'click',
  event => (interval = setInterval(() => setRandomBodyColor(), 1000)),
);
refs.stopBtn.addEventListener('click', event => clearInterval(interval));
