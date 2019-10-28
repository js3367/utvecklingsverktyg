'use strict'

const run = () => {
    // assign number value 0
    let number = 0

    // print number
    console.log(number)

    // check if number is larger or equal to 0
    if (number >= 0) {
        // add 1 to number (number = number + 1)
        number++
        // print number
        console.log(number)
    }
    // check if number larger than 0
    if (number > 0) {
        console.log(number)
    }

    // loop three times add 1 to number in each loop
    // and print out number
    for(let i = 0; i<3; i++) {
        number = number + 1
        console.log(number)
    }
}

run()