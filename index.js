const API_URL = "https://icanhazdadjoke.com/";
const HTMLelement = document.getElementById("answer");

async function getAJoke() {
  const answer = await fetch(API_URL, {
    headers: {
      Accept: "application/json",
    },
  }).then((response) => response.json())

  console.log(answer);



 HTMLelement.innerHTML = answer.joke

}

// fetch(`${API_URL}/users`)
//   .then((response) => response.json())
//   .then((users) => {
//     const template = users.map((user) => `<li>${user.name} ${user.email}</li>`);
//     HTMLResponse.innerHTML = `<ul>${template}</ul>`
//   });
