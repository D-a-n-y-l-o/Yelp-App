import { memo } from 'react';

import { useDataContext } from '../hooks/useDataContext';

import arrow from '../assets/arrow.svg';

import { BasketItem } from './BasketItem';

const Basket = ({ className, toggleBasketShow, toggleCompleteOrderUIShow }) => {

    const { mealsInBasket } = useDataContext();

    const getSum = (mealsInBasket) => {
        const total = mealsInBasket.reduce((sum, item) => sum + item.amount * item.price, 0);
        return total;
    }

    return(
        <div className={className}>
            <header className='basket-header'>
                <h3 className='basket-title'>Basket</h3>
                <button
                    className='basket-button-back'
                    onClick={toggleBasketShow}
                >
                    <img src={arrow} alt='arrow' />
                </button>
            </header>
            <div className='basket-main'>
                {mealsInBasket.map((item) => {
                    return <BasketItem 
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        amount={item.amount}
                        key={item.id}
                    />
                })}
            </div>
            <div className='basket-button-container'>
                <button 
                    className='basket-button-order'
                    onClick={toggleCompleteOrderUIShow}
                >
                    Order - ${getSum(mealsInBasket)}
                </button>
            </div>
        </div>
    )
}

export default memo(Basket)