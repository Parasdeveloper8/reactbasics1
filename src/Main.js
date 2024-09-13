import React from 'react';
import ReactDOM from 'react-dom/client';
import Engineer from "./Engineer";
import Color from './Changer';
import Form from './Form';
import Counter from './Usestate';
import Object from './Objectscore';
import Array from './Array';
export default function Main(props){
    return(
        <>
        <Color url={props.url2}/>
        <Engineer />
        <Form />
        <Counter/>
        <Object />
        <Array/>
        </>
    )
}