// const precioOriginal = 120;
// const descuento = 18;

// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// })

function calcularPrecioConDescuento (precio, descuento) {
    return (precio * (100 - descuento))/ 100;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice").value;
    const inputDiscount = document.getElementById("InputDiscount").value;

    const precioFinal = calcularPrecioConDescuento(inputPrice, inputDiscount);

    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = "El precio con descuento es de $" + precioFinal;
}