
/*
    IF

    Operatoriai:
    visi: >, <, <=, >=, ==, !=, ===, !==
    nenaudotini: ==, !=

    SABLONAI:
    if () {}
    if () {} else {}
    if () {} else if () {}
    if () {} ...
    if () {} ... ...
*/

const a = 7;
const b = 5;

// jeigu A daugiau B, tai spausdiname 'A daugiau uz B'
// jeigu A nera daugiau B, tai spausdiname 'A nera daugiau uz B'

if (a == b) {
    console.log(`${a} yra lygu ${b}`)
} else {
    console.log(`${a} nera lygu ${b}`);
}

if (a <= b) {
    console.log(`${a} maziau arba lygu uz ${b}`)
} else {
    console.log(`${a} nera maziau arba lygu uz ${b}`);
}

if (a != b) {
    console.log(`${a} nelygu ${b}`)
} else {
    console.log(`${a} lygu ${b}`);
}

const c = 11;
const d = 13;

if ( c > d) {
    console.log('C daugiau uz D');
} else if (c < d) {
    console.log('C maziau uz D');
} else if (c == d) {
    console.log('C lygu D');
}
 
// console.log(`${a} nera daugiau uz ${b}`);

const petras = [10, 2];
const maryte = [8, 4, 6];

if (petras.length > maryte.length) {
    console.log('Petras turi daugiau arba vienodai pazimiu uz maryte');
} else {
    console.log('Petras turi maziau pazymiu uz maryte');
}

