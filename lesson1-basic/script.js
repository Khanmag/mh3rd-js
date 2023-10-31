
let a = 10;
a = 20;

const b = 20;
// b = 50;  

var c = 30;

console.log(a, typeof a)
console.log(b, typeof b)
console.log(c, typeof c)

const num = 123
// const num = - Infinity
// const num = NaN , NotANumber

const bigNum = 4515234234233112312n
console.log(bigNum, typeof bigNum)

const str1 = 'he say "No"'
const str2 = "text I'm"
const str3 = `number ${num}`
console.log(str1, typeof str1)
console.log(str2, typeof str2)
console.log(str3, typeof str3)


const bool1 = true //(1)
const bool2 = false //(0)
console.log(bool1, typeof bool1)
console.log(bool2, typeof bool2)


const empty = null
console.log(empty, typeof empty)

const notFound = undefined
console.log(notFound, typeof notFound)

const uniq = Symbol('id')
console.log(uniq, typeof uniq)

const obj = {
    name: 'Anna',
    age: 23,
}
console.log(obj, typeof obj)



console.log('a' > '8')

const t1 = NaN
const t2 = 15
console.log('isNaN',isNaN(t1))
console.log('isNaN',isNaN(t2))
// Способ определить без ф-ии isNaN

console.log('ab' > 'Ac')
console.log(5 < null)
console.log(null == 0)


const id1 = Symbol('a')
const id2 = Symbol('a')
console.log('symbols', id1 === id2)

const obj1 = {name: 'Anna'}
const obj2 = {name: 'Anna'}
console.log('obj', obj1 === obj2)

// + - * /
const result1 = 89 + '10'
console.log('result1', result1)

const result2 = 89 - '10'
console.log('result2', result2)

const int = 100 + ''
// const int = String(100)
console.log(int, typeof int)

let text = '245'
text = +text
// text = Number(text)
console.log(text, typeof text)

let nono = ' '
nono = !!nono
// text = Number(text)
console.log('nono',nono, typeof nono)

const price = 987
const resultPrice = price - (price % 50) // (price % 50) = 37

// const procent = 968 % 10
console.log('resultPrice', resultPrice)
console.log('**', 4**2)


// Перевод строки в число с помощью +
// Перевод числа в строку с помощю прибавления пустой строки
// Перевод числа или строки в булевый тип двойным отрицанием !!

// const userAlert = alert('HELLO!!!')

// const userPrompt = +prompt('How old are you?', '18')
// console.log(userPrompt, typeof userPrompt)

// const userAgree = confirm('Are you old?')
// console.log(userAgree, typeof userAgree)








