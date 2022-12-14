
/*
    IF

    Operatoriai:
    visi: >, <, <=, >=, ==, !=, ===, !==
    nenaudotini: ==, !=

    LOGINIAI OPERATORIAI:
    && - AND - turi tenkinti visas salygas
    || - or - bent vienas

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

if (NaN === NaN) {
    console.log('NaN lygus');
} else {
    console.log('NaN nelygus');
}

console.clear();

//code nesting

const day = 5;

if (day === 1) {
    console.log('Pirmadienis');
    } else {
        if (day === 2) {
            console.log('Antradienis')
        } else {
            if (day === 3) {
                console.log('Treciadienis');
            } else {
                if (day === 4) {
                    console.log('Ketvirtadienis');
                } else {
                    if (day === 5) {
                        console.log('Penktadienis');
                    }
                }
        }
    }
}

//Atrakcionu parkas

const parkasDirba = true;
const bijauAukscio = false;

if (parkasDirba) {
    if (bijauAukscio) {
        console.log('baisu');
    } else {
        console.log('Einu i parka, bus smagu');
    }
} else {
    if (bijauAukscio) {
        console.log('Parkas nedirba - man sekasi.');
    } else {
        console.log('liudna baisiausiai');
    }
}

if (parkasDirba && bijauAukscio) {
    console.log('Baisu man');
} else if (parkasDirba && !bijauAukscio) {
    console.log('Einu i parka bus smagu');
} else if (!parkasDirba && bijauAukscio) {
    console.log('Pasiseke');
} else if (!parkasDirba && !bijauAukscio) {
    console.log('gaila, norejau i parka');
} 