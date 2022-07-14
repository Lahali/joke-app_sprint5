const API_URL = "https://icanhazdadjoke.com/";
const HTMLelement = document.getElementById("answer");

async function getAJoke() {
  const answer = await fetch(API_URL, {
    headers: {
      Accept: "application/json",
    },
  }).then((response) => response.json());

  console.log(answer);

  HTMLelement.innerHTML = answer.joke;
  //document.getElementById("onePoint").style = "inline";
}

const reportJokes = [];

function giveReport(vote) {
  const jokes = HTMLelement.innerHTML;
  let punctuationValue = 0;

  if(!HTMLelement.innerText) return alert('No jokes, no punctuation!!')

  if (vote === 1) {
    punctuationValue = 1;
  }
  if (vote === 2) {
    punctuationValue = 2;
  }
  if (vote === 3) {
    punctuationValue = 3;
  }
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

const API_Weather = "https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019"
async function tellTheWeather() {
  const weather = await fetch(API_Weather, {
    headers: {
      Accept: "application/json"
    }
  }).then((response) => response.json())

console.log(weather.temperatura_actual)
const weatherPrinted = document.getElementById("weather")
const city = "Barcelona"
weatherPrinted.innerHTML = `${city} </br> ${weather.temperatura_actual}`

}

// fetch(`${API_URL}/users`)
//   .then((response) => response.json())
//   .then((users) => {
//     const template = users.map((user) => `<li>${user.name} ${user.email}</li>`);
//     HTMLResponse.innerHTML = `<ul>${template}</ul>`
//   });
