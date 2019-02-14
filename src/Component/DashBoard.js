import React, {  useEffect } from 'react';
import './DashBoard.css';

const DashBoard = () => {
  useEffect(() => {
    console.log('dashboard mounted!');
  }, []);

  return (
    <>
      <div className="background">DashBoard Page</div>
    </>
  );
};

export default DashBoard;
