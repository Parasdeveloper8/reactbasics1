import React from 'react';
import { useState } from 'react';
export default function Showtext({label,children}){
    const [isActive,setActive] = useState(false);
    return(
        <fieldset>
            <legend>{label}</legend>
            {isActive?(<p>{children}</p>):(<p>Click button</p>)}
            <button onClick={()=>setActive(true)}>Show text</button>
        </fieldset>
    )
}