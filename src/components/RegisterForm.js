import { useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../base';

import { Input } from './Input';
import { Button } from './Button';
import { FormError } from './FormError';

import { useNav } from '../hooks/useNav';


const registrationSchema = Yup.object({
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
    confirm: Yup
        .string()
        .oneOf([Yup.ref('password'), null], 'Must match "password" field value'),
});


export const RegisterForm = () => {

    const [formError, setFormError] = useState('')

    const { goTo } = useNav();

    const {handleSubmit, handleChange, values, handleBlur, touched, errors} = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirm: '',
        },
        validationSchema: registrationSchema,
        onSubmit: async () => {
            try{
                setFormError('');
                await createUserWithEmailAndPassword(auth, values.email, values.password);

                goTo('/login');
            }catch (err){
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
                className='form-input form-input-noDecoration'
                placeholder="Email"
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
                placeholder="*********************"
                type='password'
                value={values.password}
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {touched.password && errors.password ? <p className='form-error-message' >{errors.password}</p> : null}
            <Input
                label='Confirm password'
                className='form-input form-input-noDecoration'
                placeholder="*********************"
                type='password'
                value={values.confirm}
                name='confirm'
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {touched.confirm && errors.confirm ? <p className='form-error-message' >{errors.confirm}</p> : null}
            <Button
                className='form-button form-input-password'
                text='Register'
            />
            {formError !== '' && <FormError errorMessage={formError} />}
        </form>
    )
}