export const Meal = ({ className, image, title, text, price, onClick, icon }) => {
    return(
        <div className={className}>
            <img className='meal-image' src={image} alt='mealImage' />
            {icon !== null && <img className='meal-icon' src={icon} alt='Icon'/>}
            <div className='meal-content'>
                <h3 className='meal-title'>{title}</h3>
                <p className='meal-description'>{text}</p>
                <p className='meal-price'>{price}</p>
            </div>
            <div className='meal-button-container'>
                <button className='meal-button' onClick={onClick}>
                    <div className='meal-button-one-line' />
                    <div className='meal-button-second-line' />
                </button>
            </div>
        </div>
    )
}