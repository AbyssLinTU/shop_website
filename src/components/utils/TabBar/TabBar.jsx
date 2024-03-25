import React, { useState } from "react";
import c from "./TabBar.module.scss";
export const TabBar = () => {
  const [toogle, setToogle] = useState(1);
  return (
    <div className={c.wrapper}>
      <div className={c.tabs}>
        <button
          className={toogle === 1 ? c.active : c.none_active}
          onClick={() => {
            setToogle(1);
          }}
        >
          Опис
        </button>
        <button
          className={toogle === 2 ? c.active : c.none_active}
          onClick={() => {
            setToogle(2);
          }}
        >
          Характеристики
        </button>
        <button
          className={
            toogle === 3
              ? `${c.active} ${c.last_tab}`
              : `${c.none_active}  ${c.last_tab}`
          }
          onClick={() => {
            setToogle(3);
          }}
        >
          Доставка і оплата
        </button>
      </div>

      {toogle === 1 && (
        <div className={c.text_bar}>
          <p className={c.paragraph}>
            Компактный диван БАЛИ с раскладкой вперед позволит вам сэкономить
            пространство дома и отлично впишется даже в небольшую комнату. При
            этом вы получите просторное спальное место, которое может быть
            выполнено в одном из 4-х размеров на ваш выбор:
          </p>
          <p className={c.paragraph}>
            В основе дивана – выкатной механизм трансформации: ящик для белья
            выдвигается вперед и на него по принципу «книжки» раскладывается
            мягкая часть дивана. Неподвижная нижняя часть матраса расположена на
            раме с ламелями из бука и состоит из слоев пенополиуретана. Верхняя
            «откидная» часть матраса содержит пружинный блок Боннель и слои
            пенополиуретана.
          </p>

          <p className={c.paragraph}>
            Просторий ящик для білизни (викочування) обладнаний роликами зі
            спеціальним покриттям для захисту поверхні підлоги та аераторами –
            спеціальними отворами для циркуляції повітря. Каркас дивана
            виконаний із натурального дерева – берези.
          </p>
        </div>
      )}

      {toogle === 2 && <div className={c.text_bar}>CHARACHTERS</div>}
      {toogle === 3 && <div className={c.text_bar}>Delivery</div>}
    </div>
  );
};
