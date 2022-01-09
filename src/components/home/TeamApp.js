import React from 'react';
import { useSelector } from 'react-redux';

import { MyCards } from '../cards/MyCards';
import { stackStats } from '../helpers/stackStats';

export const TeamApp = () => {
    const { teamHero } = useSelector(state => state.heroes)
    const heroStats = stackStats(teamHero);

    const inOrder = heroStats.sort((a, b) => {
          if (a.value < b.value) {
            return 1;
          }
          if (a.value > b.value) {
            return -1;
          }
          return 0;
        });

    return (
        <div className="container">
            <div className="row w-100">
                <div className="col-6">
                    {
                        inOrder.map( stat => {
                            return <h5 className="text-orange" key={ stat.type }> {stat.type}: {stat.value}</h5>
                        })
                    }
                </div>
            </div>
            <hr/>
            <MyCards heroes={ teamHero } conditional={ false } lengthTeam={teamHero.length} />
        </div>
    );
}
