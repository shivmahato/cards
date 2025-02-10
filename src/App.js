import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import CustomCard from './components/CustomCard';
import './App.css';
// import { useRef } from "react";

function App() {
  // const indexRef = useRef(0);
  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [cardSize, setCardSize] = useState(0); 
useEffect(() => {
  setCardSize(cards.length); 
}, [cards]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setCards(response.data.slice(0, 4))) 
      .catch(error => console.error(error));
  }, []);
  

  const handleDelete = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  const handleAddApiCard = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // if (indexRef.current >= response.data.length) return; 
        const newCard = response.data[cardSize];
        newCard.id = cards.length + 1;
        setCards([...cards, newCard]);
      })
      .catch(error => console.error(error));
  };

  const handleAddCustomCard = (customCard) => {
    customCard.id = cards.length + 1; 
    setCards([...cards, customCard]);
    setShowForm(false);
  };

  return (
    <div className="App"style={{ marginTop: "1px" }} >

      <button style={{ marginRight: "10px" }}  onClick={handleAddApiCard}>Add API Card</button>
      <button onClick={() => setShowForm(true)}>Add Custom Card</button>
      {showForm && <CustomCard onAddCustomCard={handleAddCustomCard} />}
      <div className="card-container">
        {cards.map(card => (
          <Card key={card.id} card={card} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
