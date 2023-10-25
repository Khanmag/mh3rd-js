// Recursion
// pow, createColumn

// console.log(Math.pow(3, 2)) // **
// console.log(Math.pow(5, 4)) // **
// const mathPow = (a, n) => {

// let result = 1
// for( let i = 0; i < n; i++) {
//     result *= a
// }
// return result

//     // if (n === 1) return a
//     // else return a * mathPow(a, n - 1)

//     return (n === 1) ? a : a * mathPow(a, n - 1)
// }
const mathPow = (a, n) => (n === 1) ? a : a * mathPow(a, n - 1)

// console.log(mathPow(2, 3));
// console.log(mathPow(7, 4));
// console.log(mathPow(2, 5));

const createRomeNum = (a) => {
    if (a === 1) return 'I'
    else return 'I' + createRomeNum(a - 1)
    // return (a === 1) ? a : a + createRomeNum(a - 1)
}
console.log(createRomeNum(4)); // 'IIII'
console.log(createRomeNum(40));
console.log(createRomeNum(7));


//  e3
// const getZero = (a) => {

//     if (a===1) return '0'
//     else return '0' + getZero(a-1)

// }
// console.log(getZero(5)); '00000'


const company = {
    sales: {
        sales1: [
            {
                name: 'John',
                salary: 1000
            },
            {
                name: 'Alice',
                salary: 600
            }
        ],
        sales2: [

        ]
    },
    development: {
        sites: [
            {
                name: 'Peter',
                salary: 2000
            }, {
                name: 'Alex',
                salary: 1800
            }
        ],
        internals: [
            {
                name: 'Jack',
                salary: 1300
            }
        ]
    }
};

// const getTotalSalary = (data) => {
//     if (Array.isArray(data)) {
//         return data.reduce( (acc, item) => acc += item.salary, 0)
//     }
//     else {
//         let sum = 0
//         for (key in data) {
//             sum += getTotalSalary(data[key])
//         }
//         return sum
//     }
// }
// console.log(getTotalSalary(company));





// Closures
// counterFunc + counter prorerty

// let user = 'Anna'

{
    // local
    // user = 'Bill' // происходит присваивание
    // let user = 'Bill' // происходит объявление

    // user = 'Bill'
    // console.log('local',user);
}

// console.log('global',user);

const createCounter = () => {
    let count = 0
    return () => { return count++ }
}

const counterFunc = createCounter() // () => {return count++}
console.log(counterFunc());
console.log(counterFunc());
console.log(counterFunc());
console.log(counterFunc());
console.log(counterFunc());





// globalThis
// console.log(global);
// console.log(this);
// console.log(window);
// console.log(globalThis);


// Timers
// const timeout = setTimeout(func, 3000, ...arg)
// clearTimeout(timeout)


// const timeout = setTimeout(() => {
//     alert('WORK')
//     // setTimeout(func, 2)
// }, 10000)
// clearTimeout(timeout)

// const interval = setInterval(func, 3000, ...arg)
// clearInterval(interval)

// const interval = setInterval(() => {
//     // console.log('bzzz');
//     alert('bzzzz')
// }, 2000)


const timer = setTimeout(() => {
    userAnswer = confirm('Do you wake up?')
    if (userAnswer) clearTimeout(timer)
    else {
        const interval = setInterval(() => {
            userAnswer = confirm('Ещё не встали?')
            if (userAnswer) clearInterval(interval)
        }, 2000)
    }
}, 4000)

