import React, { useState } from 'react';
import Topping from '../Topping';
import './style.css';

const ToppingsSelect = ({ toppings }) => {
  const [selectedToppings, setSelectedToppings] = useState(toppings);
  const [checked, setChecked] = useState([]);

  const handleChedkedToppings = (index, check) => {
    let newToppings = [...selectedToppings];
    newToppings[index].selected = check;
    setSelectedToppings(newToppings);
    let newChecked = newToppings.filter((topping) => topping.selected === true);
    setChecked(newChecked);
  };

  const total = checked.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0,
  );

  const roundedTotal = Math.round((total + Number.EPSILON) * 100) / 100;

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings: {checked.length}, total price: {roundedTotal} Euro
      </p>

      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping
            onChangeTopping={(check) => handleChedkedToppings(index, check)}
            topping={topping}
            key={topping.name}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
