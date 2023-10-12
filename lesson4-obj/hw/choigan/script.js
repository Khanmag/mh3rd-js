const addBtn = document.getElementById('add__btn'); // Кнопка "Добавить"

const addInput = document.getElementById('add__input'); //Поле ввода задачи

const showList = document.getElementById('show__list'); // Секция просмотра созданных задач


// Функция создания задачи

const createEl = () => {
    const createDiv = document.createElement('div'); // Создаем блок который будет родителем для параграфа и кнопки "Удалить"
    const createP = document.createElement('p'); // Создаем параграф в котором будем хранить созданные задачи
    const createDelBtn = document.createElement('input'); // Создаем кнопку для удаления задач 

    createDelBtn.setAttribute('type', 'image'); // Задаем тип изображение для кнопки удаления(createDelBtn)
    createDelBtn.setAttribute('src', '/lesson4-obj/hw/choigan/static/icons/delete.svg') // Указываем путь к иконке "Корзины"

    createDiv.appendChild(createP); // Параграф(createP) устанавливаем наследником блока(createDiv) 
    createDiv.appendChild(createDelBtn) // Кнопку(createDelBtn) устанавливаем наследником блока(createDiv)

    createP.textContent = addInput.value; // Записываем контент с поля ввода в параграф(createP)


    showList.append(createDiv); // В секцию просмотра созданных задач(showList) добавляем блок(createDiv)


    createDiv.className = 'createDiv'; // Задаем класс созданному элементу
    createP.className = 'createP'; // Задаем класс созданному элементу
    createDelBtn.className = 'createDelBtn'; // Задаем класс созданному элементу



    // Статус задачи (если выполнено, то текст зачеркивается и фон становится светло-зеленым)
    createP.onclick = () => {
        if (createP.style.textDecoration === 'none' || createP.style.textDecoration === '') {
            createP.style.textDecoration = 'line-through';
            createP.style.backgroundColor = 'lightgreen';
        }
        else {
            createP.style.textDecoration = 'none';
            createP.style.backgroundColor = 'white';
        }
    }


    // Кнопка "Удалить"
    createDelBtn.onclick = () => {
        createDiv.remove();
    }
}


// Кнопка создания новой задачи
addBtn.onclick = () => {
    addInput.value = addInput.value.trim(); // Удаляем пробелы в начале и в конце, чтобы не сохранить пустую задачу
    if (addInput.value === '') {
        alert('Поле ввода не должно быть пустым')
    }
    else {
        createEl();
        addInput.value = '';
    }
}


