import { memo } from 'react';

import logo from '../assets/userLogo.png';

const User = () => {
    return(
        <div className='user'>
            <div className='user-avatar'>
                <img className='user-avatar-img' src={logo} alt='logo' />
            </div>
            <p className='user-name'>Ean Cabrera</p>
        </div>
    )
}

export default memo(User);
