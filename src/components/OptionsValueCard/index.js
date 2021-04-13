/**
 * OptionsValueCard - dynamic render value element 
 *
 */

import React from 'react';
import {Button, InputField} from '..';

const OptionsValueCard = (props) => {
    return (
        <div>
            <table border="0" width="100%">
                <tbody>
                    <tr>
                        <td align="left">
                            <InputField {...props} optionsFormIndex={props.optionsFormIndex} name={props.name} onChange={props.valueChangeHandler} defaultValue={"Value "+props.optionsValueCount}/>
                        </td>
                        <td align="right">
                            <Button optionsFormIndex={props.optionsFormIndex} optionsFormCount={props.optionsFormCount} name={props.optionsValueCount} onClick={props.removeOptionsValue} className="btnYellow" label="-" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OptionsValueCard;