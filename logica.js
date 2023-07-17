// Proyecto JS de Maximiliano Muñiz para CoderHouse 2023

console.table(productos);
let carro = JSON.parse(localStorage.getItem('carro')) || []; 
let tablaBody = document.getElementById('tablabody');
let contenedorProds = document.getElementById('misprods');
let finalizarBtn = document.getElementById("finalizar");
let vaciarBtn = document.getElementById("vaciar");
function renderizarProductos(listaProds){
    contenedorProds.innerHTML='';
    for(const prod of listaProds){
        contenedorProds.innerHTML+=`
            <div class="card col-sm-2">
                <img class="card-img-top" src=${prod.foto} alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">$ ${prod.precio}</p>
                    <button id=${prod.id} class="btn btn-primary compra">Comprar</button>
                </div>
            </div>
        `;
    }

    let botones = document.getElementsByClassName('compra');
    for(const boton of botones){
        boton.addEventListener('click',()=>{
            const prodACarro = productos.find((producto) => producto.id == boton.id);
            console.log(prodACarro);
            agregarACarrito(prodACarro);
        })

        boton.onmouseover = () => {
            boton.classList.replace('btn-primary','btn-warning');
        }
        boton.onmouseout = () => {
            boton.classList.replace('btn-warning','btn-primary');
        }
    }
}

function agregarACarrito(producto){
    carro.push(producto);
    console.table(carro);    
    tablaBody.innerHTML += `
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td><button class="btn btn-light" onclick="eliminar(event)">🛒</button></td>
            </tr>
        </tr>
    `;
    let total = carro.reduce((ac,prod)=> ac + prod.precio,0);
    console.log(total);
    document.getElementById('total').innerText = `Total a pagar $:${total}`;
    localStorage.setItem('carro',JSON.stringify(carro));
}

//Filtros
let filtro = document.getElementById('filtro');
let min = document.getElementById('min');
let max = document.getElementById('max');

function filtrarPorPrecio(precioMin, precioMax){
    const filtrados = productos.filter((prod)=> (prod.precio >= precioMin) && (prod.precio <=precioMax));
    sessionStorage.setItem('filtrados',JSON.stringify(filtrados));
    return filtrados;
}

filtro.onclick = () => {
    console.log('click');
    console.log(min.value, max.value);
    if((min.value != '')&&(max.value != '')&&(min.value < max.value)){
        let listaFiltrados = filtrarPorPrecio(min.value, max.value);
        console.log(listaFiltrados);
        renderizarProductos(listaFiltrados);
    }
}

(carro.length != 0) && dibujarTabla();

function dibujarTabla(){
    for(const producto of carro){
        document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td><button class="btn btn-light" onclick="eliminar(event)">🛒</button></td>
        </tr>
    `;
    }
    totalCarrito = carro.reduce((acumulador,producto)=> acumulador + producto.precio,0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText="Total a pagar $: "+totalCarrito;
    
}

function eliminar(ev){
    console.log(ev);
    let fila = ev.target.parentElement.parentElement;
    console.log(fila);
    let id = fila.children[0].innerText;
    console.log(id);
    let indice = carro.findIndex(producto => producto.id == id);
    console.log(indice)
     carro.splice(indice,1);
    console.table(carro);
    fila.remove();
    let preciosAcumulados = carro.reduce((acumulador,producto)=>acumulador+producto.precio,0);
    total.innerText="Total a pagar $: "+preciosAcumulados;

    localStorage.setItem("carro",JSON.stringify(carro));
}

let botones = document.getElementsByClassName('compra');
for(const boton of botones){
    boton.addEventListener('click',()=>{
        const prodACarro = productos.find((producto) => producto.id == boton.id);
        console.log(prodACarro);
        agregarACarrito(prodACarro);
    })

    boton.onmouseover = () => {
        boton.classList.replace('btn-primary','btn-warning');
    }
    boton.onmouseout = () => {
        boton.classList.replace('btn-warning','btn-primary');
    }
}

finalizarBtn.onclick=()=>{
    carro=[];
    document.getElementById('tablabody').innerHTML='';
    document.getElementById('total').innerText = 'Total a pagar $:';
    Swal.fire('Gracias por tu compra','Pronto la recibirás','success');
    localStorage.removeItem("carro");
}

vaciarBtn.onclick=()=>{
    carro=[];
    document.getElementById('tablabody').innerHTML='';
    document.getElementById('total').innerText = 'Total a pagar $:';
    Swal.fire('Hemos vaciado el carro','Puedes volver a comenzar','success')
    localStorage.removeItem("carro");
}
