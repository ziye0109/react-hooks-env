import React, { useEffect } from 'react';
import './Card.css';

const Card = () => {
  useEffect(() => {
    console.log('mounted!');
  }, []);

  return (
    <>
      <div className="card">card</div>
    </>
  );
};

export default Card;
