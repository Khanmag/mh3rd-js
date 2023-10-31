// 'use strict'
// callback; Promises; micro- and macro- tasks; async, await

// console.log(1); // ok
// // console.log(tit);
// // const tit = 0
// setTimeout(() => {console.log(2)}, 0) //--> EventLoop
// console.log(3); // ok
// // 2 <-- EventLoop

function showData(data) {
    data.map((item) => {
        console.log(item);
    })
}

// fetch('https://jsonplaceholder.typicode.com/users').then()

// const promise1 = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     if (Math.random() > 0.5) resolve('happy')
//     //     else reject(new Error('sad'))
//     // }, 500)
//     if (Math.random() > 0.5) resolve('happy')
//     else reject(new Error('sad'))
// })

// console.log(promise1);
// promise1
//     .then((res) => {
//         console.log(res)
//         return res
//     }, (err) => {
//         console.log('error');
//     })
//     .catch( err => {console.log(err.message)})
//     .finally( () => console.log('finally'))



// const promise2 = new Promise((resolve, reject) => {
//     const userAnswer1 = prompt('729 / 3')
// })

// function getMathTask() {
//     const getRandomNumInRange = (min, max) => {
//         return Math.round((Math.random() * (max - min))  + min)
//     }
//     const num1 = getRandomNumInRange(100, 300)
//     const num2 = getRandomNumInRange(100, 300)
//     return (Math.random() > 0.5) ? `${num1} + ${num2}` : `${num1} - ${num2}`
// }

// const askPromise = new Promise( (resolve, reject) => {
//     const task = getMathTask()
//     const userAsk = +prompt(task)
//     if (userAsk == eval(task)) resolve('right')
//     else reject('false')
// } ).then( () => {
//     const wantContinue = confirm('do you want to continue?')
//     if (wantContinue) console.log('want');
//     else console.log('don\'t want');
// })

// console.log(getMathTask());
// console.log(getMathTask());

// function getMathTask() {

//     let a = Math.round(Math.random() * (10000));
//     let b = Math.round(Math.random() * (10000));
//     if (Math.random() <= 0.2) {
//         return `${a}*${b}`
//     }
//     else if (Math.random() <= 0.5) {
//         return `${a}/${b}`
//     }
//     else if (Math.random() <= 0.8) {
//         return `${a}+${b}`
//     }
//     else {
//         return `${a}-${b}`
//     }
// }
// console.log(getMathTask());
// console.log(getMathTask());



// setTimeout(() => {
//     Promise.resolve().then(() => console.log("t1 p1"))
//     console.log('t1');
// }); // macro
// Promise.resolve().then(() => console.log("p1")); // micro
// setTimeout(() => console.log("t2"));  // macro
// Promise.reject().then(null, () => console.log("p2")); // micro
// console.log("c"); // linear


function getData(url) {
    fetch(url).then((res) => res.json()).then(data => {
        console.log(data);
    })
}

async function response(url) {
    const data = await fetch(url).then(res => res.json())
    console.log(data)
}
getData('https://jsonplaceholder.typicode.com/users')
response('https://jsonplaceholder.typicode.com/users')



