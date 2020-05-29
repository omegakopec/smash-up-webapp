import React from 'react';
import {
  FormControl, RadioGroup, Radio, FormControlLabel
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from 'react-redux';
import { twoPlayers, threePlayers, fourPlayers } from '../../actions';

const styles = makeStyles({
  label: {
    textAlign: 'center',
    display: 'left',
    backgroundColor:'rgba(255, 255, 255, .9)',
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
  },
  root:{
    visibility: 'hidden'
  },
  list:{

  },
  ul :{
    display: 'inline',
    listStyle: 'none',
  },


});

const PlayerSelect = () => {
  const dispatch = useDispatch();
  const classes = styles();

  return (
    <div className="player-select">
      <FormControl component="fieldset">
        <RadioGroup defaultValue="fourPlayers" aria-label="player-select" name="customized-radios">
          <ul className={classes.ul}>
            <li className={classes.list}>
              <FormControlLabel
                  className={classes.label}
                value="twoPlayers"
                control={<Radio className={classes.root} />}
                label="Two Players"
                onClick={() => dispatch(twoPlayers())}
              />
            </li>
            <li>
              <FormControlLabel
                  className={classes.label}
                  value="threePlayers"
                control={<Radio className={classes.root} />}
                label="Three Players"
                onClick={() => dispatch(threePlayers())}
              />
            </li>
            <li>
              <FormControlLabel
                  className={classes.label}

                  value="fourPlayers"
                control={<Radio className={classes.root} />}
                label="Four Players"
                onClick={() => dispatch(fourPlayers())}
              />
            </li>
          </ul>
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default PlayerSelect;
