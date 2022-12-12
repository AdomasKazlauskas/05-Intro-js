/*
    ARRAY (list, sarasas, matrix, matrica, masyvas)
*/

const emptyArray = [];
console.log(emptyArray);

const marks = [10, 2, 8, 4, 6];
console.log(marks);

const usersNames = ['Petras', 'Maryte'];
console.log(usersNames);

const boolList = [true, false, true, false];
console.log(boolList);

// LABAI NEREKOMENDUOTINA MIKSUOTI SKIRTINGO TIPO REIKSMES MASYVE
// NEBENT ZINAI KA DARAI IR TAUPAI VIETA (RAM)
// [vardas, amzius, ar vedes]
const combo1 = ['Jonas', 99, true];
const combo2 = ['Maryte', 87, false];

const marksCount = marks.length;
console.log(marksCount);

const userCount = usersNames.length;
console.log(userCount);

const boolCount = boolList.length;
console.log(boolCount);

const comboCount = combo1.length;
console.log(comboCount);

const emptySize = emptyArray.length;
console.log(emptySize);

//pozicijos indeksas: 
//             0   1   2  3 
const money = [5, 10, 20, 5];
console.log('Kupiuros:', money);

let wallet = 0;

wallet += money[0];
wallet += money[1];
wallet += money[2];
wallet += money[3];


console.log('wallet:', wallet, 'pinigu');

const marks2 = [10, 2, 8, 4, 6];

let marksSum = 0;
marksSum += marks2[0];
marksSum += marks2[1];
marksSum += marks2[2];
marksSum += marks2[3];
marksSum += marks2[4];
//marksSum += marks2[5];

console.log(marksSum);

console.log(marks2[5]);

const x = 30 + undefined;
console.log(x);

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];

//abecele: a, b, c, d, e, f.

const separator = ' - ';
const ending = '. ';
let abcString = 'Abecele: ';

abcString += abc[0] + separator;
abcString += abc[1] + separator;
abcString += abc[2] + separator;
abcString += abc[3] + separator;
abcString += abc[4] + separator;
abcString += abc[5] + ending;

console.log(abcString);