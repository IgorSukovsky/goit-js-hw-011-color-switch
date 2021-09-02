const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
  "#bbdefb",
  "#82b1ff",
  "#039be5",
  "#002147",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorsLength = colors.length - 1;

const bodyRef = document.querySelector("body");
const startBtn = document.querySelector('button[data-action="start"]');
const pauseBtn = document.querySelector('button[data-action="pause"]');
const clearBtn = document.querySelector('button[data-action="clear"]');

let timerId = null;

startBtn.addEventListener("click", () => {
  startBtn.setAttribute("disabled", "disabled");
  timerId = setInterval(() => {
    let randomColor = randomIntegerFromInterval(1, colorsLength);
    bodyRef.style.backgroundColor = colors[randomColor];
    console.log("start");
  }, 200);
});

pauseBtn.addEventListener("click", () => {
  btn();
});

clearBtn.addEventListener("click", () => {
  btn();
  bodyRef.style.backgroundColor = "white";
  setTimeout(() => {
    swal("Ты молодей !!!", "закрой это окно!", "success");
  }, 500);
});

const btn = () => {
  startBtn.removeAttribute("disabled");
  clearInterval(timerId);
};
