import React, { useState, useEffect } from "react";

export default function Array() {
    const [names, setNames] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function handleList(event) {
        event.preventDefault(); // Prevent page reload
        const ids = Date.now();
        setNames([
            ...names,
            {
                id: ids,
                name: inputValue,
            }
        ]);
        setInputValue(""); // Clear input after adding to the list
    }

    useEffect(() => {
        console.log(names); // Logs the updated names array whenever it changes
    }, [names]);

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleList}>Submit</button>
            <ol>
                {names.map((e) => (
                    <li key={e.id}>
                        Name: {e.name}, ID: {e.id}
                    </li>
                ))}
            </ol>
        </>
    );
}
