import grapes from '../assets/grapes.png';
import burgerSale from '../assets/burgerSale.png';

export const Loader = () => {
    return (
        <>
            <div className='loader-left' />
            <div className='loader-right' />
            <div className='loader-container'>
                <p className='loader-title'>Yelp App</p>
                <p className='loader-pretitle'>developed by Danylo Boiko</p>
                <img className='loader-image-burger' src={burgerSale} alt='burgerSale'/>
                <img className='loader-image-grapes' src={grapes} alt='grapes'/>
            </div>
        </>
    )
}