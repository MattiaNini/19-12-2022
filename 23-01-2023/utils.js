const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const btnEl = cE("button");

const productCard = (data) => {
  const wrapperEl = cE("div");
  const textWrapperEl = cE("div");
  const idEl = cE("h1");
  const author = cE("h3");
  const quote = cE("p");

  wrapperEl.className = "product-card";
  textWrapperEl.className = "product-card__text";
  idEl.textContent = data.id;
  author.textContent = data.author;
  quote.textContent = data.quote;
  btnEl.className = "btn";
  btnEl.textContent = "Quota Random"

  textWrapperEl.append(idEl, author, quote, btnEl);
  wrapperEl.append(textWrapperEl);
  return wrapperEl;
};

btnEl.addEventListener ("click", () => {
  (cardEl.innerHTML = ""),
  GET("quotes/random").then((data)) = bodyEl.appendChild(cardCreat)
})

export { cE, qS, productCard };
