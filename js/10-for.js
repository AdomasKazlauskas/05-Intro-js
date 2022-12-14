/*
FOR - ciklas (loop)
kartojama norima logika N kartu iki kol reikia
*/

// isspausdinti skaicius nuo 0 iki 5

for (let i = 0; i <= 10; i++) {
    console.log('dirbu..', i);
}
console.log('end');

const marks = [10, 2, 8, 4, 6, 10];
const count = marks.length;
let sum = 0;

for (let i = 0; i < count; i++) {
    sum += marks[i];
    console.log( i, '-->', marks[i], '-->', sum);
}

const average = sum / count;
console.log('Pazymiu vidurkis:', average);


const maryte = [10, 4, 8];
const count2 = maryte.length;
let sum2 = 0;

for(let i = 0; i<count2; i++) {
    sum2 += maryte[i];
}

console.log('Marytes vidurkis:', sum2 / count2);



console.log('-----------');

function marksAverage(marksArray) {
    let sum = 0;

    for (let i=0; i < marksArray.length; i++) {
        sum += marksArray[i];
    }

    return sum / marksArray.length ;

}

const student1 = {
    name: 'Jonas',
    marks: [2, 4, 6],
};

const student2 = {
    name: 'Ona',
    marks: [2, 8, 6],
};

const student3 = {
    name: 'Aloyzas',
    marks: [9, 4, 6],
};

const vidurkis1 = marksAverage(student1.marks);
const vidurkis2 = marksAverage(student2.marks);
const vidurkis3 = marksAverage(student3.marks);

console.log(`${student1.name} pazymiu vidurkis yra ${vidurkis1}.`);
console.log(`${student2.name} pazymiu vidurkis yra ${vidurkis2}.`);
console.log(`${student3.name} pazymiu vidurkis yra ${vidurkis3}.`);

console.log('-----------');

console.log('MUSU PARDUOTUVE:');
console.log('-----------------');
console.log('1) Bananas kainuoja 2.00 EUR ir turime 10 vnt.');
console.log('2) Agurkas kainuoja 3.00 EUR ir turime 10 vnt.');
console.log('3) Pomidoras kainuoja 1.57 EUR ir turime 30 vnt.');
console.log('-----------------');
console.log('Viso asortimento kaina: 97.10 EUR');