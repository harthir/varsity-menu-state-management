import React, { useState } from 'react';

const MenuItem = (props) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    if(!selected){
      props.addPurchasedItem({
        name: props.name,
        price: props.price,
      });
    } else {
      props.removePurchasedItem(props.name)
    }
    
    setSelected(!selected);
  };

  return (
    <button
      className={selected ? 'menu-item selected' : 'menu-item'}
      onClick={toggleSelected}
    >
      <img src={props.picture} alt={props.name} />
      <dt>{props.name}</dt>
      <dd>{props.price}</dd>
    </button>
  );
};

export default MenuItem;