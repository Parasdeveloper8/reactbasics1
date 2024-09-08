import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
export default function Header(){
    const name = prompt("Enter you Name");
        return(
            <>
            {name===""?(<p>Hello User</p>):(<p>Hello {name}</p>)}
            <h1 style={
                { color:'red',
                  fontFamily:"fantasy"
                }
                }>Paras Prajapat (web developer)</h1>
            <nav className='nav'>
                <a href="">Home</a>
                <a href="">contact</a>
                <a href="">Skills</a>
            </nav>
            </>
        )
}