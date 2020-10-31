import React from 'react'
import { useInput } from '../custom-hooks/CustomHooks'

const UserForm = () => {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return(
        <div className="form">
            <form onSubmit={submitHandler}>
                <div>
                    <lable>First Name</lable>
                    <input type="text" {...bindFirstName} />
                </div>
                <div>
                    <lable>First Name</lable>
                    <input type="text" {...bindLastName} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UserForm