import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
export default function Header(){
    const name = prompt("Enter you Name");
    const person = {
        theme:{ 
            color:'red',
            fontFamily:"fantasy"
          }
    }
        return(
            <>
            {name===""?(<p>Hello User</p>):(<p style={{textDecoration:"underline red"}}>Hello {name}</p>)}
            <h1 style={
                person.theme
                }>Paras Prajapat(web developer)</h1>
            <nav className='nav'>
                <a href="">Home</a>
                <a href="">contact</a>
                <a href="">Skills</a>
            </nav>
            </>
        )
}