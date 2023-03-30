import {useState} from 'react'


type AuthUser = {
    name : string, 
    email : string
}


const User = () => {

    // we specify the state type by incluidng andle brackets after the use state keyword
    // type can be null or authuser 
    // const [user, setUser] = useState<AuthUser | null>(null);

    // use type assertion to let typescript know that the user is always of type auth user and won't be null
    // we use as keyword for type assertion
    // we are telling 'we know better than compiler, we are in fact lying to typescript that the empty object is of type authUser'
    // if we are confident that user will be initalized soon after setup and will always have a value after you can use type assertion
    const [user, setUser] = useState<AuthUser | null>({} as AuthUser);

    const handleLogin = () => {
        setUser({
            name : 'Girish',
            email : 'Girish@example.com'
        })
    }

    const handleLogout = () =>{
        setUser(null)
    }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}

export default User;