import { useState, memo } from 'react';

import classnames from 'classnames'

import { Icon } from './Icon';

const menuList = [
    {
        id: 1,
        title: 'Home',
        svgName: 'home',
    },
    {
        id: 2,
        title: 'Menu',
        svgName: 'menu',
    },
    {
        id: 3,
        title: 'Trending',
        svgName: 'trending',
    },
    {
        id: 4,
        title: 'Setting',
        svgName: 'setting',
    }
];


const SideMenu = () => {

    const [activeItem, setActiveItem] = useState(menuList[0]);

    const changeActiveItem = (item) => {
        setActiveItem(item)
    }

    return(
        <nav className='menu'>
            <ul className='menu_list'>
                {menuList.map((item) =>{
                    return <li
                        className={classnames('menu_item', {'menu_item-active': activeItem.id === item.id})}
                        key={item.id}
                        onClick={() => changeActiveItem(item)}
                    >
                        <div className='menu_icon'>
                            <Icon name={item.svgName} />
                        </div>
                        <div className='menu_title-container'>
                            <p className='menu_title'>{item.title}</p>
                        </div>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default memo(SideMenu)