import React, { useState } from 'react';
import './CustomCard.css';

function CustomCard({ onAddCustomCard }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const customCard = {
      name,
      email,
      address: { city },
      company: { name: companyName }
    };
    onAddCustomCard(customCard);
    setName('');
    setEmail('');
    setCity('');
    setCompanyName('');
  };

  return (
    <form onSubmit={handleSubmit} className="custom-card-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        required
      />
      <button type="submit">Add Custom Card</button>
    </form>
  );
}

export default CustomCard;
