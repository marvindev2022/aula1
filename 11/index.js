let raio = 3;
let volume = 4 / 3;

function diametro(r, v) {
    let d = r ** 2;

    return `O volume de uma esfera de raio ${r} é ${v * r ** 3} PI`;
}
console.log(diametro(raio, volume));
