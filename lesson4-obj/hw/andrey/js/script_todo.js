const rootCase = document.getElementById('root_case');
const rootInput = document.getElementById('root_input');
const rootButton = document.getElementById('root_button');

rootButton.onclick = () => {
    if (rootInput.value == "") return;
    caseAddItem();
}

function caseAddItem() {
    const rootCaseSection = document.createElement('div');
    const rootCaseItem = document.createElement('p');
    const rootCaseButton = document.createElement('button');
    rootCase.append(rootCaseSection);
    rootCaseSection.append(rootCaseItem, rootCaseButton);
    rootCaseSection.className = 'todo_case_section';    
    rootCaseItem.textContent = `\xB7 ${rootInput.value}`;
    rootCaseButton.textContent = "Delete Case";
    rootInput.value = null;
    rootCaseItem.onclick = () => {
        rootCaseItem.className == 'todo_case_done' ? rootCaseItem.className = 'todo_case_not_done': rootCaseItem.className = 'todo_case_done';
    }
    rootCaseButton.onclick = () => rootCaseSection.className = 'todo_case_off';
};