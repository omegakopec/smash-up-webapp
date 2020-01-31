import React, { Component } from 'react';
import Sidebar from '../sidebar/Sidebar'
import './main-content.css'
import Results from '../results/results';

export default class MainContent extends Component{

    render(){
        return (
            <div class="main-content">
                <Sidebar />
                <Results />
            </div>
          )  
        }
}