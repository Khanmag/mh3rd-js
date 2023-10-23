const users = [
   [{id: 2, name: 'Bill', bd: '1990-02-08'}, 'user'],
   [{id: 3, name: 'Clint', bd: '1988-10-19'}, 'user'],
   [{id: 4, name: 'Den', bd: '1993-08-08'}, 'admin'],
   [{id: 5, name: 'Eva', bd: '1990-03-30'}, 'admin'],
   [{id: 6, name: 'Fill', bd: '1999-03-30'}, 'user'],
   [{id: 7, name: 'Germiona', bd: '1995-02-23'}, 'admin'],
   [{id: 8, name: 'Henry', bd: '1992-03-08'}, 'user'],
]


//  first 
function GetMap(arr){
   const map = new Map();
   for(i of arr){
      map.set(i[0], i[1])
   }
   return map
}
function NameArr (map) {
   const nameArr = []
   for (let key of map.keys()) {
      nameArr.push(key.name)
   }
   return nameArr
}
function GetDate (map){
   const dateArr = []
   for (let key of map.keys()) {
      dateArr.push('1990-'+ key.bd.substr(-5,5))
   }
   return dateArr
}

 function getZodiac(arr) {
   const usersMap = GetMap(arr);
   const usersNames = NameArr(usersMap)
   const usersDate = GetDate(usersMap)

   const zodiac = ['Aries', 'Taurus', 'Gemini','Cancer','Leo', 'Virgo', 'Libra', 'Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];

   const ariesDate =  new Date('1990-03-21');
   const taurusDate = new Date('1990-04-21');
   const geminiDate = new Date('1990-05-22');
   const cancerDate = new Date('1990-06-22');
   const leoDate = new Date('1990-07-23');
   const virgoDate = new Date('1990-08-22');
   const libraDate = new Date('1990-09-24');
   const scorpioDate = new Date('1990-10-24');
   const sagittariusDate = new Date('1990-11-22');
   const capricornDate = new Date('1990-12-23');
   const aquariusDate = new Date('1990-01-21');
   const piscesDate = new Date('1990-02-20');


   const nameAndZodiac = new Map();

for (i = 0; i < usersNames.length; i++) {
   const date = new Date(usersDate[i])
    if (date >= ariesDate && date < taurusDate){
         nameAndZodiac.set(usersNames[i], zodiac[0])
      } else  if (date >= taurusDate && date < geminiDate){
         nameAndZodiac.set(usersNames[i], zodiac[1])
      } else  if (date >= geminiDate && date < cancerDate){
         nameAndZodiac.set(usersNames[i], zodiac[2])
      } else  if (date >= cancerDate && date < leoDate){
         nameAndZodiac.set(usersNames[i], zodiac[3])
      } else  if (date >= leoDate && date < virgoDate){
         nameAndZodiac.set(usersNames[i], zodiac[4])
      } else  if (date >= virgoDate && date < libraDate){  
         nameAndZodiac.set(usersNames[i], zodiac[5])
      } else  if (date >= libraDate && date < scorpioDate){
         nameAndZodiac.set(usersNames[i], zodiac[6])
      } else  if (date >= scorpioDate && date < sagittariusDate){
         nameAndZodiac.set(usersNames[i], zodiac[7])
      } else  if (date >= sagittariusDate && date < capricornDate){
         nameAndZodiac.set(usersNames[i], zodiac[8])
      } else  if (date >= capricornDate && date < aquariusDate){
         nameAndZodiac.set(usersNames[i], zodiac[9])
      } else  if (date >= aquariusDate && date < piscesDate){
         nameAndZodiac.set(usersNames[i], zodiac[10])
      } else  {
         nameAndZodiac.set(usersNames[i], zodiac[11])
      }
   }
  return nameAndZodiac

}

console.log(getZodiac(users))

// second

function howMantDaysPassed(date) {
   const now = new Date();
   let day = new Date(date);
   pars = Math.round( (now - day)  / 1000 / 60 / 60 / 24)
   const d = now.getDate()
   const m = now.toLocaleString('ru', {
      month: 'long',
      day: 'numeric',
   }).split(' ')[1];

  return`прошло ${pars} день (выполнено ${d}го ${m})`;
}

console.log(howMantDaysPassed('1999-08-10'));

// second+1

function Sorted (map) {
   const arrKey = []
   for (let key of map) {
      arrKey.push(key)
   }
   arrKey.sort((a, b) => a.name - b.name);
   return arrKey
}

console.log(Sorted(users))