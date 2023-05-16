import Icons from '../assets/sprite.svg';

export const Icon = ({ name, color='black', size }) => {
    <svg className={`icon icon-${name}`} fill={color} width={size} height={size} >
        <use xLinkHref={`${Icons}#${name}`}></use>
    </svg>
}