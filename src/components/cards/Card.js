import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { showHeroData } from '../../reducers/actions/heroes';

export const Card = ({ data }) => {

    const dispatch = useDispatch()

    const {  name, image } = data;

    const handleDispatch=()=>{
       dispatch(showHeroData(data));
    }

    return (
        <div className="col-6 col-lg-2 pb-4 m-auto">
            <div className="card__style m-auto">
                <div className="card w-100" style={{width: "100%"}}>
                    <img src={ image.url } className="card-img-top m-auto mt-3" alt={ name } />
                    <div className="card-body">
                        <h5 className="card-title mb-3">{ name }</h5>
                    <div className="card-body">
                        <Link 
                         className="btn btn-red-orange"
                         onClick={ handleDispatch }
                         to={`./hero/${name}`}
                        >
                             Mirar Héroe
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
