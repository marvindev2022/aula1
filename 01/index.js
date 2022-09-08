let altura = 1.71;
let peso = 72;
let tabela = {
    abaixoDoPeso: "imc < 18,5",
    normal: "imc < 25",
    excessoDePeso: "imc entre 25 & 29,9",
    obessidade: "imc > 30",
};
function solucao(a, p) {
    let imc = p / a ** 2;
    let result = "";

    if (imc < 18.5) {
        result = "Abaixo do peso";
    } else if (imc < 25) {
        result = "Normal";
    } else if (imc < 30) {
        result = "Excesso de peso";
    } else {
        result = "Obessidade";
    }
    console.log(tabela);
    return `Seu IMC: ${imc.toFixed(1)}\nClassificação: ${result}`;
}
console.log(solucao(altura, peso));
