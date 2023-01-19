const joke = "https://official-joke-api.appspot.com/random_joke";
let jokesText = document.querySelector("#jokes") as HTMLParagraphElement;
const loader = document.querySelector("img") as HTMLImageElement;

let jokeButton = document.querySelector(".newJokes") as HTMLButtonElement;


async function getSWData() {
    const response = await fetch(joke);
    const jokes = await response.json();
    return jokes;
}

jokeButton.addEventListener("click", (event) => {
    event.preventDefault();
    let randomGifTime = Math.floor(Math.random() * (3000 - 1000 + 1) + 1000); 
    console.log(randomGifTime)
    jokesText.innerHTML = '';
    loader.style.display = 'block'; 
    setTimeout(() => {
        getSWData().then((jokes) => {
            jokesText.innerHTML = `${jokes.setup} <br> ${jokes.punchline}`;
            loader.style.display = 'none'; 
        });
    }, randomGifTime);
    
});