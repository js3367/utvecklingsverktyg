'use strict'

const run = () => {
    // objects are can contain many values
    let animal = {
        type: 'dog',
        color: 'brown',
        numberOfLegs: 4
    }

    console.log('my animal object', animal)

    // you can access an object property value like this:
    console.log('animal type is: ', animal.type)

    // objects can also contain functions
    let anotherAnimal = {
        type: 'cat',
        color: 'black',
        whatDoesItSay: function() {
            return 'Meow!'
        }
    }

    // an functions can be executed like this:
    console.log('our other animal says: ', anotherAnimal.whatDoesItSay())
}

run()