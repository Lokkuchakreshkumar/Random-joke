let url = "https://icanhazdadjoke.com/";
let config = {
  headers: {
    Accept: "application/json",
  },
};
async function getJoke() {
  let response = await axios.get(url, config);
  let data = response.data;
  let joke = data.joke;
  cleardiv();
  putjoke();
  printJoke(joke);
}
function printJoke(joke) {
  let p = document.createElement("p");
  p.innerText = "";
  p.innerText = joke;
  let div = document.querySelector(".container");
  div.appendChild(p);
}
let emojis = ["😁", "😂", "😉", "😊", "🤣", "😆", "☺️", "😹", "😜", "🤭"];
function getrandomEmoji() {
  let random = Math.floor(Math.random() * emojis.length);
  return random;
}
function putjoke() {
  let randomNumber = getrandomEmoji();
  let p = document.createElement("p");
  p.className = "emoji";
  p.innerText = "";
  p.innerText = emojis[randomNumber];
  let div = document.querySelector(".container");
  div.appendChild(p);
}
btn = document.querySelector("button");
btn.addEventListener("click", () => {
  getJoke();
});
function cleardiv() {
  let container = document.querySelector(".container");
  container.innerHTML = "";
}
