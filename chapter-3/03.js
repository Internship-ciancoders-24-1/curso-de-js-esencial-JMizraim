const sacha = {
    name: 'Sacha',
    lastName: 'Lifszyc',
    age: 28,
    engineer: true,
    chef: false,
    singer: false,
    dj: false,
    guitarist: false,
    drone: true
}

const MAJOR_AGE = 18

const isAdult = person => person.age >= MAJOR_AGE


function printIfIsAdult(person) {
    if (isAdult(person)) {
        console.log(`${person.name} is an adult`)
    } else {
        console.log(`${person.name} is not an adult`)
    }
}

function allowAccess(person) {
    if (!isAdult(person)) {
        console.log('ACCESS DENIED')
    }
}