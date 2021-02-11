import React from 'react';
import SetList from '../../components/Randomizer/SetList/SetList';
import PlayerSelect from '../../components/Randomizer/PlayerSelect/PlayerSelect';
import Results from '../../components/Randomizer/Results/Results';
import Header from '../../components/general/Header/Header';
import Footer from '../../components/general/Footer/Footer';
import './Randomizer.scss';

const Randomizer = () => (
  <div className="randomizer-page">
    <Header />
    <div className="body-wrapper">
      <h1>Randomizer</h1>
      <h2>Select Your Expansions</h2>
      <SetList />
      <h2>Select Number Of Players</h2>
      <PlayerSelect />
      <Results />
    </div>
    <Footer />
  </div>
);

export default Randomizer;
