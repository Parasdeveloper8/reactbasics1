import React, { createContext } from "react";
import Compc from "./Componentc";

const Data = createContext();
export default function Compa(){
    return(
        <>
        <Data.Provider value={"paras of A Component Steve jobs , Mark Zuckerberg , Elon Musk , Bill gates"}>
            <Compc/>
        </Data.Provider>
        </>
    )
}
export {Data};