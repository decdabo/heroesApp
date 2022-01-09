import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {  heroesAddTeam, removeHeroData, showHeroData } from '../../reducers/actions/heroes';
import { useState } from 'react';
import { useEffect } from 'react';

export const Card = ({ data, conditional, numberTeam }) => {
    const [size, setSize] = useState(6)
    const team = useSelector(state => state.heroes.teamHero);
    const dispatch = useDispatch();
    const {  name, image } = data;

    const handleDispatch=()=>{
       dispatch(showHeroData(data));
    }
    const handleAddHero = () => {
        dispatch(heroesAddTeam(data, team))
    }
    const handleRemoveHero = () => {
        dispatch(removeHeroData(data))
    }

    useEffect(() => {
        if(numberTeam <= 2){
            setSize(6)
        }else if(numberTeam <= 3){
            setSize(4)
        }else{
            setSize(2);
        }
        // eslint-disable-next-line
    }, [numberTeam])

    return (
        <div className={`col-12 col-xl-${size} pb-4 m-auto`}>
            <div className="card__style m-auto">
                <div className="card w-100" style={{width: "100%"}}>
                    <img src={ image.url } className="card-img-top m-auto mt-3" alt={ name } />
                    <div className="card-body">
                        <h5 className="card-title mb-3">{ name }</h5>
                        <div className="card-body row">
                            <Link 
                             className="btn btn-red-orange m-auto"
                             onClick={ handleDispatch }
                             to={`./hero/${name}`}
                            >
                                Look
                            </Link>
                            {
                             (conditional)
                                ? (<button className="btn btn-outline-success m-auto" onClick={ handleAddHero }>Add</button>)
                                : (<button className="btn btn-outline-danger m-auto" onClick={ handleRemoveHero }> Remove</button>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
