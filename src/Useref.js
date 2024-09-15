import React, { useEffect, useRef, useState } from 'react';

export default function Ref(){
    const [text,setText]= useState("");
    const count = useRef(0);
    useEffect(()=>{
        count.current = count.current +1;
    });
    return(
        <>
        <fieldset>
            <legend>useRef first example</legend>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
        <p>NUmber of Render : {count.current}</p>
        </fieldset>
        </>
    )
}