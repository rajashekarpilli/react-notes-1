import React, { memo, useMemo } from 'react'
import { Button } from 'react-bootstrap'

function Child(props) {
    const { counter, updateCounter } = props

    const childNumber = useMemo(() => {
        let output = 0
        for (let i=0; i<500_000_000; i++){
            output++
        }
        return output
    }, [])

    console.log("Child is rendering!!")

    return (
        <div className="child mt-5">
            <h3 className="mb-4">Child = {childNumber} - {counter}</h3>
            <Button onClick={updateCounter}>Click</Button>
        </div>
    )
}

export default memo(Child)