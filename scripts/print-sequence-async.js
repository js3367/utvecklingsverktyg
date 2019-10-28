'use strict'

const Promise = require('bluebird')

const outputNumberAsync = async (number) => {
    await Promise.delay(1)
    console.log(number)
}

const run = async () => {
    // assign 0 to number
    let number = 0

    // print number
    console.log(number)

    // if numner larger or equal to 0
    if (number >= 0) {
        // add 1 to number (number = number + 1)
        number++
        // print number
        console.log(number)
    }
    // if number larger than 0
    if (number > 0) {
        // print number
        console.log(number)
    }
    // check if number is larger than 0 or if number is equal to 0 and larger than 0
    // this will never be the case
    if (number < 0 || (number == 0 && number > 0)) {
        number++
        console.log(number)
    }
    // loop three times add 1 to number in each loop
    for(let i = 0; i<3; i++) {
        number = number + 1
        console.log(number)
    }
    // add one to number
    number++

    // write number async (after 1 ms)
    outputNumberAsync(number)
    // set number variable to 10
    number = 10
    // print number
    console.log(number)
}

Promise.resolve(run()).catch(console.error).finally(process.exit)