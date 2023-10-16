
const parent = document.getElementById('parent');
const elem = parent.querySelector('article');
const p = elem.querySelector('p');
const createBtn = document.getElementById('create');



function CreateElement () {
    
    userMessage = prompt('Введите ваше дело', 'Моё дело')
    if (userMessage != 'Моё дело'){
        let clone = elem.cloneNode(true);
        clone.style.display = "block";
        clone.children[0].textContent = userMessage;
        parent.appendChild(clone);
    } 
}

function DeleteElem () {
    elem.style.display = "none"
}


createBtn.onclick = CreateElement;
elem.onclick =  DeleteElem;

