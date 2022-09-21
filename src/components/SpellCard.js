import React from "react";
import './SpellCard.scss';

const convertBool = (bool) => {

	if (!bool)
		return `disabled`

	return;
};

const SpellCard = ({
	SpellName, Classes, Level, School, Ritual, Concentration, Verbal,
	Somatic, Time, Reach, Material, Duration, Description
}) => {


	return (
		<div className="spell-card">

			<div className="Header">
					<p>{SpellName}</p>
					<p>{`${Level}º Nível`}</p>
					<p>{School}</p>
			</div>

			<div className="Description">

				<div className="props">

					<div className="classes">
            {
              Classes.map((classe, i) => {
                return <p className="inline-block mr-3" key={i}>{classe}</p>
              })
            }
					</div>

					<div className="settings">

						<div className="button">
							Time <span>{Time}</span>
						</div>
						<div className="button">
							Alcance <span>{Reach}</span>
						</div>
						<div className="button">
							Duração <span>{Duration}</span>
						</div>
					</div>

					<div className="type">

						<div className={`button ${convertBool(Ritual)}`}>
							Ritual
						</div>

						<div className={`button ${convertBool(Concentration)}`}>
							Concentração
						</div>

						<div className={`button ${convertBool(Verbal)}`}>
							Verbal
						</div>

						<div className={`button ${convertBool(Somatic)}`}>
							Somático
						</div>

						<div className={`button ${convertBool(Material)}`}>
							Material
						</div>
					</div>
				</div>

				<p>{Description}</p>
			</div>
      
		</div>
	)
}

export default SpellCard;