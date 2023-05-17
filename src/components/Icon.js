import Icons from '../assets/sprite.svg';

export const Icon = ({ name, color='rgba(144, 144, 144, 1)', size='18px' }) => {
    return <svg className={`icon icon-${name}`} fill={color} width={size} height={size} >
        <use xlinkHref={`${Icons}#${name}`}></use>
    </svg>
}