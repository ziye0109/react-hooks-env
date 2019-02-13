import React from 'react';
import { compose } from 'recompose';
import withContext from '../Hoc/withContext';
import Grid from './Icon/Grid';
import List from './Icon/List';
import Card from './Card';
import './ContentArea.css';

const ContentArea = ({ theme }) => (
  <>
    <div className="theme_container">
      <div lassName="left" />
      <div className="right">
        <Grid />
        <List />
      </div>
    </div>
    <div className={`container ${theme}`}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  </>
);

const ConentAreaWithContext = compose(withContext)(ContentArea);

export default ConentAreaWithContext;
