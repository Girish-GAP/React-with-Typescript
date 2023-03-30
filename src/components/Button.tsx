

type ButtonProps = {
    // function which returns void
    // handelClick : () => void    // no arugument passed
    // event will be react type // more specific by adding <HTMLButtonElement>
    handelClick : (event : React.MouseEvent<HTMLButtonElement>, id : Number) => void
}

const Button = ({handelClick} : ButtonProps) => {
    return(
        <button onClick={event => handelClick(event, 1)}>Click</button>
    )
}

export default Button;