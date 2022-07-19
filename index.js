const API_URL = "https://icanhazdadjoke.com/";
const API_Chuck = "https://api.chucknorris.io/jokes/random";
const HTMLelement = document.getElementById("answer");
const background = document.getElementById("bodyBackground")

async function getAJoke() {
  const dadJokes = await fetch(API_URL, {
    headers: {
      Accept: "application/json",
    },
  }).then((response) => response.json());

  //Línea para imprimir sólo el ejercicio 1
 console.log(dadJokes.joke);

  const chuckNorrisJokes = await fetch(API_Chuck, {
    headers: {
      Accept: "application/json",
    }
  }).then((answer) => answer.json());

  const jokesArray = [dadJokes.joke, chuckNorrisJokes.value];

  // generamos un número aleatorio, recordatorio: Math.floor da un número entero!
  const randomJokes = Math.floor(Math.random() * jokesArray.length);
  const answer = jokesArray[randomJokes]
  HTMLelement.innerHTML = answer

  //cambio del blob del fondo dependiendo del array de votaciones

  if (reportJokes.length % 2 === 0) {
    background.style.backgroundImage = "url('imagenes/blob4.svg')"
  }
  if (reportJokes.length % 2 !== 0) {
    background.style.backgroundImage = "url('imagenes/blob.svg')"
  }
  
}

const reportJokes = [];

function giveReport(vote) {
  //llamo a la función getAJoke para evitar puntuar dos veces el mismo chiste.
  getAJoke()
  const jokes = HTMLelement.innerHTML;
  let punctuationValue = 0;

  // validación para evitar puntuaciones sin chistes
  if (!HTMLelement.innerText) return alert("No jokes, no punctuation!!");

  if (vote === 1) punctuationValue = 1;
  if (vote === 2) punctuationValue = 2;
  if (vote === 3) punctuationValue = 3;

  
  const currentDate = new Date();
  reportJokes.push({
    score: punctuationValue,
    date: currentDate,
    joke: jokes,
  });

  console.log(punctuationValue);
  console.log(currentDate);
  console.log(reportJokes);
}

const API_Weather =
  "https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019";
async function tellTheWeather() {
  const weather = await fetch(API_Weather, {
    headers: {
      Accept: "application/json",
    },
  }).then((response) => response.json()); 

  console.log(weather.temperatura_actual);
  const weatherPrinted = document.getElementById("weather");
  const city = weather.municipio.NOMBRE_CAPITAL;
  const weatherInfo = weather.stateSky.description 
  const temperature = weather.temperatura_actual
  weatherPrinted.innerHTML = `${city} </br> ${weatherInfo} ${temperature}℃`;
  console.log(weather.stateSky.description)

}


