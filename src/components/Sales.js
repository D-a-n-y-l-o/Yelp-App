import burgerSale from '../assets/burgerSale.png';

export const Sales = () => {
    return(
        <div className='sales'>
            <h3 className='sales-title' >-50% Off</h3>
            <p className='sales-pretitle' >the full price of burgers</p>
            <img className='sales-image' src={burgerSale} alt='burgerSale'/>
        </div>
    )
}