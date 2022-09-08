let m = 90000;
let c = 60000;
let n = 24;

function taxaDeJuros() {
    let i = (m / c) ** (1 / n) - 1;

    return `O seu financiamento de ${c} reais teve uma taxa de juros de ${
        (i * 100).toFixed(3) - 0.001
    }%, pois após ${n} meses você teve que pagar ${m} reais`;
}
console.log(taxaDeJuros(m, c, n));
