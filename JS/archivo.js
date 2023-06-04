//Calculadora de productos

alert("Calculemos el costo de tus productos!");

const sumar = (numero1, numero2) =>{
    return parseInt(numero1) + parseInt(numero2);
}

let numero1 = parseInt (prompt("Cual es el costo del 1° producto?"));
let numero2 = parseInt (prompt("Cual es el costo del 2° producto?"));
let costoTotal = numero1 + numero2;
alert("El costo total de los productos es: " + costoTotal);
alert("Felicidades! Hay un sorteo para vos.");



//Sorteo de descuentos
sorteo();

function sorteo() {
    let edad = parseInt(prompt("Ingrese su edad"));
    if (isNaN(edad)) {
        alert("Por favor, ingrese un número válido para la edad.");
        return;
    }
    else if (edad < 18) {
        alert("Lo sentimos, sos menor de edad, no podés participar, pero tenemos productos con 20% de descuento.");
    } else {
        let sorteo = parseInt(prompt("Elegí un número del 1 al 5 para participar."));
        if (isNaN(sorteo)) {
            alert("Por favor, ingrese un número válido para el sorteo.");
            return;
        }
        switch (sorteo) {
            case 1:
            case 3:
            case 4:
                alert("Seguí participando! No ganaste ningún descuento. El costo total es: " + costoTotal)
                alert("Aunque no ganaste el sorteo, tenemos productos con 20% de descuento.");
                break;
            case 2:
            case 5:
                let descuento = costoTotal * 0.2; // 20% del costo total
                costoTotal -= descuento; // descuento al costo total
                alert("¡Felicidades! Ganaste un 20% de descuento. El costo total con descuento es: " + costoTotal)
                alert("Ademas de ganar el sorteo, tenemos productos con 20% de descuento.");
                break;
            default:
                alert("Recordá elegir un número del 1 al 5.");
                break;
        }
    }
}
alert("¿Deseas sumar más productos?");

//Agregar porductos extras

agregarProductos();

function agregarProductos() {
    let continuar = prompt("A- Continuar agregando productos. / B- No, gracias.");
  
    if ((continuar === "a" || continuar === "A") && costoTotal > 0) {
      let cantidadProductos = parseInt(prompt("Cuantos productos desea agregar?"));
    
      for (let i = 1; i <= cantidadProductos; i++) {
        let costoProducto = parseFloat(prompt("Ingrese el costo del producto " + i));
        costoTotal += costoProducto; // Sumar el costo del producto al costo total
      }
    
      let descuento = costoTotal * 0.2; // Calcular el descuento del 20%
      costoTotal -= descuento; // Aplicar el descuento al costo total
    
      alert("El costo total de los productos es: " + costoTotal);
    } else if (continuar === "b" || continuar === "B") {
      alert("Muchas gracias por utilizar nuestros servicios.");
    } else {
      alert("Debes seleccionar A o B.");
      return;
    }
}