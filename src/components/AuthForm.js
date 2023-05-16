import { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../base';

import { AuthContext } from '../context/AuthContext';

import { Input } from './Input';
import { Button } from './Button';


const auth = getAuth();

export const AuthForm = () => {

    const { setCurrentUser } = useContext(AuthContext)

    const {handleSubmit, handleChange, values, handleBlur, touched, errors} = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .email('Email format is incorrect')
                .required('Email is a required field'),
            password: Yup
            .string()
            .min(8, 'Password must be 8 or more characters long')
            .matches(/[0-9]/, 'Password requires a number')
            .matches(/[a-z]/, 'Password requires a lowercase letter')
            .required('Password is a required field'),
        }),
        onSubmit: async ({email, password}) => {
            console.log('email:', email);
            console.log('password:', password);

            try{
                const response = await signInWithEmailAndPassword(auth, values.email, values.password);
                const user = response.user
                console.log(user);

                setCurrentUser(user)

            } catch (err){
                console.log(err)
            }
        }
    });

    return(
        <form
            onSubmit={handleSubmit}
            className='form'
        >
            <Input
                className='input'
                placeholder="Enter your login"
                type='text'
                value={values.email}
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {touched.email && errors.email ? <p className='error-message' >{errors.email}</p> : null}
            <Input
                className='input'
                placeholder="Enter your password"
                type='password'
                value={values.password}
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {touched.password && errors.password ? <p className='error-message' >{errors.password}</p> : null}
            <Button
                className='submit-button'
                text='Login'
            />
        </form>
    )
}