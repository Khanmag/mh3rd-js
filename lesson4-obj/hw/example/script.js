// Функция для сокращения записи, просто создаёт указанный элемент и возвращает его
const createEl = (el) => document.createElement(el)

// Функция добавления задачи, принимает в себя элемент, в который мы поместим задачу и её текст
function addTask(container, text) {
    // Создаём параграф в котором будет текст новой задачи
    const p = createEl('p')
    p.textContent = text
    // По клику мы задаём зеленый фон задаче, так она отмечается выполненной, если фона нет то он 
    // добавляется, если есть то убираем фон. 
    p.onclick = () => {
        if (p.style.backgroundColor === 'lightgreen') p.style.backgroundColor = 'transparent'
        else p.style.backgroundColor = 'lightgreen'
    }

    // Кнопка удаления задачи
    const delButton = createEl('button')
    delButton.textContent = 'delete'
    delButton.onclick = () => {
        p.style.display = 'none'
    }
    p.append(delButton)

    container.append(p)
}

function createTODO() {
    const todo = document.getElementById('todo')

    const h2 = createEl('h2')
    h2.textContent = 'TODO'

    const addingBlock = createEl('div')
    addingBlock.className = 'todo__adding'
    
    const input = createEl('input')
    const addButton = createEl('button')
    addButton.textContent = 'add'
    addingBlock.append(input, addButton)

    const tasksList = createEl('div')
    tasksList.className = 'todo__tasks'

    todo.append(h2, addingBlock, tasksList)

    addButton.onclick = () => {
        addTask(tasksList, input.value)
        input.value = ''
    }
}
createTODO()