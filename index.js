const API_URL = "https://icanhazdadjoke.com/"


async function getAJoke() {
    const answer = await fetch(API_URL, {
        headers: {
            'Accept': 'application/json'
        }
    }).then((response) => response.json())
    
   console.log(answer) 
}


