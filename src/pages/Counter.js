import React from 'react'
import { useCounter, useDocumentTitle } from '../custom-hooks/CustomHooks'

const Counter = () => {
    const { count, add, subtract } = useCounter(0, 10)
    useDocumentTitle("Counter Hook")

    return(
        <>
            <h3>Counter: {count}</h3>
            <button onClick={add}>Add</button>{" "}
            <button onClick={subtract}>Subtract</button>
        </>
    )
}

export default Counter