import bittenApple from '../assets/bitten-apple.png';
import grapes from '../assets/grapes.png';
import leaf from '../assets/leaf.png'
import orange from '../assets/orange.png';
import emoji from '../assets/emoji.png';

import '../styles/form.scss';

import { AuthForm } from "../components/AuthForm";

export const AuthFormPage = () => {
    return(
        <div className='form-container' >
            <img className='form-image-grapes' src={grapes} alt='grapes' />
            <img className='form-image-leaf' src={leaf} alt='leaf' />
            <h3 className='form-title' >
                Welcome To<br/>Lucknow
                <img className='form-title-image' src={emoji} alt='emoji' />
            </h3>
            <AuthForm />
            <img className='form-image-bittenApple' src={bittenApple} alt='bittenApple' />
            <img className='form-image-orange' src={orange} alt='orange' />
        </div>
    )
}