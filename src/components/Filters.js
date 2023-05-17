import { useState } from "react";

import { Filter } from "./Filter";

import classnames from 'classnames'
import '../styles/filter.scss';

import all from '../assets/all.png';
import burger from '../assets/burger.png';
import pizza from '../assets/pizza.png';
import salads from '../assets/salads.png';
import donut from '../assets/donut.png';
import drinks from '../assets/drinks.png';

const filtersList = [
    {
        id: 1,
        title: 'All',
        image: all
    },
    {
        id: 2,
        title: 'Burger',
        image: burger
    },
    {
        id: 3,
        title: 'Pizza',
        image: pizza
    },
    {
        id: 4,
        title: 'Salads',
        image: salads
    },
    {
        id: 5,
        title: 'Donut',
        image: donut
    },
    {
        id: 6,
        title: 'Drinks',
        image: drinks
    },
]


export const Filters = () => {

    const [activeItem, setActiveItem] = useState(filtersList[0]);

    const changeActiveItem = (item) => {
        setActiveItem(item)
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