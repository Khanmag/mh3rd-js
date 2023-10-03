

// // console.log( !!1)
// console.log( !!0)
// // console.log( !!'0')
// console.log( !!false)
// console.log( !!null)
// console.log( !!undefined)
// console.log( !!NaN)

// console.log( 30 / Infinity)
// console.log( 30 / 0)
// // console.log( Infinity >= ...) // true


// const userAgree = confirm('do you agree?')

// if (userAgree) {
//     alert('You agree!')
// } else {
//     alert('disagree')
// }

// const userName = prompt('What is your name?', 'anonim')

// if (userName === 'anonim') {
//     alert(`I don't know you`)
// } else if (userName === 'Andy') {
//     alert('Hi, man!')
// } else if (userName === 'Choigan') {
//     alert(`Hi, ${userName}`)
// } else if (userName === 'Alexandr' || 'Kzubenstein') {
//     alert("I think we know each other")
// } else if (userName === 'Artyom') {
//     alert(`Hi, where have you been?`)
// } else if (userName === '') {
//     alert(``)
// } else if (userName) {
//     alert(`Hello, dear ${userName}`)
// } else {
//     // if null or ''
//     alert(`no name?`)
// }

// const userNum = +prompt('num')
// let result = 0
// if (userNum >= 10) result = userNum * 5
// else result = userNum * 10
// alert(result)

// const anyResult = (userNum >= 10) ? userNum * 5 : userNum * 10
// alert(anyResult)

// const data = ...
// return data || 'no data'
// console.log('||', '' || 0 || null || false )
// console.log('||', '' || 0 || null || false )

// const activeStyle = ...
// return isActive && activeStyle
// console.log('&&', 0 && '' && null && false )
// console.log('&&', 'qwerty' && !"false" && !null && 37 )
// console.log('&&', '0' && !undefined && -1 && 'false' )

// const profile = {
//     name: null,
//     age: null,
// }
// const profileName = profile.name ?? 'anonim'
// console.log('??', null ?? 0 ?? undefined ?? false )
// console.log('??', undefined ?? false ?? null )



// console.log(document)
// console.dir(document)
// console.warn(document)
// console.error(document)

// Обращаемся к элементам с помощью команд getElementById и querySelector
const rootElement = document.getElementById('root')
console.log(rootElement)
// rootElement.textContent = 'OLD TEXT!!'
// rootElement.className = 'root_element'

const passField = document.querySelector('.pass')
const passButton = document.querySelector('button')


// Создаём элементы с помощью команд createElement
const para = document.createElement('p')
para.textContent = 'give me correct pass'
// Вставляем элементы в HTML 
rootElement.append(para)

console.log(passField)
console.log(passButton)

const currectPass = 'a&9+*'
// даём функции элементам
passButton.onclick = () => {
    console.log(passField.value)
    if (passField.value === currectPass) {
        alert('Успешно!')
    } else {
        alert('Воруют!!')
    }
}

// Artyom's 
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
    // {
    //     username: ...,
    //     userpass: ...,
    // }
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === "Артём" && password === "3333") {
    alert("Вход выполнен успешно!");
  } else {
    alert("Неправильный логин или пароль. Попробуйте еще раз.");
  }
  
  usernameInput.value = "";
  passwordInput.value = "";
});


const nanEl = NaN

const notNaN = Infinity >= nanEl
