import React, { createContext, useEffect, useState } from 'react';
import { state } from '../data';
export const StateContext = createContext({
  state: {
    order: [],
    product: [],
    idOrder: null,
  },
  addOrder: () => {},
  updateOrder: () => {},
  removeOrder: () => {},
  clearOrder: () => {},
  addIdOrder: () => {},
});
export const StateProvider = props => {
  const [state1, setState] = useState(state);

  const addIdOrder = id => {
    setState(prev => ({ ...prev, idOrder: id }));
  };
  const clearOrder = () => {
    setState(prev => ({ ...prev, order: [] }));
  };
  const addOrder = product1 => {
    if (product1) {
      setState(prev => ({
        ...prev,
        order: [
          ...prev.order,
          {
            img: product1.photo.main,
            price: product1.sale,
            id: product1.id,
            name: product1.name,
            title: product1.title,
            amount: 1,
            total: product1.sale,
          },
        ],
      }));
    }
  };

  const updateOrder = (id, plus) => {
    setState(prev => ({
      ...prev,
      order: prev.order.map(item => {
        if (item.id === id) {
          if (plus) {
            item.amount = item.amount + 1;
            item.total = item.amount * item.price;
          } else if (item.amount > 1) {
            item.amount = item.amount - 1;
            item.total = item.amount * item.price;
          }
        }
        return item;
      }),
    }));
  };

  const removeOrder = id => {
    setState(prev => ({
      ...prev,
      order: prev.order.filter(or => or.id !== id),
    }));
  };

  useEffect(() => {
    setState(state);
  }, []);

  return (
    <StateContext.Provider
      value={{
        state1,
        clearOrder,
        addIdOrder,
        addOrder,
        updateOrder,
        removeOrder,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};
