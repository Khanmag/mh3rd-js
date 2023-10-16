const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");
const thicknessInput = document.getElementById("thickness");
const colorInput = document.getElementById("color");
const chooseButton = document.getElementById("choose");
const frameDiv = document.getElementById("frame");

chooseButton.addEventListener("click", () => {
  const width = widthInput.value;
  const height = heightInput.value;
  const thickness = thicknessInput.value;
  const color = colorInput.value;

  frameDiv.style.border = `${thickness}px solid ${color}`;
  frameDiv.style.width = `${width}px`;
  frameDiv.style.height = `${height}px`;
});

// --------------------------------------------------------------//

const questionInput = document.getElementById("question");
const askButton = document.getElementById("ask");

askButton.addEventListener("click", () => {
  const answers = ["Да", "Нет", "Возможно", "Вполне вероятно"];

  if (questionInput.value === "") {
    questionInput.placeholder = "Задайте вопрос...";
  } else {
    const answer =
      answers[Math.floor(Math.random() * answers.length)] +
      ", Введите новый вопрос...";
    if (answer === questionInput.value) {
      questionInput.placeholder = "Введите новый вопрос...";
      askButton.setAttribute("disabled", true);
    } else {
      questionInput.value = answer;
      questionInput.placeholder = "Задайте вопрос...";
      askButton.setAttribute("disabled", true);
    }
  }
});

questionInput.addEventListener("input", () => {
  if (questionInput.value === "") {
    askButton.setAttribute("disabled", true);
  } else {
    askButton.removeAttribute("disabled");
  }
});

// --------------------------------------------------------------//

function checkLetter() {
  let wordInput = document.getElementById("word");
  let word = wordInput.value.trim();

  if (!/^[a-zA-Zа-яА-Я]+$/.test(word)) {
    alert("Введите корректное слово");
    return;
  }

  let letter = prompt("Введите букву");

  if (!/^[a-zA-Zа-яА-Я]$/.test(letter)) {
    alert("Введите корректную букву");
    return;
  }

  word = word.toLowerCase();
  letter = letter.toLowerCase();

  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++;
    }
  }

  if (count > 1) {
    alert("true");
  } else if (count === 1) {
    alert("false");
  } else {
    alert("В слове нет такой буквы");
  }
}

document.getElementById("btn").onclick = checkLetter;

// --------------------------------------------------------------//

function shortenString(str) {
  var input = document.getElementById("string-input").value;
  if (input.length > 20) {
    alert(input.slice(0, 19) + "...");
  } else {
    alert(input);
  }
}
