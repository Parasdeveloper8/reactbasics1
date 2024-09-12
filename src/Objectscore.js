import React from "react";
import { useState } from "react";

export default function Object(){
     const [player,setPlayer]= useState({
        name:"paras",
        score:10
     });
     //created a copy of player object and updated score in copy but old value is same as before
     //string , numbers , boolean are immutable
     //object is mutable but you should treat object as immutable
     const player2 = {...player,score:player.score+11};
     return(
        <>
      <h1>{player2.score}</h1>
      <h1>{player.score}</h1>
        </>
     )
}