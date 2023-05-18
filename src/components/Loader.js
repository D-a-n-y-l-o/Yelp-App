import { useContext } from 'react';

import grapes from '../assets/grapes.png';
import burgerSale from '../assets/burgerSale.png';

import classNames from 'classnames';

import { Context } from '../context/Context';

export const Loader = () => {

    const { isLoading } = useContext(Context);

    return (
        <>
            <div className='loader-left' />
            <div className='loader-right' />
            <div className={classNames('loader-container', {'loader-container-hide': isLoading === false})}>
                <p className='loader-title'>Yelp App</p>
                <p className='loader-pretitle'>developed by Danylo Boiko</p>
                <img className='loader-image-burger' src={burgerSale} alt='burgerSale'/>
                <img className='loader-image-grapes' src={grapes} alt='grapes'/>
            </div>
        </>
    )
}