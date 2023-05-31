import { useMemo, memo, useRef, useEffect } from 'react';
import { useDataContext } from '../hooks/useDataContext';

import classnames from 'classnames'

import filter from '../assets/meals/filter.svg';


import { mealsList } from '../mealsList';
import { Meal } from './Meal';
import { firstLetterToUppercase } from '../helpers/firstLetterToUppercase';



const Meals = ({showBasket}) => {

    const { mealType, addMealToBasket, activeElements, setActiveElements, setScrollTopRef, removeMealFromBasket, mealsInBasket } = useDataContext();

    const scrollRef = useRef(null);

    useEffect(() => {
        setScrollTopRef(scrollRef);
    }, [setScrollTopRef])

    const makeItemActive = (item) => {

        if(mealsInBasket.length === 0){
            showBasket();
        }

        if (activeElements.includes(item.id)) {
            removeMealFromBasket(item.id)
        } else {
            setActiveElements([...activeElements, item.id]);
            addMealToBasket(item)
        }
    };

    const filteredList = useMemo(() => {
        if (mealType) {
          const filteredList = mealsList.filter((item) => item.type === mealType);
          return filteredList;
        } else {
          return mealsList;
        }
      }, [mealType]);

    return(
        <div className='meals'>
            <header className='meals-header'>
                <h3 className='meals-title'>{firstLetterToUppercase(mealType === '' ? 'All items' : `${mealType}s`)}</h3>
                <img className='meals-main-image' src={filter} alt='filterIcon' />
            </header>
            <div className='meals-grid' ref={scrollRef}>
                {filteredList.map((item) => {
                    return <Meal 
                        className={classnames('meal', {'meal-active': activeElements.includes(item.id)})}
                        image={item.image}
                        title={item.title}
                        text={item.description}
                        price={item.price}
                        icon={item.icon}
                        key={item.id}
                        onClick={() => {makeItemActive(item)}}
                    />
                })}
            </div>
        </div>
    )
};

export default memo(Meals);