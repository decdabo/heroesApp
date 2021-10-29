

export const stackStats = ( teamHero ) =>{
    const reducer = (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue);

    const intelligence = teamHero.map( ({ powerstats }) => powerstats.intelligence ).reduce(reducer);
    const combat = teamHero.map( ({ powerstats }) => powerstats.combat ).reduce(reducer);
    const durability = teamHero.map( ({ powerstats }) => powerstats.durability ).reduce(reducer);
    const power = teamHero.map( ({ powerstats }) => powerstats.power ).reduce(reducer);
    const speed = teamHero.map( ({ powerstats }) => powerstats.intelligence ).reduce(reducer);
    const strength = teamHero.map( ({ powerstats }) => powerstats.strength ).reduce(reducer);

    const stackStats = [
        { type: "Intelligence", value: intelligence },
        { type: "Combat", value: combat },
        { type: "Durability", value: durability },
        { type: "Power", value: power },
        { type: "Speed", value: speed },
        { type: "Strength", value: strength },
    ]

    return stackStats;

}
