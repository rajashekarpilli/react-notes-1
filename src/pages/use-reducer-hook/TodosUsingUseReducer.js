import React, { useReducer, useState } from 'react'
import { Form, ListGroup } from 'react-bootstrap'
import Todo from './Todo'

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
}

export default function TodosUsingUseReducerHook() {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        setName('')
    }

    return (
        <>
            <h3 className="mb-3">Todos using useReducer Hook</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control type="text" value={name} placeholder="Enter todo" onChange={e => setName(e.target.value)} />
                </Form.Group>
            </Form>
            <ListGroup>
                {todos.map(todo => <ListGroup.Item key={todo.id}><Todo todo={todo} dispatch={dispatch} /></ListGroup.Item>)}
            </ListGroup>
        </>
    )
}