const arr = ['empty', 121, 'zero', 144, null, 189, 'nothing'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number') {
    sum += arr[i];
  }
}

console.log(sum);
// -------------------- //
const abc = ['б', 'в', 'д', 'з', 'и'];

const alphabet = 'абвгдежзийк';

for (let i = 0; i < alphabet.length; i++) {
  if (!abc.includes(alphabet[i])) {
    abc.splice(i, 0, alphabet[i]);
  }
}

console.log(abc);
// -------------------- //
const arr1 = [3, 5, 7];
const arr2 = [19, 23];
const arr3 = [11, 13, 17];

const combinedArray = [...arr1, ...arr2, ...arr3];
const sortedArray = combinedArray.sort((a, b) => b - a);

console.log(sortedArray);
// -------------------- //
const staff = ['dress', '9000p', 'shirt', '3000p', 'shoe', '5000p', 'hat', '1500p'];

const names = staff.filter((item, index) => index % 2 === 0);
const prices = staff.filter((item, index) => index % 2 !== 0);

const staffObject = prices.reduce((obj, price, index) => {
  const name = names[index];
  obj[name] = price;
  return obj;
}, {});

console.log(names); 
console.log(prices);       
console.log(staffObject);