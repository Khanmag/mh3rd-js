// root question
function rootQuestion() {
    // root elements
    const rootInput = document.getElementById('root_question_input');
    const rootButton = document.getElementById('root_question_button');
    // generate elements
    const root = document.getElementById('root_question');
    const rootOutput = document.createElement('p');
    //
    //  counter with wrong answers
    let count = 1;
    const createCounter = () => {
        return () => count++;
    };
    const counterWrong = createCounter();
    //
    function checkQuestion() {
        root.append(rootOutput);
        try {
            if (rootInput.value.toLowerCase() == 'cat') {
                rootOutput.textContent = 'You are correct!';
                count = 1;  // reset counter wrong answer
            } else {
                rootOutput.textContent = 'You are wrong!';
                throw new Error(counterWrong());
            }
        } catch (err) {
            console.error(`The user made a mistake ${err.message} times`);
            
        };
    };
    //
    // when press button
    rootButton.onclick = () => checkQuestion();
};
// run question
rootQuestion();