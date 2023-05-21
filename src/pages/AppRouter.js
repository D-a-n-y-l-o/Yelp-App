import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthFormPage } from './AuthFormPage';
import { RegisterFormPage } from './RegisterFormPage';
import { Home } from './Home';

import { useDataContext } from '../hooks/useDataContext';


const PrivateRoute = ({children}) => {
    let {currentUser} = useDataContext();
    
    if(currentUser === null){
        return <Navigate to='/login' />
    }

    return children;
}

export const AppRouter = () => {

    let {currentUser} = useDataContext();

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

