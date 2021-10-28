import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';

import { useHistory } from 'react-router';
import { login } from '../../reducers/actions/auth';
import { useDispatch } from 'react-redux';

export const LoginScreen = () => {
    const dispatch = useDispatch()
    const { push } = useHistory()

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={(values)=>{
                try {
                    axios.post('http://challenge-react.alkemy.org/', values)
                        .then(res=>{ 
                            dispatch(login(res.data))
                            push('/home');
                        })
                        .catch(e=>console.log('bad'));
                } catch (error) {
                    console.log(error);
                }
            }}
        >
            {({ values, handleChange, handleBlur, handleSubmit })=>(
                <form className="auth d-flex justify-content-center align-items-center" onSubmit={ handleSubmit }>
                    <div className="container w-50 h-50 rounded-3 brigthGrey from__container">
                        <div className="mb-3 row">
                            <label htmlFor="staticEmail" className="col-12 col-form-label text-orange brigthGrey">Email</label>
                            <div className="col-12 brigthGrey">
                                <input 
                                 autoComplete="off"
                                 className="form-control bg-dark text-light mb-3 brigthGrey"
                                 id="staticEmail"
                                 name="email"
                                 value={ values.email }
                                 type="text" 
                                 placeholder="email@email.com"
                                 onChange={ handleChange }
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label 
                            htmlFor="inputPassword" 
                            className="col-12 col-form-label text-orange brigthGrey">Password</label>
                            <div className="col-12 brigthGrey">
                                <input 
                                 autoComplete="off"
                                 className="form-control bg-dark text-light mb-3" 
                                 name="password"
                                 id="inputPassword"
                                 value={ values.password }
                                 type="password" 
                                 placeholder="password"
                                 onChange={ handleChange }
                                />
                            </div>
                        </div>
                        <div className="row button__container brigthGrey">
                            <button className="btn btn-red-orange col-6 m-auto" type="submit">
                                Login
                            </button>
                        </div>
                    </div>
                </form>
        )}</Formik>
    );
}