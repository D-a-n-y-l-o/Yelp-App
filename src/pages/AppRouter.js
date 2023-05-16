import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthFormPage } from './AuthFormPage';
import { RegisterFormPage } from './RegisterFormPage';
import { Home } from './Home';

import { AuthContext } from '../context/AuthContext';


const PrivateRoute = ({children}) => {
    let {currentUser} = useContext(AuthContext);
    
    if(currentUser === null){
        return <Navigate to='/login' />
    }

    return children;
}

export const AppRouter = () => {

    let {currentUser} = useContext(AuthContext);

    return(
        <div>
            <Routes>
                <Route path='/' element={<PrivateRoute>
                    <Home />
                </PrivateRoute>} />
                <Route path='/login' element={currentUser ? <Navigate to='/' /> : <AuthFormPage />} />
                <Route path='/register' element={<RegisterFormPage />} />

                <Route path='*' element={<Navigate to='/login' />} />
            </Routes>
        </div>
    )
}

