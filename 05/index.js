let x1 = 1;
let y1 = 1;
let x2 = 1;
let y2 = 4;

function distanciaEntreDoisPontos() {
    let distancia = (x2 - x1) ** 2 + (y2 - y1) ** 2;
    let result = Math.sqrt(distancia);
    console.log(result);
}
distanciaEntreDoisPontos(x1, y1, x2, y2);
