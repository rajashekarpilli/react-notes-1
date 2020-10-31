import { isInaccessible } from '@testing-library/react'
import React, { useState } from 'react'

// Counter hook
export const useCounter = (initialState, num) => {
    const [count, setCount] = React.useState(initialState)
    const add = () => setCount(count + num)
    const subtract = () => setCount(count - num)
    return { count, add, subtract }
}

// Page title hook
export const useDocumentTitle = title => {
    return document.title = title
}

// Input hook
export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue)
    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    }
    const reset = () => {
        setValue(initialValue)
    }

    return [value, bind, reset]
}

