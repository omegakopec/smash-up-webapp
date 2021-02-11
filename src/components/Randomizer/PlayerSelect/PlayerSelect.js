import React from 'react';
import {
  FormControl, RadioGroup, Radio, FormControlLabel, createMuiTheme, MuiThemeProvider,
} from '@material-ui/core';
import propTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import { twoPlayers, threePlayers, fourPlayers } from '../../../actions';
import './PlayerSelect.scss';

const theme = createMuiTheme({
  typography: {
    alignContent: 'center',
    fontFamily: 'main-font, sans-serif',
    fontSize: 23,
    color: '#020f42',
  },
});

const PlayerSelect = ({ selectedFactionCount }) => {
  const dispatch = useDispatch();

  return (
    <MuiThemeProvider theme={theme}>
      <div className="player-select">
        <FormControl component="fieldset">
          <RadioGroup defaultValue="fourPlayers" aria-label="player-select" name="customized-radios">
            <ul className="ul">
              <li className="list" key="twoPlayers">
                <FormControlLabel
                  className="label"
                  control={<Radio disableRipple icon={<span className="icon" />} />}
                  label="Two Players"
                  onChange={() => dispatch(twoPlayers())}
                  disabled={selectedFactionCount < 4}
                />
              </li>
              <li className="list" key="threePlayers">
                <FormControlLabel
                  className="label"
                  control={<Radio disableRipple icon={<span className="icon" />} />}
                  label="Three Players"
                  onChange={() => dispatch(threePlayers())}
                  disabled={selectedFactionCount < 6}
                />
              </li>
              <li className="list" key="fourPlayers">
                <FormControlLabel
                  className="label"
                  control={<Radio disableRipple icon={<span className="icon" />} />}
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
