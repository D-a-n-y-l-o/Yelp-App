import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { useNav } from "../hooks/useNav";

import { getAuth, signOut } from 'firebase/auth';
import { app } from '../base';

import { SideMenu } from "../components/SideMenu";
import { User } from "../components/User";
import { Delivery } from '../components/Delivery';
import { MainHeader } from "../components/MainHeader";
import { Filters } from "../components/Filters";
import { Meals } from '../components/Meals';
import { SalesAndArticles } from '../components/SalesAndArticles';
import { Loader } from "../components/Loader";
import { Basket } from "../components/Basket";
import { CompleteOrderUI } from "../components/CompleteOrderUI";

import classNames from "classnames";


const auth = getAuth();

export const Home = () => {

    const [isBasketShown, setIsBasketShown] = useState(false);

    const [isCompleteOrderUIShown, setIsCompleteOrderUIShown] = useState(false)
    const { setCurrentUser } = useContext(Context);
    const { goTo } = useNav();


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
    };

    return(
        <div className='home-container'>
            <Loader />
            <div>
                <User />
                <SideMenu />
                <Delivery />
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
                        <Meals />
                    </div>
                        <SalesAndArticles />
                </div>
            </div>
        </div>
    )
}