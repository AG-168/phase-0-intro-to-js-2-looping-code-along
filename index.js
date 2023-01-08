// Code your solutions in this file

for  (let age = 30; 
        age < 40;
        age++
        ) {
            console.log(`I'm ${age} years old. Happy birthday to me!`)
        }


const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
    }
    return gifts
}

wrapGifts(gifts)

function writeCards(arrayString, eventName) {
    const answerArray = []
    for (let i=0; i < arrayString.length; i++) {
        answerArray.push(`Thank you, ${arrayString[i]}, for the wonderful ${eventName} gift!`)
    }

    return answerArray
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))

function countDown(number) {
    let i = number
    while (i >= 0) {
        console.log(i)
        i--
    }
}

countDown(10)

