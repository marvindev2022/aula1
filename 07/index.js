let po = 1000;
let x = 4;
let t = 100;
function covid_19() {
    let p = po * x ** (t / 7);

    return p.toFixed();
}
console.log(covid_19(po, x, t));
