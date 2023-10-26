/* /* С помошью цикла for пройдитесь по элементам массива и выведите сумму числовых значений */


function  SumArrawNumber () {
    const arr = ['empty', 121, 'zero', 144, null, 189, 'nothing']
    const arrNumber = []
    let sumArrNumber = 0
for(items of arr){
  if ( typeof items == 'number'){
    arrNumber.push(items);
    sumArrNumber += items;
  }
}
console.log(sumArrNumber)
}


SumArrawNumber();


// 2) С помощью методов добавления и удаления элементов массива, заполните недостающие буквы до 'к' в алфавитном порядке
function  Alfabet () {
    const abc = ['б', 'в', 'д', 'з', 'и']
    abc.splice(0, 0, "а");
    abc.splice(3, 0, "г");
    abc.splice(5, 0, "е", "ё", "ж");
    abc.push("й", "к")
    console.log(abc)
}
Alfabet();


// 3) Создайте массив, содержащий все элементы массивов ниже. Итоговый массив измените так, чтобы его элементы были расположены в порядке убывания
const arr1 = [3, 5, 7]
const arr2 = [19, 23]
const arr3 = [11, 13, 17]


function MergeAndSortDescending (ar1,ar2,ar3){
    const arr123 = [...ar1, ...ar2, ...ar3];
    return console.log(arr123.sort((a, b) => b - a))
}
MergeAndSortDescending (arr1,arr2,arr3);


// 4) Из данного массива получите два отдельных массива методом fulter.
// Один с названиями товаров, другой с ценами. ***
// С помощью метода reduce создайте объект, где ключами будут названия, а значениями - цены.
const staff = ['dress', '9000p', 'shirt', '3000p', 'shoe', '5000p', 'hat', '1500p']
const price = Filter(staff, 1);
const product = Filter(staff, 0);
function Filter (arr, ost){
 return arr  = staff.filter((element, index) => index % 2 == ost);
}
console.log(price)
console.log(product)

const staffObj = staff.reduce((acc, item , index, staff ) => {
    if (index % 2 == 0){
       acc[staff[index]] = staff[index+1];
    }
    return acc;
  }, {});
 
console.log(staffObj)