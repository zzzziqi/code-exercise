const text = document.querySelector("h1");
const body = document.querySelector("body");

const arr = text.innerHTML.split("");
text.textContent = "";

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  text.innerHTML += "<span>" + arr[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  let spans = document.querySelectorAll("span");
  spans[char].classList.add("change");
  char++;

  if (char === arr.length) {
    complete();
    return; //退出这个函数
  }
}

// 停止顺便清零
function complete() {
  clearInterval(timer);
  timer = null;
}
