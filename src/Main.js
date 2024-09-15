import React from 'react';
import Engineer from "./Engineer";
import Color from './Changer';
import Form from './Form';
import Counter from './Usestate';
import Object from './Objectscore';
import Array from './Array';
import Reactform from './Reactinputwithstate';
import Ticket from './Ticket';
import Showtext from './Showtext';
import Score from './Score';
import Reducer from './Reducer';
export default function Main(props){
    const txt = "India is my country and I am citizen of india ..............India is a democratic country";
    return(
        <>
        <Color url={props.url2}/>
        <Engineer />
        <Form />
        <Counter/>
        <Object />
        <Array/>
        <Reactform />
        <Ticket />
        <Showtext label={"india"} children={txt}/>
        <Score/>
        <Reducer/>
        </>
    )
}