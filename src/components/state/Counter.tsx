// useReducer hook
import { stat } from "fs";
import { useReducer } from "react";

const initialState = {count : 0}


type CounterState = {
    count : number
}


type UpdateAction = {
    // type : string,
    type : 'Increment' | 'Decrement' | 'Reset'   // using string literals to avoid the mistakes
    payload : number   // optional not required for reset // payload? will not work 
}


type ResetAction = {
    type : 'Reset'
}

type CounterAction =  UpdateAction | ResetAction


function reducer(state : CounterState, action : CounterAction){

    switch(action.type){
        case 'Increment' : 
            return { count : state.count + action.payload}

        case 'Decrement' :
            return { count : state.count - action.payload}

        case 'Reset' :
            return { count : 0} 
        
        default : 
            return state; 
    }
}

const Counter = () =>{

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <div>
            Count : {state.count}
            <button onClick={()=> dispatch({type : 'Increment', payload : 10})}>Increment 10</button>
            <button onClick={()=> dispatch({type : 'Decrement', payload : 10})}>Decrement 10</button>  
            <button onClick={()=> dispatch({type : 'Reset'})}>Reset</button>            
        </div>
    )
}


export default Counter;