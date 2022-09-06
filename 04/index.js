let capital = 10000;
let taxa = 0.125;
let meses = 10;

function jurosComposto(c, i, t) {
    let m = c * (1 + i) ** t;

    return `Valor do montante R$ ${m.toFixed(2)};`;
}

console.log(jurosComposto(capital, taxa, meses));
