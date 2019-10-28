'use strict'

// run is an function, it is just declared using the new arrow syntax
// introduced in Javascript version ES6
const run = () => {

    // this is also an function
    const myFunction = function() {
        console.log('Hello from my function')
    }
    // execute my function
    myFunction()

    // functions can 
    const myFunctionWithParameters = function(param1, param2) {
        console.log('function executed with parameters', param1, param2)
        // functions can return values
        return param1 + param2
    }
    // execute function with parameters
    let result = myFunctionWithParameters(5, 10)
    console.log('return value of myFunctionWithParameters is ', result)

    // in Javascript variables declared inside an function becomes local to the function
    const myFunctionWithPrivateVariables = function() {
        let thisIsSoPrivate = 'ssh secret..'
        console.log(thisIsSoPrivate)
    }
    try {
    // trying to access thisIsSoPrivate variable outside the function will trow an variable not defined exception
    console.log('try to write out secret variable:', thisIsSoPrivate)
    } catch(err) {
        console.log('doo do do do, can\'t touch this:', err.message)
    }

}

// this is how an function is executed
run()