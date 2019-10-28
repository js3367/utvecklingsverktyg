'use strict'

const run = () => {
    // define empty string
    let text = ''

    // define until and start
    let until = 10
    let start = 0

    // loop while start is less than 10 (9)
    while(start < until) {
        // amend start value to string (0123456789)
        text += start
        start ++
    }

    // check if text length is larger than 9
    // and it will be the case since text also contain character 0 (0123456789)
    if (text.length > 9) {
        // print text
        console.log(text)
    }
    

    // convert string to array so that each character is an array value
    let array = text.split('')
    // reverse the order or the array
    array = array.reverse()
    // join the array back again to a string
    text = array.join('')
    // print text
    console.log(text)

}

run()