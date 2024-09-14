import React, { useState } from 'react';

export default function Score(){
        const [isperson,setIsperson] = useState(true);
        return(
            <>
            { isperson ? (
                <Counter person={"thomas"} key={"thomas"}/> 
            ): (
                <Counter person={"homas"} key={"homas"}/>
             )}
            <button onClick={()=>setIsperson(!isperson)}>Change Player</button>
            </>
        )
}
const format={
    theme:{
    border:"5px solid black",
    fontFamily:"system-ui"
    }
}
function Counter({person}){
    const [score,setScore] = useState(0);
     return(
        <>
        <div style={format.theme}>
          <h1>Score of :{person}</h1>
          <p>{person} is {score}</p>
          <button onClick={()=>setScore(n=>n+1)}>increase</button>
        </div>
        </>
     )
}