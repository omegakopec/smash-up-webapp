import React, { Component } from 'react';
import ResultCard from "../ResultCard/ResultCard";
import './Results.css'

export default class Results extends Component{

    render(){
        return(
            <div className='results-wrapper'>
                <div className="card-container">
                    <ul id="card-list">
                        <li id="card"><ResultCard name="Player 1" faction1="Pirates" faction2="Aliens"/></li>
                        <li id="card"><ResultCard name="Player 2" faction1="Minions of Cthulthu" faction2="Polynisain Explorers"/></li>
                        <li id="card"><ResultCard name="Player 3" faction1="Robots" faction2="Grimms’ Fairy Tales"/></li>
                        <li id="card"><ResultCard name="Player 4" faction1="Pirates" faction2="Aliens"/></li>
                    </ul>
                </div>
            </div>
        )
    }
}