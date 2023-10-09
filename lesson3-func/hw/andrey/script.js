// 1    root_fibonacci with 'while'

let fibonacciNumber1 = 0;
let fibonacciNumber2 = 1;
let fibonacciCount = 20;

const fibonacciRoot = document.getElementById('root_fibonacci');
const fibonacciText = document.createElement('p');
fibonacciRoot.append(fibonacciText);

while (fibonacciCount > 0) {
    fibonacciNumber2 += fibonacciNumber1;
    fibonacciNumber1 = fibonacciNumber2 - fibonacciNumber1;
    fibonacciText.textContent += fibonacciNumber2;
    console.log('Fibonacci ', fibonacciNumber2);   //
    fibonacciCount--;
    if (fibonacciCount > 0) fibonacciText.textContent += ', ';
}

// 2    root_divide with 'for'

const divideEvery = 5;
let divideCount = divideEvery;

const divideRoot = document.getElementById('root_divide');
const divideText = document.createElement('p');
divideRoot.append(divideText);

for (let i = 100; i <= 300; i++) {
    if (i % 3 == 0 && divideCount == 1) {
        if (divideText.textContent) divideText.textContent += ', ';
        divideText.textContent += i;
        console.log('divide ', i);  //
        divideCount = divideEvery;
    } else if (i % 3 == 0) {
        divideCount--
    }  
}

// 3.1  root_zodiac with function declaration & 'switch'

const zodiacRoot = document.getElementById('root_zodiac');

const zodiacLabel = document.createElement('label');
zodiacRoot.append(zodiacLabel);
zodiacLabel.textContent = 'Choose your Zodiac Sign here:'

const zodiacSelect = document.createElement('select');
zodiacRoot.append(zodiacSelect);
zodiacSelect.add(new Option('Aries (Овен): Mar 21 – Apr 19', 1));
zodiacSelect.add(new Option('Taurus (Телец): Apr 20 – May 20', 2));
zodiacSelect.add(new Option('Gemini (Близнецы): May 21 – Jun 21', 3));
zodiacSelect.add(new Option('Cancer (Рак): Jun 22 – Jul 22', 4));
zodiacSelect.add(new Option('Leo (Лев): Jul 23 – Aug 22', 5));
zodiacSelect.add(new Option('Virgo (Дева): Aug 23 – Sep 22', 6));
zodiacSelect.add(new Option('Libra (Весы): Sep 23 – Oct 23', 7));
zodiacSelect.add(new Option('Scorpio (Скорпион): Oct 24 – Nov 21', 8));
zodiacSelect.add(new Option('Sagittarius (Стрелец): Nov 22 – Dec 21', 9));
zodiacSelect.add(new Option('Capricorn (Козерог): Dec 22 – Jan 19', 10));
zodiacSelect.add(new Option('Aquarius (Водолей): Jan 20 – Feb 18', 11));
zodiacSelect.add(new Option('Pisces (Рыбы): Feb 19–Mar 20', 12));

const zodiacButton = document.createElement('button');
zodiacRoot.append(zodiacButton);
zodiacButton.textContent = 'Get Results';

const zodiacDiv = document.createElement('div');
zodiacRoot.append(zodiacDiv);
const zodiacText = document.createElement('textarea');
zodiacDiv.append(zodiacText);
zodiacText.cols = 70;
zodiacText.rows = 5;

zodiacButton.onclick = () => {
    zodiacResult()
}

function zodiacResult() {
    switch (zodiacSelect.value) {
        case '1':
            zodiacText.value = "Oct 6, 2023 - Cooperate today even if it seems easier said than done. People will have hot tempers and be veryfocused on themselves. There's a me-first attitude around, and relations will be much better if you let people have their time in the spotlight. You might find that you have an important message to express. Make sure your voice is heard.";
            break;
        case '2':
            zodiacText.value = "Oct 6, 2023 - People will be focused on themselves, leaving you wondering what all the fuss is about. You have a strong desire to express your emotions. It may feel like you're on stage in some way. You wish to be recognized and appreciated for your sensitive, devoted, and passionate nature. Speak up.";
            break;
        case '3':
            zodiacText.value = "Oct 6, 2023 - The energy flows smoothly today. Obstacles seem to have dissolved. There's a great deal of energy at your disposal. You have strong thoughts and powerful emotions backing you up. Work with partners and promote your ideas. Speak your passions out loud. Help your dreams manifest by writing them down.";
            break;
        case '4':
            zodiacText.value = "Oct 6, 2023 - There's a spark about to ignite inside you. Pay close attention to your emotions and take care of yourself physically, emotionally, and spiritually. Infuse your plans with passion. Breathe life into your dreams and act with confidence. The inner and outer aspects of your being are working in harmony.";
            break;
        case '5':
            zodiacText.value = "Oct 6, 2023 - Your emotions are piqued today. You're spurred to take action. People might have a me-first attitude that may get on your nerves. You're more interested in the collective and improving the situation for all. Someone may be working counter to this mode of action, causing friction in your dealings. Stick to your principles and act confidently.";
            break;
        case '6':
            zodiacText.value = "Oct 6, 2023 - Get off the couch and get into action. Come out of hiding and let others hear what you have to say. Let your emotions shine and don't be concerned about what others think. Dance like no one's watching. Passion will be the key to manifesting your dreams. This is a great day to act bravely toward those dreams.";
            break;
        case '7':
            zodiacText.value = "Oct 6, 2023 - This is a fantastic day. Assert yourself with confidence and move toward your goals. Your emotions are working harmoniously with your outer-directed nature. You may want more attention from others today. Enjoy jovial times with friends and loved ones. Plan an activity with children if you can. Break free from your normal routine and create your own fun.";
            break;
        case '8':
            zodiacText.value = "Oct 6, 2023 - People may seem a bit more stubborn and emotional than usual. Try not to contribute to it by being vain and stubborn. This isn't the time to contemplate. It's time to act. You have all the information you need. Make sure you're actively getting the attention you deserve and you're giving credit to the people who've helped you along the way.";
            break;
        case '9':
            zodiacText.value = "Oct 6, 2023 - This is a very opportune day for you. Say hello to the stranger in line or follow through on a tip or comment. Opportunities are there. All you have to do is grab them. You'd do very well in a group situation today. In fact, you'd do well leading others. You understand the need for action. Be decisive and confident.";
            break;
        case '10':
            zodiacText.value = "Oct 6, 2023 - People might step on your toes today, but try not to react. Go with the flow. This may be the only way they know how to act. Express your feelings. Open yourself up to the world. There are people who want to get closer to you, but they might feel too intimidated to do so. Take it one step at a time, but realize that you're probably the one who needs to take the first step.";
            break;
        case '11':
            zodiacText.value = "Oct 6, 2023 - This is a fantastic day for you, so celebrate. You're the star of the show, and you'll be up on stage more than usual. People will look up to you and respect you for your incredible leadership skills. Be confident and express yourself from your heart. Actions should run smoothly. You can accomplish quite a bit. Don't waste this day. Do some creative work.";
            break;
        case '12':
            zodiacText.value = "Oct 6, 2023 - Something may get your dander up today. There are hot tempers and strong opinions right and left. Try to see the big picture. You'll seek extra attention from others, especially when it comes to your needs and emotions. People will be irritable, but arguing will only make the situation worse. Give everyone some time and you'll find that many issues work themselves out.";
    }
}

// 3.2  root_birthday with function expression

const birthdayRoot = document.getElementById('root_birthday');

const birthdayLabel = document.createElement('label');
birthdayRoot.append(birthdayLabel);
birthdayLabel.textContent = 'Choose the Day and Month of your birth: '

const birthdayDD = document.createElement('select');
birthdayRoot.append(birthdayDD);
for (let i = 1; i <= 31; i++) {
    birthdayDD.add(new Option(birthdayZero(i), i));
}

const birthdayMM = document.createElement('select');
birthdayRoot.append(birthdayMM);
birthdayMM.add(new Option('Jan', 1));
birthdayMM.add(new Option('Feb', 2));
birthdayMM.add(new Option('Mar', 3));
birthdayMM.add(new Option('Apr', 4));
birthdayMM.add(new Option('May', 5));
birthdayMM.add(new Option('Jun', 6));
birthdayMM.add(new Option('Jul', 7));
birthdayMM.add(new Option('Aug', 8));
birthdayMM.add(new Option('Sep', 9));
birthdayMM.add(new Option('Oct', 10));
birthdayMM.add(new Option('Nov', 11));
birthdayMM.add(new Option('Dec', 12));

const birthdayButton = document.createElement('button');
birthdayRoot.append(birthdayButton);
birthdayButton.textContent = 'Get Results';

const birthdayDiv = document.createElement('div');
birthdayRoot.append(birthdayDiv);
const birthdayText = document.createElement('label');
birthdayDiv.append(birthdayText);

birthdayButton.onclick = () => {
    const birthdayCheck = function() {
        if (birthdayMM.value == 2 && birthdayDD.value > 29) return false;
        if (birthdayMM.value == 4 || birthdayMM.value == 6 || birthdayMM.value == 6 || birthdayMM.value == 11) {
            if (birthdayDD.value > 30) return false;
        }
        return true;
    }
    if (birthdayCheck() == false) {
        birthdayText.textContent = 'Please check the Day'
    } else {
        birthdayText.textContent = birthdayResult();
    }
}

function birthdayZero(birthdayNumber) {
    if (birthdayNumber < 10) return `0${birthdayNumber}`;
    return birthdayNumber;
}

function birthdayResult() {
    let birthdayDDMM = Number(birthdayDD.value + birthdayMM.value);
    let birthdayTotal = 0;
    while (birthdayDDMM  >= 10) {
        if (birthdayDDMM >= 1000) {
            birthdayTotal += (birthdayDDMM - (birthdayDDMM % 1000)) / 1000;
            birthdayDDMM = birthdayDDMM % 1000;
        }
        if (birthdayDDMM >= 100) {
            birthdayTotal += (birthdayDDMM - (birthdayDDMM % 100)) / 100;
            birthdayDDMM = birthdayDDMM % 100;
        }
        if (birthdayDDMM >= 10) {
            birthdayTotal += (birthdayDDMM - (birthdayDDMM % 10)) / 10;
            birthdayDDMM = birthdayDDMM % 10;
        }
        if (birthdayDDMM >= 0) {
            birthdayTotal += birthdayDDMM;
            birthdayDDMM = birthdayTotal;
        }
        if (birthdayTotal >= 10) birthdayTotal =0;
    }
    return `Your birth number is ${birthdayTotal}`;
}

// 3.3 root_sugar with function arrow & 'while' 

const sugarRoot = document.getElementById('root_sugar');

const sugarLabel = document.createElement('label');
sugarRoot.append(sugarLabel);
sugarLabel.textContent = 'Add sugar to tea? '

const sugarButton = document.createElement('button');
sugarRoot.append(sugarButton);
sugarButton.textContent = 'Yes, sure';

let sugarTotal = 0;
let sugarAdd = true;

sugarButton.onclick = () => {
    while (sugarAdd) {
        if (confirm('Should we add a spoonful of sugar?')) {
            sugarTotal++;
            alert(`There are ${sugarTotal} spoons of sugar into a cap of tea`);
        } else {
            sugarAdd =  false;
        }   
    }
    if (sugarTotal == 0) sugarLabel.textContent = 'Tea without sugar is great!'
    else sugarLabel.textContent = `Tea with ${sugarTotal} spoons of sugar! Enjoy your tea!`
    sugarButton.hidden = true;
}

// root_weekday

let weekdayMessage;
const weekdayRoot = document.getElementById('root_weekday');

const weekdayLabel = document.createElement('label');
weekdayRoot.append(weekdayLabel);
weekdayLabel.textContent = 'Ready to enter your birth number? ';

const weekdayButton = document.createElement('button');
weekdayRoot.append(weekdayButton);
weekdayButton.textContent = 'Yes';

weekdayButton.onclick = () => {
    const weekdayDay = +prompt('What is your birth date?', 1);
    if (weekdayDay >=1 && weekdayDay <=31) {
        switch(weekdayDay % 7) {
            case 1:  weekdayMessage = 'Monday'; break
            case 2:  weekdayMessage = 'Tuesday'; break
            case 3:  weekdayMessage = 'Wednesday'; break
            case 4:  weekdayMessage = 'Thursday'; break
            case 5:  weekdayMessage = 'Friday'; break
            case 6:  weekdayMessage = 'Saturday'; break
            default:  weekdayMessage = 'Sunday'
        }
        weekdayMessage = `The day of the week of your birth is ${weekdayMessage}. Repeat? `
    } else {
        weekdayMessage = `Invalid input. Repeat again? `
    }
    weekdayLabel.textContent = weekdayMessage;
}