import React , {useState,useEffect} from 'react';

export default function Newcounter(){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("component mounted");
        return ()=>{
            console.log("component unmounted");
        }
    })
    useEffect(()=>{
        console.log("state value changed",[count]);
        return ()=>{
            console.log("old state value",{count});
        }
    },[count])
    return(
        <>
        <fieldset>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Incre</button>
        <button onClick={()=>setCount(count-1)}>Decre</button>
        </fieldset>
        </>
    )
      
}