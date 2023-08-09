`use scrict`;
const progres = document.querySelector("#progress");
const nextBtn = document.querySelector(`#next`);
const prevBtn = document.querySelector(`#prev`);
const circle = document.querySelectorAll("div.circle");
let progresValue = 1;
console.log(circle);
nextBtn.addEventListener(`click`, function () {
  if (progresValue >= 4) {
    return;
  }
  progresValue += 1;
  progres.style.width = `${33 * (progresValue - 1)}%`;
  circle.forEach(function (value, i) {
    if (i < progresValue) {
      value.classList.add("active");
    }
  });
  if (progresValue >= 2) {
    prevBtn.removeAttribute("disabled");
  }
});
prevBtn.addEventListener(`click`, function () {
  progresValue -= 1;
  progres.style.width = `${33 * (progresValue - 1)}%`;
  circle.forEach(function (value, i) {
    if (i >= progresValue) {
      value.classList.remove("active");
    }
  });
  if (progresValue < 2) {
    prevBtn.disabled = true;
  }
});
