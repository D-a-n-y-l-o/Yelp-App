import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNav } from "../hooks/useNav";

import { getAuth, signOut } from 'firebase/auth';
import { app } from '../base';

import { SideMenu } from "../components/SideMenu";

const auth = getAuth();

export const Home = () => {

    const { setCurrentUser } = useContext(AuthContext);
    const { goTo } = useNav();


    const handleSignOut = async (event) => {
        event.preventDefault();

        await signOut(auth);
        setCurrentUser(null);
        goTo('/')
    }

    return(
        <div >
            <SideMenu />
            <div>
                Home
                <button onClick={handleSignOut}>Sign Out</button>
            </div>
        </div>
    )
}