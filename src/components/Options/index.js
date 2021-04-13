/**
 * Options - use to render dynamic option container
 *
 */


import React, {useState, useContext, useEffect} from 'react';
import { css } from '@emotion/css'
import {Button} from '..';
import {OptionsForm} from '..';
import {MyContext} from '../../context/MyContext'

const rowStyle = css`
    display: block;
    width: 100%;
    float: left
`

const Options = (props) => {

    const contextApi = useContext(MyContext);

    const [optionsForm, setOptionsForm] = useState([]);
    const [optionsFormCount, setOptionsFormCount] = useState(0);

    /**
     * addOptionsForm - add option contaiver on click events
     *
     */
    const addOptionsForm = (e) => {
        setOptionsFormCount(optionsFormCount+1);
        let tempOptionForm = {optionsFormCount, optionsFormName:'Option '+optionsFormCount, optionsValObj:[]};

        return setOptionsForm([...contextApi.optionsObj, tempOptionForm]);
    }
    
    /**
     * removeOptionsForm - remove option contaiver on click events
     *
     */
    const removeOptionsForm = (e) => {
        const name = e.target.getAttribute("optionsformfndex");
        let dd = contextApi.optionsObj.filter(function(item, index){ 
            return index !== parseInt(name)
        });
        setOptionsForm(dd);
    }

    useEffect(() => {
        contextApi.setOptionsObj(
            optionsForm
        );
    }, [optionsForm])
        
    return (
        <div>
            <div className="card-header">Options
                <div className="card-header-actions">
                {optionsForm && optionsForm.length < 3 && <Button onClick={addOptionsForm} label="+" /> }
                </div>
            </div>
            <div className="card-body">
                <div className={rowStyle}>
                    {optionsForm.map((item, index) => <OptionsForm optionsFormIndex={props.index} {...props} setOptionsForm={setOptionsForm} index={index} key={item.optionsFormCount} removeOptionsForm={removeOptionsForm} optionsFormCount={item.optionsFormCount}  />
                    )}
                </div>
            </div>        
        </div>
    )
}
export default Options;