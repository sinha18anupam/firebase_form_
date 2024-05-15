import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NameEmailPage({ onNext }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
const navigate =useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ name, email });
    navigate("/phone-address")

  };

  return (
    <div>
      <h2>Page 1: Name and Email</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default NameEmailPage;

