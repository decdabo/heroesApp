import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';

import { useHistory } from 'react-router';
import { login } from '../../reducers/actions/auth';
import { useDispatch } from 'react-redux';

export const LoginScreen = () => {
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const { push } = useHistory()

    const handleValues = ( values )=>{
        let error = {}
        if(!values.email){
            error.email = 'Please complete the space';
        }else if(values.email.length < 2){
            error.email = 'Email too short';
        }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
            error.email = "The email can't contains spaces and simbols";
        }
        if(!values.password){
            error.password = 'Please complete the space';
        }else if(values.password.length < 1){
            error.password = 'password too short';
        }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.password)){
            error.password = "The password can't contains simbols and numbers";
        }
        return error;
    }

        return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={(values)=>{
                axios.post('http://challenge-react.alkemy.org/', values)
                    .then(res=>{ 
                        dispatch(login(res.data))
                        push('/home');
                    })
                    .catch(e=>{setError(true)});
            }}
            validate={handleValues}
        >
            {({ values, handleChange, handleBlur, handleSubmit, errors, touched })=>(
                <form className="auth d-flex flex-column justify-content-center align-items-center" onSubmit={ handleSubmit }>
                    <div className="container w-50 rounded-3 brightGrey from__container">
                        <div className="mb-3 row">
                            <label htmlFor="staticEmail" className="col-12 col-form-label text-orange brightGrey">Email*</label>
                            <div className="col-12 brightGrey">
                                <input 
                                 autoComplete="off"
                                 className="form-control bg-dark text-light mb-3 brightGrey"
                                 id="staticEmail"
                                 name="email"
                                 value={ values.email }
                                 type="text" 
                                 placeholder="email@email.com"
                                 onBlur={ handleBlur }
                                 onChange={ handleChange }
                                />
                                {touched.email && errors.email && <h1 className="fs-6 text-danger brightGrey">{errors.email}</h1>}
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label 
                            htmlFor="inputPassword" 
                            className="col-12 col-form-label text-orange brightGrey">Password*</label>
                            <div className="col-12 brightGrey">
                                <input 
                                 autoComplete="off"
                                 className="form-control bg-dark text-light mb-3" 
                                 name="password"
                                 id="inputPassword"
                                 value={ values.password }
                                 type="password" 
                                 placeholder="password"
                                 onBlur={ handleBlur }
                                 onChange={ handleChange }
                                />
                                {touched.password && errors.password && <h1 className="fs-6 text-danger brightGrey">{errors.password}</h1>}
                                {error && <h1 className="fs-6 text-danger brightGrey">Password or email wrong</h1>}
                            </div>
                        </div>
                        <div className="row button__container brightGrey p-5">
                            <button className="btn btn-red-orange col-12 m-auto w-50" type="submit">
                                Login
                            </button>
                        </div>
                    </div>
                    <div class="accordion mt-4" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                            <div className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Want to met inside? Click me!
                            </div>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <h1 className="fs-6 help-text">USER: challenge@alkemy.org</h1>
                                <h1 className="fs-6 help-text">PASSWORD: react</h1>
                            </div>
                            </div>
                        </div>
                    </div>
                </form>
        )}</Formik>
    );
}