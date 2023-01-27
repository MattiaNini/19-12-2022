const qS = (type) => document.querySelector(type);
const qSA = (type) => document.querySelectorAll(type);
const cE = (element) => document.createElement(element);

const movieCardGen = (data) => {
  const cardEl = cE("div");
  const imgEl = cE("img");

  cardEl.className = "movie";
  if (data.poster_path) {
    imgEl.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    );
  }
  imgEl.setAttribute("alt", data.title);
  cardEl.appendChild(imgEl);

  return cardEl;
};

export { qS, movieCardGen, cE };
