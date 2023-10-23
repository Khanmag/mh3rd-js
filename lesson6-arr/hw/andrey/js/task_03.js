function write(writeText) {
    console.log(writeText);
    document.write(`${writeText} <br>`);
};
function taskRun() {
    write('// ---- code 03 ----');
    write(task);
    write('// ---- action 03----');
    task();
};
function task() {
    const arr1 = [3, 5, 7];
    const arr2 = [19, 23];
    const arr3 = [11, 13, 17];
    const result = [].concat(arr1, arr2, arr3).sort((a, b) => a - b).reverse();
    write(result);
};
taskRun();