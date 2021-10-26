import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { heroesAddTeam } from '../../reducers/actions/heroes';
import { NavApp } from '../ui/NavApp';

export const HeroScreen = () => {
    const dispatch = useDispatch()
    const { goBack } = useHistory();
    
    const state = useSelector(state => state.heroes.showHero);
    const { appearance, biography, name, work, image }=state;

    const weightHero = appearance.weight[1];
    const heightHero = appearance.height[1];
    const aliasesHero = biography.aliases;
    const eyesHero = appearance['eye-color'];
    const hairHero = appearance['hair-color'];

    const handleBack = () =>{
        goBack();
    }
    const handleAddHero = () => {
        dispatch(heroesAddTeam(state))
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
                                <ul className="list-group list-group-flush brigthGrey">
                                    <li className="list-group-item brigthGrey text-light">Weight: {weightHero}</li>
                                    <li className="list-group-item brigthGrey text-light">Height: {heightHero}</li>
                                    <li className="list-group-item brigthGrey text-light">Eyes color: {eyesHero}</li>
                                    <li className="list-group-item brigthGrey text-light">Hair color: { hairHero }</li>
                                    <li className="list-group-item brigthGrey text-light">Localization: "{ work.base }"</li>
                                </ul>
                                <div className="card-body d-flex justify-content-between">
                                    <div 
                                     className="btn btn-red-orange"
                                     onClick={ handleBack }
                                     > 
                                        Back 
                                    </div>
                                    <div 
                                     className="btn btn-outline-success"
                                     onClick={ handleAddHero }
                                    > 
                                        Add hero 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
