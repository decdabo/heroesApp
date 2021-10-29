import React from 'react';
import { useSelector } from 'react-redux';

import { MyCards } from '../cards/MyCards';
import { stackStats } from '../helpers/stackStats';

export const TeamApp = () => {
    const { teamHero } = useSelector(state => state.heroes)

    stackStats(teamHero);

    return (
        <div className="container">
            <div className="row w-100">
                <div className="col-6"></div>
            </div>
            <hr/>
            <MyCards heroes={ teamHero } conditional={ false } />
        </div>
    );
}
