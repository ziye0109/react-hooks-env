import React from 'react';
import useCard from '../CustomHooks/useCard';
import './Card.css';

const Card = () => {
  const [count, incrementCount, decrementCount] = useCard();

  return (
    <>
      <div className="card">
        <div className="top">
          <div className="count_button" onClick={incrementCount}>
            increment count
          </div>
          <div className="count_button" onClick={decrementCount}>
            decrement count
          </div>
        </div>

        <div className="bottom">{count}</div>
      </div>
    </>
  );
};

export default Card;
