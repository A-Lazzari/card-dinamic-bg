// DOM Elements

const body = document.body;
const lightButton = document.getElementById("light");
const blueButton = document.getElementById("blue");
const greenButton = document.getElementById("green");
const darkButton = document.getElementById("dark");
const redButton = document.getElementById("red");
const resetButton = document.getElementById("reset");
const todos = ["light", "dark", "green", "blue", "red"];

// Button Event Listener

lightButton.onclick = ()=>{
  body.classList.remove(...todos);
  body.classList.add("light");
  localStorage.setItem("tema", "light");
}

blueButton.onclick = ()=>{
  body.classList.remove(...todos);
  body.classList.add("blue");
  localStorage.setItem("tema", "blue");
}

greenButton.onclick = ()=>{
  body.classList.remove(...todos);
  body.classList.add("green");
  localStorage.setItem("tema", "green");
}

redButton.onclick = ()=>{
  body.classList.remove(...todos);
  body.classList.add("red");
  localStorage.setItem("tema", "red");
}

darkButton.onclick = ()=>{
  body.classList.remove(...todos);
  body.classList.add("dark");
  localStorage.setItem("tema", "dark");
}

resetButton.onclick = ()=>{
  body.classList.remove(...todos);
  localStorage.setItem("tema", "nada");
}

// Armazenar em cachê (local storage)

const tema = localStorage.getItem("tema");

// Se há tema no cache, passar para o body
if (tema) {
  body.classList.add(tema);
}
