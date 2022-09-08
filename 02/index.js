let c = 1;
let f = 113;

function temperatura(c, f) {
    let celsius = (f - 32) / 1.8;
    let fahrenheit = 1.8 * c + 32;

    return `Temp C°: ${celsius.toFixed(1)}\nTemp F°: ${fahrenheit.toFixed(1)}`;
}
console.log(temperatura(c, f));
