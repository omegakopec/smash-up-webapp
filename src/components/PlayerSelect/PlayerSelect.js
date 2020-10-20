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
    fontFamily: 'Papyrus,fantasy',
    fontSize: '15.75',
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
    display: 'block',
    alignItems: 'center',
    listStyle: 'none',
    margin: '0',
    padding: '0',
    maxWidth: 'auto',
  },
  list: {
    padding: '2px',
  },
});

const PlayerSelect = ({ selectedFactionCount }) => {
  const dispatch = useDispatch();
  const classes = styles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className="player-select">
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
                  disabled={selectedFactionCount < 4}
                />
              </li>
              <li className={classes.list}>
                <FormControlLabel
                  className={classes.label}
                  control={<Radio icon={null} checkedIcon={null} className={classes.radio} />}
                  label="Three Players"
                  onChange={() => dispatch(threePlayers())}
                  disabled={selectedFactionCount < 6}
                />
              </li>
              <li className={classes.list}>
                <FormControlLabel
                  className={classes.label}
                  control={<Radio icon={null} checkedIcon={null} className={classes.root} />}
                  label="Four Players"
                  onChange={() => dispatch(fourPlayers())}
                  disabled={selectedFactionCount < 8}
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
  selectedFactionCount: state.selectedFactionCount,
});

PlayerSelect.propTypes = {
  selectedFactionCount: propTypes.number.isRequired,
};

export default connect(mapStateToProps)(PlayerSelect);
