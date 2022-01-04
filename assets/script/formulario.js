const formulario = document.getElementById("formulario")

const listar = document.getElementById("listar")

let datos = [];

formulario.addEventListener("submit", e => {
    e.preventDefault();
    let nombre = document.getElementById("fname").value
    let apellido = document.getElementById("lname").value
    let telefono = document.getElementById("tel").value
    let direccion = document.getElementById("direccion").value
    let subject = document.getElementById("subject").value
    console.log(nombre, apellido, telefono, direccion, subject)
    agregarUsuario(nombre, apellido, telefono, direccion, subject)
    guardarDatos();
})

const agregarUsuario = (nombre, apellido, telefono, direccion, subject) => {
    let registro = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        direccion: direccion,
        observaciones: subject,
    }
    datos.push(registro)
    console.log(datos)
}
const guardarDatos = () => {
    localStorage.setItem('usuario', JSON.stringify(datos))
    listarDatos();
}

const listarDatos = () => {
    listar.innerHTML = " ";
    datos = JSON.parse(localStorage.getItem("usuario"))
    datos.forEach(element => {
        const { nombre, apellido, telefono, direccion, subject } = element
        listar.innerHTML += ` <div class="card" style="width: 350px !important;">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Apellido: ${apellido}</li>
            <li class="list-group-item">Telefono: ${telefono}</li>
            <li class="list-group-item">Direccion: ${direccion}</li>
            <li class="list-group-item">Observacion: ${subject}</li>
          </ul>
        </div>
         `
    })
}