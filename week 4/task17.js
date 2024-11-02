// Initial array of fruits
let heros = ['Pawan Kalyan', 'Dulqueer Salman', 'Ram charan', 'Nani'];

heros.push('NTR');
console.log('After adding Ntr:', heros);
heros.shift();
console.log('After removing the first hero:', heros);


heros[1] = 'Ram';
console.log('After updating the second hero to Ram:', heros);

heros.splice(1, 0, 'Sharukh khan');
console.log('After adding Sharukh khan at index 1:', heros);


const NaniIndex = heros.indexOf('Nani');
if (NaniIndex !== -1) {
    heros.splice(NaniIndex, 1);
}
console.log('After removing Nani:', heros);
