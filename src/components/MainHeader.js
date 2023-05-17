import emoji from '../assets/emoji.png';
import basket from '../assets/basket.svg';
import search from '../assets/search.svg';
import signOut from '../assets/signOut.svg';

import '../styles/mainHeader.scss'

export const MainHeader = ({handleSignOut}) => {
    return(
        <header className='header'>
            <p className='header-title' >
                Welcome To<br/>Lucknow
                <img className='header-main-image' src={emoji} alt='emoji' />
            </p>
            <nav className='header-nav' >
                <button className='header-basket-button' >
                    <img src={basket} alt='basket' />
                </button>
                <button className='header-search-button'>
                    <img src={search} alt='search' />
                </button>
                <button className='header-signOut-button' onClick={handleSignOut}>
                    <img src={signOut} alt='signOut' />
                </button>
            </nav>
        </header>
    )
}