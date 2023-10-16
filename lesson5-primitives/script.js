const createEl = (el) => document.createElement(el)

// function createItem(el) document.createElement(el)



const num = 329

// console.log(num.toString(), typeof num.toString());
// // console.log(num + "", typeof num + ""); // 'string' + ''
// console.log(num + "", typeof (num + ""));
// console.log('2', +num.toString(2));
// console.log('8', +num.toString(8));
// console.log('16', +num.toString(16));
// console.log('36', +num.toString(36));

// console.log('..', 400..toString(36));


const tv = document.getElementById('tv_creator')
tv.style.padding = '20px'

const tv_width = createEl('input')
tv_width.type = 'number'
const tv_height = createEl('input')
tv_height.type = 'number'

const tv_color = createEl('input')
tv_color.type = 'color'

const monitor = createEl('div')

const create_btn = createEl('button')
create_btn.textContent = 'create'
create_btn.onclick = () => {
    monitor.style.border = '3px solid black'
    monitor.style.width = tv_width.value + "px"
    monitor.style.height = tv_height.value + "px"
    monitor.style.backgroundColor = tv_color.value
    // tv_width.value
    // tv_height.value
}
tv.append(tv_width, tv_height, tv_color, create_btn, monitor)

// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

const getRandomNumInRange = (min, max) => {
    let result = Math.random() * (max - min) + min
    result = result.toFixed(0)
    // console.log(result)
    return result
}
// getRandomNumInRange(100, 200)
// getRandomNumInRange(10, 500)
// getRandomNumInRange(-50, 20)

const getRandomNumInRangeFromZeroTo = (max) => {
    let result = Math.random()
    result = result * 300
    result = result.toFixed(0)
    console.log(result);
    return result
}
// getRandomNumInRangeFromZeroTo()
// getRandomNumInRangeFromZeroTo()
// getRandomNumInRangeFromZeroTo()
// getRandomNumInRangeFromZeroTo()

// const indicator = Math.random()

// if (indicator < 0.33) console.log(1)
// else if (indicator < 0.66) console.log(2)
// else console.log(3)

//  ` result ${ 155 / 5 } `

// console.log('He say: "HI!"')
// console.log("He say: \"HI!\"")
// console.log("He say: \nHI! \t...")


const str = 'qwerty qwery'
// const str1 = {
//     value: '329312421',
//     getValue() {
//         return this.value
//     }
// }

console.log(str.length, str);
const index = getRandomNumInRange(0, 11)
console.log(index, str[index]);
console.log('at', str.at(-2));
console.log('Qwerty Query =>', 'Qwerty Query'.toUpperCase());
console.log('Qwerty Query =>', 'Qwerty Query'.toLowerCase());
console.log('qwerty qwery =>', str.indexOf('w', 2));
console.log('qwerty qwery =>', str.lastIndexOf('y', 6));

console.log('includes =>', str.includes('rt'));
console.log('startsWith =>', str.startsWith('qwe'));
console.log('endsWith =>', str.endsWith('ry'));


const findSTR = 'dwqhfwiehfgsdoigbnsdaf'
// const substr = 'fsa'
// console.log(findSTR.toLowerCase().includes(substr.toLowerCase()));

console.log(findSTR, findSTR.slice(4, -5));
console.log(findSTR, findSTR.substring(4, 1));
console.log(findSTR, findSTR.substr(4, 10));





// 3, r
// 5, y

// console.log(str1.value);
// console.log(str1.getValue());






