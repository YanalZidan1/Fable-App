import React from 'react';

function Menu_List() {
  const MenuList = [
    {
      id: 1,
      title: 'Breakfast & Starters',
      items: [
        { id: 1, img: 'https://placehold.co/80x80?text=Margherita', title: 'Margherita', price: '$10', text: 'Scrambled eggs with crispy bacon, sausage, fresh black pudding, breadcumbs, onion, mustard, canbbery nut, baked brie, rucola, tomato & mushroom.' },
        { id: 2, img: 'https://placehold.co/80x80?text=Pepperoni', title: 'Pepperoni', price: '$12', text: 'Scrambled eggs with crispy bacon, sausage, fresh black pudding, breadcumbs, onion, mustard, canbbery nut, baked brie, rucola, tomato & mushroom.' },
        { id: 3, img: 'https://placehold.co/80x80?text=BBQ+Chicken', title: 'BBQ Chicken', price: '$14', text: 'Scrambled eggs with crispy bacon, sausage, fresh black pudding, breadcumbs, onion, mustard, canbbery nut, baked brie, rucola, tomato & mushroom.' },
      ],
    },
    {
      id: 2,
      title: 'Main Course',
      items: [
        { id: 1, img: 'https://placehold.co/80x80?text=Classic+Beef', title: 'Classic Beef', price: '$8', text: 'Scrambled eggs with crispy bacon, sausage, fresh black pudding, breadcumbs, onion, mustard, canbbery nut, baked brie, rucola, tomato & mushroom.' },
        { id: 2, img: 'https://placehold.co/80x80?text=Cheese+Burger', title: 'Cheese Burger', price: '$9', text: 'Scrambled eggs with crispy bacon, sausage, fresh black pudding, breadcumbs, onion, mustard, canbbery nut, baked brie, rucola, tomato & mushroom.' },
        { id: 3, img: 'https://placehold.co/80x80?text=Chicken+Burger', title: 'Chicken Burger', price: '$10', text: 'Scrambled eggs with crispy bacon, sausage, fresh black pudding, breadcumbs, onion, mustard, canbbery nut, baked brie, rucola, tomato & mushroom.' },
      ],
    },
    {
      id: 3,
      title: 'Coffee & Drinks',
      items: [
        { id: 1, img: 'https://placehold.co/80x80?text=Classic+Beef', title: 'Classic Beef', price: '$8', text: 'Scrambled eggs with crispy bacon, sausage, fresh black pudding, breadcumbs, onion, mustard, canbbery nut, baked brie, rucola, tomato & mushroom.' },
        { id: 2, img: 'https://placehold.co/80x80?text=Cheese+Burger', title: 'Cheese Burger', price: '$9', text: 'Scrambled eggs with crispy bacon, sausage, fresh black pudding, breadcumbs, onion, mustard, canbbery nut, baked brie, rucola, tomato & mushroom.' },
        { id: 3, img: 'https://placehold.co/80x80?text=Chicken+Burger', title: 'Chicken Burger', price: '$10', text: 'Scrambled eggs with crispy bacon, sausage, fresh black pudding, breadcumbs, onion, mustard, canbbery nut, baked brie, rucola, tomato & mushroom.' },
      ],
    },
    {
      id: 4,
      title: 'Dinner',
      items: [
        { id: 1, img: 'https://placehold.co/80x80?text=Classic+Beef', title: 'Classic Beef', price: '$8', text: 'Scrambled eggs with crispy bacon, sausage, fresh black pudding, breadcumbs, onion, mustard, canbbery nut, baked brie, rucola, tomato & mushroom.' },
        { id: 2, img: 'https://placehold.co/80x80?text=Cheese+Burger', title: 'Cheese Burger', price: '$9', text: 'Scrambled eggs with crispy bacon, sausage, fresh black pudding, breadcumbs, onion, mustard, canbbery nut, baked brie, rucola, tomato & mushroom.' },
        { id: 3, img: 'https://placehold.co/80x80?text=Chicken+Burger', title: 'Chicken Burger', price: '$10', text: 'Scrambled eggs with crispy bacon, sausage, fresh black pudding, breadcumbs, onion, mustard, canbbery nut, baked brie, rucola, tomato & mushroom.' },
      ],
    },
  ];

  return (
    <div className='Menu_List container-fluid p-0'>
      <div className="container p-5">
        <div className="row g-4">
          {MenuList.map((category) => (
            <div key={category.id} className="col-md-6 mb-4">
              <h2 className="mb-3">{category.title}</h2>
              <ul className="list-unstyled mt-5">
                {category.items.map((item) => (
                  <li key={item.id} className="list-items d-flex align-items-center mb-3">
                    <img src={item.img} alt={item.title} className="me-3" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                    <div>
                      <h4>{item.title} <span className="">.............. {item.price}</span></h4>
                      <p className="text-muted m-0">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu_List;
