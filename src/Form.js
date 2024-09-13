import React from 'react';

export default function Form(){
    function subForm(event){
        let name = document.getElementById("name");
        event.preventDefault();
        console.log(`${name.value} is submitting`);
    }
    return(
        <>
        <form onSubmit={subForm}>
            <label>Your name</label>
            <input type="text" id="name"></input>
            <button>Submit</button>
        </form>
        </>
    )
}