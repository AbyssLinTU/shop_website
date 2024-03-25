import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import c from './DropDownMenu.module.scss';
export const DropDownMenu = ({ children, type = 'main', text = '' }) => {
  const [active, setActive] = useState(false);
  return (
    <div className={c.wrapper}>
      {type === 'main' && (
        <div onClick={() => setActive(prev => !prev)} className={c.button}>
          Каталог
        </div>
      )}
      {type === 'view' && (
        <div
          onClick={() => setActive(prev => !prev)}
          className={
            active
              ? `${c.button__view} ${c.button__viewActive}`
              : c.button__view
          }
        >
          {text}
        </div>
      )}
      <CSSTransition
        in={active}
        timeout={200}
        nodeRef={null}
        unmountOnExit
        mountOnEnter
        classNames={{
          enter: c.my_enter,
          enterActive: c.my_active_enter,
          exit: c.my_exit,
          exitActive: c.my_active_exit,
        }}
      >
        {children}
      </CSSTransition>
    </div>
  );
};
