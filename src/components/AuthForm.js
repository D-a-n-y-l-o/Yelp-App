import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../base';

import { NavLink } from 'react-router-dom';
import { useDataContext } from '../hooks/useDataContext';

import { Input } from './Input';
import { Button } from './Button';
import { FormError } from './FormError';


const loginSchema = Yup.object({
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
});


export const AuthForm = () => {

    const { setCurrentUser } = useDataContext();

    const [formError, setFormError] = useState('')

    const { handleSubmit, handleChange, values, handleBlur, touched, errors } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: async () => {
            try{
                setFormError('');
                const response = await signInWithEmailAndPassword(auth, values.email, values.password);
                const user = response.user

                setCurrentUser(user);

            } catch (err){
                setFormError(err.message);
            }
        }
    });

    return(
        <form
            onSubmit={handleSubmit}
            className='form'
        >
            <Input
                label='Email'
                className='form-input'
                placeholder="test@gmail.com"
                type='text'
                value={values.email}
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {touched.email && errors.email ? <p className='form-error-message' >{errors.email}</p> : null}
            <Input
                label='Password'
                className='form-input form-input-noDecoration'
                placeholder="*************"
                type='password'
                value={values.password}
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {touched.password && errors.password ? <p className='form-error-message' >{errors.password}</p> : null}
            <Button
                className='form-button'
                text='Login'
            />
            <NavLink to='/register' className='form-link' >
                don`t have an account?
            </NavLink>
            {formError !== '' && <FormError errorMessage={formError} />}
        </form>
    )
}