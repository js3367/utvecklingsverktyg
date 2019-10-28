'use strict'

class Traverse {

    static next(stack) {
        // pop stack, remove and return last value in array
        let value = stack.pop()
        // if value is not defined return null
        if (!value) {
            return null
        }
        // if we have a value call same function again
        let next = Traverse.next(stack)
        // if next is defined return value plus next
        if (next) {
            return value + next
        } else {
            // else just return value
            return value
        }
    }

}

const run = () => {
    let stack = ['1', '2', '3', '4', '5']
    console.log(Traverse.next(stack))
}

run()