let r = 3;
let h = 1;
let pi = 3.14;
function areaTotal(r, h, p) {
    let at = 2 * p * r * (r + h);

    return `AT: ${at} ou ${at / p}pi`;
}
console.log(areaTotal(r, h, pi));
