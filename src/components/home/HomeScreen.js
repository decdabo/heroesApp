import React from "react";
import { useSelector } from "react-redux";

import { NavApp } from "../ui/NavApp";
import { SearchScreen } from "../ui/SearchScreen";
import { TeamApp } from "./TeamApp";

export const HomeScreen = () => {
    const { teamHero } = useSelector(state => state.heroes)

    return (
        <>
            <NavApp />
            <hr/>
            {(teamHero[0] === undefined)
                ? (<div className="container text-orange m-auto fs-1">
                    Haven't team yet! <br />
                    <i className="fas fa-frown text-orange"></i>
                    </div>)
                : (<TeamApp />)
            }
            <hr/>
            <SearchScreen />
        </>
    );
}