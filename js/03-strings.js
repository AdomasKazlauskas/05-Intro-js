/*
    STRINGS (tekstas)
    iniciavimas kabutemis: 
        - viengubos (') (default)
        - dvigubos (") 
        - backtick/apostrofas (`)
*/

const hi = 'labas';
console.log(hi);

const morning = "rytas";
console.log(morning);

const sentence = 'labas rytas';
console.log(sentence);

const combo = hi + ' ' + morning;
console.log(combo);

// Vienguba kabute (').
// Dviguba kabute (").
// Vienguba kabute (') ir dviguba kabute (").

const kabute2 = "Vienguba kabute (').";
console.log(kabute2);

const kabute1 = 'Dviguba kabute (").';
console.log(kabute1);

// Escape (\)

const kabute112 = 'Vienguba kabute (\') ir dviguba kabute (").';
console.log(kabute112);

const kabute212 = "Vienguba kabute (') ir dviguba kabute (\").";
console.log(kabute212);

const kabute3 = 'Vienguba kabute (\') ir dviguba kabute (\").';
console.log(kabute3);

console.log ('---------------------------');

const user = 'John';

const userHi = 'Hi, ' + user + '!';
console.log(userHi);

const viengubaKabute = "'";
const dvigubaKabute = '"';

const kabuciuSakinys = 'Vienguba kabute (' + viengubaKabute + ') ir dviguba kabute (' + dvigubaKabute + ').';
console.log(kabuciuSakinys);

const kabutesBacktick = `Vienguba kabute (') ir dviguba kabute (").`;console.log(kabutesBacktick);

const backtickSakinys = `Vienguba kabute (${viengubaKabute}) ir dviguba kabute (").`;
console.log(backtickSakinys);

const userBacktick = `Hi, ${user}!`;
console.log(userBacktick);