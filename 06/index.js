let deslocamentoEmM = 500;
let tempoEmS = 10;

function velocidadeMedia() {
    let vm = deslocamentoEmM / tempoEmS;
    let km_Hora = vm * 3.6;

    return `VM m/s: ${vm}m/s\nVM km/h: ${km_Hora}km/h`;
}
console.log(velocidadeMedia(deslocamentoEmM, tempoEmS));
