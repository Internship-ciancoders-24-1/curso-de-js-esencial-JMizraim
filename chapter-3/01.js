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

function printProfessions(person) {
    console.log(`${person.name} is:`)

    if (person.engineer) {
        console.log('Engineer')
    } else {
        console.log('Not an engineer')
    }

    if (person.chef) {
        console.log('Chef')
    }

    if (person.singer) {
        console.log('Singer')
    }

    if (person.dj) {
        console.log('DJ')
    }

    if (person.guitarist) {
        console.log('Guitarist')
    }

    if (person.drone) {
        console.log('Drone')
    }
}