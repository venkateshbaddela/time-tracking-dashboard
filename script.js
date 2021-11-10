"use strtict";

const container = document.querySelectorAll(".box-main");
const btns = document.querySelectorAll(".main-list__btn");

const btn = [...btns];
const daily = [];
const weekly = [];
const monthly = [];

const txtMain = [...document.querySelectorAll(".box-txt__main")];
const txtSub = [...document.querySelectorAll(".box-txt__sub")];

const renderData = function (data) {
  txtMain.forEach((el, i) => (el.textContent = `${data[i].current}hrs`));
  txtSub.forEach(
    (el, i) => (el.textContent = `Last Week-${data[i].previous}hrs`)
  );
};

(async function () {
  const res = await fetch("data.json");
  const data = await res.json();

  data.forEach((el, i, arr) => {
    daily.push(arr[i].timeframes.daily);
    weekly.push(arr[i].timeframes.weekly);
    monthly.push(arr[i].timeframes.monthly);
  });

  // renderData(daily);
  btn.forEach((el, i) => {
    el.addEventListener("click", function (e) {
      const btnActive = e.target.dataset.value;
      if (btnActive === "daily") renderData(daily);
      if (btnActive === "weekly") renderData(weekly);
      if (btnActive === "monthly") renderData(monthly);
    });
  });
})();
