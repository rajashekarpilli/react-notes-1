import React, {useCallback, useState, useMemo} from 'react'
import { Button } from 'react-bootstrap'
import Child from './Child'

export default function ReactMemoUseMemoUseCallback() {
    const [counter, setCounter] = useState(0)
    const [input, setInput] = useState('')
    const arr = useMemo(() => {
        return [1, 2, 3]
    }, [])

    const updateCounterFromChild = useCallback(() => {
        setCounter(counter + 1)
    }, [counter])

    return (
        <>
            <h3>Hello, I am from Parent - {counter}</h3>
            <Button onClick={() => setCounter(counter + 1)}>+1</Button>{" "}
            <input type="text" onChange={e => setInput(e.target.value)} value={input} placeholder="Enter" />
            <Child arr={arr} counter={counter} updateCounter={updateCounterFromChild} />
        </>
    )
}
