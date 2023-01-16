const productsElement = document.querySelector(".productsList");
const downloadDataBtn = document.querySelector(".button");
const loaderElement = document.querySelector(".loader");

downloadDataBtn.addEventListener("click", () => {
  loaderElement.textContent = "Caricamento in corso..";
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dataManupulation(data);
    })
    .catch((error) => {
      loaderElement.textContent = "C'è stato un errore";
      console.log("MIO ERRORE: ", error);
    });
});

const dataManupulation = (data) => {
  loaderElement.textContent = "";

  data.forEach((item, index) => {
    const divContainer = document.createElement("div");
    divContainer.className = "card";

    const titleElement = document.createElement("h1");
    titleElement.textContent = item.title;

    const indexContainer = document.createElement("p");
    indexContainer.textContent = item.description;
    divContainer.appendChild(titleElement);
    divContainer.appendChild(indexContainer);

    productsElement.appendChild(divContainer);
  });
};
