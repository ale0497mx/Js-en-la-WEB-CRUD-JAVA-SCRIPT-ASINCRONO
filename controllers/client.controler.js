import { clientservice } from "../service/client-servise.js";

console.log(clientservice);

const newLine = (nombre, email, id) => {
    const line = document.createElement('tr');
    const contenido = `<tr>
    <td class="td" data-td>
        ${nombre}
    </td>
    <td>
        ${email}
    </td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html?id=${id}"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
            <button
                class="simple-button simple-button--delete
                type="button" id="${id}">
                Eliminar
          </button>
        </li>
        </ul>
    </td>
    </tr>`;
    line.innerHTML = contenido;

    const btn = line.querySelector('button');
    btn.addEventListener("click", () =>{
      const id = btn.id;
      clientservice.eliminarCliente(id).then( respuesta => {
        console.log(respuesta);
      }).catch((error) => alert("Error=403"));
    });
    return line;
}

const table = document.querySelector("[data-table]");

clientservice.listaClientes().then((data) => {
    data.forEach(({nombre, email, id})=> {
        const nuevaLinea = newLine(nombre,email,id);
        table.appendChild(nuevaLinea);
        });
}).catch((error) => alert("Error: Alpha-232882-czX Nnn Cominication FaileDDD:"));

