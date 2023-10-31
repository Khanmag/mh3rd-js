function write(writeText) {
    console.log(writeText);
    document.write(`${writeText} <br>`);
};
function taskRun() {
    write('// ---- code 02 ----');
    write(task);
    write(howMantDaysPassed);
    write('// ---- action 02 ----');
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
    users.forEach( (item) => {
        const date = new Date(item[0].bd);
        const result = howMantDaysPassed(date);
        write(result);
    });
};
function howMantDaysPassed(date) {
    const dateNow = new Date();
    date.setFullYear(dateNow.getFullYear());
    (dateNow - date < 0) ? date.setFullYear(dateNow.getFullYear() - 1): {};
    const daysAfterBirthday = Math.floor((dateNow - date) / (24 * 3600 *1000));
    const monthNow = [];
    if      (dateNow.getMonth() == 0) monthNow.push('January', 'января');
    else if (dateNow.getMonth() == 1) monthNow.push('February', 'февраля');
    else if (dateNow.getMonth() == 2) monthNow.push('March', 'марта');
    else if (dateNow.getMonth() == 3) monthNow.push('April', 'апреля');
    else if (dateNow.getMonth() == 4) monthNow.push('May', 'мая');
    else if (dateNow.getMonth() == 5) monthNow.push('June', 'июня');
    else if (dateNow.getMonth() == 6) monthNow.push('July', 'июля');
    else if (dateNow.getMonth() == 7) monthNow.push('August', 'августа');
    else if (dateNow.getMonth() == 8) monthNow.push('September', 'сентября');
    else if (dateNow.getMonth() == 9) monthNow.push('October', 'октября');
    else if (dateNow.getMonth() == 10) monthNow.push('November', 'ноября');
    else if (dateNow.getMonth() == 11) monthNow.push('December', 'декабря');
    let daysString = null;
    daysString = `\'${daysAfterBirthday} days have passed\' `;
    daysString += `(completed ${monthNow[0]} ${dateNow.getDate()}th)\n`;
    daysString += `\'прошло ${daysAfterBirthday} день\' `;
    daysString += `(выполнено ${dateNow.getDate()}го ${monthNow[1]})`;
    return daysString;
};
taskRun();