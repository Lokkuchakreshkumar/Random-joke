let url = "https://icanhazdadjoke.com/";
let config = {
  headers: {
    Accept: "application/json",
  },
};
getJoke();
p = document.createElement("p");
let emop = document.createElement("p");
async function getJoke() {
  let response = await axios.get(url, config);
  let data = response.data;
  let joke = data.joke;
  // cleardiv();
  putjoke();
  printJoke(joke);
}
function printJoke(joke) {
  p.innerText = "";
  p.innerText = joke;
  p.className = "name";
  let div = document.querySelector(".container");
  div.appendChild(p);
}
let emojis = ["😁", "😂", "😉", "😊", "🤣", "😆", "☺️", "😹", "😜", "🤭", "🤪"];
function getrandomEmoji() {
  let random = Math.floor(Math.random() * emojis.length);
  return random;
}
function putjoke() {
  let randomNumber = getrandomEmoji();
  emop.className = "emoji";
  emop.innerText = "";
  emop.innerText = emojis[randomNumber];
  let div = document.querySelector(".container");
  div.appendChild(emop);
}
btn = document.querySelector("button");
btn.addEventListener("click", () => {
  getJoke();
});
// function cleardiv() {
//   let container = document.querySelector(".container");

// }
