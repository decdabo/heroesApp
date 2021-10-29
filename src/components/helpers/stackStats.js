

export const stackStats = ( teamHero ) =>{
    let statsStackeds = {}
    const reducer = (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue);

    const intelligence = teamHero.map( ({ powerstats }) => powerstats.intelligence )
    const combat = teamHero.map( ({ powerstats }) => powerstats.combat )
    const durability = teamHero.map( ({ powerstats }) => powerstats.durability )
    const power = teamHero.map( ({ powerstats }) => powerstats.power )
    const speed = teamHero.map( ({ powerstats }) => powerstats.intelligence )
    const strength = teamHero.map( ({ powerstats }) => powerstats.strength )

    const intelligenceStack = intelligence.reduce(reducer);
    const durabilityStack = durability.reduce(reducer)
    const combatStack = combat.reduce(reducer)
    const powerStack = power.reduce(reducer)
    const speedStack = speed.reduce(reducer)
    const strengthStack = strength.reduce(reducer)

    statsStackeds.intelligenceStack = intelligenceStack;
    statsStackeds.durabilityStack = durabilityStack;
    statsStackeds.combatStack = combatStack;
    statsStackeds.powerStack = powerStack;
    statsStackeds.speedStack = speedStack;
    statsStackeds.strengthStack = strengthStack;

    console.log(statsStackeds);

}
