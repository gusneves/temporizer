"use strict";

let timer = 20 * 6000;
let flag = 0;
let cron, minutes, seconds, cent;

//inicia o temporizador
function start() {
  if (timer > 0) {
    cron = setInterval(() => {
      counter();
    }, 10);
    flag = 1;
  }
}

//pausa o tenporizador, mantém o tempo
function pause() {
  if (flag == 0) {
    start();
  } else {
    clearInterval(cron);
    flag = 0;
  }
}

//função do interval e checa final do timer
function counter() {
  setOnScreen();
  if (--timer < 0) {
    timer = 0;
    flag = 0;
    clearInterval(cron);
  }
}

//realiza cálculos e atualiza elemento na tela
function setOnScreen() {
  minutes = parseInt(timer / 6000, 10);
  seconds = parseInt((timer % 6000) / 100, 10);
  cent = parseInt(timer % 100, 10);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  cent = cent < 10 ? "0" + cent : cent;
  let format = minutes + " : " + seconds + " : " + cent;
  document.getElementById("counter").innerText = format;
}

//adiciona 1 minuto
function plus() {
  if (timer < 354000) {
    timer = timer + 6000;
    setOnScreen();
  }
}

//subtrai 1 minuto
function minus() {
  if (timer >= 6000) {
    timer = timer - 6000;
    setOnScreen();
  }
}
