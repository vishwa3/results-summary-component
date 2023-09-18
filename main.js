const icons = document.querySelectorAll(".summary_title > img");
const titles = document.querySelectorAll(".summary_title > span");
const scores = document.querySelectorAll(".summary_score > span:first-child");

(async function () {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    data.forEach(function ({ category, score, icon }, index) {
      icons[index].src = icon;
      titles[index].innerHTML = category;
      scores[index].innerHTML = score;
    });
  } catch (error) {
    console.log(error);
  }
})();
