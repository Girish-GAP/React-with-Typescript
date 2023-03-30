import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import Button from './components/Button'
import Input from './components/Input'
import Container from './Container'
import { LoggedIn } from './components/state/LoggedIn'
import User from './components/state/User'
import Counter from './components/state/Counter'

// function App() : JSX.Element // by default it assign to this type
function App() : JSX.Element {

    const personName = {
        firstName : "Girish",
        lastName : "Pawar"
    }

    // array of objects
    const nameList = [
        {
            first : 'Girish',
            last : 'Pawar',
            roll : 55
        },
        {
            first : 'Alpita',
            last : 'Pawar'
        },
        {
            first : 'Ghansham',
            last : 'Pawar'
        }
    ]


    return(
        <div>
            {/* <Greet name = {"GIRISH"} messageCount = {20}isLoggedIn  ></Greet> */}

            {/* <Person name = {personName}></Person> */}

            {/* <PersonList names = {nameList}></PersonList> */}

            {/* <Status status = {"success"}></Status> */}

            {/* Passing props in childrens */}
            {/* <Heading>PlaceHolder Text</Heading> */}

            {/* Pass react component as prop */}
            {/* <Oscar>
                <Heading>THE GIRISH PAWAR</Heading>
            </Oscar> */}

            {/* <Button handelClick = {(event, id)=>{console.log("Button clicked", event, id)}}></Button> */}

            {/* <Input value={''}  handelOnChange = {(event)=>{ console.log(event)}}></Input> */}
            
            {/* Passing styles as prop */}
            {/* <Container styles = { {border : '1px solid black', padding : '1rem'}}></Container> */}
            
            {/* <LoggedIn></LoggedIn> */}

            {/* <User></User> */}

            <Counter></Counter>

        </div>
    )
}


export default App;