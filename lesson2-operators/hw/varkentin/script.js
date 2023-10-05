const userAge = prompt('Сколько вам лет?');
const userAgeNumber = Number(userAge); 

if (!isNaN(userAgeNumber)) {
    if (userAgeNumber < 5) {
        alert(`Доступ закрыт. Мы уже звоним твоей Маме`)
    } else if (userAgeNumber < 16) {
        alert(`Доступ закрыт. Мы уже звоним твоему Отцу`)
    } else if (userAgeNumber < 60) {
        alert(`Доступ к сайту успешно активирован.`)
    } else if (userAgeNumber < 130) {
        alert(`Здраствуйте, уважаемый пользователь, для вас доступен привилегированный режим просмотра сайта`)
    } else {
        alert(`Доступ закрыт. Мы уже звоним священнику`)
    }
} else {
    alert("Возраст указан неккоректно, попробуйте написать число");
}
  


