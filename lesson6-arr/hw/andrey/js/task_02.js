function write(writeText) {
    console.log(writeText);
    document.write(`${writeText} <br>`);
};
function taskRun() {
    write('// ---- code 02 ----');
    write(task);
    write('// ---- action 02 ----');
    task();
};
function task() {
    const abc = ['б', 'в', 'д', 'з', 'и'];
    abc.unshift('а');
    abc.splice(3, 0, 'г');
    abc.splice(5, 0, 'е', 'ё', 'ж');
    abc.push('й', 'к');
    write(abc);
};
taskRun();