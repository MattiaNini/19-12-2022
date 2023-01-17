const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");

const img1 = document.querySelector("#img-1");
const img2 = document.querySelector("#img-2");
const img3 = document.querySelector("#img-3");

const CostructionBtn = document.querySelector(".costruction");

const cart = [];

btn1.addEventListener("click", () => {
  img1.classList.add("photo");
  img2.classList.remove("photo");
  img3.classList.remove("photo");

  btn1.classList.add("attiva");
  btn2.classList.remove("attiva");
  btn3.classList.remove("attiva");
});

btn2.addEventListener("click", () => {
  img1.classList.remove("photo");
  img2.classList.add("photo");
  img3.classList.remove("photo");

  img1.classList.remove("attiva");
  img2.classList.add("attiva");
  img3.classList.remove("attiva");
});

btn3.addEventListener("click", () => {
  img1.classList.remove("photo");
  img2.classList.remove("photo");
  img3.classList.add("photo");

  img1.classList.remove("attiva");
  img2.classList.remove("attiva");
  img3.classList.add("attiva");
});

CostructionBtn.addEventListener("click", () => {
  menu.classList.toggle("photo");
});

fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((element) => {
      CardCreator(element);
    })
  );

const CardCreator = (item) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", item.image);
  imgEl.setAttribute("alt", "#");

  const h1El = document.createElement("h1");
  h1El.className = "title";
  h1El.textContent = item.title.slice(10);

  const priceEl = document.createElement("p");
  priceEl.className = "price";
  priceEl.textContent = item.price;

  const descEl = document.createElement("p");
  descEl.className = "description";
  descEl.textContent = item.description.slice(30);

  const addBtn = document.createElement("button");
  addBtn.textContent = "Aggiungi al Carrello";

  addBtn.addEventListener("click", () => {
    cart.push(item);
    CardCreator();
    console.log(cart);
  });

  cardEl.append(imgEl, h1El, priceEl, descEl, addBtn);
  productList.appendChild(cardEl);
};

const cartCreation = () => {
  menu.innerHTML = "";
  cart.forEach((item) => {
    const cartEl = document.createElement("div");
    cartEl.innerHTML =
      '<p class="oggetto">${item.title}</p><p>${item.price}</p>';
    menu.appendChild(cartEl);
  });
};
