let errors = 0;

function checkAnswer() {
  const answerInput = document.getElementById('answerInput');
  const answerButton = document.getElementById('answerButton');
  const resultMessage = document.getElementById('resultMessage');

  answerButton.addEventListener('click', () => {
    const userAnswer = parseInt(answerInput.value);

    try {
      if (userAnswer === 4) {
        resultMessage.textContent = "Вы правы!";
      } else {
        errors++;
        throw new Error();
      }
    } catch (error) {
      resultMessage.textContent = "Вы ошиблись!";
      console.error(`Пользователь ошибся ${errors} раз`);
    }
  });

  document.body.appendChild(document.createElement('br'));
  document.body.appendChild(answerInput);
  document.body.appendChild(answerButton);
  document.body.appendChild(resultMessage);
}

checkAnswer();
