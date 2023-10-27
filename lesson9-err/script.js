// try..catch


// const severData = '{"name: "Admin", "pass": 1111}'
// let timer
// try {
//     const userAnswer = prompt('get number')
//     if (isFinite(prompt)) {
//         console.log(+prompt);
//     } else {
//         // throw new Error('вы ввели не число')
//         // throw new SyntaxError('вы ввели не число')
//         throw new ReferenceError('вы ввели не число')
//     }
// } catch (err) {
//     console.error(`Произошла ошибка - ${err.name}`);
// } finally {
//     clearInterval(timer)
// }

// const elem = document.getElementById('root')
// elem.textContent = 'error'
// console.log('error');

const renderEl = (arr) => {
    const rootEl = document.getElementById('root')
    arr.map((item) => {
        const el = document.createElement('img')
        el.src = item.url
        el.title = item.title
        el.alt = item.title
        el.style.width = '100px'

        rootEl.append(el)
    })
}
fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => {
        if (res.status === 200) return res.json()
        else throw new Error('server crached')
    })
    .then((data) => {
        console.log(data);
        renderEl(data.slice(0, 198))
    })
    .catch((err) => {
        console.error(err.message);
    })


const renderUsers = (users) => {
    const usersContainer = document.getElementById('usersContainer')
    users.map(item => {
        const el = document.createElement('p')
        el.textContent = item.name
        usersContainer.append(el)
    })
}
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()) // check status
    .then(data => renderUsers(data))





