import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header.js';
import Main from './Main.js';

export default function App(props){
    return(
        <>
        <Header name="kary"/>
        <Main url2={props.url3}/>
        </>
    );
}