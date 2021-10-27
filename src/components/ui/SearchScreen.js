import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { MyCards } from '../cards/MyCards';


export const SearchScreen = () => {
    const [heroesList, setHeroesList] = useState([]);
 
    const handleInputChange = (e, handleChange, values) =>{
        handleChange(e);
        const { value } = values;
        const searchName = value.toLowerCase()

        try {
            return axios.get( `https://superheroapi.com/api.php/117518734017873/search/${searchName}` )
            .then(res => setHeroesList(res.data))
            .catch(e => console.log(e));
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Formik
            initialValues={{
                searchText: '',
            }}
            validate={(values)=>{
                let errors = {}
                if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.searchText)){ 
                    errors.searchText= 'El nombre del héroe solo debe contener letras'
                }
                return errors;
            }}
        >
            {({values, handleChange, errors })=>(
                <div className="container">
                    <div className="row w-100">
                        <h1> Search</h1>
                        <hr />
                        <input 
                         autoComplete="off"
                         className="form-control form-control-lg bg-dark text-light mb-3" 
                         type="text" 
                         name="searchText"
                         id="searchText"
                         value={ values.searchText }
                         placeholder="Search a hero" 
                         aria-label=".form-control-lg example"
                         onChange={ (e)=> handleInputChange( e, handleChange, e.target) }
                        />
                        {errors.searchText && <h4 className="fs-6 text-danger">{errors.searchText}</h4>}
                        <hr />
                    </div>
                    {
                        (heroesList.response === 'success' && !errors.searchText) 
                            ?(<MyCards 
                                heroes={ heroesList.results }
                                conditional={ true }
                                />)
                            :(<h4 className="fs-6 text-danger">{heroesList.error}</h4>)
                    }
                </div>
            )}
            
        </Formik>
    )
}
