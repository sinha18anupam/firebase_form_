import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PhoneAddressPage({ onNext }) {
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ phone, address }); 
     navigate('/how-you-heard'); 
  };

  return (
    <div>
      <h2>Phone and Address Page</h2>
      <form onSubmit={handleSubmit}>
        <label>Phone:</label>
        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" />
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your address" />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default PhoneAddressPage;
