// task 1.1.1
const x = 5;
const rezult = x >= 0 ? "Положительное" : "Отрицательное";
console.log(rezult);
// task 1.1.2
const y = "fjdjfjdfj";
console.log(y.length);
// task 1.1.3
console.log(y[y.length - 1]);
// task 1.1.4
console.log(x % 2 === 0 ? "чётное" : "Не чётное");
// task 1.1.5
const word1 = "Лапоть";
const word2 = "лапты";
console.log(word1[0] === word2[0] ? "Совпадают" : "Не совпадают");
// task 1.1.6
console.log(
  word1[word1.length - 1] === "ь"
    ? word1[word1.length - 2]
    : word1[word1.length - 1]
);
//-----------------section---------------//
// task 1.2.1
const number = 12345;
console.log(number.toString()[0]);
// task 1.2.2
console.log(number.toString()[number.toString().length - 1]);
// task 1.2.3
const firstDigit = parseInt(number.toString()[0]);
const lastDigit = parseInt(number.toString()[number.toString().length - 1]);
console.log(firstDigit + lastDigit);
// task 1.2.4
console.log(number.toString().length);
// task 1.2.5
let num1 = 123456;
let num2 = 654321;
console.log(
  num1.toString()[0] === num2.toString()[0] ? "Совпадают" : "Не совпадают"
);
//-----------------section---------------//
// task 1.3.1
const str131 = "ёж";
console.log(
  str131.length > 1 ? str131[str131.length - 2] : "В строке меньше 2х символов"
);
// task 1.3.2
let num132n1 = 10;
let num132n2 = 6;
console.log(
  num132n1 % num132n2 === 0 ? "Делится без остатка" : "Не делится без остатка"
);
//-----------------section---------------//
// task 1.4.1
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }
// task 1.4.2
// for (let i = -100; i <= 0; i++) {
//     console.log(i);
// }
// task 1.4.3
// for (let i = 100; i >= 1; i--) {
//     console.log(i);
// }
// task 1.4.4
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// task 1.4.5
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }
//-----------------section---------------//
// task 1.5.1
let sum151 = 0;
for (let i = 1; i <= 100; i++) {
  sum151 += i;
}
console.log(sum151);
// task 1.5.2
let sum152 = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum152 += i;
  }
}
console.log(sum152);
// task 1.5.3
let sum153 = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    sum153 += i;
  }
}
console.log(sum153);
// task 1.5.4
let num154n1 = 10;
let num154n2 = 3;
console.log(num154n1 % num154n2);
// task 1.5.5
let str155 = "Hello";
for (let i = str155.length - 1; i >= 0; i--) {
  console.log(str155[i]);
}
//-----------------section---------------//
// task 1.6.1
let arr161 = [1, 2, 3, 4, 5];
let sum161 = 0;
for (let i = 0; i < arr161.length; i++) {
  sum161 += arr161[i] ** 2;
}
console.log(sum161);
// task 1.6.2
let arr162 = [1, 4, 9, 16, 25];
let sum162 = 0;
for (let i = 0; i < arr162.length; i++) {
  sum162 += Math.sqrt(arr162[i]);
}
console.log(sum162);
// task 1.6.3
let arr163 = [-1, -2, 3, 4, -5];
let sum163 = 0;
for (let i = 0; i < arr163.length; i++) {
  if (arr163[i] > 0) {
    sum163 += arr163[i];
  }
}
console.log(sum163);
// task 1.6.4
let arr164 = [1, 2, -3, 4, -5];
let sum164 = 0;
for (let i = 0; i < arr164.length; i++) {
  if (arr164[i] > 0 && arr164[i] < 10) {
    sum164 += arr164[i];
  }
}
console.log(sum164);
//-----------------section---------------//
// task 1.7.1
const str171 = 'abcde'
console.log(Array.from(str171));
// task 1.7.2
const str172 = 12345
console.log([...str172.toString()]);
// console.log(str172.toString().split(''));
// console.log(Array.from(str172.toString()));
// task 1.7.3

// task 1.7.4

//-----------------section---------------//
// task 1.8.1

// task 1.8.2

// task 1.8.3

// task 1.8.4

// task 1.8.5

//-----------------section---------------//
// task 1.9.1

// task 1.9.2

// task 1.9.3

// task 1.9.4

// task 1.9.5

//-----------------section---------------//

