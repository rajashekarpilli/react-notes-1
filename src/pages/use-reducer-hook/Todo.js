import React from 'react'
import { Button } from 'react-bootstrap'
import { ACTIONS } from './TodosUsingUseReducer'

export default function Todo({ todo, dispatch }) {
    return (
        <div className="todos-list">
            <div><span className={todo.complete ? "complete" : "inprogress" }>{todo.name}</span></div>
            <div>
                <Button variant="success" className="ml-3 mr-3" onClick={() =>
                    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
                }>Toggle</Button>
                <Button variant="danger" onClick={() =>
                    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
                }>Delete</Button>
            </div>
        </div>
    )
}