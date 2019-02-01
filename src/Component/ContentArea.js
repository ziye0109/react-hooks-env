import React, { useContext } from 'react';
import Context from '../Context/Context';
import './ContentArea.css';

const ContentArea = () => {
  const {
    appSetting: { theme }
  } = useContext(Context);
  return (
    <>
      <div className={`container ${theme}`}>
        <div className="box">box1</div>
        <div className="box">box2</div>
        <div className="box">box3</div>
        <div className="box">box4</div>
        <div className="box">box5</div>
        <div className="box">box6</div>
        <div className="box">box7</div>
        <div className="box">box8</div>
        <div className="box">box9</div>
        <div className="box">box10</div>
      </div>
    </>
  );
};

export default ContentArea;
