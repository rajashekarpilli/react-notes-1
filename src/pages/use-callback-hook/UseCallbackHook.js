import React, { useMemo, useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import List from './List'

export default function UseCallbackHook() {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    const theme = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }

    const getItems = () => {
        return [number, number + 1, number + 2]
    }

    // ************************************* Differences
    // The React docs say that useCallback: Returns a memoized callback
    // The React docs say that useMemo: Returns a memoized value
    // In other words, useCallback gives you referential equality between renders for functions. And useMemo gives you referential equality between renders for values.
    // useCallback and useMemo both expect a function and an array of dependencies. The difference is that useCallback returns its function when the dependencies change while useMemo calls its function and returns the result.


    // another example - fetchUser
    // 1. Way to solve the infinite loop
    // useEffect(() => {
    //     const fetchUser = async () => {
    //         const res = await fetch(
    //             `https://jsonplaceholder.typicode.com/users/${userId}`
    //         );
    //         const newUser = await res.json();
    //         setUser(newUser); // Triggers re-render, but ...
    //     };

    //     fetchUser();
    // }, [userId]); // ✅ ... userId stays the same.

    // But, this is an article about useCallback and useMemo, so let’s solve the problem using the former. (And, maybe you would like to use fetchUserfunction in multiple places.)
    // You can define fetchUser with useCallback so that the function stays the same, unless userId changes.

    // 2. Way to solve the infinite loop
    // const fetchUser = useCallback(async () => {
    //     const res = await fetch(
    //         `https://jsonplaceholder.typicode.com/users/${userId}`
    //     );
    //     const newUser = await res.json();
    //     setUser(newUser);
    // }, [userId]);

    // useEffect(() => {
    //     fetchUser();
    // }, [fetchUser]); // ✅ fetchUser stays the same between renders

    return (
        <div style={theme}>
            <Form>
                <Form.Group>
                    <Form.Control type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
                </Form.Group>
            </Form>
            <Button onClick={() => setDark(prevState => !prevState)}>Change Theme</Button>
            <List getItems={getItems} />
        </div>
    )
}
