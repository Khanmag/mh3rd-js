// ## 1) Создайте функцию-оптимизатор для результата выполнения ф-ии createColumn, созданной на занятии.
// Функция-оптимизатор должна принимать в себя колонки и выводить римское число в обычном виде

function convertToRoman(num) {
  let romanNum = "";

  // Создаем два массива, в которых хранятся соответствия арабских чисел и римских цифр
  const arabicNums = [100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNums = ["C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  // Проходим циклом по каждому элементу массива arabicNums
  for (let i = 0; i < arabicNums.length; i++) {
    // Пока число больше или равно текущему элементу массива arabicNums
    while (num >= arabicNums[i]) {
      // Добавляем соответствующую римскую цифру в строку romanNum
      romanNum += romanNums[i];
      // Вычитаем из числа значение текущего элемента массива arabicNums
      num -= arabicNums[i];
    }
  }

  return romanNum;
}
console.log(convertToRoman(199));
// ------------------------------ рекурсия ------------------------------ \\
function convertToRim(num) {
  // Создаем массивы, в которых хранятся соответствия арабских чисел и римских цифр
  const arabicNums = [100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNums = ["C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  // Базовый случай: если число меньше или равно 0, возвращаем пустую строку
  if (num <= 0) {
    return "";
  }

  // Проходим циклом по каждому элементу массива arabicNums
  for (let i = 0; i < arabicNums.length; i++) {
    // Если число больше или равно текущему элементу массива arabicNums
    if (num >= arabicNums[i]) {
      // Вычитаем из числа значение текущего элемента массива arabicNums
      // и рекурсивно вызываем функцию convertToRoman с обновленным значением num
      return romanNums[i] + convertToRim(num - arabicNums[i]);
    }
  }
}

console.log(convertToRoman(199));
console.log(convertToRoman(173));
console.log(convertToRoman(24));
// Отлично работает, сложновато читать код, комментарии сильно помогли

// ## 2) Создайте функцию, которая при каждом вызове возвращает массив, в котором записано время каждого её вызова.
// Проверьте её с помощью setTimeout или setInterval

// // А вот тут расхождение с заданием, время каждого её вызова, а в
// // текущей функции выводится массив из одного элемента
// const timeCallReturn = () => {
//   const currentDate = new Date();
//   let timeCall = [];

//   timeCall.push(currentDate.toLocaleTimeString());
//   console.log(timeCall);

//   return timeCall;
// };

// // // my version
// const callTimesCreator = () => {
//   const times = []
//   return () => {
//     const date = new Date()
//     times.push(date)
//     console.log(times)
//   }
// }
// const callTime = callTimesCreator()
// setInterval(callTime, 2000);
// //

// timeCallReturn();
// setInterval(timeCallReturn, 5000);

// // эта версия работает идеально
// function getTimeArray() {
//   const timeArray = [];

//   function addTime() {
//     const currentTime = new Date();
//     timeArray.push(currentTime.toLocaleTimeString());
//   }

//   setInterval(addTime, 5000);

//   return timeArray;
// }
// const result = getTimeArray();
// console.log(result);
//--------------------------------------------//
// исправленная версия по вашему примеру
// const getTimeArray = () => {
//   const timeArray = [];
//   return () => {
//     const currentTime = new Date();
//     timeArray.push(currentTime.toLocaleTimeString());
//     console.log(timeArray);
//   };
// };

// const result = getTimeArray();
// setInterval(result, 5000);

// // Тут уже моё уважение

//   ---------------------------------------------//
// Функция для сохранения данных в localStorage
// const saveToLocalStorage = (key, value) => {
//     // Проверяем поддержку localStorage в браузере
//     if (typeof(Storage) !== "undefined") {
//       // Сохраняем данные в localStorage
//       localStorage.setItem(key, JSON.stringify(value));
//     } else {
//       console.log("localStorage не поддерживается");
//     }
//   };

//   // Функция для получения данных из localStorage
//   const getFromLocalStorage = (key) => {
//     // Проверяем поддержку localStorage в браузере
//     if (typeof(Storage) !== "undefined") {
//       // Получаем данные из localStorage
//       const data = localStorage.getItem(key);
//       // Парсим строку с данными в формате JSON
//       return JSON.parse(data);
//     } else {
//       console.log("localStorage не поддерживается");
//     }
//   };

//   // Функция для добавления текущего времени в массив и сохранения его в localStorage
//   const timeCallReturn = () => {
//     const currentDate = new Date();
//     let timeCall = [];

//     timeCall.push(currentDate.toLocaleTimeString());
//     console.log(timeCall);

//     // Получаем сохраненные значения из localStorage
//     let savedTimeCallArray = getFromLocalStorage("timeCallArray") || [];
//     // Добавляем новое значение в массив
//     savedTimeCallArray.push(timeCall);
//     // Сохраняем обновленный массив в localStorage
//     saveToLocalStorage("timeCallArray", savedTimeCallArray);

//     return timeCall;
//   };

//   // Получаем сохраненные значения из localStorage
//   let timeCallArray = getFromLocalStorage("timeCallArray") || [];

//   // Добавляем текущее время в массив и сохраняем его в localStorage каждые 5 секунд
// //   setInterval(() => {
// //     timeCallArray.push(timeCallReturn());
// //   }, 5000);
//----------------------------------------------------------------------------//
const getTimeArray = () => {
    let timeArray = JSON.parse(localStorage.getItem('timeArray')) || [];
    return () => {
      const currentTime = new Date();
      timeArray.push(currentTime.toLocaleTimeString());
      localStorage.setItem('timeArray', JSON.stringify(timeArray));
      console.log(timeArray);
    };
  };
  
  const result = getTimeArray();
  setInterval(result, 5000);
  // исправленная версия с сохранением в localStorage по вашему примеру