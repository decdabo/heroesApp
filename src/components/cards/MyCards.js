import React from 'react';

import { Card } from './Card';

export const MyCards = ({ heroes, conditional, lengthTeam = 6 }) => {
    return (
        <>
            <div className="row w-100 p-4 m-auto">
                {
                 heroes.map( (hero, index )=> {
                    return <Card 
                             key={`${hero}${index}`} 
                             data={ hero } 
                             conditional={ conditional }
                             numberTeam={lengthTeam}
                            />
                 })
                }
            </div>
        </>
    );
}