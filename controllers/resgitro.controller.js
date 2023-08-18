import { clientservice } from "../service/client-servise.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit',(evento) => {
    evento.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;

    clientservice
    .crearCliente(nombre, email)
    .then(() => {
        window.location.href = "/screens/registro_completado.html";
    }).catch(error => console.log(error));
});