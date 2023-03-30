
type StatusProps = {
    // using union of string literals as the status type to avoid to pass any random string
    status : 'loading' | 'success' | 'error'
}



const Status = ({status} : StatusProps) => {

    let message = "";
    if(status === "loading")
        message = 'Loading...';
    else if(status === 'success')
        message = 'Data feacthed successfully'
    else if(status === 'error')
        message = 'Error feathing data';

    return(
        <div>
           <h2>{message}</h2> 
        </div>
    )
}


export default Status;