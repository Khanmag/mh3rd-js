const userInput = prompt("Какое число возвести в квадрат?");
const number = parseFloat(userInput); // Преобразуем пользовательский ввод в число

if (!isNaN(number)) { // Проверяем, является ли введенное значение числом
  const squaredNumber = number * number;
  alert("Результат: " + squaredNumber);
} else {
  alert("Вы ввели некорректное значение!");
}