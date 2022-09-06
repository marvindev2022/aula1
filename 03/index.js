const valorTenis = 129.99;
const dinheiroEmCx = 80;

function shoppinhg() {
    let percentualDinheiro = (dinheiroEmCx * 100) / valorTenis;
    let desconto = 100 - percentualDinheiro;

    console.log(`desconto necessario para compra ${desconto.toFixed(2)}%`);
}
shoppinhg(valorTenis, dinheiroEmCx);
