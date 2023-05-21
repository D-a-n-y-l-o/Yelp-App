import { useDataContext } from '../hooks/useDataContext';

import bin from '../assets/bin.svg';
import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';



export const BasketItem = ({ id, image, title, description, price, amount }) => {

    const { removeMealFromBasket, increaseAmount, decreaseAmount } = useDataContext();

    return(
        <div className='basket-container'>
            <div className='basket-container-image'>
                <img className='basket-container-img' src={image} alt='mealLogo' />
            </div>
            <div className='basket-content'>
                <div className='basket-content-header'>
                    <h3 className='basket-content-title'>{title}</h3>
                    <div className='basket-content-info'>
                        <p className='basket-content-amount'>x{amount}</p>
                        <p className='basket-content-price'>${price}</p>
                    </div>
                </div>
                <div className='basket-content-main'>
                    <p className='basket-content-description'>{description}</p>
                    <div className='basket-content-buttons'>
                        <button
                            className='basket-plus-button basket-button'
                            onClick={() => {increaseAmount(id)}} 
                        >
                            <img className='basket-plus-img' src={plus} alt='plusLogo' />
                        </button>
                        <button
                            className='basket-minus-button basket-button'
                            onClick={() => {decreaseAmount(id)}}
                        >
                            <img className='basket-minus-img' src={minus} alt='minusLogo' />
                        </button>
                        <button
                            onClick={() => {removeMealFromBasket(id)}}
                            className='basket-bin-button basket-button'
                        >
                            <img className='basket-bin-img' src={bin} alt='binLogo' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}