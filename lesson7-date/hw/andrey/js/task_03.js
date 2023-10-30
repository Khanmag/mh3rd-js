function write(writeText) {
    console.log(writeText);
    document.write(`${writeText} <br>`);
};
function taskRun() {
    write('// ---- code 03 ----');
    write(task);
    write(sortByDate);
    write('// ---- action 03 ----');
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
    const map = new Map(users);
    const result = sortByDate(map);
    write('look at the Result of the Function in the Console\nРезультат выполнения функции смотри в консоли');
    write(result);
};
function sortByDate(map) {
    const arr = [];
    for (let key of map.keys()) arr.push(key);
    const result = arr.sort( function(a, b) {
        if(a.bd < b.bd) { return -1};
        if(a.bd > b.bd) { return 1};
        return 0;
    });
    return result;
};
taskRun();