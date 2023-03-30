
// array of object is specified by :
// name : {}[]

type nameListProps = {
    names : 
        {
            first : string,
            last : string
        }[]
    }

const PersonList = ( props : nameListProps) => {

    return(
        <div>
            {
                props.names.map((name, key)=>
                <h1 key = {key}>{name.first} {name.last}</h1>)
            }
        </div>
    )
}


export default PersonList;