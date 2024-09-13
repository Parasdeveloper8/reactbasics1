import React, { useState } from 'react';

export default function Ticket() {
  const [ticketTo, setTo] = useState('');  // Initialize with an empty string
  const [users, setUsers] = useState([]);  // Initialize with an empty array

  function handleTicket(e) {
    setTo(e.target.value);  // Update ticketTo state with the current input value
  }

  function handleSend() {
    setUsers(prevUsers => [...prevUsers, { users: ticketTo }]);  // Add new user to the users array
    setTo('');  // Clear the input after sending
  }

  function handlerender() {
    return users.map((v, index) => (
      <ol key={index}>
        <li>{v.users}</li>
      </ol>
    ));
  }

  return (
    <>
    <fieldset>
    <legend>Ticket Counter</legend>
      <input type="text" value={ticketTo} onChange={handleTicket} />
      <button onClick={handleSend}>Send</button>
      <h1>You are sending ticket to: {ticketTo}</h1>
      <button onClick={handlerender}>See list of people</button>
      <div>{handlerender()}</div> {/* Render the list of users */}
      </fieldset>
    </>
  );
}
