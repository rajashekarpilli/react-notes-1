import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './UserContext';
import Name from './NameComponent';
import Location from './LocationComponent';
import UserForm from './UserForm'

// This component updates with data from context
function UserIndex() {
    return (
        <UserProvider>
            <div className="App">
                <h4 className="is-size-4">
                    We'll use the React Context API to pass and receive data in
                    any component.
                </h4>
                <div className="container">
                    <UserForm />

                    <h4 className="is-size-4">Display User Info Here 👇</h4>
                    <p>
                        These two children components will receive data. These could
                        be nested components.
                    </p>
                    <Name />
                    <Location />
                </div>
            </div>
        </UserProvider>
    )
}

export default UserIndex