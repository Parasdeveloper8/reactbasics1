import React, { useEffect, useRef, useState } from 'react';

export default function Refs(){
    const [text,setText]= useState("");
    const inputElem = useRef("");
    const changeStyle=()=>{
        inputElem.current.style.backgroundColor = "red";
    }
    return(
        <>
        <fieldset>
        <legend>useRef second example</legend>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} ref={inputElem}></input>
        <button onClick={changeStyle}>Change</button>
        </fieldset>
        </>
    )
}