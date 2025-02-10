import React, { forwardRef } from 'react';
import './Card.css';

const Card = forwardRef(({ card, onDelete }, ref) => {
  return (
    <div ref={ref} className="card">
      <h3>{card.name}</h3>
      <p>Email: {card.email}</p>
      {card.address && card.address.city && <p>City: {card.address.city}</p>}
      {card.company && card.company.name && <p>Company: {card.company.name}</p>}
      <button onClick={() => onDelete(card.id)}>Delete</button>
    </div>
  );
});

export default Card;
