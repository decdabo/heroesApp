import React from "react";
import { useSelector } from "react-redux";

import { MyCards } from "../cards/MyCards";
import { NavApp } from "../ui/NavApp";
import { SearchScreen } from "../ui/SearchScreen";

export const HomeScreen = () => {
    const { teamHero } = useSelector(state => state.heroes)

    return (
        <>
            <NavApp />
            <hr/>
                <MyCards heroes={ teamHero } conditional={ false }/>
            <hr/>
            <SearchScreen />
        </>
    );
}