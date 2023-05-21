import girl1 from '../assets/articles/girl1.svg';
import girl2 from '../assets/articles/girl2.svg';
import oldman from '../assets/articles/oldman.svg';
import chicken from '../assets/articles/chicken.png';
import coronavirus from '../assets/articles/coronavirus.png';
import cookies from '../assets/articles/cookies.png';
import pizzaEmoji from '../assets/articles/pizza-emoji.png';
import arrow from '../assets/arrow.svg';

import { Article } from './Article';


const articlesList = [
    {
        id: 1,
        icon: chicken,
        title: 'How to cook turkey on Natural Gas',
        color: 'yellow',
        user1: girl1,
        user2: girl2,
    },
    {
        id: 2,
        icon: coronavirus,
        title: 'Corona virus update: 3,43,287+ cases',
        color: 'blue',
        user1: oldman,
        user2: girl2,
    },
    {
        id: 3,
        icon: cookies,
        title: 'Tasty chunk donutes with chocolate',
        color: 'pink',
        user1: girl1,
        user2: oldman,
    },
    {
        id: 4,
        icon: pizzaEmoji,
        title: 'Home made double cheez with popcorn respies',
        color: 'turquoise',
        user1: girl1,
        user2: girl2,
    },
]


export const Articles = () => {
    return(
        <div className='articles-container'>
            <header className='articles-header'>
                <h3 className='articles-header-title' >Articles</h3>
                <button className='articles-header-button'>
                    <img src={arrow} alt='arrow' />
                </button>
            </header>
            <div>
                {articlesList.map((item) => {
                    return <Article 
                        icon={item.icon}
                        title={item.title}
                        color={item.color}
                        image1={item.user1}
                        image2={item.user2}
                        key={item.id}
                    />
                })}
            </div>
        </div>
    )
}