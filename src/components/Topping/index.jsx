import React, { useState } from 'react';
import Check from '../Check';
import './style.css';

const Topping = ({ topping, onChangeTopping }) => {
  return (
    <div className="topping">
      <Check checked={topping.selected} onChange={onChangeTopping} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
