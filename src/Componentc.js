import React, { useContext } from "react";
import {Data} from './Componenta';

export default function Compc(){
    const name = useContext(Data);
    return(
        <>
        <fieldset>
            <legend>useContext</legend>
        <p>Hii I am component c</p>
        <p>hello from c{name}</p>
        </fieldset>
        </>
    )
}
