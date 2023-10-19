const arr = ['empty', 121, 'zero', 144, null, 189, 'nothing'];

let sum = 0;

arr.forEach((item) => {
    if (isFinite(item)) {
        sum = sum + item;
    }
})
console.log('1) Сумма числовых элементов массива равна = ', sum);

// ------------------------------------------------------------------------

const abc = ['б', 'в', 'д', 'з', 'и'];

abc.splice(0, 0, 'a');
abc.splice(3, 0, 'г');
abc.splice(5, 0, 'е', 'ё', 'ж');
abc.splice(10, 0, 'й', 'к')

console.log('Заполненный недостающими буквами массив - ', abc);

// -------------------------------------------------------------------------

const arr1 = [3, 5, 7]
const arr2 = [19, 23]
const arr3 = [11, 13, 17]
let newArr = [];

newArr = [...arr1, ...arr2, ...arr3];

newArr.sort((a, b) => {
    return a - b;
});

console.log('Новый отсортированный массив - ', newArr);


// -------------------------------------------------------------------------------

const staff = ['dress', '9000p', 'shirt', '3000p', 'shoe', '5000p', 'hat', '1500p',];

const products = staff.filter((item, index) => index % 2 === 0);

const prices = staff.filter((item, index) => index % 2);

console.log('Товары - ', products);
console.log('Цены - ', prices);

const reduceArr = staff.reduce((acc, item, index, array) => {
    if (index % 2 === 0) {
        const key = item;
        const value = array[index + 1];
        return { ...acc, [key]: value };
    }
    return acc;
}, {});

console.log('Объект с ключом и значением - ', reduceArr);