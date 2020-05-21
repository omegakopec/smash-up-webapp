import React from 'react';
import './ResultCard.css'
import pirateLogo from '../../assets/FactionLogos/Pirates.png'
import alienLogo from '../../assets/FactionLogos/Aliens.png'

export default function ResultsCard(props) {
    return(
        <div className="result-card">
            <h4 id="card-title">{`${props.name}`} </h4>
            <p> {`${props.faction1}`}</p>
            <p>&</p>
            <p> {`${props.faction2}`}</p>
            <div className='logo-container'>
                <img src={pirateLogo} alt='' id='factionLogo' height='50' width='50'/>
                <img src={alienLogo} alt='' id='factionLogo' height='50' width='50'/>
            </div>


        </div>)
}