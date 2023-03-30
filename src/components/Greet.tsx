
/*
    // this is we are passing as per that we make our type 
    props = {
        name : "Girish"
    }
*/
// it take object which contains the key value of name and string
type GreetProps = {
    name : string,
    messageCount : number,
    isLoggedIn : boolean
}


const Greet = ({name, messageCount, isLoggedIn} : GreetProps) => {
    return(
        <div>
           { isLoggedIn && <h1>Hello {name} ! {messageCount}</h1> }
        </div>
    )
}



export default Greet;