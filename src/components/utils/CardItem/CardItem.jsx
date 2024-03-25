import React from 'react';
import c from './CardItem.module.css';
export const CardItem = props => {
  return (
    <div className={c.wrapper}>
      <div className={c.content}>
        <img className={c.icon} src={props.image} />
        <div className={c.title}> {props.text}</div>
      </div>
    </div>
  );
};
