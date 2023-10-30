function write(writeText) {
    console.log(writeText);
    document.write(`${writeText} <br>`);
};
function taskRun() {
    write('// ---- code 01 ----');
    write(task);
    write(getZodiac);
    write('// ---- action 01 ----');
    task();
};
function task() {
    // input
    const users = [
        [{id: 1, name: 'Anna',     bd: '1991-01-01'}, 'user' ],
        [{id: 2, name: 'Bill',     bd: '1990-02-08'}, 'user' ],
        [{id: 3, name: 'Clint',    bd: '1988-10-19'}, 'user' ],
        [{id: 4, name: 'Den',      bd: '1993-08-08'}, 'admin'],
        [{id: 5, name: 'Eva',      bd: '1990-03-30'}, 'admin'],
        [{id: 6, name: 'Fill',     bd: '1999-03-30'}, 'user' ],
        [{id: 7, name: 'Germiona', bd: '1995-02-23'}, 'admin'],
        [{id: 8, name: 'Henry',    bd: '1992-03-08'}, 'user' ],
    ];
    // phase 1: convert map 2 array
    const map = new Map(users);
    const arr = [];
    for (let key of map.keys()) arr.push([key.name, key.bd]);
    // phase 2: get zodiag sign map from array
    const result = getZodiac(arr);
    write('look at the Result of the Function in the Console\nРезультат выполнения функции смотри в консоли');
    write(result);
};
function getZodiac(users) {
    users.forEach( (item) => {
        const birthday = new Date(item[1]);
        const birthdayDay = birthday.getDate();
        const birthdayMonth = birthday.getMonth() + 1;
        const birthdayDate = birthdayMonth + (birthdayDay < 10 ? '0': '') + birthdayDay;
        if (birthdayDate <= 119 || birthdayDate >= 1222) item[1]= 'Capricorn (Козерог)';
        else if (birthdayDate <= 218)  item[1]= 'Aquarius (Водолей)';
        else if (birthdayDate <= 320)  item[1]= 'Pisces (Рыбы)';
        else if (birthdayDate <= 419)  item[1]= 'Aries (Овен)';
        else if (birthdayDate <= 520)  item[1]= 'Taurus (Телец)';
        else if (birthdayDate <= 621)  item[1]= 'Gemini (Близнецы)';
        else if (birthdayDate <= 722)  item[1]= 'Cancer (Рак)';
        else if (birthdayDate <= 822)  item[1]= 'Leo (Лев)';
        else if (birthdayDate <= 922)  item[1]= 'Virgo (Дева)';
        else if (birthdayDate <= 1023) item[1]= 'Libra (Весы)';
        else if (birthdayDate <= 1121) item[1]= 'Scorpio (Скорпион)';
        else if (birthdayDate <= 1221) item[1]= 'Sagittarius (Стрелец)';
	});
    return new Map(users);
};
taskRun();