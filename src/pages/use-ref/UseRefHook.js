import React, { useEffect, useRef, useState } from 'react'
import { capitalize } from '../../utils'

export default function UseRefHook(){
    const [name, setName] = useState('')
    const renderCount = useRef(0)
    const prevName = useRef('')

    useEffect(() => {
        prevName.current = name
    }, [name])

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })

    return(
        <>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <div>My name is <strong>{capitalize(name)}</strong></div>
            <div>I rendered {renderCount.current} times.</div>

            <h3 className="mt-4">Current and Previous Values of an Input</h3>
            <div>Current value: <strong>{name}</strong></div>
            <div>Previous value: <strong>{prevName.current}</strong></div>
        </>
    )
}
