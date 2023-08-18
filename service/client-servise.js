const listaClientes = () =>  fetch('http://localhost:3000/perfil').then( (respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
    return fetch('http://localhost:3000/perfil',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'
        },
        body: JSON.stringify({nombre, email, id: uuid.v4()}),
    });
}
const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method: "DELETE",

    })
}
const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then(respuesta => respuesta.json());
}

const actualizarCliente = (nombre,email,id) => {
    return fetch(`http://localhost:3000/perfil/${id}`,{
    
        method: "PUT",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre,email})
    }).then(repuesta => console.log(repuesta))
        .catch((erro) => console.log(erro));
}
export const clientservice = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
}


//Abrir http (metodo, url)
/* 
CRUD    - Metodos HTTP 
Create  - POST
Read    - GET
Update  - PUT/PATCH
Delete  - DELETE   
*/

// fetch api