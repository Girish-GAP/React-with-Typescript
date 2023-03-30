
type InputProps = {
    value : string | number,
    handelOnChange : (event : React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({value, handelOnChange} : InputProps)=>{
    return(
        <div>
            <input 
                type = 'text'
                value = {value}
                onChange = {handelOnChange}
                />
        </div>
    )
}


export default Input;