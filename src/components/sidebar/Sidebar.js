import React, { Component } from 'react';
import './sidebar.css';

export default class Sidebar extends Component{

    render(){
        return (
            <div class="checkbox-container">
                <h2>Select Your Expansions</h2>
                    <ul class="cb-tags">
                        <li> <input type="checkbox" id="baseSet" /> <label for="baseSet"> Base Set </label> </li>
                        <li> <input type="checkbox" id="al9000Set" /> <label for="al9000Set"> Awesome Level 9000 </label> </li>
                        <li> <input type="checkbox" id="cthuluSet" /> <label for="cthuluSet"> The Obligatory Cthulhu Set </label> </li>
                        <li> <input type="checkbox" id="scienceSet" /> <label for="scienceSet"> Science Fiction Double Feature </label> </li>
                        <li> <input type="checkbox" id="monsterSet" /> <label for="monsterSet"> Monster Smash </label> </li>
                        <li> <input type="checkbox" id="prettySet" /> <label for="prettySet"> Preety Pretty Smash Up </label> </li>
                        <li> <input type="checkbox" id="munchkinSet" /> <label for="munchkinSet"> Smash Up Munchkin </label> </li>
                        <li> <input type="checkbox" id="faultSet" /> <label for="faultSet"> It's Your Fault </label> </li>
                        <li> <input type="checkbox" id="ceaseSet" /> <label for="ceaseSet"> Cease and Desist</label> </li>
                        <li> <input type="checkbox" id="thinkingSet" /> <label for="thinkingSet"> What Were We Thinking? </label> </li>
                        <li> <input type="checkbox" id="japanSet" /> <label for="japanSet"> Big In Japan </label> </li>
                        <li> <input type="checkbox" id="sheepSet" /> <label for="sheepSet"> Sheep Promo  </label> </li>
                        <li> <input type="checkbox" id="70Set" /> <label for="70Set"> That '70s Expansion </label> </li>
                        <li> <input type="checkbox" id="bigBoxSet" /> <label for="bigBoxSet"> The Bigger Geekier Box </label> </li>
                        <li> <input type="checkbox" id="oopsSet" /> <label for="oopsSet"> Oops, You Did It Again </label> </li>
                        <li> <input type="checkbox" id="incidentSet" /> <label for="incidentSet"> International Incident </label> </li>
                        <li> <input type="checkbox" id="penguinsSet" /> <label for="penguinsSet"> Penguins </label> </li>
                        <li> <input type="checkbox" id="cultureSet" /> <label for="cultureSet"> Culture Shock </label> </li>












                    </ul>
            </div>
        )
    }
}