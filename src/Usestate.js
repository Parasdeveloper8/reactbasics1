import {useState} from 'react';

export default function Counter(){
    const [index,setIndex] = useState(0);
    function handleClick(){
        setIndex((prev)=>prev + 1);
    }
    function decClick(){
        setIndex((prev)=>prev + 3);
    }
    return(
        <>
        <button onClick={handleClick}>Increment</button>
        <p>{index}</p>
        <button onClick={decClick}>Decrement</button>
        </>
    )
}