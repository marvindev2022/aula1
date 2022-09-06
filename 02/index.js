let c = 45;
let f = 73;
function temperatura(c, f) {
    let celsius = (f - 32) / 1.8;
    let fahrenheit = 1.8 * c + 32;

    return `Temp C°: ${celsius.toFixed()}\nTemp F°: ${fahrenheit.toFixed()}`;
}
console.log(temperatura(c, f));
