// Map, Set, Date, JSON

// const obj = {login: 329}

// const map = new Map([
//     [obj, 'qwerty'],
//     [133, 'qwerty'],
//     [null, 'qwerty'],
//     ['sign up', '1444'],
//     ['sign up', 'qwerty'],
// ])

// map.set(133, '133')
// console.log('map.get', map.get(obj));
// {} === {} => false
// map.delete(null)
// // map.clear()
// console.log(map.size);
// console.log(map);

// for (let key of map) {
//     console.log(key);
// }
// for (let key of map.keys()) {
//     console.log(key);
// }
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());


// const set = new Set([
//     {},
//     {},
//     obj,
//     obj,
//     18,
//     null,
//     '18',
//     false,
//     18,
//     NaN,
//     NaN,
// ]) // === 

// console.log(set);
// console.log(Array.from(set));

// const arr = [123, 32, 4545, 4545, 23, 32, 111, 123]

// function uniqValue(arr) {
//     // arr.indexOf()
//     // arr.lastIndexOf()
//     // ...

//     return newArr
// }

// Artyom
// const uniqueNumbers = arr.filter((value, index, self) => {
//   return self.indexOf(value) === index;
// });
// console.log(uniqueNumbers);
//

// Andrey
// const unique = Array.from(new Set(arr));
// console.log(unique);
// const unique2 = [...new Set(arr)];
// console.log(unique2);
//

const date = new Date();
const start = new Date(0);
const old = new Date('1920-02-11')
const veryOld = new Date(1110, 11, 22)





console.log(date.getMilliseconds())
console.log(date.getSeconds())
console.log(date.getHours())
console.log(date.getDay())
console.log(date.getMonth())
console.log(date.setFullYear(1510))
console.log(date.getFullYear())
// console.log(date.getTime() / 1000 / 3600 / 24 / 365)
// console.log(start)
// console.log(veryOld)
// console.log(veryOld.getTime())

const birthdayObj = new Map([
    ['Anna', '1997-02-11'],
    ['Bill', '1991-02-01'],
    ['Clint', '1985-03-07'],
    ['Den', '1973-11-25'],
])

const getLiveMilliseconds = (map) => {
    const randomNum = (Math.random() * 3).toFixed(0)
    const arr = Array.from(map.values())
    // const arr = [...map.values()]
    const result = new Date(arr[randomNum])
    // console.log(result);
    console.log(`он прожил ${result.getTime()} миллисекунд`);
}
// getLiveMilliseconds(birthdayObj)
// getLiveMilliseconds(birthdayObj)
// getLiveMilliseconds(birthdayObj)
// getLiveMilliseconds(birthdayObj)
// getLiveMilliseconds(birthdayObj)
// getLiveMilliseconds(birthdayObj)
// console.log([...birthdayObj.values()]);



// function calculateAgeInMillis() {
//     const randomIndex = Math.floor(Math.random() * birthdayObj.size);
//     const person = Array.from(birthdayObj.keys())[randomIndex];
//     const birthday = new Date(birthdayObj.get(person));
//     const now = new Date();
//     const ageInMillis = now - birthday;

//     console.log(`${person} живет уже ${ageInMillis} миллисекунд.`);
// }

// calculateAgeInMillis();

// const date1 = new Date('1999-01-01')
// const date2 = new Date('1998-01-01')

// const time = date1 - date2
// console.log('second', time);
// console.log('day', time / (24 * 3600 * 1000));
// console.log(date1.getDay() - date1.getDay());


const dataObj = {
    login: 'solo', 
    pass: 7777,
    hasError: null,
    getLogin() {
        console.log(this.login);
    },
    birthday: new Date('2020-10-10'),
}

// console.log(JSON.stringify(dataObj, ['pass', "login"], 2 ));

const string = JSON.stringify(dataObj)


console.log(string);
console.log(JSON.parse(string));
const newObj = JSON.parse(string)

console.log(newObj.birthday);
newObj.birthday = new Date(newObj.birthday)
console.log(newObj.birthday);


// 
const arr = []

function arrToString() {
    // ...
    return
}
arrToString()


const data1 = new Date('2023-08-10')
const dataNow = new Date()
console.log((dataNow - data1) / (24 * 3600 * 1000));
