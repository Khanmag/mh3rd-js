const users = [
  [{ id: 1, name: "Anna", bd: "1991-01-01" }, "user"],
  [{ id: 2, name: "Bill", bd: "1990-02-08" }, "user"],
  [{ id: 3, name: "Clint", bd: "1988-10-19" }, "user"],
  [{ id: 4, name: "Den", bd: "1993-08-08" }, "admin"],
  [{ id: 5, name: "Eva", bd: "1990-03-30" }, "admin"],
  [{ id: 6, name: "Fill", bd: "1999-03-30" }, "user"],
  [{ id: 7, name: "Germiona", bd: "1995-02-23" }, "admin"],
  [{ id: 8, name: "Henry", bd: "1992-03-08" }, "user"],
];

// ## 1) Функция принимает в себя массив (преобразованный из коллекции users) и возвращает коллекцию со знаками зодиака

function getZodiacSign(dateString) {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return "Aquarius";
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return "Pisces";
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return "Aries";
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return "Taurus";
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return "Gemini";
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return "Cancer";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return "Leo";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return "Virgo";
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return "Libra";
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return "Scorpio";
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return "Sagittarius";
  } else {
    return "Capricorn";
  }
}



function getUsersWithZodiacSign(users) {
  // 
  const map = new Map()
  // 
  users.map((user) => {
    const userInfo = user[0];
    const name = userInfo.name;
    const bd = userInfo.bd;
    const zodiacSign = getZodiacSign(bd);
    // 
    map.set(user[0].name, zodiacSign)
    // 
    // return {
    //   name: name,
    //   zodiacSign: zodiacSign,
    // };
    // return map
  });
  return map
}

const usersWithZodiacSign = getUsersWithZodiacSign(users);
console.log(usersWithZodiacSign);

// ## 2) Функция принимает в себя данные о дате рождения и возвращает количество дней, прошедшее с дня рождения

function getDaysSinceLastBirthday(users, currentDate) {
  const lastBirthdayDates = users.map((user) => {
    const bd = new Date(user[0].bd);
    bd.setFullYear(currentDate.getFullYear());
    if (bd > currentDate) {
      bd.setFullYear(currentDate.getFullYear() - 1);
    }
    return bd;
  });

  const result = new Map();

  lastBirthdayDates.forEach((bd, index) => {
    const name = users[index][0].name;
    const timeDiff = currentDate.getTime() - bd.getTime();
    const daysSinceLastBirthday = Math.floor(timeDiff / (1000 * 3600 * 24));
    result.set(
      name,
      `прошло ${daysSinceLastBirthday} день (выполнено ${currentDate.toLocaleDateString()})`
    );
  });

  return result;
}

const currentDate = new Date();
const usersWithDaysSinceLastBirthday = getDaysSinceLastBirthday(
  users,
  currentDate
);
console.log(usersWithDaysSinceLastBirthday);

// ## 3) Функция принимает в себя коллекциюю и возвращает массив из ключей, отсортированный по старшенству (от младшего к старшему)

function sortKeysByAge(users) {
    const sortedKeys = users.sort((a, b) => {
      const bdA = new Date(a[0].bd);
      const bdB = new Date(b[0].bd);
      return bdA - bdB;
    }).map(user => user[0].name);
  
    return sortedKeys;
  }
  
  const sortedKeysByAge = sortKeysByAge(users);
  console.log(sortedKeysByAge);