

type OscarProp = {
    // safest type of react component is React.ReactNode provided by react types package
    children : React.ReactNode
}

const Oscar = ({children} : OscarProp) => {
    return(
        <div>{children}</div>
    )
}

export default Oscar;