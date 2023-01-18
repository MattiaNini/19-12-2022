const formers = document.querySelector("#formers");
const inputTitle = document.querySelector("#title");
const inputPrice = document.querySelector("#price");
const inputCategory = document.querySelector("#category");
const inputDescription = document.querySelector("#description");
const inputImage = document.querySelector("#image");

formers.addEventListener("submit", (event) => {
  event.preventDefault();

  const newEl = {
    title: inputTitle.value,
    price: parseInt(inputPrice.value), //VALORE NUMERICO, quindi uso ParseInt
    description: inputDescription.value,
    categoryId: parseInt(inputCategory.value), //VALORE NUMERICO, quindi uso ParseInt
    images: [inputImage.value],
  };
  newFun(newEl);
});

const newFun = (elBody) => {
  fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(objBody),
  })
    .then((res) => res.json())
    .then((data) => console.log("RISPOSTA POST: ", data))
    .catch((e) => console.log("ERRORE: ", e));
};
