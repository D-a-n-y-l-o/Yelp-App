import { useState, useEffect } from "react";
import { useDataContext } from "../hooks/useDataContext";
import { useNav } from "../hooks/useNav";

import { signOut } from 'firebase/auth';
import { auth } from '../base';

import SideMenu from "../components/SideMenu";
import User from "../components/User";
import Delivery from '../components/Delivery';
import MainHeader from "../components/MainHeader";
import Filters from "../components/Filters";
import Meals  from '../components/Meals';
import SalesAndArticles from '../components/SalesAndArticles';
import Basket from "../components/Basket";
import CompleteOrderUI from "../components/CompleteOrderUI";
import { Loader } from "../components/Loader";

import classNames from "classnames";

export const Home = () => {

    const [isBasketShown, setIsBasketShown] = useState(false);
    const [isCompleteOrderUIShown, setIsCompleteOrderUIShown] = useState(false);
    const [showLoader, setShowLoader] = useState(true);
    const [isMenuShown, setIsMenuShown] = useState(false);

    const { setCurrentUser, setMealsInBasket, setActiveElements } = useDataContext();
    const { goTo } = useNav();

    useEffect(() => {
        const timeout = setTimeout(() => {
          setShowLoader(false);
        }, 2500);

        return () => clearTimeout(timeout);
    }, []);

    const handleSignOut = async (event) => {
        event.preventDefault();

        await signOut(auth);
        setCurrentUser(null);
        goTo('/')
    }

    const toggleBasketShow = () => {
        setIsBasketShown(prev => !prev)
    };

    const toggleCompleteOrderUIShow = () => {
        setIsCompleteOrderUIShown(prev => !prev);
        setMealsInBasket([]);
        setActiveElements([]);
    };

    const toggleMenu = () => {
        setIsMenuShown(prev => !prev);
    }

    return(
        <div  className='home-container'>
            {showLoader && <Loader />}
            <div className='all-menu-container'>
                <div className={classNames('menu-container', {'menu-container-active' : isMenuShown})}>
                    <User />
                    <SideMenu />
                    <Delivery />
                </div>
                <button
                    className={classNames('menu-button', {'menu-button-active' : isMenuShown})}
                    onClick={toggleMenu}
                >
                    <div className='menu-line-one'></div>
                    <div className='menu-line-two'></div>
                    <div className='menu-line-three'></div>
                </button>
            </div>
            <div className='main'>
                <MainHeader
                    handleSignOut={handleSignOut}
                    toggleBasketShow={toggleBasketShow}
                />
                <Basket
                    toggleBasketShow={toggleBasketShow}
                    toggleCompleteOrderUIShow={toggleCompleteOrderUIShow}
                    className={classNames('basket', {'basket-shown': isBasketShown})}
                />
                <CompleteOrderUI 
                    className={classNames('basket-complete', {'basket-complete-shown': isCompleteOrderUIShown})}
                    toggleCompleteOrderUIShow={toggleCompleteOrderUIShow}
                />
                <div className='meals-and-articles'>
                    <div>
                        <Filters />
                        <Meals showBasket={() => {setIsBasketShown(true)}} />
                    </div>
                        <SalesAndArticles />
                </div>
            </div>
        </div>
    )
}