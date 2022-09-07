let pi = 3.14;
let raio = 1;

function perimetro(p, r) {
    let c = 2 * p * r;
    let a = p * r ** 2;

    return `Comprimento: ${c}\nÁrea: ${a}`;
}
console.log(perimetro(pi, raio));
