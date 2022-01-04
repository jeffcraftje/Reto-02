import { card } from "./data.js";

let contenedorCard = document.querySelector(".contenedor-card");
const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
const texto = document.getElementById("p");


card.forEach((cards) => {
    const { titulo, Descripcion, Tipo, Precio, image } = cards;
    templateCard.querySelector('h5').textContent = titulo;
    templateCard.querySelector('img').setAttribute('src', image);
    const otraTarjeta = templateCard.cloneNode(true)
    fragment.appendChild(otraTarjeta)

});
items.appendChild(fragment)
