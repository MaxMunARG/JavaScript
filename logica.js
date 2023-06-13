// Proyecto JS de Maximiliano Muñiz para CoderHouse 2023

console.table(productos);
let contenedorProds = document.getElementById('misprods');

function filtrarPorPrecio(precio){
    const filtrados = productos.filter((prod)=>prod.precio <= precio);
    return filtrados;
}

let precioMax = parseFloat(prompt('Ingrese dineromMaximo disponible para comprar 0-para salir'));

while(precioMax != 0){
    if(isNaN(precioMax) || precioMax < 0){
        alert('El numero es invalido; vuelva a intentarlo');
    }else{
        const prodsFiltrados = filtrarPorPrecio(precioMax);
        console.table(prodsFiltrados);
        renderizarProductos(prodsFiltrados);
    }
    precioMax = parseFloat(prompt('Ingresa el precio maximo que puedes abonar 0-para salir'));
}

function renderizarProductos(listaProds){
    contenedorProds.innerHTML='';
    for(const prod of listaProds){
        contenedorProds.innerHTML+=`
            <div class="card col-sm-2">
                <img class="card-img-top" src=${prod.foto} alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">$ ${prod.precio}</p>
                    <button class="btn btn-primary">Comprar</button>
                </div>
            </div>
        `;
    }
}