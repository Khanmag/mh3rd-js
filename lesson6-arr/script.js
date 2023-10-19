// Arrays

// const arr = new Array();
// const arr = ['string', 777, true, 999n, {login: `solo`}, null, undefined, Symbol('id'), () => `HELLO!`]
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4].login);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log('8)',arr[8]());
// console.log('lenght',arr.length);

// for (let i = 0; i < arr.length ; i++) {
//     console.log(arr[i])
// }

// for (key in obj)

// for (let item of arr) {
//     console.log(`*` ,item)
// }
// console.log(arr);
// delete arr[2]
// console.log(arr);
// console.log(arr[2]);
// console.log(arr[6]);

const arr = [2, 4, undefined, 6, 7, 1, -3]
// arr.pop()
// arr.pop()
// arr.shift()
// arr.shift()
// arr.unshift(5)
// arr.push(8)
// console.log(arr);
arr.splice(2, 1)
arr.splice(4, 2)
arr.splice(0, 0, 0, 1)
// arr.splice(3, 5, 3, 5) // удалить начиная с 3го индекса 5 элементов. Вставить "3" и "5"

// arr.splice(3,0, 3) 
// arr.splice(5,0, 5)

// console.log(arr);

// console.log(arr[-1]);
// console.log(arr.at(-1));
// console.log(arr[arr.length - 1]);

// console.log(arr.slice(-5, -2));
// console.log(arr.slice(1, 5).length);

// const newArr = arr.slice(-5, -2)
// console.log(newArr.concat([13, 17]));
// console.log([...newArr, ...[13, 17]]);
// {...obj}

// Вывести массив из двухзначных чисел из arr1 и arr2
// const arr1 = [23, 34]
// const arr2 = [1, 7, 17, 19]
// console.log([...arr1, ...arr2.slice(2)]);


arr.forEach( (item, index, arr) => {
    // console.log(index, item, arr);
    // return undefined
} )

const findResult = arr.find( (element) => {
    return element > 5
})
// console.log(findResult);

const filterResult = arr.filter( (element) => {
    // return element % 2 === 1
    return element % 2
})
// console.log(filterResult); // [...]

const toSortArr = [123, 231544, 12, 123, 554534, 6534, 542]
const sortResult = toSortArr.sort( (a, b) => a - b)
// console.log(sortResult); // [...]
// console.log(toSortArr);  
// console.log(toSortArr.reverse()); 

const mapResult = arr.map( (item, index, arr) => {
    return item + 'rub'
} )
// console.log(arr);
// console.log(mapResult);

const reduceResulut = arr.reduce( (acc, item, index, arr) => {
    return acc += item
}, 0)
// console.log(arr);
// console.log(reduceResulut);

const string = `qwerty qwerty q`
const arrFromStr = string.split(' ')
// console.log(arrFromStr);
const strFromArr = arrFromStr.join('./.')
// console.log(strFromArr);


// console.log(typeof []);
// console.log(typeof new Array());

// naming
//  getArray - возвращает массив
//  isArray - возвращает true/false
console.log(Array.isArray([]));
console.log(Array.isArray(new Array()));


const newArr = [`Anna`, `Bill`, `Clint`, `Denis`, `Elvis`]
const [user1] = newArr 
console.log(user1); // `Anna`
// console.log(user2); // `Bill`
// console.log(users); // [`Clint`, `Denis`, `Elvis`]
// user1 = arr[0], user2 = arr[1], users = arr.slice(2)







