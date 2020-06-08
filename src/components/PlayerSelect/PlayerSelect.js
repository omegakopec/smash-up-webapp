import React from 'react';
import {
  FormControl, RadioGroup, Radio, FormControlLabel, createMuiTheme, MuiThemeProvider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
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
    marginTop: '3px',
    marginBottom: '3px',
    transition: 'all .2s',
    '&:checked': {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'black',
      backgroundColor: '#b6e683',
      color: 'black',
      transition: 'all .2s',
    },
  },
  MuiIconButton: {
    pageXOffset: '-600',
  },

  MuiRadio: {
    visibility: 'hidden',
    appearance: 'none',
  },

  ul: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    margin: '0',
    padding: '0',
  },
});

const PlayerSelect = () => {
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
                  value="twoPlayers"
                  control={<Radio className={classes.root} />}
                  label="Two Players"
                  onChange={() => dispatch(twoPlayers())}
                />
              </li>
              <li>
                <FormControlLabel
                  className={classes.label}
                  value="threePlayers"
                  control={<Radio className={classes.root} />}
                  label="Three Players"
                  onChange={() => dispatch(threePlayers())}
                />
              </li>
              <li>
                <FormControlLabel
                  className={classes.label}

                  value="fourPlayers"
                  control={<Radio className={classes.root} />}
                  label="Four Players"
                  onChange={() => dispatch(fourPlayers())}
                />
              </li>
            </ul>
          </RadioGroup>
        </FormControl>
      </div>
    </MuiThemeProvider>
  );
};

export default PlayerSelect;
