import React, { useContext, useEffect, useState } from 'react';
import { Offers } from '../../utils/Offers/Offers';
import { StateContext } from '../../../context/context';
import { Tree } from '../../utils/Tree/Tree';
import c from './CatalogPage.module.scss';
import ReactSlider from 'react-slider';
import { ModelItem } from '../../utils/ModelItem/ModelItem';
import { useSearchParams } from 'react-router-dom';
import cancel from './../../../img/Burger_Cancel.svg';

export const CatalogPage = () => {
  const { state1 } = useContext(StateContext);
  const [sortedProducts, setSortedProducts] = useState([...state1.product]);
  const [searchParams, setSearchParams] = useSearchParams();

  const rigidityLevelQuery = searchParams.getAll('rigidityLevel') || '';
  const transformQuery = searchParams.getAll('transform') || '';
  const configurationQuery = searchParams.getAll('configuration') || '';
  const armrestsQuery = searchParams.getAll('armrests') || '';
  const PriceQuery = [
    searchParams.getAll('minPrice') || null,
    searchParams.getAll('maxPrice') || null,
  ];
  const WidthQuery = [
    searchParams.getAll('minWidth') || null,
    searchParams.getAll('maxWidth') || null,
  ];
  const LengthQuery = [
    searchParams.getAll('minLength') || null,
    searchParams.getAll('maxLength') || null,
  ];

  const onDRSFilter = (params, value) => {
    const updatedParams = new URLSearchParams(searchParams);
    for (let i = 0; i < 2; i++) {
      if (!updatedParams.has(params[i])) {
        updatedParams.append(params[i], value[i]);
      } else {
        updatedParams.set(params[i], value[i]);
      }
    }

    setSearchParams(updatedParams.toString());
  };
  const onCheckboxFilter = (params, value) => {
    const updatedParams = new URLSearchParams(searchParams);
    if (!searchParams.getAll(params).includes(value.toString())) {
      updatedParams.append(`${params}`, value);
    } else {
      updatedParams.delete(`${params}`, value);
    }
    setSearchParams(updatedParams.toString());
  };

  const sortByPrice = () => {
    const sorted = [...state1.product].sort((p1, p2) => p1.sale - p2.sale);
    setSortedProducts(sorted);
  };
  const sortByPopular = () => {
    const sorted = [...state1.product].sort((p1, p2) => p2.bought - p1.bought);
    setSortedProducts(sorted);
  };

  const megaFilter = product => {
    return product.filter(p => {
      return (
        (rigidityLevelQuery.length === 0 ||
          rigidityLevelQuery.includes(p.properties.rigidityLevel.toString())) &&
        (transformQuery.length === 0 ||
          transformQuery.includes(p.properties.transform)) &&
        (armrestsQuery.length === 0 ||
          armrestsQuery.includes(p.properties.armrests)) &&
        (configurationQuery.length === 0 ||
          configurationQuery.includes(p.properties.configuration)) &&
        ((PriceQuery[0].length === 0 && PriceQuery[1].length === 0) ||
          (parseInt(PriceQuery[0]) <= parseInt(p.sale) &&
            parseInt(p.sale) <= parseInt(PriceQuery[1]))) &&
        ((WidthQuery[0].length === 0 && WidthQuery[1].length === 0) ||
          (parseInt(WidthQuery[0]) <= parseInt(p.properties.size.width) &&
            parseInt(p.properties.size.width) <= parseInt(WidthQuery[1]))) &&
        ((LengthQuery[0].length === 0 && LengthQuery[1].length === 0) ||
          (parseInt(LengthQuery[0]) <= parseInt(p.properties.size.length) &&
            parseInt(p.properties.size.length) <= parseInt(LengthQuery[1])))
      );
    });
  };
  useEffect(() => {
    sortByPopular();
  }, []);
  return (
    <div>
      <div className={c.tree}>
        <Tree title="Каталог" mb={0} mt={0} />
      </div>
      <div className={c.catalogPage__content}>
        <div className={c.content__container}>
          <div className={c.filter__container}>
            <Filter
              onCheckboxFilter={onCheckboxFilter}
              onDRSFilter={onDRSFilter}
              searchParams={searchParams}
              product={megaFilter(sortedProducts)}
            />
          </div>
          <div className={c.content}>
            <MiniFilter
              sortByPrice={sortByPrice}
              sortByPopular={sortByPopular}
            />
            <Product product={megaFilter(sortedProducts)} pageSize={15} />
          </div>
          <div className={c.contentMobile}>
            <MobileFilter
              onCheckboxFilter={onCheckboxFilter}
              onDRSFilter={onDRSFilter}
              searchParams={searchParams}
              product={megaFilter(sortedProducts)}
              sortByPrice={sortByPrice}
              sortByPopular={sortByPopular}
            />
            <Product product={megaFilter(sortedProducts)} pageSize={15} />
          </div>
        </div>
      </div>
      <Offers product={state1.product} type="new" title="Нові моделі" />
      <Offers
        product={state1.product}
        type="popular"
        title="Популярні моделі"
      />
    </div>
  );
};
const Product = ({ product, pageSize }) => {
  const [paginatorId, setPaginatorId] = useState([0, pageSize - 1]);
  return (
    <div className={c.product__sorting}>
      <div className={c.products}>
        {product
          .filter(
            (p, index) => paginatorId[0] <= index && paginatorId[1] >= index,
          )
          .map(p => {
            return (
              <ModelItem
                key={p.id}
                name={p.name}
                title={p.title}
                id={p.id}
                sale={p.sale}
                cost={p.cost}
                photo={p.photo.main}
                type="catalog"
              />
            );
          })}
      </div>
      <Paginator
        totalCount={product.length}
        pageSize={pageSize}
        changePage={setPaginatorId}
      />
    </div>
  );
};
const Checkbox = ({
  title,
  onCheckboxFilter,
  params,
  value = title,
  searchParams,
  product,
}) => {
  return (
    <div className={c.checkbox}>
      <label className={c.checkbox_label}>
        <input
          type="checkbox"
          className={c.checkbox__item}
          onChange={() => onCheckboxFilter(params, value)}
          checked={searchParams.getAll(params).includes(value.toString())}
        />
        <span>
          {product
            ? `${title}(${product.filter(p => p.properties[params] === value).length})`
            : title}
        </span>
      </label>
    </div>
  );
};
const DRS = ({ min, max, reverse, onDRSFilter, params, searchParams }) => {
  const [values, setValue] = useState([min, max]);

  const handleFirstInputChange = e => {
    const newValue = parseInt(e.target.value, 10);
    setValue([Math.min(newValue, values[1] - 1), values[1]]);
    onDRSFilter(params, values);
  };

  const handleSecondInputChange = e => {
    const newValue = parseInt(e.target.value, 10);
    setValue([values[0], Math.max(newValue, values[0] + 1)]);
    onDRSFilter(params, values);
  };
  useEffect(() => {
    if (searchParams.get(params[0]) && searchParams.get(params[1])) {
      setValue([
        parseInt(searchParams.get(params[0])),
        parseInt(searchParams.get(params[1])),
      ]);
    }
  }, [searchParams]);
  return (
    <div>
      {!reverse ? (
        <div className={c.drs}>
          <div className={c.drs__values}>
            <div className={c.drs__from}>
              <div>від</div>
              <div>
                <input
                  className={c.drs__input}
                  type="number"
                  value={values[0]}
                  onChange={e => {
                    setValue([parseInt(e.target.value, 10), values[1]]);
                  }}
                  onBlur={handleFirstInputChange}
                />
              </div>
            </div>
            <div className={c.drs__upto}>
              <div>до</div>
              <div>
                <input
                  className={c.drs__input}
                  type="number"
                  value={values[1]}
                  onChange={e => {
                    setValue([values[0], parseInt(e.target.value, 10)]);
                  }}
                  onBlur={handleSecondInputChange}
                />
              </div>
            </div>
          </div>

          <div>
            <ReactSlider
              className={c.horizontal_slider}
              thumbClassName={c.example_thumb}
              trackClassName={c.example_track}
              value={values}
              min={min}
              max={max}
              onChange={setValue}
              onAfterChange={() => {
                onDRSFilter(params, values);
              }}
              minDistance={1}
            />
          </div>
        </div>
      ) : (
        <div className={c.drs__reverse}>
          <div>
            <ReactSlider
              className={c.horizontal_slider}
              thumbClassName={c.example_thumb}
              trackClassName={c.example_track}
              value={values}
              min={min}
              max={max}
              onChange={setValue}
              onAfterChange={() => {
                onDRSFilter(params, values);
              }}
              minDistance={1}
            />
          </div>
          <div className={c.drs__values}>
            <div className={c.drs__from}>
              <div>від</div>
              <div>
                <input
                  className={c.drs__input}
                  type="number"
                  value={values[0]}
                  onChange={e => {
                    setValue([parseInt(e.target.value, 10), values[1]]);
                  }}
                  onBlur={handleFirstInputChange}
                />
              </div>
            </div>
            <div className={c.drs__upto}>
              <div>до</div>
              <div>
                <input
                  className={c.drs__input}
                  type="number"
                  value={values[1]}
                  onChange={e => {
                    setValue([values[0], parseInt(e.target.value, 10)]);
                  }}
                  onBlur={handleSecondInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const Filter = ({ onCheckboxFilter, onDRSFilter, searchParams, product }) => {
  return (
    <div className={c.filter}>
      <div className={`${c.filter__element} ${c.filter__DRS}`}>
        <div className={c.filter__title}>Ціна(грн)</div>
        <DRS
          min={6000}
          max={50000}
          reverse={false}
          onDRSFilter={onDRSFilter}
          params={['minPrice', 'maxPrice']}
          searchParams={searchParams}
        />
      </div>
      <div className={c.filter__element}>
        <div className={c.filter__title}>Жорсткість матраса</div>
        <div className={c.filter__checkboxs}>
          <Checkbox
            title={"1-й рівень, м'який"}
            onCheckboxFilter={onCheckboxFilter}
            params={'rigidityLevel'}
            value={1}
            searchParams={searchParams}
            product={product}
          />
          <Checkbox
            title={"2-й рівень, середнєм'який"}
            onCheckboxFilter={onCheckboxFilter}
            params={'rigidityLevel'}
            value={2}
            searchParams={searchParams}
            product={product}
          />
          <Checkbox
            title={'3-й рівень, середній'}
            onCheckboxFilter={onCheckboxFilter}
            params={'rigidityLevel'}
            value={3}
            searchParams={searchParams}
            product={product}
          />
          <Checkbox
            title={'4-й рівень, жорсткий'}
            onCheckboxFilter={onCheckboxFilter}
            params={'rigidityLevel'}
            value={4}
            searchParams={searchParams}
            product={product}
          />
        </div>
      </div>
      <div className={c.filter__element}>
        <div className={c.filter__title}>Трансформація</div>
        <div className={c.filter__checkboxs}>
          <Checkbox
            title={'Не розкладається'}
            onCheckboxFilter={onCheckboxFilter}
            params={'transform'}
            searchParams={searchParams}
          />
          <Checkbox
            title={'Єврокнижка'}
            onCheckboxFilter={onCheckboxFilter}
            params={'transform'}
            searchParams={searchParams}
          />
          <Checkbox
            title={'Акордеон'}
            onCheckboxFilter={onCheckboxFilter}
            params={'transform'}
            searchParams={searchParams}
          />
          <Checkbox
            title={'Розкладачка'}
            onCheckboxFilter={onCheckboxFilter}
            params={'transform'}
            searchParams={searchParams}
          />
          <Checkbox
            title={'Дельфін'}
            onCheckboxFilter={onCheckboxFilter}
            params={'transform'}
            searchParams={searchParams}
          />
          <Checkbox
            title={'Французька розкладачка'}
            onCheckboxFilter={onCheckboxFilter}
            params={'transform'}
            searchParams={searchParams}
          />
          <Checkbox
            title={'Седафлекс'}
            onCheckboxFilter={onCheckboxFilter}
            params={'transform'}
            searchParams={searchParams}
          />
          <Checkbox
            title={'Алеко'}
            onCheckboxFilter={onCheckboxFilter}
            params={'transform'}
            searchParams={searchParams}
          />
          <Checkbox
            title={'Крокуюча єврокнижка'}
            onCheckboxFilter={onCheckboxFilter}
            params={'transform'}
            searchParams={searchParams}
          />
        </div>
      </div>
      <div className={c.filter__element}>
        <div className={c.filter__title}>Конфігурація</div>
        <div className={c.filter__checkboxs}>
          <Checkbox
            title={'Односпальні'}
            onCheckboxFilter={onCheckboxFilter}
            params={'configuration'}
            searchParams={searchParams}
          />
          <Checkbox
            title={'Полуторні'}
            onCheckboxFilter={onCheckboxFilter}
            params={'configuration'}
            searchParams={searchParams}
          />
          <Checkbox
            title={'Двоспальні'}
            onCheckboxFilter={onCheckboxFilter}
            params={'configuration'}
            searchParams={searchParams}
          />
          <Checkbox
            title={'Одномісні'}
            onCheckboxFilter={onCheckboxFilter}
            params={'configuration'}
            searchParams={searchParams}
          />
          <Checkbox
            title={'Двухмісні'}
            onCheckboxFilter={onCheckboxFilter}
            params={'configuration'}
            searchParams={searchParams}
          />
          <Checkbox
            title={'Тримісні'}
            onCheckboxFilter={onCheckboxFilter}
            params={'configuration'}
            searchParams={searchParams}
          />
          <Checkbox
            title={'Багатомісні'}
            onCheckboxFilter={onCheckboxFilter}
            params={'configuration'}
            searchParams={searchParams}
          />
        </div>
      </div>
      <div className={c.filter__element}>
        <div className={c.filter__title}>Підлокітники</div>
        <div className={c.filter__checkboxs}>
          <Checkbox
            title={"Дерев'яні"}
            onCheckboxFilter={onCheckboxFilter}
            params={'armrests'}
            searchParams={searchParams}
            product={product}
          />
          <Checkbox
            title={'Модульні ДСП'}
            onCheckboxFilter={onCheckboxFilter}
            params={'armrests'}
            searchParams={searchParams}
            product={product}
          />
          <Checkbox
            title={'Модульні МДФ'}
            onCheckboxFilter={onCheckboxFilter}
            params={'armrests'}
            searchParams={searchParams}
            product={product}
          />
          <Checkbox
            title={'Тканинні'}
            onCheckboxFilter={onCheckboxFilter}
            params={'armrests'}
            searchParams={searchParams}
            product={product}
          />
          <Checkbox
            title={'Без підлокітників'}
            onCheckboxFilter={onCheckboxFilter}
            params={'armrests'}
            searchParams={searchParams}
          />
        </div>
      </div>
      <div className={c.filter__element}>
        <div className={c.filter__title}>Розмір спального місця</div>
        <div className={c.drs__block}>
          <div className={c.drs__item}>
            <div className={c.drs__title}>Ширина, см</div>
            <DRS
              min={500}
              max={3000}
              reverse={true}
              onDRSFilter={onDRSFilter}
              params={['minWidth', 'maxWidth']}
              searchParams={searchParams}
            />
          </div>
          <div className={c.drs__item}>
            <div className={c.drs__title}>Довжина, см</div>
            <DRS
              min={500}
              max={3000}
              reverse={true}
              onDRSFilter={onDRSFilter}
              params={['minLength', 'maxLength']}
              searchParams={searchParams}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const MiniFilter = ({ sortByPrice, sortByPopular }) => {
  const [IsSortPrice, setIsSortPrice] = useState(false);
  const [IsSortPopular, setIsSortPopular] = useState(true);
  const handleSortPrice = () => {
    setIsSortPopular(false);
    setIsSortPrice(true);
    sortByPrice();
  };
  const handleSortPopular = () => {
    setIsSortPrice(false);
    setIsSortPopular(true);
    sortByPopular();
  };
  const handleSortChange = event => {
    const value = event.target.value;
    if (value === 'cost') {
      setIsSortPrice(true);
      setIsSortPopular(false);
      sortByPrice();
    } else if (value === 'popular') {
      setIsSortPrice(false);
      setIsSortPopular(true);
      sortByPopular();
    }
  };

  return (
    <div className={c.mini__filter}>
      <div className={c.mini__title}>Сортувати по:</div>
      <div className={c.mini__buttons}>
        <FilterButton
          text="ціні"
          active={IsSortPrice}
          setSort={handleSortPrice}
        />
        <FilterButton
          text="популярності"
          active={IsSortPopular}
          setSort={handleSortPopular}
        />
      </div>
      <select
        name="mini_filter"
        className={c.mini__select}
        onChange={handleSortChange}
      >
        <option value="popular">популярності</option>
        <option value="cost">ціні</option>
      </select>
    </div>
  );
};
const FilterButton = ({ text, active, setSort }) => {
  return (
    <div onClick={setSort}>
      <button className={!active ? c.mini__button : c.mini__buttonActive}>
        {text}
      </button>
    </div>
  );
};
const Paginator = ({
  totalCount,
  pageSize,
  // startCurrentPage,
  portionSize = 6,
  changePage,
}) => {
  const pageCount = Math.ceil(totalCount / pageSize);
  const page = [];
  for (let i = 1; i <= pageCount; i++) {
    page.push(i);
  }

  const portionCount = Math.ceil(pageCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionNumber = portionNumber * portionSize;
  useEffect(() => {
    if (page.length < parseInt(currentPage)) {
      setCurrentPage(1);
      changePage([0, pageSize - 1]);
    }
  }, [pageCount, currentPage]);
  return (
    <div className={c.paginator}>
      <div
        className={c.button__container__prev}
        onClick={() => {
          if (portionNumber > 1) {
            setPortionNumber(prev => prev - 1);
          }
        }}
      >
        {portionNumber > 1 ? (
          <button className={c.paginator__prev}></button>
        ) : (
          <button className={`${c.paginator__prev} ${c.disable}`}></button>
        )}
      </div>
      <div className={c.paginator__pages}>
        {portionNumber > 1 && (
          <span
            onClick={() => {
              setPortionNumber(1);
            }}
            className={c.paginator__dots}
          >
            ..
          </span>
        )}
        {page
          .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
          .map(i => (
            <span
              className={`${c.paginator__number} ${i === currentPage && c.paginator__number__active}`}
              onClick={() => {
                setCurrentPage(i);
                changePage([
                  pageSize * (i - 1),
                  pageSize * (i - 1) + (pageSize - 1),
                ]);
              }}
              key={i}
            >
              {i}
            </span>
          ))}
        {portionNumber < portionCount && (
          <div
            onClick={() => {
              setPortionNumber(portionCount);
            }}
            className={c.paginator__dots}
          >
            ..
          </div>
        )}
      </div>
      <div
        className={c.button__container}
        onClick={() => {
          if (portionNumber < portionCount) {
            setPortionNumber(prev => prev + 1);
          }
        }}
      >
        {portionNumber < portionCount ? (
          <button className={c.paginator__next}></button>
        ) : (
          <button className={`${c.paginator__next} ${c.disable}`}></button>
        )}
      </div>
    </div>
  );
};
const MobileFilter = ({
  sortByPrice,
  sortByPopular,
  onCheckboxFilter,
  onDRSFilter,
  searchParams,
  product,
}) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className={c.filters}>
        <MiniFilter sortByPrice={sortByPrice} sortByPopular={sortByPopular} />
        <button
          className={c.filter__button}
          onClick={() => setActive(prev => !prev)}
        >
          Фільтрація
        </button>
      </div>

      <div
        className={active ? `${c.active} ${c.filter__menu}` : c.filter__menu}
      >
        <button onClick={() => setActive(false)}>
          {' '}
          <img src={cancel} alt="cancel" className={c.cancelFilter} />
        </button>

        <Filter
          onCheckboxFilter={onCheckboxFilter}
          onDRSFilter={onDRSFilter}
          searchParams={searchParams}
          product={product}
        />
      </div>
    </>
  );
};
