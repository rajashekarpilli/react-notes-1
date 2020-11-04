import React, { useMemo, useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'

function slowFunction(num) {
    console.log("Calling slow function...")
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2
}

export default function UseMemoHook(props) {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black"
        }
    }, [dark])

    useEffect(() => {
        console.log("Theme Changed!!")
    }, [themeStyles])

    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Control type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
                </Form.Group>
            </Form>
            <Button onClick={() => setDark(prevState => !prevState)}>Change Theme</Button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}
