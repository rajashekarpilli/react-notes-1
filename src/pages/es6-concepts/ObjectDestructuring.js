import React, { useEffect } from 'react'

export default function ObjectDestructuring() {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    // const a = alphabet[0]
    // const b = alphabet[1]

    // const [a, b] = alphabet
    // const [a, , c] = alphabet // skips 2nd element
    const [a, , c, ...rest] = alphabet // ...rest gives rest of the all elements except 1st, 2nd, 3rd elements

    const obj = {name: "Pardu", designation: "Frontend Developer", age: 27, favouriteFood: "Fish"}

    // function Object Destructuring
    function printUser({ name, designation, ...rest }){
        // Note: destructuring variables must be same as object keys, like name, designation etc - very important
        console.log(rest)
    }

    useEffect(() => {
        printUser(obj) // pass actual object here
        console.log(rest)
    }, [])

    return (
        <>
            <h3>ES6 - Object Destructuring</h3>
            <p>Check in console plz.</p>
        </>
    )
}
