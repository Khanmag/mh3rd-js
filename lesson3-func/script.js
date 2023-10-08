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

const date = 9;
const fun = () => {
    switch (date % 7) {
        case 1:
            console.log('Понедельник');
            break;

        case 2:
            console.log('Вторник');
            break;

        case 3:
            console.log('Среда');
            break;

        case 4:
            console.log('Четверг');
            break;

        case 5:
            console.log('Пятница');
            break;

        case 6:
            console.log('Суббота');
            break;

        case 0:
            console.log('Воскресенье');
            break;
        default: console.log('Нет')
    }
}

fun(date);

console.log(32 % 7);
