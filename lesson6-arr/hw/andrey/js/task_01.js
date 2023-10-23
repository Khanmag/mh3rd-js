function write(writeText) {
    console.log(writeText);
    document.write(`${writeText} <br>`);
};
function taskRun() {
    write('// ---- code 01 ----');
    write(task);
    write('// ---- action 01 ----');
    task();
};
function task() {
    const arr = ['empty', 121, 'zero', 144, null, 189, 'nothing'];
    let result = null;
    for (item of arr) {
        (+item) ? result += item : {};
    };
    write(result);
};
taskRun();