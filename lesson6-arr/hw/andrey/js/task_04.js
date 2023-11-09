function write(writeText) {
    console.log(writeText);
    document.write(`${writeText} <br>`);
};
function taskRun() {
    write('// ---- code 04 ----');
    write(task);
    write('// ---- action 04----');
    task();
};
function task() {
    const staff = ['dress', '9000p', 'shirt', '3000p', 'shoe', '5000p', 'hat', '1500p', ];
    const product = staff.filter(item => !parseFloat(item));
    const price = staff.filter(item => parseFloat(item));
    const goods = {};
    staff.reduce((acc, item) => parseFloat(item) ? goods[acc] = item : acc = item);
    write(product);
    write(price);
    write('See the Task with *** in the Console\nЗадание со *** смотри в консоле');
    write(goods);
};
taskRun();