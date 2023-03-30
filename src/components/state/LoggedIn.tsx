import { useState } from 'react'


export const LoggedIn = () => {

    // type script finds the waht the state variable type is based on intial value we pass in. it's calle type inferance
    // so in following condition we can pass only boolean value not 0 | 1 also
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    const handleLogout = () =>{
        setIsLoggedIn(false)
    }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is { isLoggedIn ? 'Logged in' : 'Logged out'}</div>
        </div>
    )
}