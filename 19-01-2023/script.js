const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");

const img1 = document.querySelector("#img-1");
const img2 = document.querySelector("#img-2");
const img3 = document.querySelector("#img-3");

const carrelloBtn = document.querySelector(".carrello");
const tenda = document.querySelector(".tenda");
const productsList = document.querySelector(".products");
const footer = document.querySelector("footer");

const cart = [];

btn1.addEventListener("click", () => {
  img1.classList.add("show");
  img2.classList.remove("show");
  img3.classList.remove("show");

  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
});

btn2.addEventListener("click", () => {
  img1.classList.remove("show");
  img2.classList.add("show");
  img3.classList.remove("show");

  btn1.classList.remove("active");
  btn2.classList.add("active");
  btn3.classList.remove("active");
});

btn3.addEventListener("click", () => {
  img1.classList.remove("show");
  img2.classList.remove("show");
  img3.classList.add("show");

  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.add("active");
});

carrelloBtn.addEventListener("click", () => {
  tenda.classList.toggle("show");
});

fetch("https://api.escuelajs.co/api/v1/products/")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((element) => {
      cardCreator(element);
    })
  );

const cardCreator = (item) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", item.image);
  imgEl.setAttribute("alt", "#");

  const h1El = document.createElement("h1");
  h1El.className = "title";
  h1El.textContent = item.title.slice(0, 10);

  const priceEl = document.createElement("p");
  priceEl.className = "price";
  priceEl.textContent = item.price;
  console.log(item.title);

  const descEl = document.createElement("p");
  descEl.className = "description";
  descEl.textContent = item.description.slice(0, 30);
  console.log(item.description);

  const addBtn = document.createElement("button");
  addBtn.textContent = "Aggiungi al Carrello";

  addBtn.addEventListener("click", () => {
    cart.push(item);
    cartCreation();
    console.log(cart);
  });

  cardEl.append(imgEl, h1El, priceEl, descEl, addBtn);
  productsList.appendChild(cardEl);
};

const cartCreation = () => {
  tenda.innerHTML = "";
  cart.forEach((item, index) => {
    const cartEl = document.createElement("div");
    cartEl.className = "cartRow";
    cartEl.innerHTML = `<p>Q.ty: ${item.qty}</p><p>${item.title}</p><p>${item.price}</p>`;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", () => {
      cartEl.remove();
      cart.splice(index, 1);
    });

    cartEl.append(deleteBtn);
    tenda.appendChild(cartEl);
  });
};

const cartPopulator = (item) => {
  const newObj = {
    id: item.id,
    title: item.title,
    price: item.price,
    qty: 1,
  };

  const search = cart.filter((element) => {
    if (element.id === newObj.id) {
      element.qty++;
      return element;
    }
  });

  if (search.length === 0) {
    cart.push(newObj);
  }

  console.log(cart);
  cartCreation();
};

//AVANZATO 19-01-2023
//Nella pagina delle card proviamo a creare un filtro che visualizzi una o piu categorie

const newFilter = data.filter((item) => item.category.id === 0);
newFilter.forEach((element) => {
  cardCreator(element);
  console.log(element);
});
