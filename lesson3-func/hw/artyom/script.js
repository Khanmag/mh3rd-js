// ## 1) С помощью цикла while выведите в консоль последовательность чисел Фибоначчи (20 элементов), первые два элемента - 1, 2. Каждый последующий является суммой двух предыдущих

// let a = 1;
// let b = 2;
// let count = 0;

// while (count < 10) {
//   console.log(a, b);

//   a = a + b;

//   b = a + b;

//   count++;
// }

// ## 2) С помощью цикла for выведите в консоль каждое пятое число которое делится на 3 в диапазоне от 100 до 300.

// for (let i = 100; i <= 300; i++) {
//   if (i % 3 === 0) {
//     count++;
//     if (count % 5 === 0) {
//       console.log(i);
//     }
//   }
// }

// ## 3) Создайте 3 функции, разными способами.

// ### 3.1) Первая принимает в себя знак зодиака, с помощью конструкции switch она проверяет знак и выдаёт гороскоп (Предсказания придумайте сами, для 12-ти знаков выполнять не стоит, хватит и 3-х, остальным можно задать дефолтное предсказание)

// const ZodiacSign = prompt("what is your zodiac sign?", "my");

// switch (ZodiacSign) {
//   case "лев":
//     alert("beautiful styling is the key to success");
//     break;
//   case "весы":
//     alert("weigh everything well");
//     break;
//   case "овен":
//     alert("not every door needs to be knocked on");
//     break;
//   case "капибара":
//     alert(
//       "According to the capybara calendar, today is the day to take a bath"
//     );
//     break;
//   case null:
//     alert("don't believe in astrology?");
//     break;
//   default:
//     alert(`${ZodiacSign} oh, ugh`);
// }

// ### 3.2) Вторая принимает в себя день и месяц рождения и возвращает пользователю его родовое число (сумма цифр дня и месяца)

// const day = prompt("What day is your birthday?")
// const month = prompt("What month is your birthday?")

// function getBirthNumber(day, month) {
//     // Преобразуем день и месяц к строковому типу данных
//     day = day.toString();
//     month = month.toString();

//     // Суммируем цифры дня и месяца
//     let sum = 0;
//     for (let i = 0; i < day.length; i++) {
//         sum += parseInt(day[i]);
//     }
//     for (let i = 0; i < month.length; i++) {
//         sum += parseInt(month[i]);
//     }

//     return sum;
// }

// let birthNumber = getBirthNumber(day, month);

// alert("your birth number: " + birthNumber);

// ### 3.3) Третья функция спрашивает добавить ли сахар в кофе, если ответ да то выходит сообщение “ложек сахара в кофе - 1” и снова вопрос, если ответ нет - выходит сообщение “приятного кофепития”

function addSugarToCoffee() {
    let answer;
    let count = 0;
  
    do {
      answer = prompt("Добавить сахар в кофе? (Да/Нет)");
  
      if (answer.toLowerCase() === "да") {
        count++;
        alert("Ложка сахара в кофе - " + count);
      } else if (answer.toLowerCase() === "нет") {
        alert("Приятного кофепития!");
      } 
  
      if (answer.toLowerCase() !== "да" && answer.toLowerCase() !== "нет") {
        answer = prompt("Добавить сахар в кофе? (Да/Нет)");
      }
    } while (answer.toLowerCase() === "да");
  }
  
  addSugarToCoffee();
