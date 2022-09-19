import React from "react";

const convertBool = (int) => {

    const bool = Boolean(int);

    if (bool)
        return `${int}: ${bool}`
};

const SpellCard = ({
    SpellName, Classes, Level, School, Ritual, Concentration, Verbal,
    Somatic, Time, Reach, Material, Duration, Description
}) => {


    return (
    <div className="spell-card border border-slate-500 rounded-md mb-5 p-5">

        <div className="name font-bold text-3xl">
            {SpellName}
        </div>

        <div className="props border-dotted border-y my-5 py-2 text-sm">

            <div className="prop-item class">
                {Classes}
            </div>

            <div className="prop-item level">
                {Level}º Círculo
            </div>

            <div className="prop-item School">
                {School}
            </div>

            <div className="components">
                {
                    convertBool(Ritual) && 

                    <div className="prop-item">
                        Ritual ✅
                    </div>
                }
                {
                    convertBool(Concentration) &&
                    <div className="prop-item">
                        Concentration ✅
                    </div>
                }
                {
                    convertBool(Verbal) &&
                    <div className="prop-item">
                        Verbal ✅
                    </div>
                }
                {
                    convertBool(Somatic) &&
                    <div className="prop-item">
                        Somatic ✅
                    </div>
                }
                {
                    convertBool(Material) &&
                    <div className="prop-item">
                        Material ✅
                    </div>
                }
            </div>

            <div className="prop-item Time">
                Time: {Time}
            </div>

            <div className="prop-item Reach">
                Alcance: {Reach}
            </div>

            
            <div className="prop-item Duration">
                Duração: {Duration}
            </div>
        </div>


        <div className="Description">
            {Description}
        </div> 
    </div>
    )
}

export default SpellCard;