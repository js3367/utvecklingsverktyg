'use strict'

const run = () => {
    let value = 'text'
    const anotherValue = 'text'

    value = value + ' 1'
    console.log(value)

    // this will throw an exception because
    // it is only allowed to assign const variable once
    anotherValue = anotherValue + ' 1'
    console.log(anotherValue)

}

run()