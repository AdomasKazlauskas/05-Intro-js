/*
    NUMBERS:
    - tikri/netikri (skaiciaus tipo, bet netikras skaicius)
        -Infinity
        -NaN (not-a-number)
    - sveikieji/desimtainiai
    - teigiami/neigiami

    INICIAJIMAS:
    const - nekeiciama reiksme (Default)
    let - kintama reiksme (sekantis tinkamas pasirinkimas, jei netinka const)
    var - niekada nenaudoti (seniena)

    SUTRUMPINIMAI:
    X = X + 2 -> X += 2
    X = X - 2 -> X -= 2
    X = X / 2 -> X /= 2
    X = X * 2 -> X *= 2
    X = X % 2 -> X +%= 2

    jei padidinti reikia tik vienu vienetu, tai:
    x = x + 1 -> x += 1 -> x++
    x = x + 1 -> x += 1 -> ++x

    jei sumazinti reikia tik vienu vienetu, tai:
    x = x -s 1 -> x -= 1 -> x--
    x = x -s 1 -> x -= 1 -> --x
*/

const PI = 3.14;
console.log(PI);

let wallet = 0;
console.log(wallet);

wallet = 5;
console.log(wallet);

wallet = 15;
console.log(wallet);

const negative = -888;
console.log(negative);

const maxNumber = Infinity;
const minNumber = -Infinity;

console.log(maxNumber, minNumber);
console.log(0, 1, 2, 3.14);

console.log(NaN);


// kintamuju uzvadinimas:

const vienas = 1;
const antrasSkaicius = 2;
const PVM = 21;


console.log('------')
console.log('primityvios matematines operacijos');

const a = 5;
const b = 7;

// suma
const suma = a + b;
console.log(a, b, suma);

// skirtumas
const skirtumas = a - b;
console.log(a, b, skirtumas);

// dalmuo
const dalmuoAB = a / b;
console.log(a, b, dalmuoAB);
const dalmuoBA = b / a;
console.log(a, b, dalmuoBA);

// sandauga
const sandauga = a * b;
console.log(a, b, sandauga);

// liekana
const liekanaAB = a % b;
const liekanaBA = b % a;
console.log(a, b, liekanaAB);
console.log(b, a, liekanaBA);

// laipsnis
const laipsnisAB = a ** b;
const laipsnisBA = b ** a;
console.log(a, b, laipsnisAB);
console.log(b, a, laipsnisBA);

console.log('------------------');

const p1 = 10;
const p2 = 6;
const p3 = 4;
const p4 = 5;

let pazymiuSuma = 0;
console.log('pazymiu suma:', pazymiuSuma);

pazymiuSuma = pazymiuSuma + p1;
console.log('pazymiu suma:', pazymiuSuma);

pazymiuSuma = pazymiuSuma + p2;
console.log('pazymiu suma:', pazymiuSuma);

pazymiuSuma = pazymiuSuma + p3;
console.log('pazymiu suma:', pazymiuSuma);

pazymiuSuma = pazymiuSuma + p4;
console.log('pazymiu suma:', pazymiuSuma);

console.log ('---------------------------');

const islaida1 = 10;
const islaida2 = 20;
const islaida3 = 25;
const islaida4 = 35;

let saskaita = 100;

saskaita -= islaida1;
console.log('isleidau:', islaida1, ';saskaitoje liko:', saskaita);

saskaita -= islaida2;
console.log('isleidau:', islaida2, ';saskaitoje liko:', saskaita);

saskaita -= islaida3;
console.log('isleidau:', islaida3, ';saskaitoje liko:', saskaita);

saskaita -= islaida4;
console.log('isleidau:', islaida4, ';saskaitoje liko:', saskaita);

console.log ('---------------------------');

let index = 0;
console.log('index:', index++);
console.log('index:', index++);
console.log('index:', index++);
console.log('index:', index++);
console.log('index:', index++);
console.log('index:', index++);

let index2 = 0;
console.log('index2:', ++index2);
console.log('index2:', ++index2);
console.log('index2:', ++index2);
console.log('index2:', ++index2);
console.log('index2:', ++index2);
console.log('index2:', ++index2);