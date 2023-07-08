import React, {useState} from 'react'
import MenuItem from './MenuItem'
import Receipt from './Receipt'

const menuItems = [
  {
    name: '2 Chili Dogs',
    price: '$6.99',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150191/chili-dogs.jpg',
  },
  {
    name: 'Classic Hamburger',
    price: '$5.49',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150440/hamburger.jpg',
  },
  {
    name: 'Glorified Bacon Cheeseburger',
    price: '$6.99',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150499/bacon-cheese.jpg',
  },
  {
    name: 'Chicken sandwich',
    price: '$7.12',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150467/chicken-sammy.jpg',
  },
  {
    name: 'Classic Dog',
    price: '$4.49',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150520/classic-dog.jpg',
  },
  {
    name: 'Classic cheeseburger',
    price: '$5.99',
    picture:
      'https://res.cloudinary.com/bog/image/upload/v1568150542/classic-cheese.jpg',
  },
]

function Menu() {
  const [purchasedItem, setPurchasedItem] = useState([]);

  const addPurchasedItem = (getPurchasedItem) => {
    setPurchasedItem([...purchasedItem, getPurchasedItem]);
  };

  const removePurchasedItem = (name) => {
    setPurchasedItem(purchasedItem.filter(item => name != item.name))
  }

  return (
    <section>
      <dl>
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.name}
            name={menuItem.name}
            price={menuItem.price}
            picture={menuItem.picture}
            addPurchasedItem={addPurchasedItem}
            removePurchasedItem = {removePurchasedItem}
          />
        ))}
      </dl>
      <Receipt purchasedItems={purchasedItem} />
    </section>
  );
}

export default Menu;