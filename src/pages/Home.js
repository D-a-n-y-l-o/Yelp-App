import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
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

import '../styles/homePage.scss'

const auth = getAuth();

export const Home = () => {

    const { setCurrentUser, setIsLoading } = useContext(AuthContext);
    const { goTo } = useNav();


    const handleSignOut = async (event) => {
        event.preventDefault();

        await signOut(auth);
        setCurrentUser(null);
        goTo('/')
    }

    return(
        <div className='home-container'>
            <Loader />
            <div>
                <User />
                <SideMenu />
                <Delivery />
            </div>
            <div className='main'>
                <MainHeader handleSignOut={handleSignOut} />
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