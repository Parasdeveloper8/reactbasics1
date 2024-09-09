import React from 'react';
import ReactDOM from 'react-dom/client';
import Engineer from "./Engineer";
import Color from './Changer';
import Form from './Form';
export default function Main(props){
    return(
        <>
        <Color url={props.url2}/>
        <Engineer />
        <Form />
        </>
    )
}