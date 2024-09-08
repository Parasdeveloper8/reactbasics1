import React from 'react';
import ReactDOM from 'react-dom/client';
export default function Color(props){
    const div = {
        theme:{
            width:'100px',
            height:'100px',
            border:'1px solid black'
        }
    }
    return(
        <>
        <div style={div.theme} id="dv">
            <img src={props.url} style={div.theme}/>
        </div>
        </>
    )
}