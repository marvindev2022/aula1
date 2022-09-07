let n = 6;
let s = (n - 2) * 180;
function poligono() {
    let a = s / n;
    return `O valor da soma dos ângulos internos S:${
        a * n
    }°\nO valor de cada ângulo do polígono a: ${a}°`;
}
console.log(poligono(s, n));
