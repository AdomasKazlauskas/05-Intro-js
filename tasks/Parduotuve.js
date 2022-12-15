

const currency = 'EUR';
const prekes = [
    {
        name: 'Bananas',
        price: 2,
        inStock: 10,
    },
    {
        name: 'Agurkas',
        price: 3,
        inStock: 10,
    },
    {
        name: 'Pomidoras',
        price: 1.57,
        inStock: 30,
    },
];

function shop(prekes, currency) {

    const sum1 = prekes[0].price * prekes[0].inStock;
    const sum2 = prekes[1].price * prekes[1].inStock;
    const sum3 = prekes[2].price * prekes[2].inStock;
    const sum = sum1 + sum2 + sum3;

    console.log('MUSU PARDUOTUVE:');
    console.log('-----------------');
    console.log(`1) ${prekes[0].name} kainuoja ${prekes[0].price} ${currency} ir turime ${prekes[0].inStock} vnt.`);
    console.log(`2) ${prekes[1].name} kainuoja ${prekes[1].price} ${currency} ir turime ${prekes[1].inStock} vnt.`);
    console.log(`3) ${prekes[2].name} kainuoja ${prekes[2].price} ${currency} ir turime ${prekes[2].inStock} vnt.`);
    console.log('-----------------');
    console.log('Viso asortimento kaina:', sum, currency);

    return shop;
} 

shop(prekes, currency)

console.log('-----------------');






console.log('GUDRESNIS BUDAS');

console.log('-----------------');

function shop() {

console.log(`MUSU PARDUOTUVE:`);
console.log(`----------------`);
let sum = 0;
for (let i = 0; i < prekes.length; i++) {
    console.log(`${prekes[i].name} kainuoja ${prekes[i].price.toFixed(2)} ${currency} ir ju turime ${prekes[i].inStock} vienetu`)
    sum += prekes[i].price * prekes[i].inStock;
}
    console.log(`----------------`);
    console.log(`Viso asortimento kaina: ${sum.toFixed(2)} ${currency}`); }

    shop(prekes, currency)





