//---------------------------------------------------------------------------------------------
//   1 ПЕРВОЕ ЗАДАНИЕ!!!
//---------------------------------------------------------------------------------------------

const users = new Map([
    [{ id: 1, name: 'Anna', bd: '1991-01-01' }, 'user'],
    [{ id: 2, name: 'Bill', bd: '1990-02-08' }, 'user'],
    [{ id: 3, name: 'Clint', bd: '1988-10-19' }, 'user'],
    [{ id: 4, name: 'Den', bd: '1993-08-08' }, 'admin'],
    [{ id: 5, name: 'Eva', bd: '1990-03-30' }, 'admin'],
    [{ id: 6, name: 'Fill', bd: '1999-03-30' }, 'user'],
    [{ id: 7, name: 'Germiona', bd: '1995-02-23' }, 'admin'],
    [{ id: 8, name: 'Henry', bd: '1992-03-08' }, 'user']
]);

function getNameAndBd(arr) {
    // const names = [];
    // const bdMonth = [];
    const usersArr = [];
    arr.forEach((value, key) => {

        // names.push(key.name);
        // bdMonth.push(new Date(key.bd).getMonth() + 1);
        usersArr.push([key.name, new Date(key.bd).getMonth() + 1])
    });
    return usersArr;
} // Из коллекции users вытаскиваем имена и дни рождения(месяцы) и записываем их в новый массив

function getZodiac(arr) {
    zodiac = [];
    for (const index of arr) {
        switch (index[1]) {
            case 1: zodiac.push([index[0], 'Козерог']); break;
            case 2: zodiac.push([index[0], 'Водолей']); break;
            case 3: zodiac.push([index[0], 'Рыбы']); break;
            case 4: zodiac.push([index[0], 'Овен']); break;
            case 5: zodiac.push([index[0], 'Телец']); break;
            case 6: zodiac.push([index[0], 'Близнецы']); break;
            case 7: zodiac.push([index[0], 'Рак']); break;
            case 8: zodiac.push([index[0], 'Лев']); break;
            case 9: zodiac.push([index[0], 'Дева']); break;
            case 10: zodiac.push([index[0], 'Весы']); break;
            case 11: zodiac.push([index[0], 'Скорпион']); break;
            default: zodiac.push([index[0], 'Стрелец']);
        }
    }
    return zodiac;
} // Проверяяем месяц и выводим имя и знак зодиака(Каждому знаку соответствует 1 месяц)

// console.log(getZodiac(getNameAndBd(users)));


//---------------------------------------------------------------------------------------------
//   2 ПЕРВОЕ ЗАДАНИЕ!!!
//---------------------------------------------------------------------------------------------


// function getBirtDay() {
//     const birtday = [];
//     const currentTime = new Date('2023-10-23').getDay()
//     users.forEach((value, key) => {

//         time = currentTime - new Date(key.bd).getFullYear();
//         birtday.push(time)
//     })
//     return birtday;
// }

// console.log(getBirtDay())
function ddd() {
    const currentMonth = (new Date('2023-10-23').getMonth() + 1);
    console.log(currentMonth)
    const currentDay = new Date('2023-10-23').getDate();
    const newArr = []
    users.forEach((value, key) => {

        const names = key.name;
        const month = currentMonth - (new Date(key.bd).getMonth() + 1);
        const day = currentDay - new Date(key.bd).getDate();
        if (day < 0) {
            d = 30 + day;
            newArr.push([`${names}: ${month} месяцев ${d} дней`]);
        }
        else { newArr.push([`${names}: ${month} месяцев ${day} дней`]); }

    })
    return newArr
}

console.log(ddd());

//---------------------------------------------------------------------------------------------
//   3 ПЕРВОЕ ЗАДАНИЕ!!!
//---------------------------------------------------------------------------------------------