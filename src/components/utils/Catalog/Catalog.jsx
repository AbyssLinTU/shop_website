import React from 'react';
import { CatalogItem } from './CatalogItem';
import c from './Catalog.module.scss';
import { useNavigate } from 'react-router-dom';
export const Catalog = ({ mobile = false }) => {
  const navigate = useNavigate();

  return (
    <div className={c.catalog}>
      {!mobile && (
        <div className={c.catalogMain}>
          <div onClick={() => navigate('/catalog')}>Каталог</div>
        </div>
      )}
      <CatalogItem mobile={mobile} title="Прямі дивани" />
      <CatalogItem mobile={mobile} title="Кутові дивани" />
      <CatalogItem mobile={mobile} title="Ліжка" />
      <CatalogItem mobile={mobile} title="Дитячі меблі DOR" />
      <CatalogItem mobile={mobile} title="Підлокітники-тумбочки" />
      <CatalogItem mobile={mobile} title="Бенджамін" />
      <CatalogItem mobile={mobile} title="Тіффані" />
      <CatalogItem mobile={mobile} title="Дивани з розкладкою вперед" />
      <CatalogItem mobile={mobile} title="Модульні кутові дивани" />
      <CatalogItem mobile={mobile} title="Модульні прямі дивани" last={true} />
    </div>
  );
};
