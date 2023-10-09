const rootAge = document.getElementById('your_age');

const headAge = document.createElement('p');
rootAge.append(headAge);
headAge.textContent = 'Enter your age here:'

const inputAge = document.createElement('input');
rootAge.append(inputAge);

const msgAge = document.createElement('p');
rootAge.append(msgAge);

inputAge.onchange = () => {
    if (isNaN(inputAge.value) || inputAge.value == '' || inputAge.value > 900) msgAge.textContent = 'Is it you, Master Yoda? (Это ты, Мастер Йода?)'
    else {
        if (inputAge.value < 5) msgAge.textContent = 'You are too young to be a Padawan (Ты слишком юн для Падавана)'
        else if (inputAge.value < 16) msgAge.textContent = 'Train the boy, he will bring balance to the Force (Тренируйте мальчика, он принесёт баланс силе)'
        else if (inputAge.value > 130) msgAge.textContent = 'Greetings, Master Yoda! (Приветствую тебя, Магистр Йода!)'
        else if (inputAge.value > 60) msgAge.textContent = 'You have become a powerful Jedi (Ты стал могучим Джедаем)'
        else msgAge.textContent = 'May the Force be with you (Да пребудет с тобой Сила)'
    }
}