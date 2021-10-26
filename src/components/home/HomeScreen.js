import React from "react";
import { useSelector } from "react-redux";

import { MyCards } from "../cards/MyCards";
import { NavApp } from "../ui/NavApp";
import { SearchScreen } from "../ui/SearchScreen";

export const HomeScreen = () => {
    const heroes = useSelector(state => state.heroes.teamHero)

    return (
        <>
            <NavApp />
            <hr/>
            <MyCards heroes={ heroes }/>
            <hr/>
            <SearchScreen />
        </>
    );
}