import React from 'react';
import Header from '../../components/general/Header/Header';
import Footer from '../../components/general/Footer/Footer';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-page">
    <Header />
    <div className="body-wrapper">
      <p className="paragraph">
        Welcome to Smash Up Tools... Our love for the game of
        {' '}
        <i>Smash Up</i>
        {' '}
        has lead us to create other ways to enjoy the
        game.
        {' '}
      </p>
      <p className="paragraph">
        We have played with most of our favorite factions and decided to create a tool that
        will randomly select factions for us, our randomizer. Simply select the expansions
        you own and the amount of players in your party. Our randomizer will
        select your random factions to play with.
      </p>
      <div>
        <Link to={"/randomizer"}><button className="link-button" type="button">
          Randomizer
        </button>
        </Link>
      </div>

      <p className="paragraph">
        We&apos;re currently in progress of creating a easy way for users to create their own
        Smash Up Cards with a simple template and intuitive design.
        We will give you the ability to export your newly created card as a pdf.
      </p>
    </div>
    <Footer />
  </div>
);


export default Home;
