const createEl = (el) => document.createElement(el)

// ex1 Интерфейс с выбором ширины, высоты, толщины и цвета рамки

const border_section = document.getElementById('ex1')

const border_width = createEl('input')
border_width.type = 'number'

const border_height = createEl('input')
border_height.type = 'number'

const border_fatness = createEl('input')
border_fatness.type = 'number'

const border_color = createEl('input')
border_color.type = 'color'

const border = createEl('div')

const create_btn  = createEl('button')
create_btn.textContent = 'Создать рамку'

create_btn.onclick = () => {
    border.style.width = border_width.value + 'px'
    border.style.height = border_height.value + 'px'
    border.style.border =  border_fatness.value + 'px solid' + border_color.value
}

border_section.append(border_width, border_height, border_fatness, border_color, create_btn, border)

// ex2 Шар предсказаний

const oracle = document.getElementById('ex2')

const userMessage = createEl('input')
userMessage.value = 'Введите вопрос'

const enterBtn = createEl('button')
enterBtn.textContent = 'Спросить'
enterBtn.onclick = () => {
    if (userMessage.value != 'Введите вопрос'){
        let rezult = Math.random() 
        if (rezult < 0.1) magicBall.textContent = 'Да'
        else if (rezult < 0.2) magicBall.textContent = 'Возможно'
        else if (rezult < 0.3) magicBall.textContent = 'Вполне вероятно'
        else if (rezult < 0.4) magicBall.textContent = 'Скорее да'
        else if (rezult < 0.5) magicBall.textContent = 'В ближайшее время'
        else if (rezult < 0.6) magicBall.textContent = 'Никогда'
        else if (rezult < 0.7) magicBall.textContent = 'Скорее всего'
        else if (rezult < 0.8) magicBall.textContent = 'Не в ближайшее время'
        else if (rezult < 0.9) magicBall.textContent = 'Скорее нет'
        else magicBall.textContent = 'Нет'
        userMessage.value = 'Введите вопрос'
    }
}

const magicBall = createEl('div')
magicBall.style.width = '100px'
magicBall.style.height = '100px'
magicBall.style.borderRadius = '500px'
magicBall.style.textAlign = 'center'
magicBall.style.background = '#BDA0FA'
magicBall.textContent = 'Волшебный шар заряжается'

oracle.append(userMessage, enterBtn, magicBall)

// ex3 Проверка на повтор буквы

const contain = document.getElementById('ex3')

const userString = createEl('input')
userString.value = 'Введите строку'

const userLetter = createEl('input')
userLetter.value = 'Введите букву'

const rezult = createEl('p')
rezult.textContent = 'Начните ввод'

const entBtn = createEl('button')
entBtn.textContent = 'Проверить букву на повтор'
entBtn.onclick = () => CheckDuplicateLetter(userString.value, userLetter.value)

contain.append(userString, userLetter, entBtn, rezult)

function CheckDuplicateLetter (string, letter) {
   let message
   string = string.toLowerCase(string)
   letter= string.toLowerCase(letter)
   let find = string.indexOf(letter, 0)
   if (find >= 0){
        find = string.indexOf(letter, find + 1)
        if (find >= 0) {
            rezult.textContent = 'Обнаружено повторение'
            return true
            } else {
            rezult.textContent = 'Повтор не обнаружен'
            return false
            } 
   } else { return rezult.textContent = 'Такой буквы в строке нет'
}
}

// ex4 Программа укорачивает строку до 20 символов

const container = document.getElementById('ex4')

const userLongString = createEl('input')
userLongString.value = 'Введите строку'

const cutBtn = createEl('button')
cutBtn.textContent = 'Сделать короче'
cutBtn.onclick = () => CutTwenty(userLongString.value)

container.append(userLongString, cutBtn)

function CutTwenty (string) {
    let space = 0;
    let i = 0
    while (i < string.length) {
      if (string[i] == ' '){
        space++
      }
      i++
    }
   if (string.length > 20){
    i = 20 + space
    string = string.slice(0,i) + "..."
    userLongString.value = string
    return string
   }
}