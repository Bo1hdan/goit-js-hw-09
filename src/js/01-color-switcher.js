function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let intervalId;
let isActive = false;

startBtn.addEventListener('click', () => {
  if (isActive) {
    return;
  }
  isActive = true;
  startBtn.disabled = true;

  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  isActive = false;
  startBtn.disabled = false;

  clearInterval(intervalId);
});
