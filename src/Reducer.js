import React from 'react';
import { useReducer} from 'react';
//Reducer is used in component which contains many states
const reducer=(state,action)=>{
    if(action.type==="increment"){
        return state + 1;
    }
    if(action.type==="decrement"){
        return state - 1;
    }
}
export default function Reducer(){
    const initial = 0;
      const [state,dispatch]= useReducer(reducer,initial);
      return(
        <>
        <fieldset>
            <legend>useReducer</legend>
            <p>{state}</p>
            <button onClick={()=>dispatch({type:"increment"})}>Inc</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Dec</button>
        </fieldset>
        </>
      )
}