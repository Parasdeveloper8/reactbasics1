import React, { useRef, useState } from 'react';

export default function Animation() {
    const [style, setStyle] = useState({ color: "#000000", backgroundColor: "#ffffff" });
    const divem = useRef(null);

    const changer = (e) => {
        e.preventDefault();
        if (divem.current) {
            divem.current.style.color = style.color;
            divem.current.style.backgroundColor = style.backgroundColor;
        }
    };

    return (
        <>
            <div ref={divem} style={{ width: "100px", height: "400px" }}></div>
            <form>
                <label>Text Color:</label>
                <input 
                    type="color" 
                    value={style.color} 
                    onChange={(e) => setStyle({ ...style, color: e.target.value })}
                />
                <label>Background Color:</label>
                <input 
                    type="color" 
                    value={style.backgroundColor} 
                    onChange={(e) => setStyle({ ...style, backgroundColor: e.target.value })}
                />
                <button onClick={changer}>Submit</button>
            </form>
        </>
    );
}
