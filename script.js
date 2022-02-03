// Autor : Mateus De La Fuente Cezar
// linkedin: https://www.linkedin.com/in/mateus-cezar-a43665a5/

const dias = document.querySelector(".dias span");
const horas = document.querySelector(".horas span");
const minutos = document.querySelector(".minutos span");
const segundos = document.querySelector(".segundos span");

class Countdown {
  constructor(dataFutura) {
    this.dataFutura = new Date(dataFutura);
  }
  get _tempoFuturo() {
    return this.dataFutura.getTime();
  }
  get _tempoAtual() {
    return new Date().getTime();
  }
  get _tempoDiff() {
    return this._tempoFuturo - this._tempoAtual;
  }
  get countdownDias() {
    return Math.floor(this._tempoDiff / (24 * 60 * 60 * 1000));
  }
  get countdownHoras() {
    return Math.floor(this._tempoDiff / (60 * 60 * 1000));
  }
  get countdownMinutos() {
    return Math.floor(this._tempoDiff / (60 * 1000));
  }
  get countdownSegundos() {
    return Math.floor(this._tempoDiff / 1000);
  }
  get total() {
    const dias = this.countdownDias;
    const horas = this.countdownHoras % 24;
    const minutos = this.countdownMinutos % 60;
    const segundos = this.countdownSegundos % 60;
    return {
      dias,
      horas,
      minutos,
      segundos,
    };
  }
  atualizarDom() {
    const countdown = setInterval(() => {
      dias.innerText = this.total.dias;
      horas.innerText = this.total.horas;
      minutos.innerText = this.total.minutos;
      segundos.innerText = this.total.segundos;
      if (
        this.total.dias <= 0 &&
        this.total.horas <= 0 &&
        this.total.minutos <= 0 &&
        this.total.segundos <= 0
      ) {
        clearInterval(countdown);
      }
    }, 1000);
  }
  init() {
    this.atualizarDom();
  }
}

const countdown = new Countdown("08 Feb 2022 19:30:00 GMT-0300"); // <---- insira a data aqui
countdown.init();
