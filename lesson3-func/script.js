

// let num = 0
// while (num < 20) {
//     console.log(++num)
//     // console.log(num++)
//     // num = num + 1
//     // num += 1
//     // num++
// }

// let eatPotato = null
// do {
//     console.log('Вы съели картошечку');
//     eatPotato = confirm('Съесть картошечку?')
// } while(eatPotato)


// let i = 0
// while (true) {
//     if (i > 20) break
//     console.log(i++)
// }

// let count = 0
// do {
//     ++count
//     if (count % 5 === 0) continue
//     console.log(`pull  №${count} without request`);

// } while(count < 20)



// for(let i = 0; i < 100; i += 2) {
//     // if (i === 0) continue
//     if (i % 3 === 0 && i !== 0) console.log(i);
// }

// let j = 0
// for(; ;) {
//     if (j % 3 === 0 && j !== 0) console.log(j);
//     j += 2
//     if (j >= 100) break
// }


// const animal = prompt('What is your favorite animal?', 'cat')

// switch (animal) {
//     case 'dog':
//         console.log('Dogs are wonderfull');
//         break
//     // case `horse`:
//     // case `rabbit`:
//     case 'капибара':
//         console.log('Interesting choise');
//         break
//     case 'cat':
//         console.log('Me too');
//         break
//     case null:
//         console.log('Have no favorite animal... Strange..');
//         break
//     default:
//         console.log(`${animal} is really beautiful`);
// }

// const userNum = 5

// switch (userNum) {
//     case '5':
//         console.log('str')
//         break
//     case 5:
//         console.log('num')
//         break
// }


function sayHi(name = 'anonim', age = 23) {
    alert(`Hi ${name}`)
}
// sayHi('Anna')
// sayHi('Bill')
// sayHi()
// const elem = document.getElementById('dec')
// elem.className = ''


// function changeElemColor(color) {
//     const elem = document.getElementById('dec')
//     elem.onclick = () => {
//         elem.className = color
//     }   
// }
// // changeElemColor('purple')
// changeElemColor('green')

// const elem = document.getElementById('dec')
// elem.onclick = () => {
//     const randomNum = Math.random()
//     if (randomNum < 0.2) elem.className = 'purple'
//     else if (randomNum < 0.4) elem.className = 'green'
//     else if (randomNum < 0.6) elem.className = 'blue'
//     else if (randomNum < 0.8) elem.className = 'pink'
//     else elem.className = 'yellow'
// }



// const num1 = getSquare(1)
// const num2 = getSquare(2)
// function getSquare(a = 5) {
//     return a**2
// }


// const func2 = function() {
//     console.log('another func')
// }


// const num3 = arrowFunc()
// const arrowFunc = () => {
//     console.log('arrow!!');
// }


const getWeekDay = (day) => {
    if (day <= 0 || day > 31) return 'Incorrect day number'
    const dayNum = day % 7
    switch (dayNum) {
        case 1:
            return 'Понедельник'
        case 2:
            return 'Вторник'
        case 3:
            return 'Среда'
        case 4:
            return 'Четверг'
        case 5:
            return 'Пятница'
        case 6:
            return 'Суббота'
        case 0:
            return 'Воскресенье'
        default:
            console.error(`Can't write day name, sorry`)
            break;
    }
}

// console.log(getWeekDay(1));
// console.log(getWeekDay(11));
// console.log(getWeekDay(21));
// console.log(getWeekDay(13));
// console.log(getWeekDay(16));
// console.log(getWeekDay(18));
// console.log(getWeekDay(31));


// Choigan
// const date = +prompt('Введите день вашего рождения')
// const fun = () => {
//     if (date == 1 || date == 8 || date == 15 || date == 22 || date == 29) {
//         alert('Вы родились в понедельник')
//     }
//     else if (date == 2 || date == 9 || date == 16 || date == 23 || date == 30) {
//         alert('Вы родились во вторник')
//     }
//     else if (date == 3 || date == 10 || date == 17 || date == 24 || date == 31) {
//         alert('Вы родились в среду')
//     }
//     else if (date == 4 || date == 11 || date == 18 || date == 25) {
//         alert('Вы родились в четверг')
//     }
//     else if (date == 5 || date == 12 || date == 19 || date == 26) {
//         alert('Вы родились в пятницу')
//     }
//     else if (date == 6 || date == 13 || date == 20 || date == 27) {
//         alert('Вы родились в субботу')
//     }
//     else if (date == 7 || date == 14 || date == 21 || date == 28) {
//         alert('Вы родились в воскресенье')
//     }
//     else {
//         alert('Вам необходимо ввести число от 1 до 31')
//     }
// }
// fun(date);


// Ulia
// function C(number) {
//     if (number != 0) {
//         j = number % 7

//         switch (j) {
//             case 1:
//                 console.log('Понедельник')
//                 break;

//             case 2:

//                 console.log('Вторник')
//                 break;

//             case 3:
//                 console.log('Среда')
//                 break;

//             case 4:
//                 console.log('Четверг')
//                 break;

//             case 5:
//                 console.log('Пятница')
//                 break;

//             case 6:
//                 console.log('Суббота')
//                 break;

//             case 0:
//                 console.log('Воскресенье')
//                 break;

//             default:
//                 console.log(`День`)
//         }
//     }
//     else {
//         console.log(`Ошибка`)
//     }
// }
// C(14)


// let date = prompt("Введите день своего рождения")
// switch (date) {
//     case ("1||8||15|22|29"):
//        alert("Вы родились в понедельник")
//         break;
//     case ("0"):
//        alert("В месяце нет нулевого дня")
//         break;
//     default:
//         alert("В месяце может быть только 31 день, введите другое число, пожалуйста")
// }