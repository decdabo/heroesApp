import React from "react";

import { NavApp } from '../ui/NavApp';
// import { MyCards } from '../cards/MyCards';
import { SearchScreen } from "../ui/SearchScreen";

export const DashboardApp = () => {

    return (
        <>
            <NavApp />
            <hr/>
            {/* <MyCards /> */}
            <hr/>
            <SearchScreen />
        </>
    );
}
