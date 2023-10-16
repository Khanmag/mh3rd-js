const width = document.getElementById('width');
const height = document.getElementById('height');

const widthValue = document.getElementById('width__value');
const heighthValue = document.getElementById('height__value');

const box = document.getElementById('box');


width.oninput = () => {
    box.style.width = width.value + 'px';
    widthValue.textContent = width.value;
}

height.oninput = () => {
    box.style.height = height.value + 'px';
    heighthValue.textContent = height.value;
}

//------------------------------------------------------------------------------


const ballAnswer = document.getElementById('ball__answer');
const questionInput = document.getElementById('question__input');
const questionBtn = document.getElementById('question__btn');

questionBtn.onclick = () => {
    const random = Math.floor(Math.random() * 5 + 1);
    questionInput.value = questionInput.value.trim();
    if (questionInput.value === '') {
        alert('Вы не задали вопрос!');
    }
    else {
        switch (random) {
            case 1: ballAnswer.textContent = 'Да'; break;
            case 2: ballAnswer.textContent = 'Нет'; break;
            case 3: ballAnswer.textContent = 'Возможно'; break;
            case 4: ballAnswer.textContent = 'Скорее нет'; break;
            default: ballAnswer.textContent = 'Вполне возможно';
        }
        questionInput.value = '';
    }
}

// ----------------------------------------------------------------------------

const word = document.getElementById('word');
const letter = document.getElementById('letter');
const checkBtn = document.getElementById('check__btn');
const repeatLetter = document.getElementById('repeat__letter');

checkBtn.onclick = () => {
    word.value = word.value.trim();
    letter.value = letter.value.trim();
    if (word.value === '') {
        alert('Вы не ввели слово!');
    }
    else if (letter.value === '') {
        alert('Вы не ввели проверочный символ!');
    }
    else if (letter.value.length > 1) {
        alert('Длина символа не может быть больше 1');
    }
    else {
        let count = 0;
        for (let i = 0; i < word.value.length; i++) {
            if (word.value[i] === letter.value) {
                count++;
            }
        }

        if (count > 0) {
            repeatLetter.textContent = `Количество повторений символа "${(letter.value).toUpperCase()}" : ${count}`;
        }
        else {
            repeatLetter.textContent = `Символ "${(letter.value).toUpperCase()}" не повторяется`;
        }

    }
}

// -----------------------------------------------------------------------------------------------------


const sentence = document.getElementById('sentence');
const sentenceInput = document.getElementById('sentence__input');
const sentenceBtn = document.getElementById('sentence__btn');

sentenceBtn.onclick = () => {
    if (sentenceInput.value.length > 20) {
        sentence.textContent = sentenceInput.value.slice(0, 20) + '...';
    }
}