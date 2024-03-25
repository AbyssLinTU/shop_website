import React from 'react';
import c from './Tree.module.scss';
import arrow from '../../../img/Vector (4).svg';
import { NavLink } from 'react-router-dom';
export const Tree = ({ title, mb = 64, mt = 52 }) => {
  return (
    <div
      className={c.tree}
      style={{ marginTop: `${mt}px`, marginBottom: `${mb}px` }}
    >
      <NavLink to="/main" className={c.mainButton}>
        Головна
      </NavLink>
      <img className={c.arrow__tree} src={arrow}></img>
      <span>{title}</span>
    </div>
  );
};
