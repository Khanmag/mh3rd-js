const contain = document.getElementById('main')  
const question = document.createElement('h1')  
const answer = document.createElement('input')
const enter = document.createElement('button')
const rezult = document.createElement('h3')
contain.append(question, answer, enter, rezult)

question.textContent = 'Какова длина Дуная (в км)?'
enter.textContent = 'ответить'

answer.type = "text";
n = 0
enter.onclick = () => {
   
   try { if (isFinite(answer.value)) {
      rezult.textContent = 'Вы правы!';
   } else {
      rezult.textContent = 'Вы ошиблись!';
      throw new Error(`пользователь ошибся ${n++}  раз`)
   }
      } catch (err) {
   
    console.error (err.message)
    }
}

