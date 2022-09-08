let c = 1;
function tabelaDeConversao() {
    while (c <= 100) {
        let f = 1.8 * c + 32;
        c += 1;
        let celsius = (f - 32) / 1.8;
        console.log(`Temp C°: ${celsius.toFixed(1)}\nTemp F°: ${f.toFixed(1)}`);
    }
    return "OPS, Desculpe não posso passar de 100°";
}
console.log(tabelaDeConversao(c));
