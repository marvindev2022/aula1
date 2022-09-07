let a = 5;
let b = 5;
let c = 1;

function delta() {
    let d = b ** 2 - 4 * a * c;

    return `Delta: ${d}`;
}
console.log(delta(a, b, c));
