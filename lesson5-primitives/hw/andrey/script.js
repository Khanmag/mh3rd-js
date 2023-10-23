// root Frame Selection
function frameSelectRoot() {
    // root elements
    // const rootFrameSelectInput = document.getElementById('root_frameSelection_input');
    const rootFrameSelectInputWidth = document.getElementById('frameSelect_input_width');
    const rootFrameSelectSelectWidth = document.getElementById('frameSelect_select_width');
    const rootFrameSelectInputHeigth = document.getElementById('frameSelect_input_heigth');
    const rootFrameSelectSelectHeigth = document.getElementById('frameSelect_select_heigth');
    const rootFrameSelectInputThickness = document.getElementById('frameSelect_input_thickness');
    const rootFrameSelectSelectThickness = document.getElementById('frameSelect_select_thickness');
    const rootFrameSelectSelectColor = document.getElementById('frameSelect_select_color');
    const rootFrameSelectInputColor = document.getElementById('frameSelect_input_color');
    const rootFrameSelectButton = document.getElementById('frameSelect_button');
    const rootFrameSelectionOutput = document.getElementById('root_frameSelection_output');
    // frame generation
    const rootFrameSelectionOutputFrame = document.createElement('input');
    rootFrameSelectionOutput.append(rootFrameSelectionOutputFrame);
    rootFrameSelectionOutputFrame.style.display = 'none';
    rootFrameSelectionOutputFrame.disabled = true;
    // frame object
    const objOutputFrame = {
        width: rootFrameSelectSelectWidth.value,
        heigth: rootFrameSelectSelectHeigth.value,
        thickness: rootFrameSelectSelectThickness.value,
        color: rootFrameSelectSelectColor.value,
    };
    // press button
    rootFrameSelectButton.onclick = () => {
        objOutputFrame.width = rootFrameSelectSelectWidth.value;
        objOutputFrame.heigth = rootFrameSelectSelectHeigth.value;
        objOutputFrame.thickness = rootFrameSelectSelectThickness.value;
        objOutputFrame.color = rootFrameSelectSelectColor.value;
        rootFrameSelectionOutputFrame.style.display = null;
        rootFrameSelectionOutputFrame.style.width = objOutputFrame.width + 'px';
        rootFrameSelectionOutputFrame.style.height = objOutputFrame.heigth + 'px';
        rootFrameSelectionOutputFrame.style.border = `${objOutputFrame.thickness}px solid ${objOutputFrame.color}`;
    }
    // change width input
    rootFrameSelectInputWidth.onchange = () => rootFrameSelectSelectWidth.value = rootFrameSelectInputWidth.value;
    // change width select
    rootFrameSelectSelectWidth.onchange = () => rootFrameSelectInputWidth.value = rootFrameSelectSelectWidth.value;
    // change heigth input
    rootFrameSelectInputHeigth.onchange = () => rootFrameSelectSelectHeigth.value = rootFrameSelectInputHeigth.value;
    // change heigth select
    rootFrameSelectSelectHeigth.onchange = () => rootFrameSelectInputHeigth.value = rootFrameSelectSelectHeigth.value;
    // change thickness input
    rootFrameSelectInputThickness.onchange = () => rootFrameSelectSelectThickness.value = rootFrameSelectInputThickness.value;
    // change thickness select
    rootFrameSelectSelectThickness.onchange = () => rootFrameSelectInputThickness.value = rootFrameSelectSelectThickness.value;
    // change color select
    rootFrameSelectSelectColor.onchange = () => rootFrameSelectInputColor.value = rootFrameSelectSelectColor.value;
    // change color input
    rootFrameSelectInputColor.onchange = () => rootFrameSelectSelectColor.value = rootFrameSelectInputColor.value;
};
// run Frame Selection
frameSelectRoot();

// root Magic Ball
function magicBallRoot() {
    // root elements
    const rootMagicBallQuestion = document.getElementById('root_magicBall_question');
    const rootMagicBallButton = document.getElementById('root_magicBall_button');
    const rootMagicBallAnswer = document.getElementById('root_magicBall_answer');
    const rootMagicBallCircle = document.getElementById('root_magicBall_circle');
    const rootMagicBallTriangle = document.getElementById('root_magicBall_triangle');
    const rootMagicBallMessage = document.getElementById('root_magicBall_message');
    // root Magic Answers
    const magicBallAnswer = [
        'It is certain', 'Бесспорно', 'blue',
        'It is decidedly so', 'Предрешено', 'blue',
        'Without a doubt', 'Никаких сомнений', 'blue',
        'Yes - definitely', 'Определённо да', 'blue',
        'You may rely on it', 'Можешь быть уверен в этом', 'blue',

        'As I see it, yes', 'Мне кажется — "да"', 'green',
        'Most likely', 'Вероятнее всего', 'green',
        'Outlook good', 'Хорошие перспективы', 'green',
        'Signs point to yes', 'Знаки говорят — "да"', 'green',
        'Yes', 'Да', 'green',

        'Reply hazy, try again', 'Пока не ясно, попробуй снова', 'yellow',
        'Ask again later', 'Спроси позже', 'yellow',
        'Better not tell you now', 'Лучше не рассказывать', 'yellow',
        'Cannot predict now', 'Сейчас нельзя предсказать', 'yellow',
        'Concentrate and ask again', 'Сконцентрируйся и спроси опять', 'yellow',
        
        'Don\'t count on it', 'Даже не думай', 'red',
        'My reply is no', 'Мой ответ — "нет"', 'red',
        'My sources say no', 'По моим данным — "нет"', 'red',
        'Outlook not so good', 'Перспективы не очень хорошие', 'red',
        'Very doubtful', 'Весьма сомнительно', 'red',
    ];
    // press button
    rootMagicBallButton.onclick = () => {
        const magicBallAnswerNumber = Math.ceil(Math.random() * (magicBallAnswer.length / 3));
        const magicBallGetAnswerEng = magicBallAnswer[magicBallAnswerNumber * 3 - 3];
        const magicBallGetAnswerRus = magicBallAnswer[magicBallAnswerNumber * 3 - 2];
        const magicBallGetAnswerColor = magicBallAnswer[magicBallAnswerNumber * 3 - 1];

        rootMagicBallTriangle.className = 'magicBall_triangle_on';
        rootMagicBallMessage.className = 'magicBall_message_normal';

        switch (magicBallGetAnswerColor) {
            case 'blue':
                rootMagicBallCircle.className = 'magicBall_сircle_inner_blue';
		        break;
            case 'green':
                rootMagicBallCircle.className = 'magicBall_сircle_inner_green';
                break;
            case 'yellow':
                rootMagicBallCircle.className = 'magicBall_сircle_inner_yellow';
                break;
            case 'red':
                rootMagicBallCircle.className = 'magicBall_сircle_inner_red';
		        break;
            default:
                rootMagicBallCircle.className = 'magicBall_сircle_inner_white';
        };

        rootMagicBallQuestion.value = null;
        rootMagicBallMessage.textContent = magicBallGetAnswerEng;
        rootMagicBallAnswer.value = `${magicBallGetAnswerEng} (${magicBallGetAnswerRus})`;
    };
};
// run Magic Ball
magicBallRoot();

// root Find Letter
function findLetterRoot() {
    // root elements
    const rootFindLeterInputWord = document.getElementById('findLeter_input_word');
    const rootFindLeterInputLetter = document.getElementById('findLeter_input_letter');
    const rootFindLeterButton = document.getElementById('findLeter_button');
    const rootFindLetterOutput = document.getElementById('root_findLetter_output');
    // press button
    rootFindLeterButton.onclick = () => {
        const findLetterResult = findLetterCheck(rootFindLeterInputWord, rootFindLeterInputLetter);
        switch (findLetterResult) {
            case true:
                rootFindLetterOutput.textContent = 'This Letter is Repeated Several Times in the Word(s)';
		        break;
            case false:
                rootFindLetterOutput.textContent = 'This Letter is Repeated Once in the Word';
                break;
            default:
                rootFindLetterOutput.textContent = 'No Letter in the Word(s)';
        };
        rootFindLeterInputLetter.value = rootFindLeterInputLetter.value[0]; 
    };
};
// checking Letter in Word(s)
function findLetterCheck(rootFindLeterInputWord, rootFindLeterInputLetter) {
    const findLetterNumberOne = rootFindLeterInputWord.value.indexOf(rootFindLeterInputLetter.value[0], 0);
    const findLetterNumberTwo = rootFindLeterInputWord.value.lastIndexOf(rootFindLeterInputLetter.value[0], rootFindLeterInputWord.value.length);
    if (findLetterNumberOne == -1) return;
    else if (findLetterNumberOne == findLetterNumberTwo ) return false;
    else return true;
};
// run Find Letter
findLetterRoot();

// root Shorten String
function shortenStringRoot() {
    // root elements
    const rootShortenStringInputString = document.getElementById('shortenString_input_string');
    const rootShortenStringButton = document.getElementById('shortenString_button');
    const rootShortenStringOutput = document.getElementById('root_shortenString_output');
    // press button
    rootShortenStringButton.onclick = () => {
        const shortenStringResult = shortenStringOutput(rootShortenStringInputString);
        rootShortenStringOutput.textContent = shortenStringResult;
    };
};
// Shorten the String
function shortenStringOutput(rootShortenStringInputString) {
    if (rootShortenStringInputString.value.length > 20) return (rootShortenStringInputString.value.substr(0, 20) + '...');
    return rootShortenStringInputString.value;
};
// run Shorten String
shortenStringRoot();