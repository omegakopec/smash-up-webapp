import React, {Component} from 'react'
import { FormControl, RadioGroup, Radio, FormControlLabel} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { twoPlayers, threePlayers , fourPlayers} from "../../actions";

const PlayerSelect = () => {
    const dispatch = useDispatch();

       return(

            <div className='player-select'>
                <FormControl component="fieldset">
                    <RadioGroup defaultValue="fourPlayers" aria-label="player-select" name='customized-radios'>
                        <ul className="select-player-list">
                            <li><FormControlLabel value='twoPlayers' control={<Radio/>}
                                                  label='Two Players'
                                                  onClick={() => dispatch(twoPlayers())}/></li>
                            <li><FormControlLabel value='threePlayers' control={<Radio/>}
                                                  label='Three Players'
                                                  onClick={() => dispatch(threePlayers())}/></li>
                            <li><FormControlLabel value='fourPlayers'
                                                  control={<Radio/>}
                                                  label='Four Players'
                                                  onClick={() => dispatch(fourPlayers())}/></li>
                        </ul>
                    </RadioGroup>
                </FormControl>
            </div>
       )
}

export default PlayerSelect
