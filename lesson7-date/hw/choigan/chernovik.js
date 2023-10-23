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

function getName() {
    const arrName = [];
    for (const key of users.keys()) {
        arrName.push(key.name);
    }
    return arrName;
} // Из коллекции вытаскивая имена в новый массив

function getBd() {
    const arrBd = [];
    for (const key of users.keys()) {
        arrBd.push(key.bd);
    }
    return arrBd;
} // Из коллекции вытаскивая дни рождения в новый массив


function getDate() {
    const dateArr = [];
    getBd().forEach(el => {
        el = new Date(el);
        dateArr.push(el);
    });

    return dateArr;
} // Преобразую массив с датами в Date и записываю в новый массив 


function getMonth() {
    const m = []
    for (const month of getDate()) {
        m.push(month.getMonth() + 1)
    }
    return m
} // Записываю месяцы в новый массив


// console.log(getMonth())

function getZnak() {
    const znak = [];
    for (const zodiac of getMonth()) {
        switch (zodiac) {
            case 1: znak.push('Козерог'); break;
            case 2: znak.push('Водолей'); break;
            case 3: znak.push('Рыбы'); break;
            case 4: znak.push('Овен'); break;
            case 5: znak.push('Телец'); break;
            case 6: znak.push('Близнецы'); break;
            case 7: znak.push('Рак'); break;
            case 8: znak.push('Лев'); break;
            case 9: znak.push('Дева'); break;
            case 10: znak.push('Весы'); break;
            case 11: znak.push('Скорпион'); break;
            default: {
                znak.push('Стрелец');
            }
        }
    }
    return znak;
}

function getZodiac() {
    let length = (getName().length, getZnak().length);

    for (let index = 0; index < length; index++) {
        console.log([getName()[index], getZnak()[index]])
    }
}

console.log(getZodiac())


//-----------------------------------------------------------------------------------------


function getBirtDay() {
    const birtday = [];
    const currentTime = new Date('2023-10-23')
    users.forEach((value, key) => {

        time = (currentTime.getTime() - (new Date(key.bd).getTime())) / 1000 / 60 / 60 / 24;
        birtday.push(key.name, time + ' дней с момента рождения')
    })
    return birtday;
}

console.log(getBirtDay())