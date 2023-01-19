//CREAZIONE NUOVO FORM

const postForm = document.querySelector("#postForm");
const inputTitle = document.querySelector("#title");
const inputPrice = document.querySelector("#price");
const inputCategory = document.querySelector("#category");
const inputDescription = document.querySelector("#description");
const inputImage = document.querySelector("#image");

const catName = document.querySelector("#categoryName");
const categoryForm = document.querySelector("#categoryForm");
const catImage = document.querySelector("#categoryImage");

categoryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newEl = {
    name: catName.value,
    image: catImage.value,
  };
  console.log(newEl);
  funzionePost(newEl, "categories");
});

postForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (parseInt(inputCategory.value) < 1) {
    alert("la categoria deve essere maggiore di 0");
    return;
  }

  const newEl = {
    price: parseInt(inputPrice.value), //VALORE NUMERICO
    title: inputTitle.value,
    description: inputDescription.value,
    categoryId: parseInt(inputCategory.value), //VALORE NUMERICO
    images: [inputImage.value],
  };
  console.log(newEl);
  funzionePost(newEl, "products");
});

//FINE NUOVO FORM

const newfunPost = (ElBody, param) => {
  fetch(`https://api.escuelajs.co/api/v1/` + param, {
    method: POST,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ElBody),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.statusCode >= 400 && data.statusCode < 500) {
        alert(`${param} ERRORE IN:  ` + data.message[0]);
      } else {
        alert(`${param} CARICAMENTO EFFETTUATO!`);
        console.log(data);
      }
    })
    .catch((e) => console.log("ERRORE: ", e));
};

//AVANZATO
//Provo ad aggiungere delle features con il totale degli elementi del carrello e la somma dei prezzi

const tenda = document.querySelector(".tenda");

const cartCreator = (item) => {
  const cartEl = document.createElement("div");
  cartEl.className = "cart";

  const priceEl = document.createElement("p");
  priceEl.className = "price";
  priceEl.textContent = item.price;
  console.log(item.title);

  const addBtn = document.createElement("button");
  addBtn.textContent = "Aggiungi al Carrello";

  addBtn.addEventListener("click", () => {
    cart.push(item);
    cartCreation();
    console.log(cart);
  });

  cartEl.append(priceEl, addBtn);
  productsList.appendChild(cartEl);
};
