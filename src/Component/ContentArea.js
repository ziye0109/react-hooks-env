import React from 'react';
import { compose } from 'recompose';
import withContext from '../Hoc/withContext';
import './ContentArea.css';

const ContentArea = ({ theme, themeDispacher }) => (
  <>
    <div onClick={() => themeDispacher({ type: 'TOGGLE_THEME' })}>
      switch theme
    </div>
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

const ConentAreaWithContext = compose(withContext)(ContentArea);

export default ConentAreaWithContext;
