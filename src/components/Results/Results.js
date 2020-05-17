import React, { Component } from 'react';
import ResultCard from "../ResultCard/ResultCard";

export default class Results extends Component{

    render(){
        return(
            <div className="results-wrapper">
                <input type="button" id="generate"/> <label for="Generate">Generate</label>
                <div className="card-container">
                    <ResultCard/>
                </div>
            </div>
        )
    }
}