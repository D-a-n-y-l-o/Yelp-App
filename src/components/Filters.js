import { useState, useContext } from "react";

import { Filter } from "./Filter";

import classnames from 'classnames'

import all from '../assets/all.png';
import burger from '../assets/burger.png';
import pizza from '../assets/pizza.png';
import salads from '../assets/salads.png';
import donut from '../assets/donut.png';
import drinks from '../assets/drinks.png';

import { Context } from "../context/Context";

const filtersList = [
    {
        id: 1,
        title: 'All',
        image: all,
        type: '',
    },
    {
        id: 2,
        title: 'Burger',
        image: burger,
        type: 'burger',
    },
    {
        id: 3,
        title: 'Pizza',
        image: pizza,
        type: 'pizza',
    },
    {
        id: 4,
        title: 'Salads',
        image: salads,
        type: 'salads',
    },
    {
        id: 5,
        title: 'Donut',
        image: donut,
        type: 'donut',
    },
    {
        id: 6,
        title: 'Drinks',
        image: drinks,
        type: 'drinks',
    },
]


export const Filters = () => {

    const { mealType, setMealType } = useContext(Context)

    const [activeItem, setActiveItem] = useState(filtersList[0]);

    const changeActiveItem = (item) => {
        setActiveItem(item);
        setMealType(item.type);

        console.log(mealType)
    }

    return(
        <div className='filters-container' >
            {filtersList.map((item) => {
                return <Filter 
                    className={classnames('filter', {'filter-active': activeItem.id === item.id})}
                    image={item.image}
                    title={item.title}
                    onClick={() => {changeActiveItem(item)}}
                    key={item.id}
                />
            })}
        </div>
    )
}