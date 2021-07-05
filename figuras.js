//codigo del cuadrado
const calcPerimetroCuadrado = (lado) => {
    return lado * 4;
}

const calcAreaCuadrado = (lado) => {
    return Math.pow(lado, 2);
}

//código triangulo
const calcPerimetroTriangulo = (base, lado) => {
    return (lado * 2) + Number(base);
}

const calcAlturaTriangulo = (base, lado) => {
    // c^2 = a^2 + b^2
    let bCuadrado = Math.pow(lado, 2) - Math.pow(base, 2);
    return Math.sqrt(bCuadrado); 
}

const calcAreaTriangulo = (base, altura) => {
    return (base * altura) / 2;
}

//codigo de circulo
const calcPerimetroCirculo = (pRadio) => {
    return (pRadio * 2) * Math.PI;
}

const calcAreaCirculo = (pRadio) => {
    return Math.pow(pRadio,2) * Math.PI;
}

//interactuamos con HTML
const perimetroCuadrado = () => {
    const InputCuadrado = document.getElementById("InputCuadrado");
    const value = InputCuadrado.value;
    const res = calcPerimetroCuadrado(value);
    alert(res);
}

const areaCuadrado = () => {
    const InputCuadrado = document.getElementById("InputCuadrado");
    const value = InputCuadrado.value;
    const res = calcAreaCuadrado(value);
    alert(res);
}

const perimetroTriangulo = () => {
    const InputTriangulo = document.getElementById("InputBaseTriangulo");
    const InputLadoTriangulo = document.getElementById("InputLadoTriangulo");
    const base = InputTriangulo.value;
    const lado = InputLadoTriangulo.value;
    const res = calcPerimetroTriangulo(base, lado);
    alert(res);
}

const areaTriangulo = () => {
    const InputTriangulo = document.getElementById("InputBaseTriangulo");
    const InputLadoTriangulo = document.getElementById("InputLadoTriangulo");
    const base = InputTriangulo.value;
    const lado = InputLadoTriangulo.value;
    const altura = calcAlturaTriangulo(base, lado);
    const res = calcAreaTriangulo(base, altura);
    alert(res);
}

const perimetroCirculo = () => {
    const InputCirculo = document.getElementById("InputCirculo");
    const value = InputCirculo.value;
    const res = calcPerimetroCirculo(value);
    alert(res);
}

const areaCirculo = () => {
    const InputCuadrado = document.getElementById("InputCirculo");
    const value = InputCirculo.value;
    const res = calcAreaCirculo(value);
    alert(res);
}