const msTens = document.getElementById('msTens');
const msHundreds = document.getElementById('msHundreds');
const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');

const startButton = document.getElementById('startBtn');
const resetButton = document.getElementById('resetBtn');

let interval;
let running;

const setValues = () => {
  msTens.textContent = 0;
  msHundreds.textContent = 0;
  secondTens.textContent = 0;
  secondOnes.textContent = 0;
};

const changeColor = () => {
  if (!running) {
    msHundreds.classList.remove('redDigit');
    msTens.classList.remove('redDigit');
    secondTens.classList.remove('redDigit');
    secondOnes.classList.remove('redDigit');
  } else {
    msHundreds.classList.add('redDigit');
    msTens.classList.add('redDigit');
    secondTens.classList.add('redDigit');
    secondOnes.classList.add('redDigit');
  }
};

const stopTimer = () => {
  window.clearInterval(interval);
  startButton.removeAttribute('disabled');
  running = false;
};

const reset = () => {
  stopTimer();
  setValues();
  changeColor();
};

function timer() {
  changeColor();
  setValues();
  running = true;

  return () => {
    msTens.textContent++;

    if (msTens.textContent > 9) {
      msTens.textContent = 0;
      msHundreds.textContent++;
    }

    if (msHundreds.textContent > 9) {
      msHundreds.textContent = 0;
      secondOnes.textContent++;
    }

    if (secondOnes.textContent > 9) {
      secondOnes.textContent = 0;
      secondTens.textContent++;
    }

    if (secondTens.textContent === '1') {
      changeColor();
      stopTimer();
    }
  };
}

startButton.addEventListener('click', () => {
  interval = window.setInterval(timer(), 10);
  startButton.setAttribute('disabled', true);
});

resetButton.addEventListener('click', reset);
