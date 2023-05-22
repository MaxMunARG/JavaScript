// Proyecto JS de Maximiliano Muñiz para CoderHouse

// Bienvenida
let nombreUsuario = prompt('Ingresa tu Nombre de Usuario');

while((nombreUsuario == '') || (nombreUsuario == ' ') )
{
    alert('🔒 Por favor, Ingrese un Nombre de Usuario para Continuar')
    nombreUsuario = prompt('Ingresa tu Nombre de Usuario');
}
alert('Le damos la Bienvenida a nuestra plataforma de Casa de Cambio Virtual ' + nombreUsuario);

let mensaje = prompt('¿Desea Invertir en una Moneda? (s-si)');
// Variable de totales
let total = 0;

// Ciclos de inversion
while(mensaje.toLowerCase() == 's'){
    let moneda = prompt('1- Dolares Fisico $490\n2- Euros Fisicos $520\n3- USDT $485\n4- Btc $6.275.745,38\n5- Ether $421.518,35\n6- Litecoin $21.360,78');
    
    // Condicionales de seleccion
    switch(moneda){
        case '1':
            alert('Agregaste 1 Dolar a tu cuenta virtual, Proceda para coordinar la entrega de manera personal');
            incrementarTotal(490);
            break;
        case '2':
            alert('Agregaste 1 Euro a tu cuenta virtual, Proceda para coordinar la entrega de manera personal');
            incrementarTotal(520);
            break;
        case '3':
            alert('Agregaste 1 USDT a tu cuenta virtual');
            incrementarTotal(485);
            break;
        case '4':
            alert('Agregaste 1 BTC a tu cuenta virtual');
            incrementarTotal(6275745,38);
            break;
        case '5':
            alert('Agregaste 1 Ether a tu cuenta virtual');
            incrementarTotal(421518,35);
            break;
        case '6':
            alert('Agregaste 1 Litecoin a tu cuenta virtual');
            incrementarTotal(21360,78);
            break;
        default:
            alert('Error en la seleccion de moneda');
            break;
    }
    mensaje = prompt('¿Desea Comprar otra una Moneda? (s-si)');
}

alert('Su inversion total es de $'+total);

// Funciones total
function incrementarTotal(precio){
    total = total + precio;
    alert('Inversion hasta el momento $'+total);
}