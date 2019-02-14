import { useState, useEffect, useMemo } from 'react';
import usePrevious from './usePrevious';

const useCard = () => {
  const [count, setCount] = useState(0);

  const incrementCount = useMemo(() => () => setCount(count + 1), [count]);
  const decrementCount = useMemo(() => () => setCount(count - 1), [count]);

  const preCount = usePrevious(count);

  useEffect(() => {
    console.log('mounted!');
  }, []);

  useEffect(() => {
    console.log('updated if count changes!');
    console.log(`pre: ${preCount} cur: ${count}`);
  }, [count]);

  return [count, incrementCount, decrementCount, preCount];
};

export default useCard;
