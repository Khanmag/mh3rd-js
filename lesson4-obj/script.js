// Objects, methods

// const obj1 = new Object()
// const obj2 = new Number()
// const obj3 = new String()

// const obj = {
//     "log in": `solo`,
//     pass: 111,
// }
// // obj.pass = 777
// // delete obj.pass

// const logIn = 'login'
// const userPass = 1111

// const newObj = {...obj, logIn, userPass}

// const obj1 = {
//     logIn, // logIn: 'login'
//     userPass, // userPass: 1111,
// }

// // console.log(obj["log in"]);
// console.log(newObj);

// const userProperty = prompt('write property', 'default')

// const obj = {
//     [userProperty]: 0,
// }

// console.log(obj);


function createObj() {
    const resultObj = {}
    while(true) {
        const userProperty = prompt('write property', 'default')

        if (!userProperty) return resultObj

        // if (userProperty in resultObj) resultObj[userProperty] = resultObj[userProperty] + 1
        if (userProperty in resultObj) resultObj[userProperty]++
        else resultObj[userProperty] = 1
    }
}
// console.log(createObj())

// const userObj = createObj() // {}
// const userObj = {user: 'Anna', status: 'commiter'}
// console.log( '111' in userObj)




const priceObj = {
    A1: 300,
    A2: 240,
    A3: 160,
    A4: 110,
    getTotalPrice: function() {
        let sum = 0
        for (key in this) {
            if ( typeof this[key] === 'number') sum += this[key]
        }
        return sum
    }
}

const anotherPriceObj = {...priceObj, A1: 500, A3: 130}

// for ( key in priceObj ) {
//     // console.log(key)
//     // console.log(priceObj[key])
//     // console.log(`ваша бумага ${key} стоит ${priceObj[key]}`);
// }
// function getTotalPrice(obj) {
//     let sum = 0
//     for (key in priceObj) {
//         sum += priceObj[key]
//     }
//     return sum
// }
// priceObj.getTotalPrice = getTotalPrice


// console.log(priceObj);
// console.log(priceObj.getTotalPrice);
// console.log(priceObj.getTotalPrice());

// console.log(anotherPriceObj)
// console.log(anotherPriceObj.getTotalPrice)
// console.log(anotherPriceObj.getTotalPrice())

// console.log(this)



const state = {
    likes: 0,
    dislikes: 0,
}
const rootDoc = document.getElementById('root')

const likeBtn = document.createElement('button')
likeBtn.textContent = 'LIKE'
likeBtn.onclick = function() {
    state.likes++
    changeLikeResult()
}

const dislikeBtn = document.createElement('button')
dislikeBtn.textContent = 'DISLIKE'
dislikeBtn.className = 'dislikeBtn'
dislikeBtn.id = 'dislikeBtn'
const any = document.getElementById('dislikeBtn')
dislikeBtn.style.color = 'red'
dislikeBtn.onclick = function() {
    state.dislikes++
    changeLikeResult()
}

const likeResult = document.createElement('p')
function changeLikeResult() {
    likeResult.textContent = `LIKES - ${state.likes}; DISLIKES - ${state.dislikes}`
}
changeLikeResult()
rootDoc.append(likeBtn, dislikeBtn, likeResult)









