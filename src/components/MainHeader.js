import { memo } from 'react';

import emoji from '../assets/emoji.png';
import basket from '../assets/basket.svg';
import search from '../assets/search.svg';
import signOut from '../assets/signOut.svg';

const MainHeader = ({handleSignOut, toggleBasketShow}) => {
    return(
        <header className='header'>
            <p className='header-title' >
                Welcome To<br/>Lucknow
                <img className='header-main-image' src={emoji} alt='emoji' />
            </p>
            <nav className='header-nav' >
                <button className='header-basket-button' onClick={toggleBasketShow}>
                    <img className='header-basket-image' src={basket} alt='basket' />
                </button>
                <button className='header-search-button'>
                    <img className='header-search-image' src={search} alt='search' />
                </button>
                <button className='header-signOut-button' onClick={handleSignOut}>
                    <img className='header-signOut-image' src={signOut} alt='signOut' />
                </button>
            </nav>
        </header>
    )
}

export default memo(MainHeader)