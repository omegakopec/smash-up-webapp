import React from 'react';
import {
  FormControl, RadioGroup, Radio, FormControlLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { twoPlayers, threePlayers, fourPlayers } from '../../actions';

const styles = makeStyles({
  label: {
    fontSize: '20px',
    alignContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, .9)',
    borderColor: '#b6e683',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: 'black',
    borderRadius: '25px',
    whiteSpace: 'nowrap',
    marginTop: '3px',
    marginBottom: '3px',
    userSelect: 'none',
    transition: 'all .2s',
    '&:hover':{
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'black',
      backgroundColor: '#b6e683',
      color: 'black',
      transition: 'all .2s',
    }
  },
  root: {
    visibility: 'hidden',
  },
  list: {

  },
  ul: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
  },
});

const PlayerSelect = () => {
  const dispatch = useDispatch();
  const classes = styles();

  return (
    <div className="player-select">
      <hr />
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
  );
};

export default PlayerSelect;
