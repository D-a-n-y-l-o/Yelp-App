import { useState, useContext } from 'react';
import { Context } from '../context/Context';

import classnames from 'classnames'

import filter from '../assets/filter.svg';
import burgerMeal from '../assets/burgerMeal.png';
import butterChicken1 from '../assets/butterChicken1.png';
import butterChicken2 from '../assets/butterChicken2.png';
import paprik from '../assets/paprik.png';
import noodles from '../assets/noodles.png';
import hiSalmon from '../assets/hiSalmon.png';
import fireLogo from '../assets/fireLogo.svg';
import thumbLogo from '../assets/thumbLogo.svg';
import burgerLogo from '../assets/burger.svg';
import chickenLogo from '../assets/chicken.svg';
import riceLogo from '../assets/rice.svg';
import noodlesLogo from '../assets/noodles.svg';

import { Meal } from './Meal';


const mealsList = [
    {
        id: 1,
        image: burgerMeal,
        title: 'Burger Wanted',
        description: 'Rels, Zoodies, Garnein Sesasam Dessigns, Redeshchein, Avocade',
        price: '29',
        icon: fireLogo,
        type: 'burger',
        basketIcon: burgerLogo,
    },
    {
        id: 2,
        image: butterChicken1,
        title: 'Butter Chicken',
        description: 'Reis, Sous-vide Chicken, Penaut Satay, Babyspian',
        price: '56',
        icon: thumbLogo,
        type: 'butter chicken',
        basketIcon: chickenLogo,
    },
    {
        id: 3,
        image: hiSalmon,
        title: 'Hi, Salmon',
        description: 'Rels, Zoodies, Garnein Dressings, Avacode Edanmame, Maris.',
        price: '69',
        icon: null,
        type: 'salmon',
        basketIcon: riceLogo,
    },
    {
        id: 4,
        image: paprik,
        title: 'Paprik',
        description: 'Rels, Zoodies, Garnein Sesasam Dessigns, Redeshchein, Avocade',
        price: '45',
        icon: null,
        type: 'paprik',
        basketIcon: chickenLogo,
    },
    {
        id: 5,
        image: noodles,
        title: 'Noodles',
        description: 'Reis, Sous-vide Chicken, Penaut Satay, Babyspian',
        price: '26',
        icon: null,
        type: 'noodles',
        basketIcon: noodlesLogo,
    },
    {
        id: 6,
        image: butterChicken2,
        title: 'Butter Chicken 2.0',
        description: 'Rels, Zoodies, Garnein Dressings, Avacode Edanmame, Maris.',
        price: '75',
        icon: thumbLogo,
        type: 'butter chicken',
        basketIcon: chickenLogo,
    }
];


export const Meals = () => {

    const { mealType, addMealToBasket, activeElements, setActiveElements } = useContext(Context);

    const makeItemActive = (item) => {
        if (activeElements.includes(item.id)) {
            return;
        } else {
            setActiveElements([...activeElements, item.id]);
            addMealToBasket(item)
        }
    };

    const getFilteredList = (mealType) => {       
        if(mealType){
            const filteredList = mealsList.filter((item) => item.type === mealType);
            return filteredList;
        } else {
            return mealsList;
        }
    }

    return(
        <div className='meals' >
            <header className='meals-header'>
                <h3 className='meals-title'>All Items</h3>
                <img className='meals-main-image' src={filter} alt='filterIcon' />
            </header>
            <div className='meals-grid'>
                {getFilteredList(mealType).map((item) => {
                    return <Meal 
                        className={classnames('meal', {'meal-active': activeElements.includes(item.id)})}
                        image={item.image}
                        title={item.title}
                        text={item.description}
                        price={item.price}
                        icon={item.icon}
                        key={item.id}
                        onClick={() => {makeItemActive(item)}}
                    />
                })}
            </div>
        </div>
    )
}