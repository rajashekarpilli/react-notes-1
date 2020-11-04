import React, { useReducer } from 'react'
import { Button } from 'react-bootstrap'

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset',
    CHANGE_COUNT: 'change-count'
}

function reducer(count, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return count + 1
        case ACTIONS.DECREMENT:
            if(count <= 1){
                return 1
            } else{
                return count - 1
            }
        case ACTIONS.RESET:
            return 0
        case ACTIONS.CHANGE_COUNT:
            return count + action.payload.amount
        default:
            return count
    }
}

function UseReducerHook() {
    const [count, dispatch] = useReducer(reducer, 1)

    return (
        <>
            <h3 className="mb-3">Counter using useReducer Hook</h3>
            <Button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</Button>
            <span className="pl-3 pr-3 fw-bold fs-24 pt-4 d-inline">{count}</span>
            <Button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</Button>
            <Button onClick={() => {
                dispatch({
                    type: ACTIONS.CHANGE_COUNT,
                    payload: { amount: 5 }
                })
            }} className="ml-3 mr-3">
                Add 5
            </Button>
            <Button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</Button>
        </>
    )
}

export default UseReducerHook