import React from 'react';
import './ResultCard.css'
import Sets from "../../helpers/Sets";
import pirateLogo from '../../images/FactionLogos/Pirates.png'
import alienLogo from '../../images/FactionLogos/Aliens.png'

export default function ResultsCard(props) {

    console.log(typeof Sets)

    return(
        <div className="result-card">
            <h4 id="card-title">{`${props.name}`} </h4>
            <p> {`${props.faction1}`}</p>
            <p>&</p>
            <p> {`${props.faction2}`}</p>
            <div className='logo-container'>
                <img src={pirateLogo} id='factionLogo' height='50' width='50'/>
                <img src={alienLogo} id='factionLogo' height='50' width='50'/>
            </div>


        </div>)
}