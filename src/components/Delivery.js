import { memo } from 'react';

import delivery from '../assets/deliveryImage.png';
import arrow from '../assets/arrow.svg'

const Delivery = () => {
    return(
        <div className='delivery'>
            <img className='delivery-image' src={delivery} alt='deliveryImage' />
            <p className='delivery-title'>Faster<br/>delivery!</p>
            <div className='delivery-pretitle-container'>
                <p className='delivery-pretitle'>Know More</p>
                <button className='delivery-arrow-button'>
                    <img className='delivery-arrow-image' src={arrow} alt='arrowImage' />
                </button>
            </div>
        </div>
    )
}

export default memo(Delivery)