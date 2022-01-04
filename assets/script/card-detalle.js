import { card } from "./data.js";

const div= document.querySelector("modal-body")

const fragmento=document.createDocumentFragment();

card.forEach(detalle =>{

  const { titulo, genero, Descripcion, año, image } = detalle;

    div.querySelector('h1').textContent= titulo;
    div.querySelector('h2').textContent= genero;
    div.querySelector('h3').textContent= año;
    div.querySelector('p').textContent=Descripcion;
    div.querySelector('img').setAttribute('src', image)

    const clone =div.cloneNode(true)
    fragmento.appendChild(clone)

    console.log(Producto)
})
div.appendChild(fragmento)