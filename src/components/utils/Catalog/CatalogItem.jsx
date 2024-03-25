import React from 'react';
import c from './Catalog.module.scss';
import { useNavigate } from 'react-router-dom';
export const CatalogItem = ({ mobile, title, last }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate('/catalog')}>
      {mobile ? (
        <div className={c.catalogItem__mobile}>
          <div className={c.catalog__mobile}>
            <div
              className={last ? `${c.title__mobile} ${c.last}` : `${c.title}`}
            >
              {title}
            </div>
          </div>
        </div>
      ) : (
        <div className={c.catalogItem}>
          <div className={c.catalog__inner}>
            <div className={last ? `${c.title} ${c.last}` : `${c.title}`}>
              {title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
