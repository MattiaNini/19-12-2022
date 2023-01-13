const images = [
  "https://picsum.photos/500/500?1",
  "https://picsum.photos/500/500?2",
  "https://picsum.photos/500/500?3",
];

const sliderImgEl = document.querySelector(".firstImg__img");
const firstPntEl = document.querySelector(".firstPointer");
const secondPntEl = document.querySelector(".secondPointer");
const thirdPntEl = document.querySelector(".thirdPointer");

let firstImg = 0;

firstPntEl.addEventListener("click", () => {
  sliderImgEl.setAttribute("src", images[firstImg]);

  if ((firstImg = 0)) {
    firstImg = 0;
  }
});

secondPntEl.addEventListener("click", () => {
  sliderImgEl.setAttribute("src", images[firstImg]);

  if ((firstImg = 1)) {
    firstImg = 1;
  }
});

thirdPntEl.addEventListener("click", () => {
  sliderImgEl.setAttribute("src", images[firstImg]);

  if ((firstImg = 2)) {
    firstImg = 2;
  }
});
