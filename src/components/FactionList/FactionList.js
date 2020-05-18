import React, { Component } from 'react';
import './FactionList.css';
import '../../helpers/Sets'

export default class FactionList extends Component{

    render(){
        return (
            <div className="checkbox-container">
                <h2 id="checkbox-header">Select Your Expansions</h2>
                    <ul className="cb-tags">
                        <li> <input type="checkbox" id="baseSet"/> <label htmlFor="baseSet"> Base Set </label> </li>
                        <li> <input type="checkbox" id="al9000Set" /> <label htmlFor="al9000Set"> Awesome Level 9000 </label> </li>
                        <li> <input type="checkbox" id="cthuluSet" /> <label htmlFor="cthuluSet"> The Obligatory Cthulhu Set </label> </li>
                        <li> <input type="checkbox" id="scienceSet" /> <label htmlFor="scienceSet"> Science Fiction Double Feature </label> </li>
                        <li> <input type="checkbox" id="monsterSet" /> <label htmlFor="monsterSet"> Monster Smash </label> </li>
                        <li> <input type="checkbox" id="prettySet" /> <label htmlFor="prettySet"> Preety Pretty Smash Up </label> </li>
                        <li> <input type="checkbox" id="munchkinSet" /> <label htmlFor="munchkinSet"> Smash Up Munchkin </label> </li>
                        <li> <input type="checkbox" id="faultSet" /> <label htmlFor="faultSet"> It's Your Fault </label> </li>
                        <li> <input type="checkbox" id="ceaseSet" /> <label htmlFor="ceaseSet"> Cease and Desist</label> </li>
                        <li> <input type="checkbox" id="thinkingSet" /> <label htmlFor="thinkingSet"> What Were We Thinking? </label> </li>
                        <li> <input type="checkbox" id="japanSet" /> <label htmlFor="japanSet"> Big In Japan </label> </li>
                        <li> <input type="checkbox" id="sheepSet" /> <label htmlFor="sheepSet"> Sheep Promo  </label> </li>
                        <li> <input type="checkbox" id="70Set" /> <label htmlFor="70Set"> That '70s Expansion </label> </li>
                        <li> <input type="checkbox" id="bigBoxSet" /> <label htmlFor="bigBoxSet"> The Bigger Geekier Box </label> </li>
                        <li> <input type="checkbox" id="oopsSet" /> <label htmlFor="oopsSet"> Oops, You Did It Again </label> </li>
                        <li> <input type="checkbox" id="incidentSet" /> <label htmlFor="incidentSet"> International Incident </label> </li>
                        <li> <input type="checkbox" id="penguinsSet" /> <label htmlFor="penguinsSet"> Penguins </label> </li>
                        <li> <input type="checkbox" id="cultureSet" /> <label htmlFor="cultureSet"> Culture Shock </label> </li>

                        <br/>

                        <li><input type="checkbox" id="selectAll"/> <label htmlFor="selectAll"> All </label></li>

                        <hr/>

                    </ul>
            </div>
        )
    }
}