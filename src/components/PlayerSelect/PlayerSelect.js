import React from 'react';
import {
  FormControl, RadioGroup, Radio, FormControlLabel, createMuiTheme, MuiThemeProvider,
} from '@material-ui/core';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, connect } from 'react-redux';
import { twoPlayers, threePlayers, fourPlayers } from '../../actions';

const theme = createMuiTheme({
  typography: {
    alignContent: 'center',
    fontFamily: 'fantasy',
  },
});

const styles = makeStyles({
  label: {
    alignContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, .9)',
    borderColor: '#b6e683',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '25px',
    whiteSpace: 'nowrap',
    margin: '3px 0',
    transition: 'all .2s',
    padding: '8px 18px 8px 0',
    '&:hover': {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'black',
      backgroundColor: '#b6e683',
      color: 'black',
      transition: 'all .2s',
    },
  },
  ul: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    margin: '0',
    padding: '0',
  },
});

const PlayerSelect = ({ factionNumber }) => {
  const dispatch = useDispatch();
  const classes = styles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className="player-select">
        {factionNumber}
        <hr />
        <h2 id="checkbox-header">Select Number Of Players</h2>
        <FormControl component="fieldset">
          <RadioGroup defaultValue="fourPlayers" aria-label="player-select" name="customized-radios">
            <ul className={classes.ul}>
              <li className={classes.list}>
                <FormControlLabel
                  className={classes.label}
                  control={<Radio icon={null} checkedIcon={null} className={classes.root} />}
                  label="Two Players"
                  onChange={() => dispatch(twoPlayers())}
                  disabled={factionNumber < 4}
                />
              </li>
              <li>
                <FormControlLabel
                  className={classes.label}
                  control={<Radio icon={null} checkedIcon={null} className={classes.radio} />}
                  label="Three Players"
                  onChange={() => dispatch(threePlayers())}
                  disabled={factionNumber < 6}
                />
              </li>
              <li>
                <FormControlLabel
                  className={classes.label}
                  control={<Radio icon={null} checkedIcon={null} className={classes.root} />}
                  label="Four Players"
                  onChange={() => dispatch(fourPlayers())}
                  disabled={factionNumber < 8}
                />
              </li>
            </ul>
          </RadioGroup>
        </FormControl>
      </div>
    </MuiThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  factionNumber: state.selectedFactions.length,
});

PlayerSelect.propTypes = {
  factionNumber: propTypes.number.isRequired,
};

export default connect(mapStateToProps)(PlayerSelect);
