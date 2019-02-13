import React, { useEffect, useState } from 'react';
import usePrevious from '../CustomHooks/usePrevious';
import './Card.css';


const Card = () => {
  const [state, setCount] = useState({ count: 0 });

  const preState = usePrevious(state.count);

  useEffect(() => {
    console.log('mounted!');
  }, []);

  useEffect(() => {
    console.log('updated if count changes!');
    console.log(`pre: ${preState} cur: ${state.count}`);
  }, [state.count]);

  return (
    <>
      <div className="card">
        <div>{state.count}</div>
        <div>
          <div
            className="count_button"
            onClick={() => {
              setCount(value => ({ count: value.count + 1 }));
            }}
          >
            increment count
          </div>
          <div
            className="count_button"
            onClick={() => setCount(value => ({ count: value.count - 1 }))}
          >
            decrement count
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
