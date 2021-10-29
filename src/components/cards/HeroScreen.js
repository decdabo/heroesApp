import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { heroesAddTeam } from '../../reducers/actions/heroes';
import { NavApp } from '../ui/NavApp';

export const HeroScreen = () => {
    const dispatch = useDispatch();

    const team = useSelector(state => state.heroes.teamHero);
    const state = useSelector(state => state.heroes.showHero);
    const { appearance, biography, name, work, image }=state;

    const weightHero = appearance.weight[1];
    const heightHero = appearance.height[1];
    const aliasesHero = biography.aliases;
    const eyesHero = appearance['eye-color'];
    const hairHero = appearance['hair-color'];

    const handleAddHero = () => {
        dispatch(heroesAddTeam(state, team))
    }
    return (
        <>
            <NavApp />
            <div className="container">
                <hr/>
                <div className="row w-100">
                    <div className="col-12 col-lg-6 m-auto">
                        <div className="card__style ">
                            <div className="card w-100 m-auto" style={{width: "100%"}}>
                                <img src={ image.url } className="card-img-top m-auto mt-3" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{ name }</h5>
                                    <p className="card-text">
                                        Aliases: { 
                                            aliasesHero.map( alias => {
                                                return <span key={alias}>"{ alias }", </span>
                                            })
                                        }
                                    </p>
                                </div>
                                <ul className="list-group list-group-flush brightGrey">
                                    <li className="list-group-item brightGrey text-light">Weight: {weightHero}</li>
                                    <li className="list-group-item brightGrey text-light">Height: {heightHero}</li>
                                    <li className="list-group-item brightGrey text-light">Eyes color: {eyesHero}</li>
                                    <li className="list-group-item brightGrey text-light">Hair color: { hairHero }</li>
                                    <li className="list-group-item brightGrey text-light">Localization: "{ work.base }"</li>
                                </ul>
                                <div className="card-body d-flex justify-content-between">
                                    <Link
                                     className="btn btn-red-orange"
                                     to="/home"
                                     > 
                                        Back 
                                    </Link>
                                    <Link 
                                     className="btn btn-outline-success"
                                     onClick={ handleAddHero }
                                     to="/home"
                                    > 
                                        Add
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
