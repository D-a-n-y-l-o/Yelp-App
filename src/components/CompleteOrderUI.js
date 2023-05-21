import { memo } from 'react'

import watch from '../assets/Watch.png'

const CompleteOrderUI = ({className, toggleCompleteOrderUIShow}) => {

    return(
        <div className={className}>
            <div className='basket-complete-container'>
                <img className='basket-complete-image' src={watch} alt='watch' />
                <p className='basket-complete-text'>in the process of cooking...</p>
                <button 
                    className='basket-button-order'
                    onClick={toggleCompleteOrderUIShow}
                >
                    Order more
                </button>
            </div>
        </div>
    )
}

export default memo(CompleteOrderUI);