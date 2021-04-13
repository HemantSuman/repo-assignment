/**
 * OptionsForm - option form layout with value field
 *
 */


import React, {useState, useContext} from 'react';
import { css } from '@emotion/css';
import {Button, InputField} from '..';
import {OptionsValueCard} from '..';
import { MyContext } from '../../context/MyContext';
const columnStyle = css`
    display: block;
    width: 33%;
    float: left;
`
const cardFooterStyle = css`
    padding: .75rem 1.25rem;
    margin-bottom: 0;
    background-color: #efefef;
    line-height: 30px;
    &:first-child {
        border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
    }
    .card-footer-actions {
        display: inline-block;
        float: right;
        margin-right: -.25rem;
    }
`
const OptionsForm = (props) => {
    const contextApi = useContext(MyContext);

    const [optionsValue, setOptionsValue] = useState([]);
    const [optionsValueCount, setOptionsValueCount] = useState(0);

    const addOptionsValue = (e) => {
        setOptionsValueCount(optionsValueCount+1);

        let tempoptionVal = {optionsValueCount, optionsValueName:'Value '+optionsValueCount, optionFormIndex:props.index};

        let tempData = contextApi.optionsObj.map((item, index) => {
            if(index === tempoptionVal.optionFormIndex){
                if(item.optionsValObj){
                    return {...item, optionsValObj: [...item.optionsValObj, tempoptionVal]}
                } else {
                    return {...item, optionsValObj: [ tempoptionVal]}
                }                
            } else {
                return item;
            }
        })
        contextApi.setOptionsObj(
            tempData
        );
        return setOptionsValue([...optionsValue, tempoptionVal]);
    }

    /**
     * removeOptionsValue - remove the dynamic value component on click event
     *
     */

    const removeOptionsValue = (e) => {
        const name = parseInt(e.target.getAttribute("name"));
        const optionsformfndex = parseInt(e.target.getAttribute("optionsformfndex"));

        setOptionsValue(optionsValue.filter(function(item){ 
            return item.optionsValueCount !== name
        }));
        let dd = contextApi.optionsObj.map((item, index) => {
            if(index === optionsformfndex){
                let aa = item.optionsValObj.filter(function(itemChild){
                    return itemChild.optionsValueCount !== name;
                })
                return {...item, optionsValObj: [ ...aa ]}
            }else{
                return {...item, optionsValObj: [...item.optionsValObj]}
            }
        })
        contextApi.setOptionsObj(
            dd
        );
    }

    /**
     * optionChangeHandler - update option according to value change
     *
     */

    const optionChangeHandler = (e) => {
        let changeOpt = contextApi.optionsObj.map((item, i) => {

            if(i === parseInt(e.target.getAttribute("optionsformindex"))){
                return {...item, optionsFormName: e.target.value}
            } else {
                return item
            }
        })

        props.setOptionsForm(changeOpt)

        return contextApi.setOptionsObj(changeOpt)
    }

    /**
     * valueChangeHandler - update value according to value change
     *
     */
    const valueChangeHandler = (e) => {
        const name = e.target.getAttribute("name");
        const value = e.target.value;
        const optionsFormIndex = parseInt(e.target.getAttribute("optionsformindex"));

        contextApi.optionsObj.map((item, index) => {
            
            if(optionsFormIndex === index){
                return item.optionsValObj.filter(function(itemChild, indexChild){
                    if(parseInt(name) ===  indexChild){
                        return itemChild['optionsValueName'] = value;
                    }
                    return itemChild;
                });       
            }     
            
        })
        contextApi.setOptionsObj(
            [...contextApi.optionsObj]
        );
    }
    
    

    return (
        <div>
            <div className={`column ${columnStyle}`}>
                <div className="card">
                <div className="card-header">
                    <InputField onChange={optionChangeHandler} optionsFormIndex={props.index} defaultValue={"Option "+props.optionsFormCount} />
                    <div className="card-header-actions">
                        <Button optionsFormIndex={props.index} name={props.optionsFormCount} onClick={props.removeOptionsForm} label="X" className="btn-yellow"/>
                    </div>
                </div>
                <div className="card-body">
                    {optionsValue.map((item, index) => <OptionsValueCard {...props} optionsFormIndex={props.index} name={index} valueChangeHandler={valueChangeHandler}  removeOptionsValue={removeOptionsValue} index={index} key={item.optionsValueCount} optionsValueCount={item.optionsValueCount}  />)}                    
                </div>
                <div className={cardFooterStyle}>
                    <div className="card-footer-actions">
                        <Button onClick={addOptionsValue} label="+" className="btn"/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default OptionsForm;